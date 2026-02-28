import { Link, usePage } from '@inertiajs/react';
import { BookOpen, FileText, Folder, Home, LayoutGrid, MessageSquare, Settings, Users } from 'lucide-react';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import type { NavItem } from '@/types';
import AppLogo from './app-logo';

const footerNavItems: NavItem[] = [
    {
        title: 'Accueil',
        href: '/',
        icon: Home,
    },
];

export function AppSidebar() {
    const { auth } = usePage().props as any;

    const isAdmin = auth?.user?.role === 'admin';

    const mainNavItems: NavItem[] = [
        {
            title: 'Tableau de bord',
            href: '/dashboard',
            icon: LayoutGrid,
        },
    ];

    if (isAdmin) {
        mainNavItems.push(
            {
                title: 'Utilisateurs',
                href: '/dashboard/users',
                icon: Users,
            },
            {
                title: 'Demandes de devis',
                href: '/dashboard/devis',
                icon: FileText,
            }
        );
    } else {
        mainNavItems.push(
            {
                title: 'Mes demandes',
                href: '/dashboard/my-devis',
                icon: Folder,
            },
            {
                title: 'Support',
                href: '/dashboard/support',
                icon: MessageSquare,
            }
        );
    }

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}