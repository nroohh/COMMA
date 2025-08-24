'use client';

import { useRouter } from "next/navigation"; // ✅ use next/navigation for app router
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface CardProps {
  experience: ExperienceType;
}

export default function Card({ experience }: CardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const dates = experience.dates.map(date =>
    (new Date(date)).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    })
  );

  function handleClick() {
    router.replace(`./${pathname}/info/${experience._id}`);
  }

  return (
    <div
      onClick={handleClick}
      className="round bg-[var(--background)] text-[var(--foreground)] p-[1px] w-[65vw] md:w-[33vw] lg:w-[21vw] xl:w-[16vw] aspect-[5/2] md:aspect-square bubble flex flex-row md:flex-col items-center justify-center"
    >
      <img
        src={experience.cover.url}
        className="object-cover h-full w-auto md:h-auto md:w-full overflow-clip aspect-square md:aspect-[3/2] rounded-l-4xl md:rounded-b-none md:rounded-tr-4xl"
      />
      <div className="flex-1 w-full flex flex-col gap-1 text-left font-sans py-2 px-2 md:pb-5 md:pt-2 md:px-5">
        <h1 className="font-bold fsmall lg:fmedium line-clamp-1">
          {experience.title}
        </h1>
        <p className="line-clamp-1 fxxsmall md:fxsmall">
          {dates.join(" - ")}
        </p>
        <p className="line-clamp-1 sm:line-clamp-2 fxxsmall md:fxsmall">
          {experience.description}
        </p>
      </div>
    </div>
  );
}
