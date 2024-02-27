import React from 'react'
import Slider from 'react-slick';
import handball from '../src/Assests/handboll.png'
import volly from '../src/Assests/vollyball.png'
import tennisT from '../src/Assests/tenies.png'
import tennis from '../src/Assests/tenies main.png'
import football from '../src/Assests/footballl.png'

export default function SliderChamp() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='container slider-champ'>
                <Slider {...settings}>
                    <div className='col-12 ms-2 row d-flex justify-content-center'>
                        <div className='card-layer col-11 p-2'>
                            <div className='new-cham card  '>
                                <div className='inner-services text-center h-100  pb-5 shadow  d-flex flex-column align-items-center justify-content-center  '>
                                    <img className="  mb-2" src={football} />
                                    <p className='mb-2 mt-2'> كرة القدم</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 ms-2 row d-flex justify-content-center'>
                        <div className='card-layer col-11 p-2'>
                            <div className='new-cham card  '>
                                <div className='inner-services text-center h-100  pb-5 shadow d-flex flex-column align-items-center justify-content-center  '>
                                    <img className="  mb-2" src={tennis} />
                                    <p className='mb-2 mt-2'> تنس</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 ms-2 row d-flex justify-content-center'>
                        <div className='card-layer col-11 p-2'>
                            <div className='new-cham card  '>
                                <div className='inner-services text-center h-100  pb-5 shadow  d-flex flex-column align-items-center justify-content-center  '>
                                    <img className="  mb-2" src={tennisT} />
                                    <p className='mb-2 mt-2'> تنس طاولة </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 ms-2 row d-flex justify-content-center'>
                        <div className='card-layer col-11 p-2'>
                            <div className='new-cham card  '>
                                <div className='inner-services text-center h-100  pb-5 shadow  d-flex flex-column align-items-center justify-content-center  '>
                                    <img className="  mb-2" src={volly} />
                                    <p className='mb-2 mt-2'> الكرة الطائرة  </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 ms-2 ml-2 row d-flex justify-content-center'>
                        <div className='card-layer col-11 p-2'>
                            <div className='new-cham card  '>
                                <div className='inner-services text-center h-100  pb-5 shadow  d-flex flex-column align-items-center justify-content-center  '>
                                    <img className="  mb-2" src={handball} />
                                    <p className='mb-2 mt-2'>  كرة اليد</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    )
}
