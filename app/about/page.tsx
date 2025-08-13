'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  const [activeSection, setActiveSection] = useState<1 | 2>(1);

  useEffect(() => {
    const sections: { ref: React.RefObject<HTMLDivElement | null>; id: 1 | 2 }[] = [
      { ref: section1Ref, id: 1 },
      { ref: section2Ref, id: 2 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let visibleSectionId: 1 | 2 | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const found = sections.find((s) => s.ref.current === entry.target);
            if (found) {
              visibleSectionId = found.id;
            }
          }
        });

        if (visibleSectionId !== null && visibleSectionId !== activeSection) {
          setActiveSection(visibleSectionId);
        }
      },
      {
        rootMargin: "0px 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  return (
    <div
      className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth"
      style={{ scrollPaddingTop: "80px" }}
    >
      {/* Section 1 */}
      <section
        ref={section1Ref}
        className={`snap-start min-h-screen flex items-center justify-center transition-opacity ease-in-out ${
          activeSection === 1 ? "opacity-100" : "opacity-30"
        } bg-[var(--background)]`}
        style={{ transitionDuration: "1000ms" }}
      >
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[var(--background)]">
          {/* background */}
          <div className="absolute right-0 top-[20%] w-100 h-50 bg-sky-400/70 rounded-2xl blur-[80px] z-0" />
          <div className="absolute left-0 top-[55%] w-100 h-35 bg-lime-400/80 rounded-2xl blur-[80px] z-0" />

          {/* Text */}
          <div className="relative z-10 text-center flex flex-col items-center justify-center">
            <div className="text-[var(--foreground)] text-6xl font-normal font-['Bad_Script'] leading-[2] mb-10">
              나의 성장, 우리의 이야기
              <br />
              CAS Portfolio
            </div>

            <div className="flex flex-row items-center justify-center gap-2 mt-3 text-[var(--foreground)] text-2xl font-normal tracking-wider font-[var(--font-geist-sans)]">
              <div>김민솔</div>
              <div>김시우</div>
              <div>임예원</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={section2Ref}
        className={`snap-start min-h-screen flex items-start justify-center transition-opacity ease-in-out ${
          activeSection === 2 ? "opacity-100" : "opacity-30"
        } bg-[var(--background)]`}
        style={{ transitionDuration: "500ms", paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="max-w-3xl text-left text-[var(--foreground)] p-8 flex-1">
          <p className="text-xl leading-relaxed whitespace-pre-line">
            이곳은 Creativity, Activity, Service,
            <br />
            세 가지 활동 속에서 IB 학생들이 배우고, 느끼고, <br />
            성장한 과정을 기록한 공간입니다.
            <br />
            단순한 활동을 넘어, 내가 세상과 연결되고, <br />
            공동체에 기여하며, 스스로의 한계를 넘어선 발자취를 남깁니다.
            <br />
            <br />
            사진 한 장, 기록 한 줄, <br />
            작은 아이디어 하나까지. <br />
            이 모든 것이 나의 여정이자 이야기입니다.
            <br />
            <br />
            시간이 흘러도 사라지지 않을 <br />
            나의 소중한 경험과 추억들을 <br />
            모두서 이곳에서 확인해보세요. <br />
          </p>
        </div>
        {/* image */}
        <div className="hidden md:block flex-shrink-0 w-80 h-80 relative ml-8">
          <Image
            src="/whatphoto.jpg" // What photo to use??
            alt="Section 2 Photo"
            fill
            style={{ objectFit: "cover", borderRadius: "1rem" }}
            priority
          />
        </div>
      </section>
    </div>
  );
}



