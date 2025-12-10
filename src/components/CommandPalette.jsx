import * as React from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";
import { Search, Calendar, Layers, Target, Home, BookOpen, Inbox, Smile, Calculator, User } from "lucide-react";
import { useEffect, useState } from "react";

export function CommandPalette() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command) => {
        setOpen(false);
        command();
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-[20vh]">
            <div className="w-[600px] max-w-full mx-4 animated-palette">
                <Command className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden text-zinc-300">
                    <div className="flex items-center border-b border-zinc-800 px-3">
                        <Search className="w-5 h-5 text-zinc-500 mr-2" />
                        <Command.Input
                            placeholder="Escribe un comando o busca..."
                            className="w-full bg-transparent p-4 outline-none text-zinc-100 placeholder:text-zinc-500"
                        />
                    </div>

                    <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
                        <Command.Empty className="p-4 text-sm text-zinc-500 text-center">No se encontraron resultados.</Command.Empty>

                        <Command.Group heading="Navegación" className="text-xs font-medium text-zinc-500 px-2 py-1.5 uppercase mb-1">
                            <CommandItem icon={Home} label="Inicio" onSelect={() => runCommand(() => navigate("/"))} />
                            <CommandItem icon={Inbox} label="Bandeja de Entrada" onSelect={() => runCommand(() => navigate("/inbox"))} />
                            <CommandItem icon={Calendar} label="Organizar" onSelect={() => runCommand(() => navigate("/organize"))} />
                            <CommandItem icon={Layers} label="Proyectos" onSelect={() => runCommand(() => navigate("/projects"))} />
                            <CommandItem icon={Target} label="Visión" onSelect={() => runCommand(() => navigate("/vision"))} />
                            <CommandItem icon={BookOpen} label="Conocimiento" onSelect={() => runCommand(() => navigate("/knowledge"))} />
                        </Command.Group>

                        <Command.Group heading="General" className="text-xs font-medium text-zinc-500 px-2 py-1.5 uppercase mt-2 mb-1">
                            <CommandItem icon={User} label="Perfil" onSelect={() => { }} />
                            <CommandItem icon={Smile} label="Dar Feedback" onSelect={() => { }} />
                        </Command.Group>
                    </Command.List>
                </Command>
            </div>
            <style>{`
          .animated-palette {
            animation: slideDown 0.1s ease-out;
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px) scale(0.98); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}</style>
        </div>
    );
}

function CommandItem({ icon: Icon, label, onSelect }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-zinc-400 aria-selected:bg-primary/20 aria-selected:text-white cursor-pointer transition-colors"
        >
            <Icon className="w-4 h-4" />
            {label}
        </Command.Item>
    )
}
