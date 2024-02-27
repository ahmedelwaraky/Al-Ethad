import React from 'react'
import newsImg from '../src/Assests/news-img.png'
import SliderNews from './SliderNews.jsx'

export default function News() {
    return (
        <>
            <div className='container-fluid news-section d-flex  py-4 pb-5'>

                <div className='row flex-row-reverse container-fluid   d-flex   '>
                    <div className='title-news col-2 col-md-1 d-flex justify-content-end'>
                        <div className='right rounded d-flex align-items-center '>
                            <h2 className=" text-center">
                                اَخر <br />الأخبار
                            </h2>
                        </div>
                    </div>
                    <div className='slider-news col-12 col-md-11  d-flex align-items-center'>
                        <SliderNews />
                    </div>
                </div>

            </div>
        </>
    )
}
