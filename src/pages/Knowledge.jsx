import React, { useState } from 'react';
import { BookOpen, Snowflake, Flame, Plus, X, Edit2, Check, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { cn } from '../lib/utils';

const Knowledge = () => {
    const [freezerItems, setFreezerItems] = useLocalStorage("frank-knowledge-freezer", [
        { id: 1, title: 'Recetas de Cocina', type: 'collection' },
        { id: 2, title: 'Apuntes de Universidad', type: 'doc' },
    ]);
    const [kitchenItems, setKitchenItems] = useLocalStorage("frank-knowledge-kitchen", [
        { id: 101, title: 'Ideas para el Blog', status: 'cooking' },
        { id: 102, title: 'Investigación Tesis', status: 'hot' },
    ]);

    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleAdd = (section) => {
        const text = prompt("Nuevo elemento:");
        if (!text) return;

        if (section === 'freezer') {
            setFreezerItems([...freezerItems, { id: Date.now(), title: text, type: 'doc' }]);
        } else {
            setKitchenItems([...kitchenItems, { id: Date.now(), title: text, status: 'cooking' }]);
        }
    };

    const startEdit = (item) => {
        setEditingId(item.id);
        setEditValue(item.title);
    };

    const saveEdit = (section, id) => {
        if (section === 'freezer') {
            setFreezerItems(freezerItems.map(i => i.id === id ? { ...i, title: editValue } : i));
        } else {
            setKitchenItems(kitchenItems.map(i => i.id === id ? { ...i, title: editValue } : i));
        }
        setEditingId(null);
    };

    const deleteItem = (section, id) => {
        if (confirm("¿Borrar elemento?")) {
            if (section === 'freezer') {
                setFreezerItems(freezerItems.filter(i => i.id !== id));
            } else {
                setKitchenItems(kitchenItems.filter(i => i.id !== id));
            }
        }
    };

    return (
        <div className="space-y-12">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
                    <BookOpen className="w-8 h-8 text-indigo-400" />
                    Gestión de Conocimiento
                </h1>
                <p className="text-zinc-400">Tu segundo cerebro: Congela para después, Cocina para ahora.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* The Freezer (Cold Storage) */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2 text-cyan-400">
                            <Snowflake className="w-5 h-5" />
                            <h2 className="font-bold text-lg">El Congelador</h2>
                        </div>
                        <button onClick={() => handleAdd('freezer')} className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-b from-cyan-950/20 to-black border border-cyan-900/30 min-h-[400px]">
                        <div className="space-y-3">
                            <AnimatePresence>
                                {freezerItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-cyan-500/30 transition-colors group flex items-center justify-between"
                                    >
                                        {editingId === item.id ? (
                                            <div className="flex-1 flex items-center gap-2">
                                                <input
                                                    autoFocus
                                                    value={editValue}
                                                    onChange={(e) => setEditValue(e.target.value)}
                                                    className="bg-black/50 text-white px-2 py-1 rounded border border-cyan-500/50 outline-none w-full"
                                                    onKeyDown={(e) => e.key === 'Enter' && saveEdit('freezer', item.id)}
                                                />
                                                <button onClick={() => saveEdit('freezer', item.id)} className="text-emerald-400"><Check className="w-4 h-4" /></button>
                                            </div>
                                        ) : (
                                            <>
                                                <span className="text-zinc-300">{item.title}</span>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => startEdit(item)} className="text-zinc-500 hover:text-cyan-400"><Edit2 className="w-3 h-3" /></button>
                                                    <button onClick={() => deleteItem('freezer', item.id)} className="text-zinc-500 hover:text-red-400"><Trash2 className="w-3 h-3" /></button>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {freezerItems.length === 0 && (
                                <p className="text-center text-zinc-600 mt-10">Nada congelado aún.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* The Kitchen (Active Use) */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-2 text-amber-500">
                            <Flame className="w-5 h-5" />
                            <h2 className="font-bold text-lg">La Cocina</h2>
                        </div>
                        <button onClick={() => handleAdd('kitchen')} className="p-1.5 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="p-6 rounded-3xl bg-gradient-to-b from-amber-950/20 to-black border border-amber-900/30 min-h-[400px]">
                        <div className="space-y-3">
                            <AnimatePresence>
                                {kitchenItems.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="p-4 rounded-xl bg-zinc-900/60 border border-white/5 hover:border-amber-500/30 transition-colors group flex items-center justify-between"
                                    >
                                        {editingId === item.id ? (
                                            <div className="flex-1 flex items-center gap-2">
                                                <input
                                                    autoFocus
                                                    value={editValue}
                                                    onChange={(e) => setEditValue(e.target.value)}
                                                    className="bg-black/50 text-white px-2 py-1 rounded border border-amber-500/50 outline-none w-full"
                                                    onKeyDown={(e) => e.key === 'Enter' && saveEdit('kitchen', item.id)}
                                                />
                                                <button onClick={() => saveEdit('kitchen', item.id)} className="text-emerald-400"><Check className="w-4 h-4" /></button>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                                    <span className="text-zinc-200 font-medium">{item.title}</span>
                                                </div>
                                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => startEdit(item)} className="text-zinc-500 hover:text-amber-400"><Edit2 className="w-3 h-3" /></button>
                                                    <button onClick={() => deleteItem('kitchen', item.id)} className="text-zinc-500 hover:text-red-400"><Trash2 className="w-3 h-3" /></button>
                                                </div>
                                            </>
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            {kitchenItems.length === 0 && (
                                <p className="text-center text-zinc-600 mt-10">La cocina está vacía.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Knowledge;
