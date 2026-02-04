"use client";

import * as React from "react";
import {
  IconBrandApple,
  IconSettings2,
  IconDashboard,
  IconUsers,
  IconFlower,
} from "@tabler/icons-react";

import { NavMain } from "@/app/components/admin/nav-main";
import { NavUser } from "@/app/components/admin/nav-user";
import { TeamSwitcher } from "@/app/components/admin/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/app/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: IconBrandApple,
      plan: "Enterprise",
    },
  ],
};

export const adminNavItems = [
  {
    title: "控制面板",
    url: "/admin",
    icon: IconDashboard,
  },
  {
    title: "用户管理",
    url: "/admin/users",
    icon: IconUsers,
  },
  {
    title: "工作流管理",
    url: "/admin/workflows",
    icon: IconFlower,
  },
  {
    title: "系统设置",
    url: "/admin/settings",
    icon: IconSettings2,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="pt-0!">
        <NavMain items={adminNavItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
