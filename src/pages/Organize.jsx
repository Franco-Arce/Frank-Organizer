import React from 'react';
import { Calendar as CalendarIcon, Clock, StickyNote, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Organize = () => {
    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <h1 className="text-2xl font-bold text-white">Organizar y Procesar</h1>
                    <p className="text-zinc-400 mt-1">Tu centro de control diario.</p>
                </motion.div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                >
                    Conectar Google Calendar
                </motion.button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                {/* Calendar Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="col-span-1 lg:col-span-2 bg-zinc-900/40 border border-white/5 rounded-3xl p-6 flex flex-col backdrop-blur-md relative overflow-hidden group"
                >
                    <div className="flex items-center gap-2 mb-6 relative z-10">
                        <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                            <CalendarIcon className="w-5 h-5" />
                        </div>
                        <h2 className="font-semibold text-zinc-200">Calendario</h2>
                    </div>
                    {/* Mock Calendar Grid */}
                    <div className="flex-1 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-zinc-600 relative z-10 hover:border-white/10 transition-colors">
                        <div className="text-center">
                            <p className="font-medium text-zinc-500">Vista de Integración de Calendario</p>
                            <p className="text-xs mt-2 text-zinc-700">Los eventos de Google Calendar aparecerán aquí con un diseño premium.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Waiting / Notes Column */}
                <div className="space-y-6 flex flex-col h-full">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex-1 bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm hover:bg-zinc-900/60 transition-colors"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                                <Clock className="w-5 h-5" />
                            </div>
                            <h2 className="font-semibold text-zinc-200">En Espera</h2>
                        </div>
                        <div className="space-y-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="group p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer flex items-center justify-between">
                                    <span>Esperando respuesta de email...</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-amber-400" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex-1 bg-zinc-900/40 border border-white/5 rounded-3xl p-6 backdrop-blur-sm hover:bg-zinc-900/60 transition-colors"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                                <StickyNote className="w-5 h-5" />
                            </div>
                            <h2 className="font-semibold text-zinc-200">Referencias</h2>
                        </div>
                        <div className="space-y-3">
                            {[1, 2].map(i => (
                                <div key={i} className="group p-4 rounded-xl bg-black/40 border border-white/5 text-sm text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer flex items-center justify-between">
                                    <span>Enlace Rutina Gym...</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-400" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Organize;
