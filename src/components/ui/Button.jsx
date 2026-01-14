import React from 'react';
import { cn } from '../../utils';

const Button = ({ children, variant = 'primary', className, ...props }) => {
    const variants = {
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20",
        secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700",
        outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:text-indigo-400 dark:border-indigo-500 dark:hover:bg-indigo-950/30",
        ghost: "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800",
    };

    return (
        <button
            className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
