'use client';

import { useEffect, useRef, useState } from "react";

export function SearchBar({
  onSearch,
  onEnter,
}: {
  onSearch: (query: string) => void;
  onEnter: (query: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (isActive) {
      onSearch(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && isActive) {
      onEnter(query);
    }
  };

  const handleCircleClick = () => {
    if (query.trim()) {
      onEnter(query);
    }
  };

  return (
    <div className="relative w-[487px] h-11">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        placeholder="search a CAS experience"
        className="absolute left-4 top-2 w-[440px] h-7 bg-transparent text-[var(--foreground)] placeholder-[var(--foreground)]/40 outline-none"
      />
      <div className="w-[487px] h-11 left-0 top-0 absolute bg-[var(--background)]/60 rounded-3xl pointer-events-none" />
      <button
        type="button"
        onClick={handleCircleClick}
        className="w-5 h-5 left-[442px] top-[10px] absolute rounded-full border-[3px] border-[var(--foreground)] bg-transparent"
        aria-label="검색 실행"
        // Need to add 'bar' (돋보기 모양)
      />
    </div>
  );
}

export default function Home() {
  const firstPageRef = useRef<HTMLDivElement>(null);
  const casPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { id: "home", ref: firstPageRef },
      { id: "cas", ref: casPageRef },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting && window.location.hash !== `#${id}`) {
          history.replaceState(null, "", `#${id}`);
        }
      });
    }, {
      rootMargin: "-80px 0px 0px 0px",
      threshold: [0.5],
    });

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleSearch = (query: string) => {
    console.log("검색 중:", query);
  };

  const handleEnter = (query: string) => {
    alert(`검색 실행: ${query}`);
  };

  const letterColors: Record<string, string> = {
    C: "bg-red-500",
    A: "bg-lime-400",
    S: "bg-sky-400/70",
    P: "bg-yellow-400/70",
  };

  const [selectedLetters, setSelectedLetters] = useState<Set<string>>(new Set());

  const handleClick = (letter: string) => {
    setSelectedLetters(prev => {
      const newSet = new Set(prev);
      newSet.has(letter) ? newSet.delete(letter) : newSet.add(letter);
      return newSet;
    });
  };

  function generateItems(count: number, offset = 0) {
    return Array.from({ length: count }, (_, i) => ({
      id: i + offset,
      image: "https://via.placeholder.com/100", // Replace with actual image URLs
      title: `CAS Sample ${i + offset + 1}`,
    }));
  }

  const [casItems, setCasItems] = useState(generateItems(9));
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCasItems(prev => [...prev, ...generateItems(6, prev.length)]);
      }
    }, {
      rootMargin: "100px",
    });

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen" style={{ scrollPaddingTop: "80px" }}>
      {/* First Page */}
      <div
        id="home"
        ref={firstPageRef}
        className="Page first snap-start w-full h-screen flex justify-center items-center bg-[var(--background)] relative"
        style={{ transform: "translateY(-40px)" }}
      >
        <div className="relative w-full max-w-[1430px] h-[664px]">
          {/* Decorative lights */}
          <div className="relative w-full h-full pointer-events-none">
            <div className="absolute w-[350px] h-24 bg-red-500 rounded-[300px] blur-xl" style={{ left: "calc(50% - 751px)", top: "calc(50% - 248px)" }} />
            <div className="absolute w-[483px] h-14 bg-lime-400 rounded-[300px] blur-xl" style={{ left: "calc(50% + 210px)", top: "calc(50% + 133px)" }} />
            <div className="absolute w-[200px] h-20 bg-sky-400/70 rounded-[93px] blur-xl" style={{ left: "calc(50% + 580px)", top: "calc(50% + 202px)" }} />
          </div>

          <div className="flex flex-col items-center justify-center absolute inset-0">
            <div className="w-[532px] h-72 text-center text-[var(--foreground)] text-8xl font-normal font-[var(--font-bad-script)] leading-[100px] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)] translate-y-10">
              Our sweet <br />
              comma,
            </div>
            <div className="w-[487px] h-11 relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] dark:shadow-[0_4px_10px_rgba(255,255,255,0.25)] -mt-6 rounded-3xl">
              <SearchBar onSearch={handleSearch} onEnter={handleEnter} />
            </div>
          </div>
        </div>
      </div>

      {/* CAS Page */}
      <div
      id="cas"
      ref={casPageRef}
      className="Page cas snap-start w-full min-h-[150vh] bg-[var(--background)] px-4 md:px-8 pt-28 relative"
    >
        {/* Main layout */}
        <div className="flex flex-row gap-8 relative z-10 items-start">
         {/* Condition Box */}
        <div
        className="sticky top-20 z-20 flex-shrink-0 min-w-[56px] max-w-[72px] px-1 md:min-w-[64px] md:max-w-[88px] md:px-2"
        >
  <div className="bg-[var(--background)] rounded-xl shadow-md p-2 w-full mx-auto relative">
    <div className="flex flex-col gap-4 items-center">
      {["C", "A", "S", "P"].map((letter) => {
        const isSelected = selectedLetters.has(letter);
        return (
          <div
            key={letter}
            className="relative w-14 h-14 transition-all duration-300 cursor-pointer hover:h-24"
            onClick={() => handleClick(letter)}
          >
            <div
              className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                isSelected ? letterColors[letter] : "bg-[var(--background)]"
              }`}
              style={{ boxShadow: "var(--button1-shadow)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-[var(--foreground)] text-xl font-normal font-['Geist']">
              {letter}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</div>
          {/* CAS Samples */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {casItems.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[var(--background)] text-[var(--foreground)] shadow p-4 aspect-square flex flex-col items-center justify-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain mb-2"
                  />
                  <p className="text-center text-sm font-medium">{item.title}</p>
                </div>
              ))}
            </div>
            <div ref={loaderRef} className="h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}