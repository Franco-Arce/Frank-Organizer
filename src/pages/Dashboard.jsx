import React from 'react';
import { BentoGrid, BentoGridItem } from '../components/ui/BentoGrid';
import { AreaChart } from "@tremor/react";
import { Inbox, Zap, CheckCircle2, Target } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

const chartdata = [
    { date: "Lun", "Deep Work": 2.5 },
    { date: "Mar", "Deep Work": 3.8 },
    { date: "Mie", "Deep Work": 4.2 },
    { date: "Jue", "Deep Work": 5.0 },
    { date: "Vie", "Deep Work": 3.5 },
    { date: "Sab", "Deep Work": 1.0 },
    { date: "Dom", "Deep Work": 0 },
];

const dataFormatter = (number) => `${number}h`;

const Dashboard = () => {
    return (
        <div className="space-y-8 relative">
            {/* Global Noise Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[50] mix-blend-overlay"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
            />

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Inicio</h1>
                    <p className="text-zinc-400">Tu centro de comando personal.</p>
                </div>
                <div className="text-sm text-zinc-500 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full hidden md:block">
                    Presiona <kbd className="font-sans font-bold text-zinc-300">Ctrl + K</kbd> para navegar
                </div>
            </div>

            <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[25rem]">
                {/* 1. Deep Work Chart (Large) */}
                <BentoGridItem
                    title="Trabajo Profundo"
                    description="Rendimiento de enfoque de los últimos 7 días."
                    className="md:col-span-2 md:row-span-1"
                    icon={<Zap className="h-4 w-4 text-amber-500" />}
                    header={
                        <div className="h-full w-full min-h-[6rem] rounded-xl bg-transparent flex flex-col justify-end [&_p]:text-zinc-300 [&_span]:text-zinc-300 [&_tspan]:fill-zinc-300">
                            <AreaChart
                                className="h-64 mt-4"
                                data={chartdata}
                                index="date"
                                categories={["Deep Work"]}
                                colors={["indigo"]}
                                valueFormatter={dataFormatter}
                                showLegend={false}
                                showYAxis={false}
                                startEndOnly={true}
                                showGradient={true}
                            />
                        </div>
                    }
                />

                {/* 2. Inbox Zero (Small - Vertical) */}
                <Link to="/inbox" className="md:col-span-1 md:row-span-1 group/bento row-span-1 rounded-3xl hover:shadow-xl transition duration-500 shadow-input dark:shadow-none p-4 bg-zinc-900/50 border border-white/5 justify-between flex flex-col space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-zinc-800 rounded-2xl text-zinc-300 group-hover/bento:text-primary transition-colors">
                                <Inbox className="w-8 h-8" />
                            </div>
                            <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2 font-mono">0</div>
                            <div className="font-bold text-neutral-200">Bandeja de Entrada</div>
                            <div className="font-normal text-neutral-400 text-xs">Capturas pendientes</div>
                        </div>
                    </div>
                </Link>

                {/* 3. Projects (Small - Enhanced with Cover) */}
                <Link to="/projects" className="md:col-span-1 group/bento row-span-1 rounded-3xl hover:shadow-xl transition duration-500 shadow-input dark:shadow-none bg-zinc-900 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                    {/* CSS "Cover Image" Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-900 to-black opacity-80 group-hover/bento:opacity-100 transition-opacity duration-500" />

                    {/* Abstract shapes for "image" feel */}
                    <div className="absolute top-[-50%] left-[-20%] w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] rotate-12" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-500/30 blur-[60px] rounded-full" />

                    <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl text-white ring-1 ring-white/20">
                                <Target className="w-6 h-6" />
                            </div>
                            <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-xs font-medium text-white">
                                3 Activos
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-1 group-hover/bento:translate-x-1 transition-transform">Proyectos</h3>
                            <p className="text-indigo-200 text-xs line-clamp-2">Lanzar Web, Renovación Casa...</p>
                        </div>
                    </div>
                </Link>

                {/* 4. Daily Quote / Vision (Wide) */}
                <Link to="/vision" className="md:col-span-2 group/bento row-span-1 rounded-3xl hover:shadow-xl transition duration-500 shadow-input dark:shadow-none p-4 bg-zinc-900/50 border border-white/5 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-[120%] group-hover/bento:translate-x-[120%] transition-transform duration-1000" />
                    <div className="relative z-10 px-8">
                        <h3 className="text-2xl font-serif italic text-zinc-300 mb-4">"La disciplina es el puente entre metas y logros."</h3>
                        <div className="flex items-center gap-2">
                            <div className="h-[1px] w-12 bg-indigo-500" />
                            <span className="text-indigo-400 text-sm font-medium">Leer Visión de Vida</span>
                        </div>
                    </div>
                </Link>
            </BentoGrid>
        </div>
    );
};

export default Dashboard;
