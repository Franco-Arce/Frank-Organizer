import { Link, Outlet, useLocation } from "react-router-dom";
import {
    Inbox,
    Calendar,
    Layers,
    Target,
    BookOpen,
    Home,
    Menu
} from "lucide-react";
import { cn } from "./lib/utils";
import { useState } from "react";
import { CommandPalette } from "./components/CommandPalette";
import { Toaster } from "sonner";

const NavItem = ({ to, icon: Icon, label, active }) => (
    <Link
        to={to}
        className={cn(
            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
            active
                ? "bg-primary/10 text-primary shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50"
        )}
    >
        <Icon className={cn("w-5 h-5", active ? "text-primary" : "text-zinc-400 group-hover:text-zinc-100")} />
        <span className="font-medium text-sm">{label}</span>
        {active && (
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_#7c3aed]" />
        )}
    </Link>
);

export default function Layout() {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { to: "/", icon: Home, label: "Inicio" },
        { to: "/inbox", icon: Inbox, label: "Bandeja de Entrada" },
        { to: "/organize", icon: Calendar, label: "Organizar" },
        { to: "/projects", icon: Layers, label: "Proyectos" },
        { to: "/vision", icon: Target, label: "Visión" },
        { to: "/knowledge", icon: BookOpen, label: "Conocimiento" },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 items-stretch flex">
            {/* Sidebar */}
            <aside className={cn(
                "fixed inset-y-0 left-0 z-50 w-72 bg-black/95 border-r border-white/10 p-6 flex flex-col gap-8 backdrop-blur-xl transition-transform duration-300 md:relative md:translate-x-0",
                mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-900 flex items-center justify-center shadow-lg shadow-purple-900/20">
                        <span className="font-bold text-white text-xl">F</span>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            Frank
                        </h1>
                        <p className="text-xs text-zinc-500 font-medium">Sistema de Productividad</p>
                    </div>
                </div>

                <nav className="flex-1 flex flex-col gap-2">
                    <div className="text-xs font-bold text-zinc-600 uppercase tracking-wider px-4 mb-2">Menú</div>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.to}
                            {...item}
                            active={location.pathname === item.to}
                        />
                    ))}
                </nav>

                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-400">
                            FA
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium text-white truncate">Frank</p>
                            <p className="text-xs text-zinc-500 truncate">Organizer</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0 relative">
                <div className="md:hidden p-4 flex items-center gap-4 bg-black/50 backdrop-blur-md sticky top-0 z-40 border-b border-white/5">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 -ml-2 text-zinc-400 hover:text-white"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                    <span className="font-semibold text-white">Frank</span>
                </div>
                <div className="p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <Outlet />
                </div>
            </main>

            {/* Global Overlays */}
            <CommandPalette />
            <Toaster position="bottom-right" theme="dark" />

            {/* Mobile Overlay */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/80 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </div>
    );
}
