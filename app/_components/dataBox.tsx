"use client";

import { Suspense } from "react";
import { ReactNode } from "react";

export default function DataBox({ children, fit }: { children: ReactNode, fit: string }) {

    return (
        <div className={`flex justify-center items-start h-${fit} w-${fit} round bubble`}>
            {/* We can then render the children here */}
            {children}
        </div>
    );
}
