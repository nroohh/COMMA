'use client'

import React, { useEffect, useState } from 'react';
import DataBox from '@/app/_components/dataBox';
import { useParams } from "next/navigation";
import Background from '@/app/_components/background';
import VideoEmbed from '@/app/_components/videoEmbed';
import StickyNote from '@/app/_components/stickyNote';

// export { YouTubeEmbed };

export default function Info() {
    const [data, setData] = useState<ExperienceType>();
    const params = useParams<{ id: string }>();
    const id = params.id;

    function Content() {
        return (
            <>
                <section className="snap-start flex justify-center items-center flex-col w-full h-screen">
                    <div className='w-[80vw] sm:w-[60vw] lg:flex-row h-[80vh] lg:h-[65vh] lg:w-[80vw] xl:w-[60vw] gap flex-col flex justify-center items-center'>
                        <div className='flex h-fit justify-start flex-col items-center gap lg:h-[65vh] lg:w-[25vw] xl:w-[20vw]'>
                            <DataBox fit="fit">
                                <img
                                    className="aspect-[4/3] object-cover round"
                                    src={data?.cover.url}
                                />
                            </DataBox>
                            <div className="h-fit justify-center items-center flex w-full gap-5 flex-row">
                                {data?.strands.map((strand) => {
                                    return (
                                        <div key={strand} className="flex items-center text-center justify-center h-[5vh] min-h-[50px] round w-full bubble">{strand.toUpperCase()}</div>
                                    );
                                })}
                            </div>
                            <div className='hidden lg:flex lg:flex-1 lg:w-[25vw] xl:w-[20vw] overflow-hidden'>
                                <DataBox fit="full">
                                    <div className="flex flex-col justify-center items-center p-5 gap overflow-hidden">
                                        <div className="flex flex-col flex-grow justify-start overflow-auto">
                                            {data?.los.map((lo) => {
                                                return (
                                                    <div key={lo} className="text-[var(--foreground)] fxsmall font-normal font-['geist'] leading-normal tracking-wide whitespace-nowrap">
                                                        {lo}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </DataBox>
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden lg:flex-1 w-[80vw] sm:w-[60vw] lg:h-[65vh] lg:w-[55vw] xl:w-[40vw]">
                            <DataBox fit="full">
                            <div className="flex flex-col h-full p-5 gap round overflow-hidden">
                                <div className="w-full text-center text-[var(--foreground)] fmedium lg:flarge font-bold font-['geist']">
                                {data?.title}
                                </div>
                                <div className="w-full text-center text-[var(--foreground)] fsmall font-normal font-['geist']">
                                {data?.dates.map(date =>
                                    (new Date(date)).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric"
                                    })
                                ).join('-')}
                                </div>
                                <div className="flex-1 w-full overflow-y-auto scroll-hidden text-[var(--foreground)] fxsmall font-['geist'] leading-7 lg:leading-10">
                                <div className="text-left">
                                    {data?.description}
                                </div>
                                </div>
                            </div>
                            </DataBox>
                        </div>
                    </div>
                </section>
                <section className="snap-start flex justify-center items-center flex-row w-full h-screen">
                    <div className='flex justify-center h-[80vh] w-[80vw] sm:w-[60vw] lg:w-[80vw] xl:w-[60vw] items-center flex-col lg:flex-row gap-5'>
                        {data?.evidence?.type === "image" ? (
                        <img src={data.evidence.url} alt="Evidence" className="w-[40vw] sm:w-[30vw] lg:w-[40vw] xl:w-[30vw] h-full object-cover rounded-4xl" />
                        ) : (
                        <VideoEmbed embedLink={data?.evidence.url as string} />
                        )}
                        <div className="flex flex-col flex-grow w-full items-center justify-center gap-5 h-full">
                            <div className="h-[5vh] min-h-[50px] justify-center w-full items-center flex bubble round">
                                Timeline
                            </div>
                            <div className='flex flex-grow w-full'>
                                <DataBox fit="full">
                                    <div className='flex-1 flex-col justify-start items-center gap-5 p-[2.5vw]'>
                                        <div className="flex flex-col gap-3 h-[30vh] md:h-full justify-start overflow-scroll scroll-hidden">
                                            {data?.timeline.map((event) => {
                                                return (
                                                    <div key={event} className="pb-1">
                                                        <div className="text-[var(--foreground)] text-lg font-normal font-['geist']"> {event} </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </DataBox>

                            </div>
                            
                        </div>
                    </div>
                </section>
                <section className="snap-start flex justify-center items-center flex-col w-full h-screen">
                    <div className='flex justify-center items-center flex-col max-h-[80vh] sm:w-[60vw] lg:w-[80vw] xl:w-[60vw] gap'>
                        <div className="h-[5vh] min-h-[50px] justify-center w-full items-center flex bubble round">
                            Tips
                        </div>
                        <div className="flex-1 p-5 gap  max-h-[80vh] sm:w-[60vw] lg:w-[80vw] xl:w-[60vw]  drop-shadow transition-[0.3] bg-orange-300/60 round justify-center items-center overflow-scroll scroll-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {data?.tips.map((tip, index) => (
                                <StickyNote key={index} text={tip as string} />
                            ))}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    useEffect(() => {
        fetch(`/api/query/${id}`)
            .then(res => res.json())
            .then(response => {
                if (response.error) {
                    console.error("Error fetching experiences:", response.error);
                } else {
                    setData(response);
                }
            });
    }, [id]);

    return (
        <div className="flex scrollContainer scroll-smooth justify-center items-start h-screen w-[100vw] overflow-y-scroll overflow-x-hidden snap-y snap-mandatory scroll-hidden">
            <Background />
            <div className="content self-start z-10 flex-col flex w-full">
                <Content />
            </div>
        </div>
    );
    }
