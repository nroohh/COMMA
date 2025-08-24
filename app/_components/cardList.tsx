"use client";

import { useEffect } from "react";
import { useState } from "react";
import Card from "./card";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function CardList() {
    const [experiences, setExperiences] = useState<ExperienceType[]>([])
    const [strands, setStrands] = useState<{ [key: string]: boolean }>({
        c: false,
        a: false,
        s: false,
        p: false,
    });
    const toggle = (key: string) => {
        setStrands(prev => ({
        ...prev,
        [key]: !prev[key],
        }));
    };
    const searchParams = useSearchParams();
    const query = searchParams.get("search") || "";
    
    useEffect(() => {
        fetch(`/api/query?search=${query}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    console.error("Error fetching experiences:", data.error);
                } else {
                    setExperiences(data);
                }
            })
            .catch(error => {
                console.error("Error fetching experiences:", error);
            });
    }, [query]);

    const filtered = experiences.filter(exp => {
        return Object.entries(strands).every(([key, value]) =>
            value ? exp.strands.includes(key) : true
        );
    });


    return (
        <div className="flex items-center w-full h-full justify-center">
            <div className="flex items-start h-[80vh] w-full justify-evenly pt-5 md:pt-3 md:justify-center md:gap-5">
                <div className="flex fsmall items-center justify-center flex-col min-w-[50px] w-[5vh] gap-5">
                    <div key="C" className={`flex items-center justify-center bg-[var(--background)] round min-h-[50px] transition-all w-full hover:h-[10vh] ${strands["c"] ? "h-[10vh]" : "h-[5vh]"}  cursor-pointer bubble`} onClick={() => toggle("c")}>
                        C
                    </div>
                    <div key="A" className={`flex items-center justify-center bg-[var(--background)] round min-h-[50px] transition-all w-full hover:h-[10vh] ${strands["a"] ? "h-[10vh]" : "h-[5vh]"}  cursor-pointer bubble`} onClick={() => toggle("a")}>
                        A
                    </div>
                    <div key="S" className={`flex items-center justify-center bg-[var(--background)] round min-h-[50px] transition-all w-full hover:h-[10vh] ${strands["s"] ? "h-[10vh]" : "h-[5vh]"}  cursor-pointer bubble`} onClick={() => toggle("s")}>
                        S
                    </div>
                    <div key="P" className={`flex items-center justify-center bg-[var(--background)] round min-h-[50px] transition-all w-full hover:h-[10vh] ${strands["p"] ? "h-[10vh]" : "h-[5vh]"}  cursor-pointer bubble`} onClick={() => toggle("p")}>
                        P
                    </div>
                </div>
                <Suspense key={query} fallback={<div className="flex items-center justify-center h-full w-full">Loading...</div>}>
                    <div className="flex justify-center items-start h-[80vh] w-[75vw] round gap overflow-y-scroll scroll-hidden bubble p-[4vw] md:p-[3vw] lg:p-[4vw]">
                        <div className="flex items-center justify-center gap-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 flex-grow">
                                {filtered.map((experience) => (
                                    <Card key={experience._id} experience={experience} />
                                ))}
                            </div>
                        </div>
                    </div>
                </Suspense>
            </div>
        </div>
    );
}

