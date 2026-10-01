import { SEASONS, TEAMS, Workspace } from "./model";

// Only confirmed destinations are prefilled. Missing URLs remain editable placeholders.
export function withDefaultLinks(workspace: Workspace): Workspace {
  const resources = [
    {
      title: "Sito del team",
      url: "https://sapienzafoilingteam.com",
      category: "Team",
      team_id: "",
    },
    {
      title: "Gmail del team",
      url: "https://mail.google.com/",
      category: "Team",
      team_id: "",
    },
    { title: "Drive media", url: "", category: "Media", team_id: "" },
    { title: "Instagram", url: "", category: "Media", team_id: "" },
    { title: "SuMoth deliveries", url: "", category: "SuMoth", team_id: "" },
    { title: "Pitch e presentazioni", url: "", category: "Media", team_id: "" },
    { title: "Eventi del team", url: "", category: "Team", team_id: "" },
    { title: "Riunioni dei reparti", url: "", category: "Team", team_id: "" },
    ...TEAMS.flatMap((t) => [
      {
        title: "Drive del reparto",
        url: "",
        category: "Reparto",
        team_id: t.id,
      },
      {
        title: "Riunione del reparto",
        url: "",
        category: "Reparto",
        team_id: t.id,
      },
    ]),
  ];
  const additions = SEASONS.flatMap((season, s) =>
    resources.flatMap((resource, i) => {
      const id = `00000000-0000-4000-9000-${String(s * 100 + i + 1).padStart(12, "0")}`;
      if (
        workspace.links.some(
          (l) =>
            l.id === id ||
            (l.season_id === season.id &&
              l.team_id === resource.team_id &&
              l.title === resource.title),
        )
      )
        return [];
      return [
        {
          ...resource,
          id,
          version: 1,
          archived: false,
          season_id: season.id,
          updated_at: new Date().toISOString(),
        },
      ];
    }),
  );
  return additions.length
    ? { ...workspace, links: [...workspace.links, ...additions] }
    : workspace;
}
