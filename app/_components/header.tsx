"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import gsap from "gsap";
import Link from "next/link";
import SearchBar from "./searchBar";

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();

  const blockHash = useRef(false);
  const previousHash = useRef("");

  function blockFor(ms: number) {
    blockHash.current = true;
    setTimeout(() => {
      blockHash.current = false;
    }, ms);
  }

  function runAnimation(isMobile: boolean, hash: string) {
    console.log(hash)
    if (!isMobile) {
      if (hash === "#cas") {
        const tl1 = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

        tl1.to("#headerSearchBar", {
          opacity: 1,
          width: "40vw",
          duration: 0.2,
        }).to(
          "#headerLabel",
          {
            opacity: 0,
            width: "0",
            duration: 0.2,
            onComplete: () => {
              (document.querySelector("#headerLabel") as HTMLElement).style.pointerEvents = "none";
              (document.querySelector("#headerSearchBar") as HTMLElement).style.pointerEvents = "auto";
            },
          },
          "-=0.2"
        ).to(".hide", {
          opacity: 1,
          duration:0.2,
          onComplete: () => {
            document.querySelectorAll<HTMLElement>(".hide").forEach((el) => {
              el.style.pointerEvents = "auto";
            });
          },
        });

        previousHash.current = hash;
      } else if (previousHash.current === "#cas" && hash !== "#cas") {
        const tl2 = gsap.timeline({ defaults: { duration: 1, ease: "power1.out" } });

        tl2.to("#headerLabel", {
          opacity: 1,
          width: "25vw",
          duration: 0.2,
        }).to(
          "#headerSearchBar",
          {
            opacity: 0,
            width: "0",
            duration: 0.2,
            onComplete: () => {
              (document.querySelector("#headerLabel") as HTMLElement).style.pointerEvents = "auto";
              (document.querySelector("#headerSearchBar") as HTMLElement).style.pointerEvents = "none";
            },
          },
          "-=0.2"
        ).to(".hide", {
          opacity: 1,
          duration:0.2,
          onComplete: () => {
            document.querySelectorAll<HTMLElement>(".hide").forEach((el) => {
              el.style.pointerEvents = "auto";
            });
          },
        });
      }
    } else {
      if (hash === "#cas") {
        const tl1 = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.inOut" } });

        tl1.to(".hide", {
          opacity: 0,
          onComplete: () => {
            document.querySelectorAll<HTMLElement>(".hide").forEach((el) => {
              el.style.pointerEvents = "none";
            });
          },
        })
        .to("#headerSearchBar", {
        opacity: 1,
        width: "80vw",
        onStart: () => {
            const headerSearchBar = document.querySelector("#headerSearchBar") as HTMLElement;
            if (headerSearchBar) headerSearchBar.style.pointerEvents = "auto";
        },
        })
        .to(
        "#headerLabel",
        {
            opacity: 0,
            width: "0",
            onComplete: () => {
            const headerLabel = document.querySelector("#headerLabel") as HTMLElement;
            if (headerLabel) headerLabel.style.pointerEvents = "none";
            },
        },
        "-=0.2"
        );

        previousHash.current = hash;
      } else if (previousHash.current === "#cas" && hash !== "#cas") {
        const tl2 = gsap.timeline({ defaults: { duration: 0.2, ease: "power1.inOut" } });

        tl2.to("#headerLabel", {
          opacity: 1,
          width: "25vw",
          onStart: () => {
            const headerLabel = document.querySelector("#headerLabel") as HTMLElement;
            if (headerLabel) headerLabel.style.pointerEvents = "auto";
          },
        })
        .to(
        "#headerSearchBar",
        {
            opacity: 0,
            width: "0",
            onComplete: () => {
            const headerSearchBar = document.querySelector("#headerSearchBar") as HTMLElement;
            if (headerSearchBar) headerSearchBar.style.pointerEvents = "none";
            },
        },
        "-=0.2"
        )
        .to(".hide", {
        opacity: 1,
        onStart: () => {
            document.querySelectorAll<HTMLElement>(".hide").forEach((el) => {
            el.style.pointerEvents = "auto";
            });
        },
        });
      }
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleScreenChange = (e: MediaQueryListEvent | MediaQueryList) => {
      runAnimation(e.matches, window.location.hash);
    };

    // Run once on mount
    handleScreenChange(mediaQuery);

    // Listen to media query changes
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  function handleClick() {
    if (window.location.hash !== "#cas") {
        blockFor(1000);
    }
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const updateHash = () => {
      previousHash.current = window.location.hash;
    };

    runAnimation(mediaQuery.matches, window.location.hash);
    updateHash();

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!blockHash.current) {
                runAnimation(mediaQuery.matches, `#${entry.target.id}`);
            }
            history.replaceState(null, "", `#${entry.target.id}`);
            updateHash();
          }
        });
      },
      { root: document.querySelector(".scrollContainer"), threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

    return (
        <header className="fixed top-0 left-0 w-full h-[7vh] max-h-[90px] lg:max-h-[90px] min-h-[60px] z-50 p-3 flex items-center">
        <Link href={`/${query ? "?" + query : ""}#home`} onClick={() => handleClick()} className="items-center h-full xl:flex cursor-pointer hidden">
            <img src="/logo.svg" alt="logo" className="filter dark:invert h-full" />
        </Link>

        <nav className="flex-1 flex w-full justify-center h-[5vh] items-center fsmall space-x-6 min-h-[50px] max-h-[75px]">
            <Link href={`/${query ? "?" + query : ""}#home`} onClick={() => handleClick()} className="h-full">
                <div className="hide flex-col flex items-center text-center justify-center h-full w-[25vw] max-w-[100px] rounded-full bubble">
                    Home
                </div>
            </Link>
            <div className="flex items-center justify-center h-full w-fit rounded-full bubble">
                <Link href={`/${query ? "?" + query : ""}#cas`} className="h-full">
                    <div id="headerLabel" className="flex w-[25vw] flex-col text-center max-w-[100px] items-center justify-center h-full rounded-full">
                        CAS
                    </div>
                </Link>
                <div id="headerSearchBar" className="flex justify-center items-center opacity-0 w-0 pointer-events-none">
                    <SearchBar></SearchBar>
                </div>
            </div>
            <Link href={`/${query ? "?" + query : ""}#about`} onClick={() => handleClick()} className="h-full">
                <div className="hide flex-col flex items-center text-center justify-center h-full w-[25vw] max-w-[100px] rounded-full bubble">
                    About
                </div>
            </Link>
        </nav>

        <div className="hidden md:flex h-full aspect-square"></div>
        </header>
    );
}