import React from 'react';
import { Target, Flag, Scale, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-bold text-white mb-3 flex items-center justify-center gap-3">
                        <Sparkles className="w-8 h-8 text-purple-400" />
                        Visión de Vida
                    </h1>
                </motion.div>
                <p className="text-zinc-400">Diseña tu vida ideal (5-10 Años). Tu brújula para decisiones diarias.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="p-10 rounded-[2rem] bg-zinc-900/40 border border-white/5 relative overflow-hidden group hover:border-indigo-500/40 transition-colors"
                >
                    <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6 shadow-sm">
                            <Target className="w-8 h-8 text-indigo-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6">El Gran Panorama</h2>
                        <p className="text-zinc-300 leading-relaxed mb-8 text-lg font-light">
                            "Quiero vivir una vida equilibrada donde tenga libertad financiera, un cuerpo saludable y relaciones significativas que me inspiren a ser mejor cada día..."
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Libertad Financiera', 'Salud', 'Viajes'].map(tag => (
                                <span key={tag} className="px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium">{tag}</span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400">
                                <Flag className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-white">Objetivos Anuales</h3>
                        </div>
                        <ul className="space-y-4">
                            {['Lanzar Startup', 'Correr un Maratón', 'Leer 24 Libros'].map((goal, i) => (
                                <motion.li
                                    key={goal}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-4 text-zinc-300 group"
                                >
                                    <div className="w-2 h-2 rounded-full bg-pink-500 ring-4 ring-pink-500/20 group-hover:ring-pink-500/40 transition-all" />
                                    {goal}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                                <Scale className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-white">Valores</h3>
                        </div>
                        <p className="text-zinc-400 text-lg">Integridad, aprendizaje continuo y amabilidad.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Vision;
