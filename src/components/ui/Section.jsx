import React from 'react';
import { cn } from '../../utils';

const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={cn("py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto", className)}>
            {children}
        </section>
    );
};

export default Section;
