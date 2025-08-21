import React from 'react';

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
    <div className="flex flex-col w-screen md:h-screen pt-5 lg:px-5 lg:pt-20 lg:px-12 gap-y-10">
        <div className="flex flex-col lg:flex-row w-full h-full"> {/*justify-center */}
            {/* Image */}
            <div className="relative w-72 h-50 mx-auto md:w-140 md:h-100 lg:w-260 lg:h-92 rounded-2xl overflow-hidden lg:ml-24 lg:mt-10">
                <img
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    src="https://placehold.co/570x370"
                    alt="Music Volunteer"
                />
            </div>

            <div className="relative w-full flex flex-col mt-5 md:mt-10 lg:-translate-y-20"> {/* w-full h-[384px] 크기 조정 */}
                {/* Strands*/}
                <div className="relative flex items-center rounded-[40px] justify-center">
                    <div className="w-14 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                        <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                        <div className="text-center justify-start text-[var(--foreground)] text-sm md:text-lg font-normal font-['geist'] z-10">C</div>
                    </div>
                    <div className="w-14 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                        <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                        <div className="text-center justify-start text-[var(--foreground)] text-sm md:text-lg font-normal font-['geist'] z-10">S</div>
                    </div>
                    <div className="w-24 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                        <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                        <div className="text-center justify-start text-[var(--foreground)] text-sm md:text-lg font-normal font-['geist'] z-10">Good</div>
                    </div>
                </div>
                {/* Text */}
                <div className="flex flex-col items-start mt-5">
                <div className="w-full text-center text-[var(--foreground)] text-4xl md:text-5xl font-normal font-['geist']">
                Music Volunteer
                </div>
                <div className="mt-5 w-full text-center text-[var(--foreground)] text-sm md:text-base font-normal font-['geist']">
                Jan 24 - Jan 26 (2024)
                </div>
                <div className="mt-5 w-full flex justify-center items-center px-7 md:px-50 text-[var(--foreground)] text-base md:text-lg font-normal font-['geist'] leading-10">
                    <div className="text-left">
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 
                        우리가 가진 음악적 역량들을 모아 요양원에 
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. 
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 
                        우리가 가진 음악적 역량들을 모아 요양원에
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다.
                        음악의 기쁨을 어르신 분들께 전달해음악의 기쁨을
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다
                    </div>
                </div>
            </div>
            </div>
        </div>

        {/* LOs */}
        <div className="border border-zinc-400 p-4 rounded-md max-w-xs lg:max-w-none md:max-w-lg mx-auto lg:-mt-25">
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

    <div className="flex flex-col items-center lg:flex-row justify-center w-screen px-15 mt-10 md:mt-35 lg:mt-40">
        <div className="flex flex-col w-full items-center gap-y-4 order-2 lg:order-1 mt-10 lg:mt-0">
            {/* Timeline */}
            <div className="w-48 h-12 px-4 py-2 relative rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden ">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
                <div className="w-28 h-5 text-center text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Time Line</div>
            </div>

            {/* Schcedule */}   {/* 박스에다가 마우스 갔다대면 스크롤 가능하게 */}
            <div className="flex w-75 md:w-[550px] h-80 lg:px-6 py-4 bg-white/30 rounded-2xl shadow-[var(--button2-shadow)]">
                <div className="w-2.5 h-full bg-[var(--backgruond)] rounded-full shadow-[var(--button1-shadow)]"></div>  
                <div className="ml-4 flex-1 overflow-y-auto pr-2">
                    <div className="pb-1">
                        <div className="text-[var(--foreground)] text-lg font-normal font-['geist']"> 봉사 장소 섭외 (1365, 전화)</div>
                    </div>
                <div className="w-full h-0.5 bg-[var(--foreground)]/10 my-2"></div>
                <div className="pb-1">
                    <div className="text-[var(--foreground)] text-lg font-normal font-['geist'] leading-relaxed">
                        곡 선정, 파트 배분, 악보 수정을 기반으로 <br /> 플룻 연습 시작</div>
                </div>
                <div className="w-full h-0.5 bg-[var(--foreground)]/10 my-2"></div>
                <div className="pb-1">
                    <div className="text-[var(--foreground)] text-lg font-normal font-['geist'] leading-relaxed">
                        다른 일정 내용</div>
                    </div>
                </div>
            </div>
        </div>

        {/* Youtube */}
        {/* 크기ㅏㄱ 이상해ㅠㅠ + 왜 lg에서는 가운데 정렬이 안되지 */} 
        <div className="flex justify-center items-center max-w-sm md:max-w-none md:w-full mx-auto mt-5 order-1 lg:order-2"> 
            <YouTubeEmbed videoId="clMedKL9cR0"/>
        </div>
    </div>

    <div className="flex flex-col lg:flex-row w-screen mt-10 lg:px-15 md:mt-35 lg:mt-40">
        {/* Final evidence */}
        <div className="flex flex-col w-full items-center gap-y-10">
            <div className="w-48 h-12 px-4 py-2 relative rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-56 h-24 left-[-38px] top-[-18px] absolute backdrop-blur-[2px]" />
                <div className="w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Final Evidence</div>
            </div>
            <div className="flex max-w-xs md:max-w-none w-full">
                <YouTubeEmbed videoId="clMedKL9cR0" />
            </div>
        </div>
        {/* After reflection */}
        <div className="flex flex-col w-full items-center mt-20 lg:-translate-y-10">
            <div className="w-auto max-w-xs md:max-w-none h-auto px-4 py-7 relative rounded-[50px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-52 h-36 left-[-25px] top-[-25px] absolute backdrop-blur-[2px]" />
                <div className="w-[490px] h-96 left-[23px] top-[166px] absolute backdrop-blur-[2px]" />
                <div className="flex-col items-center w-auto md:w-106 auto-height relative ">
                    <div className="text-center text-[var(--foreground)] text-3xl font-normal font-['geist']">After reflection</div>
                    <div className="w-full px-5 mt-4 flex text-[var(--foreground)] text-lg font-normal font-['geist'] leading-10">
                        <div className="text-left">
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 
                        우리가 가진 음악적 역량들을 모아 요양원에 
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. 
                        음악의 기쁨을 어르신 분들께 전달해 드리고자 
                        우리가 가진 음악적 역량들을 모아 요양원에 
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다. 
                        음악의 기쁨을 어르신 분들께 전달해음악의 기쁨을
                        찾아갔고, 약 한시간 가량 공연을 진행했습니다</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="flex flex-col items-center mt-10 gap-y-7 md:mt-35 lg:mt-40">
        {/* Tip Box */}
         <div className="w-48 h-12 px-4 py-2 relative bg-white/0 rounded-[99px] shadow-[var(--button2-shadow)] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="w-56 h-24 left-[-38px] top-[-18px] absolute bg-white/0 backdrop-blur-[2px]" />
            <div className="w-28 h-5 text-center justify-start text-[var(--foreground)] text-lg font-normal font-['geist'] z-10">Tip box</div>
        </div>
        <div className="flex flex-col md:flex-row w-[90%] lg:w-full lg:h-[500px] p-10 relative bg-orange-300/60 rounded-[70px] 
        shadow-[var(--button2-shadow)] justify-center items-center gap-3 lg:gap-10 overflow-hidden backdrop-blur-[2px]">
            <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300 translate-y-7" />
                <div className="w-auto h-auto bg-rose-200 p-7 md:p-10 shadow-[3px_4px_3px_0px_rgba(0,0,0,0.25)] text-center justify-center text-black text-xl font-normal font-['geist'] leading-10">
                    한 시간 동안 공연? 쉽지 않다! 그냥 하지 말자
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300 translate-y-7" />
                <div className="w-auto h-auto p-7 md:p-10 bg-sky-200 shadow-[3px_4px_3px_0px_rgba(0,0,0,0.25)] text-center justify-center text-black text-xl font-normal font-['geist'] leading-10">
                    음악의 기쁨보다 음악의 힘듦을 먼저 발견 ^^
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className="w-5 h-5 bg-white rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-stone-300 translate-y-7" />
                <div className="w-auto h-auto p-7 md:p-10 bg-green-200 shadow-[3px_4px_3px_0px_rgba(0,0,0,0.25)] text-center justify-center text-black text-xl font-normal font-['geist'] leading-10">
                    하하 하하 하하 그래도 열심히 해보자
                </div>
            </div>
        </div>

    {/* Footer */} 
    <div className="flex flex-row w-screen h-15 bg-neutral-100 z-20 mt-10">
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full h-12 justify-center px-1 text-zinc-600 text-[9px] font-normal font-['geist'] leading-3">
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
</div>
  );
}
