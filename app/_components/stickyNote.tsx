interface StickyNoteProps {
  text: string;
}


export default function StickyNote({ text }: StickyNoteProps) {
  return (
    <div className="flex flex-col items-center">
        <div className="bg-[var(--background)] w-4 h-4 rounded-full drop-shadow translate-y-7 z-10" />
        <div className="w-[70vw] sm:w-[50vw] md:w-[25vw] lg:w-[25vw] xl:w-[17vw] aspect-square p-5 bg-sky-200 overflow-scroll scroll-hidden drop-shadow text-left justify-center fsmall font-['geist'] leading-10">
            {text}
        </div>
    </div>
  );
}

