'use client';

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Background() {
    useEffect(() => {
        const scrollContainer = document.querySelector('.scrollContainer') as HTMLElement;
        const content = document.querySelector('.content') as HTMLElement;


        gsap.fromTo(".bg1", { xPercent: "-30", yPercent: "30"}, {
            xPercent: "100",
            yPercent: "-10",
            ease: "none",
            scrollTrigger: {
                trigger: content,
                scroller: scrollContainer,
                start: "top top",
                end: () => `+=${content.scrollHeight - window.innerHeight}px`,
                scrub: true,
            }
        });
         gsap.fromTo(".bg2", { xPercent: "-40", yPercent: "0"}, {
            xPercent: "90",
            yPercent: "20",
            ease: "none",
            scrollTrigger: {
                trigger: content,
                scroller: scrollContainer,
                start: "top top",
                end: () => `+=${content.scrollHeight - window.innerHeight}px`,
                scrub: true,
            }
        });
    }, []);

    return (
        <div className="fixed left-0 top-0 w-full h-full overflow-hidden">
            <img
            src="/bg2.png"
            alt=""
            className="fixed bg1 overflow-visible left-0 w-full object-cover h-full block dark:hidden"
            />
            <img
            src="/bg2d.png"
            alt=""
            className="fixed bg1 overflow-visible left-0 w-full object-cover h-full hidden dark:block"
            />
            <img
            src="/bg1.png"
            alt=""
            className="fixed bg2 overflow-visible left-0 w-full object-cover h-full block dark:hidden"
            />
            <img
            src="/bg1d.png"
            alt=""
            className="fixed bg2 overflow-visible left-0 w-full object-cover h-full hidden dark:block"
            />

        </div>
    );
}
