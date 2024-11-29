"use client"

import * as React from "react"
import {
    BookOpen,
    Bot, Building2, CircleEllipsis,
    ContactRound, Crown,
    GalleryVerticalEnd, Mail,
    RectangleEllipsis,
    Settings2,
    SquareTerminal, UserRoundCog, X,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavSystem } from "@/components/nav-system"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Playground",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "History",
                    url: "#",
                },
                {
                    title: "Starred",
                    url: "#",
                },
                {
                    title: "Settings",
                    url: "#",
                },
            ],
        },
        {
            title: "Models",
            url: "#",
            icon: Bot,
            items: [
                {
                    title: "Genesis",
                    url: "#",
                },
                {
                    title: "Explorer",
                    url: "#",
                },
                {
                    title: "Quantum",
                    url: "#",
                },
            ],
        },
        {
            title: "Documentation",
            url: "#",
            icon: BookOpen,
            items: [
                {
                    title: "Introduction",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
            items: [
                {
                    title: "General",
                    url: "#",
                },
                {
                    title: "Team",
                    url: "#",
                },
                {
                    title: "Billing",
                    url: "#",
                },
                {
                    title: "Limits",
                    url: "#",
                },
            ],
        },
    ],
    system: [
        {
            name: "用户管理",
            url: "/sys/users",
            icon: UserRoundCog,
        },
        {
            name: "角色管理",
            url: "/sys/roles",
            icon: ContactRound,
        },
        {
            name: "部门管理",
            url: "/sys/department",
            icon: Building2,
        },
        {
            name: "职位管理",
            url: "/sys/position",
            icon: Crown,
        },
        {
            name: "邮件通知",
            url: "/sys/mail",
            icon: Mail,
        },
        {
            name: "操作日志",
            url: "/sys/log",
            icon: CircleEllipsis,
        },
        {
            name: "登录日志",
            url: "/sys/login-log",
            icon: RectangleEllipsis,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                    X.R
                                </div>
                                <div className="flex flex-row gap-0.5 leading-none">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">X.Ryder</span>
                                    <span className="text-sm">v1.2.0</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
                <NavSystem projects={data.system} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
