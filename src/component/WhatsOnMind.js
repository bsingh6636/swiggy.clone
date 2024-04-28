import React, { useState, useRef } from 'react';
import { imagelink } from './Const';
import { restrodata } from '../MockData/RestroApiData';

export const WhatsOnMind = () => {
    const whatonmind = restrodata.data.cards[0].card.card.imageGridCards.info;
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setScrollPosition(scrollPosition - 244); // Assuming each image is 144px wide
        }
    };

    const scrollRight = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setScrollPosition(scrollPosition + 244); // Assuming each image is 144px wide
        }
    };

    return (
        <>
            <div className='flex justify-between p-1'>
            {/* <div> */}
                <label className="pl-4 pb-1 pt-[16px] font-extrabold text-lg">What's on your mind?</label>
                <div className="flex items-center">
                    <span className='p-3 mx-1 bg-slate-300 rounded-3xl cursor-pointer' onClick={scrollRight}>&#8592;</span>
                    <span className='p-3 mx-1 bg-slate-300 rounded-3xl cursor-pointer' onClick={scrollLeft}>&#8594;</span>
                </div>
            </div>

            <div ref={scrollContainerRef} className="flex overflow-x-auto gap-x-4 p-2" style={{ scrollbarWidth: 'none', transform: `translateX(${scrollPosition}px)` }}>
              
             
                {
                    whatonmind.map((data, index) => {
                        return (
                            <img  alt="what's on mind" key={index} className='w-[144px] h-[180px]' src={`${imagelink}${data.imageId}`}></img>
                        )
                    })
                }
            </div>
        </>
    );
}
