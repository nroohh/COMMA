<div className='flex h-screen w-[80vw] sm:w-[60vw] max-h-[80vh] md:w-[80vw] lg:w-[60vw] items-center justify-center flex-col'>
                        <div className='flex-col gap flex md:items-start md:justify-center md:flex-row'>
                            <div className="flex justify-start h-full items-center flex-col lg:w-[50vw] gap">
                                {/* <DataBox fit="fit">
                                    <img
                                        className="aspect-[4/3]  object-cover round"
                                        src={data?.cover.url}
                                    />
                                </DataBox>
                                <div className="h-[5vh] justify-center items-center flex w-full gap-5 flex-row">
                                    {data?.strands.map((strand) => {
                                        return (
                                            <div key={strand} className="flex items-center text-center justify-center h-[5vh] min-h-[50px] round w-full bubble">{strand.toUpperCase()}</div>
                                        );
                                    })}
                                </div>
                                <div className='hidden md:flex flex-grow w-full'>
                                    <DataBox fit="full">
                                        <div className="flex flex-col justify-center items-center p-5 gap">
                                            <div className="text-[var(--foreground)] fxsmall font-['geist'] leading-normal tracking-wide">
                                                L.O.
                                            </div>
                                            <div className="flex flex-row grid-cols-2 grid-rows-2 flex-wrap gap-3 justify-start overflow-y-scroll">
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
                                </div> */}
                            </div>
                            <DataBox fit="full">
                                <div className='flex justify-start items-center flex-col p-5 gap round scroll-hidden overflow-auto'>
                                    <div className="w-full h-full text-center text-[var(--foreground)] fmedium md:flarge font-bold font-['geist']">
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
                                    <div className="w-full flex flex-grow justify-center items-center text-[var(--foreground)] fxsmall font-['geist'] leading-7 md:leading-10">
                                        <div className="text-left flex flex-grow">
                                            {data?.description}
                                        </div>
                                    </div>
                                </div>
                            </DataBox>
                        </div>
                    </div>