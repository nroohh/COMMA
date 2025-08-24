import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SearchBar from "./_components/searchBar";
import Footer from "./_components/footer";
import CardList from "./_components/cardList";
import Background from "./_components/background";
import { Suspense } from "react";


function Content() {
  return (
    <>
      <section id="home" className="relative flex-col snap-start h-screen w-screen flex items-center justify-center gap-10">
        <div className="text-center text-[var(--foreground)] fhuge font-['Bad_Script'] text-shadow leading-none">
          Our sweet <br />
          comma,
        </div>
        <div className="bubble rounded-full w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw]">
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
        
      </section>
      <section id="cas" className="relative snap-start h-screen w-screen flex justify-center items-center">
        <Suspense>
          <CardList />
        </Suspense>
      </section>
      <section id="about" className="relative snap-start h-screen w-full flex items-center justify-center">
        <div className="flex flex-col text-center w-[80%] items-center justify-center overflow-hidden gap-5">
          <div className="text-[var(--foreground)] leading-[2]">
            <h1 className="font-sans text-[6vw] lg:text-[4vw]">
              나의 성장, 우리의 이야기
            </h1>
            <h1 className="font-['Bad_Script'] text-[12vw] lg:text-[8vw]">
              CAS Portfolio
            </h1>
          </div>
          <p className="flex flex-row items-center justify-center text-[var(--foreground)] text-[3vw] lg:text-[2vw] font-sans tracking-wider">
            김민솔, 김시우, 임예원
          </p>
        </div>
      </section>
      <section className="relative snap-start h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col justify-center items-center lg:items-start text-sm lg:text-lg xl:text-xl 2xl:text-2xl text-left h-[60%] whitespace-pre-line">
          <p className="text-center flex-grow-[1]">이곳은 Creativity, Activity, Service,</p>
          <p className="text-center flex-grow-[1]">세 가지 활동 속에서 IB 학생들이 배우고, 느끼고,</p>
          <p className="text-center flex-grow-[1]">성장한 과정을 기록한 공간입니다.</p>
          <p className="text-center flex-grow-[1]">단순한 활동을 넘어, 내가 세상과 연결되고,</p>
          <p className="text-center flex-grow-[1]">공동체에 기여하며, 스스로의 한계를 넘어선 발자취를 남깁니다.</p>
          <p className="text-center flex-grow-[2]"></p>
          <p className="text-center flex-grow-[1]">사진 한 장, 기록 한 줄,</p>
          <p className="text-center flex-grow-[1]">작은 아이디어 하나까지.</p>
          <p className="text-center flex-grow-[1]">이 모든 것이 나의 여정이자 이야기입니다.</p>
          <p className="text-center flex-grow-[2]"></p>
          <p className="text-center flex-grow-[1]">시간이 흘러도 사라지지 않을</p>
          <p className="text-center flex-grow-[1]">나의 소중한 경험과 추억들을</p>
          <p className="text-center flex-grow-[1]">모두서 이곳에서 확인해보세요.</p>
        </div>
        <div className="h-[60%] hidden lg:block">
          <img className="object-cover rounded-4xl h-full aspect-[5/8]" src="https://static.wixstatic.com/media/b7782b_d7fd195111d942b393c2196d2e6decc3~mv2.jpg/v1/fill/w_640,h_314,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b7782b_d7fd195111d942b393c2196d2e6decc3~mv2.jpg" alt="cover" />
        </div>
      </section>
      <div className="snap-end flex items-center justify-center">
        <Footer />
      </div>
    </>
  )
}

export default function Home() {
  return (
    <div className="flex scrollContainer scroll-smooth justify-center items-start h-screen w-[100vw] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <Background />
      <div className="content self-start w-full">
        <Content />
      </div>
    </div>
  );
}