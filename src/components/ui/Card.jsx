import React from 'react';
import { cn } from '../../utils';

const Card = ({ children, className, hover = true }) => {
    return (
        <div className={cn(
            "bg-white dark:bg-zinc-900 rounded-xl p-6 border border-zinc-100 dark:border-zinc-800",
            hover && "hover:border-indigo-500/50 dark:hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300",
            className
        )}>
            {children}
        </div>
    );
};

export default Card;
