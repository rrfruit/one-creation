import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "@/lib/auth";
import Header from "@/components/layout/Header";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 检查管理员权限
  const admin = await isAdmin();
  if (!admin) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        {/* 侧边导航 */}
        <aside className="w-56 border-r bg-muted/30 min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              管理后台
            </p>
            <Link
              href="/users"
              className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
            >
              用户管理
            </Link>
            <Link
              href="/workflows"
              className="block px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors"
            >
              工作流管理
            </Link>
          </nav>
        </aside>
        {/* 主内容区 */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
