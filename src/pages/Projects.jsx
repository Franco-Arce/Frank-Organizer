import React from 'react';
import { ArrowUpRight, CheckSquare, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        { id: 1, title: 'Lanzar Sitio Web', progress: 75, status: 'Activo', color: 'bg-emerald-500', shadow: 'shadow-emerald-500/20' },
        { id: 2, title: 'Renovación de Casa', progress: 30, status: 'En Pausa', color: 'bg-amber-500', shadow: 'shadow-amber-500/20' },
        { id: 3, title: 'Aprender Piano', progress: 10, status: 'Activo', color: 'bg-indigo-500', shadow: 'shadow-indigo-500/20' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-white">Proyectos Activos</h1>
                    <p className="text-zinc-400 mt-1">Transforma "Megatareas" en pasos accionables.</p>
                </div>
                <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                    Nuevo Proyecto
                </button>
            </div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={item}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group bg-zinc-900/40 border border-white/5 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4 backdrop-blur-sm relative overflow-hidden"
                    >
                        {/* Background glow - softened */}
                        <div className={`absolute top-0 right-0 p-24 ${project.color} opacity-[0.03] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className="flex items-start justify-between relative z-10">
                            <div className={`w-12 h-12 rounded-2xl ${project.color} bg-opacity-20 flex items-center justify-center text-white font-bold text-lg shadow-lg ${project.shadow}`}>
                                {project.title[0]}
                            </div>
                            <button className="text-zinc-500 hover:text-white transition-colors"><MoreHorizontal className="w-5 h-5" /></button>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                            <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
                                <span className={`px-2 py-0.5 rounded-full bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors`}>
                                    {project.status}
                                </span>
                                <span>•</span>
                                <span>12 Tareas</span>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                            <div className="flex justify-between text-xs text-zinc-400 mb-2">
                                <span>Progreso</span>
                                <span className="font-mono">{project.progress}%</span>
                            </div>
                            <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${project.progress}%` }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className={`h-full ${project.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
