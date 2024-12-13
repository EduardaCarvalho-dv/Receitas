import React from "react";
import headerStyle from './../header/header.module.css';
import {Swiper, SwiperSlide} from "swiper/react";

export default function header () {
    return (
        <>
        <div className={headerStyle.header_organizar}>
            <Swiper>
                <SwiperSlide>
                    <div className={headerStyle.Header_slide}> 
                       <div className={headerStyle.content}>
                        
                       </div>
                        </div>


                </SwiperSlide>
            </Swiper>

        </div>
        </>
    )
}