-- Abilitazione/disattivazione degli account: amministratori e Team Captain.
-- Passa da una funzione (e non da una policy di update) perché il Team Captain possa cambiare
-- solo lo stato attivo, senza poter toccare is_admin o altri campi.
begin;
create function public.set_member_active(p_member uuid, p_active boolean) returns void language plpgsql security definer
set search_path = '' as $$
declare v_before boolean; v_admin boolean;
begin
  if not (public.is_team_admin() or public.is_team_captain()) then
    raise exception 'Solo gli amministratori e il Team Captain possono abilitare o disattivare gli account';
  end if;
  if p_member = auth.uid() then raise exception 'Non puoi disattivare il tuo account'; end if;
  select active, is_admin into v_before, v_admin from public.members where id = p_member;
  if v_before is null then raise exception 'Account non trovato'; end if;
  if v_admin then raise exception 'Gli account amministratore non si disattivano da qui'; end if;
  if v_before = p_active then return; end if;
  update public.members set active = p_active where id = p_member;
  insert into public.audit_log(table_name, record_id, actor_id, action, before_record, after_record)
  values ('members', p_member, auth.uid(), case when p_active then 'ABILITATO' else 'DISATTIVATO' end,
    jsonb_build_object('active', v_before), jsonb_build_object('active', p_active));
end; $$;
revoke all on function public.set_member_active(uuid, boolean) from public, anon;
grant execute on function public.set_member_active(uuid, boolean) to authenticated;
commit;
