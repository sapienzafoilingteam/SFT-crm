import { WorkspaceApp } from "@/components/workspace-app";
import { Provider } from "@/components/provider";
export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path = [] } = await params;
  const workspacePath = path.length === 1 && path[0] === "accesso" ? [] : path;
  return <Provider publicHome={path.length === 0}><WorkspaceApp path={workspacePath} /></Provider>;
}
