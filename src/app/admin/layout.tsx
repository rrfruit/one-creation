import { redirect } from "next/navigation";
import Link from "next/link";
import { isAdmin } from "@/lib/auth";
import Header from "@/components/layout/Header";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Workflow,
  LayoutDashboard,
  Settings,
  ChevronRight,
} from "lucide-react";

const sidebarNavItems = [
  {
    title: "仪表盘",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "用户管理",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "工作流管理",
    href: "/admin/workflows",
    icon: Workflow,
  },
  {
    title: "系统设置",
    href: "/admin/settings",
    icon: Settings,
  },
];

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
        <aside className="w-64 border-r bg-muted/20 min-h-[calc(100vh-4rem)]">
          <div className="flex flex-col h-full">
            <div className="p-6">
              <h2 className="text-lg font-semibold tracking-tight">管理后台</h2>
              <p className="text-sm text-muted-foreground">系统管理与配置</p>
            </div>
            <Separator />
            <nav className="flex-1 p-4 space-y-1">
              {sidebarNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors group"
                >
                  <item.icon className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground" />
                  <span className="flex-1">{item.title}</span>
                  <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </nav>
            <Separator />
            <div className="p-4">
              <p className="text-xs text-muted-foreground">One Creation v1.0</p>
            </div>
          </div>
        </aside>
        {/* 主内容区 */}
        <main className="flex-1 p-8 bg-muted/5">{children}</main>
      </div>
    </div>
  );
}
