import { WorkspaceApp } from "@/components/workspace-app";
export default async function Page({
  params,
}: {
  params: Promise<{ path?: string[] }>;
}) {
  const { path = [] } = await params;
  return <WorkspaceApp path={path} />;
}
