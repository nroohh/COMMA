import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="w-[1430px] h-[664px] relative">
      {/* Search bar */}
      {/* Our sweet comma */}
      <div className="w-[532px] h-72 left-[227px] top-[176px] absolute justify-start text-var(--foreground) text-8xl font-normal font-['Arial'] [text-shadow:_0px_4px_4px_rgb(0_0_0_/_0.25)]">Our sweet comma,</div>
      <img className="w-28 h-28 left-[593.10px] top-[287.95px] absolute" src="./Sample.png" alt="Cupcake" />
      {/* Timeline bar */}
      <div className="w-[471px] h-16 left-0 top-[89px] absolute bg-red-400 rounded-[30px] blur-md" />
      <div className="w-[541px] h-16 left-[889px] top-[553px] absolute bg-sky-400 rounded-[30px] blur-lg" />
      <div className="w-[615px] h-16 left-[429px] top-[455px] absolute bg-lime-400 rounded-[30px] blur-[10px]" />
      {/* flag */}
    </div>
    </>
  );
}
