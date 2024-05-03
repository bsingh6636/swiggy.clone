import React, {  useRef } from 'react';
import { imagelink } from './Const';
import { restrodata } from '../MockData/RestroApiData';

export const WhatsOnMind = () => {
    const whatonmind = restrodata.data.cards[0].card.card.imageGridCards.info;
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollLeft += 244; // Scroll left by 244px
        }
    };

    const scrollRight = () => {
        const container = scrollContainerRef.current;
        if (container) {
            container.scrollLeft -= 244; // Scroll right by 244px
        }
    };

    return (
        <>
            <div className='bg-white flex  justify-between p-1'>
                <label className="pl-4 pb-1 pt-[16px] font-extrabold text-lg">What's on your mind?</label>
                <div className="flex items-center">
                    <span className='p-3 mx-1 bg-slate-300 rounded-3xl cursor-pointer' onClick={scrollRight}>&#8592;</span>
                    <span className='p-3 mx-1 bg-slate-300 rounded-3xl cursor-pointer' onClick={scrollLeft}>&#8594;</span>
                </div>
            </div>

            <div ref={scrollContainerRef} className="bg-white  flex overflow-x-auto gap-x-4 p-2" style={{ scrollbarWidth: 'none' }}>
                {
                    whatonmind.map((data, index) => {
                        return (
                            <img alt="what's on mind" key={index} className='w-[144px] h-[180px]' src={`${imagelink}${data.imageId}`}></img>
                        )
                    })
                }
            </div>
        </>
    );
}
