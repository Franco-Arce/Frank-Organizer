import React, { useState } from 'react';
import { Plus, CheckCircle2, Trash2, ArrowRight, Edit2, Check } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Inbox = () => {
    const [items, setItems] = useLocalStorage("frank-inbox-items", [
        { id: 1, text: 'Revisar metas trimestrales', createdAt: new Date() },
        { id: 2, text: 'Llamar a Miguel sobre el proyecto', createdAt: new Date() },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleAddItem = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        setItems([{ id: Date.now(), text: inputValue, createdAt: new Date() }, ...items]);
        setInputValue('');
    };

    const deleteItem = (id) => {
        setItems(items.filter(i => i.id !== id));
    };

    const startEdit = (item) => {
        setEditingId(item.id);
        setEditValue(item.text);
    };

    const saveEdit = (id) => {
        setItems(items.map(i => i.id === id ? { ...i, text: editValue } : i));
        setEditingId(null);
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-2">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-white tracking-tight"
                >
                    Bandeja Cero
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.1 } }}
                    className="text-zinc-400"
                >
                    Captura todo. Confía en tu sistema.
                </motion.p>
            </div>

            <motion.form
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
                onSubmit={handleAddItem}
                className="relative group"
            >
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="¿Qué tienes en mente?..."
                    className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-4 pl-6 pr-14 text-lg focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-zinc-600 relative z-10 text-white backdrop-blur-sm"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 aspect-square bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center transition-all active:scale-95 z-20 shadow-md"
                >
                    <Plus className="w-5 h-5" />
                </button>
            </motion.form>

            <div className="space-y-3">
                <AnimatePresence mode="popLayout">
                    {items.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="text-center py-12 border-2 border-dashed border-zinc-800 rounded-3xl"
                        >
                            <CheckCircle2 className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
                            <p className="text-zinc-500 font-medium">Tu mente está despejada.</p>
                        </motion.div>
                    ) : (
                        items.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="group flex items-center gap-4 p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-primary/30 transition-all hover:bg-zinc-900/80 backdrop-blur-sm"
                            >
                                <div className="w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-all" />

                                {editingId === item.id ? (
                                    <div className="flex-1 flex items-center gap-2">
                                        <input
                                            autoFocus
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            className="bg-black/50 text-white px-2 py-1 rounded border border-primary/50 outline-none w-full"
                                            onKeyDown={(e) => e.key === 'Enter' && saveEdit(item.id)}
                                        />
                                        <button onClick={() => saveEdit(item.id)} className="p-2 text-emerald-400 hover:bg-emerald-400/10 rounded-lg transition-colors"><Check className="w-4 h-4" /></button>
                                    </div>
                                ) : (
                                    <span className="flex-1 text-zinc-200 font-medium">{item.text}</span>
                                )}

                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {editingId !== item.id && (
                                        <button onClick={() => startEdit(item)} className="p-2 text-zinc-500 hover:text-primary transition-colors hover:bg-primary/10 rounded-lg">
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                    )}
                                    <button onClick={() => deleteItem(item.id)} className="p-2 text-zinc-500 hover:text-red-400 transition-colors hover:bg-red-400/10 rounded-lg">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Inbox;
