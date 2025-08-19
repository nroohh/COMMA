import React from 'react';

{/* 왜 videoID 가 빨간줄이 생길까 */}
const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="aspect-video w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export { YouTubeEmbed };


export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen pt-20 px-12 gap-y-10">
        <div className="flex flex-row w-full h-full"> {/*justify-center */}
            {/* Image */}
            <div className="relative lg:w-[1000px] lg:h-92 rounded-2xl overflow-hidden ml-24"> {/* w-full h-80 크기 조정 */}
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    src="https://placehold.co/570x370"
                    alt="Music Volunteer"
                />
            </div>

            {/* Text */}
            <div className="relative w-full h-full flex flex-col items-start -translate-y-6"> {/* w-full h-[384px] 크기 조정 */}
                <div className="absolute top-0 w-full text-center text-[var(--foreground)] text-5xl font-normal font-['geist']">
                Music Volunteer
                </div>
                <div className="absolute top-[63px] w-full text-center text-[var(--foreground)] text-base font-normal font-['geist']">
                Jan 24 - Jan 26 (2024)
                </div>
                <div className="absolute top-[113px] w-full flex justify-center items-center text-[var(--foreground)] text-lg font-normal font-['geist'] leading-10">
                    <div className="text-left">
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 <br />
                        우리가 가진 음악적 역량들을 모아 요양원에 <br />
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. <br />
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 <br />
                        우리가 가진 음악적 역량들을 모아 요양원에 <br />
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. <br />
                        음악의 기쁨을 어르신 분들께 전달해음악의 기쁨을<br />
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다
                    </div>
                </div>
            </div>
        </div>

    <div className="flex flex-row mt-5 px-24">
        {/* LOs */}
        <div className="border border-zinc-400 p-4 rounded-md w-full max-w-lg">
            <div className="flex items-center gap-6">
                <div className="text-[var(--foreground)] text-xl font-normal font-['geist'] leading-normal tracking-wide">
                L.O
                </div>
                <div className="flex flex-row flex-wrap gap-3 justify-start">
                    <div className="text-[var(--foreground)] text-xl font-normal font-['geist'] leading-normal tracking-wide whitespace-nowrap">
                    #Collaborative skills </div>
                    <div className="text-[var(--foreground)] text-xl font-normal font-['geist'] leading-normal tracking-wide whitespace-nowrap">
                    #Commitment </div>
                    <div className="text-[var(--foreground)] text-xl font-normal font-['geist'] leading-normal tracking-wide whitespace-nowrap">
                    #Challenge</div>
                </div>
            </div>
        </div>

        {/* Strands*/}
        <div className="relative w-80 h-16 flex items-center rounded-[40px] ml-56">
            <div className="w-14 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">C</div>
            </div>
            <div className="w-14 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">S</div>
            </div>
            <div className="w-24 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Good</div>
            </div>
        </div>
    </div>

    <div className="flex flex-row w-screen mt-5">
        {/* Timeline */}
        <div className="flex flex-col w-full items-center gap-y-4">
            <div className="w-48 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Time Line</div>
            </div>

            {/* Schcedule */}   {/* + 저기 박스에다가 마우스 갔다대면 스크롤 가능하게 */}
            <div className="flex w-[550px] h-80 px-6 py-4 bg-white/30 rounded-2xl shadow-[var(--button2-shadow)]">
                <div className="w-2.5 h-full bg-white rounded-full shadow-[var(--button1-shadow)]"></div>  
                <div className="ml-4 flex-1 overflow-y-auto pr-2">
                    <div className="pb-1">
                        <div className="text-stone-600 text-lg font-normal font-['Abel']"> 봉사 장소 섭외 (1365, 전화)</div>
                    </div>
                <div className="w-full h-0.5 bg-black/10 my-2"></div>
                <div className="pb-1">
                    <div className="text-stone-600 text-lg font-normal font-['Abel'] leading-relaxed">
                        곡 선정, 파트 배분, 악보 수정을 기반으로 <br /> 플룻 연습 시작</div>
                </div>
                <div className="w-full h-0.5 bg-black/10 my-2"></div>
                <div className="pb-1">
                    <div className="text-stone-600 text-lg font-normal font-['Abel'] leading-relaxed">
                        다른 일정 내용</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Youtube */}
        <div className="flex w-full items-center mr-36">
            <YouTubeEmbed videoId="clMedKL9cR0" />
        </div>
    </div>

    <div className="flex flex-row w-screen mt-5">
        {/* Final evidence */}
        <div className="flex flex-col w-full items-center gap-y-10">
            <div className="w-48 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Final Evidence</div>
            </div>
            <div className="flex w-full">
                <YouTubeEmbed videoId="clMedKL9cR0" />
            </div>
        </div>
        {/* After reflection */}
        <div className="flex flex-col w-full items-center mr-36">
            <div className="w-104 h-[474px] px-4 py-2 relative bg-white/0 rounded-[50px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-52 h-36 left-[-25px] top-[-25px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="w-[490px] h-96 left-[23px] top-[166px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="w-106 h-96 relative">
                    <div className="w-64 h-7 left-[72px] top-0 absolute text-center justify-start text-stone-600 text-3xl font-normal font-['Abel']">After reflection</div>
                    <div className="h-80 left-0 top-[59px] w-full flex absolute justify-center text-[var(--foreground)] text-lg font-normal font-['ABeeZee'] leading-10">
                        <div className="text-left">
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 <br/>
                        우리가 가진 음악적 역량들을 모아 요양원에 <br/>
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. <br/>
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 <br/>
                        우리가 가진 음악적 역량들을 모아 요양원에 <br/>
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. <br/>
                        음악의 기쁨을 어르신 분들께 전달해음악의 기쁨을<br/>
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-center mt-10 gap-y-10">
        {/* Tip Box */}
        <div className="w-48 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
            <div className="w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Tip box</div>
        </div>
        <div className="w-[966px] h-80 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
            <div className="w-[798px] h-80 text-center justify-center">
                <ul className="list-disc list-inside space-y-2 text-[var(--foreground)] text-lg font-normal font-['geist'] leading-normal z-10">
                    <li>
                    한 시간 동안 공연? 쉽지 않다! <br/>
                    (그냥 하지 마세요)</li>
                    <li>음악의 기쁨보다 음악의 힘듦을 먼저 발견 ^^</li>
                </ul>
            </div>
        </div>
    </div>

    {/* Footer */} {/* px가 무효화가 안돼!! */}
    <div className="flex flex-row w-screen h-15 bg-neutral-100 px-0 z-20">
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full h-12 justify-center text-zinc-600 text-[9px] font-normal font-['geist'] leading-3">
                Youtube: 사기 쫌 치는 아이비(@ib_official)<br/>
                Instagram: @survibal<br/>
                G-mail: oursweetcomma@gmail.com</div>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full h-13 justify-center text-zinc-600 text-[9px] font-normal font-['geist'] leading-3">
                충남삼성고등학교<br/>
                2025.08.21 published<br/>
                CAS - our sweet comma<br/>
                IBDP 4th</div>
        </div>
    </div>
</div>
  );
}
