import React from 'react'
import first from '../Assests/L-cairo-1.ashx (1).png'
import second from '../Assests/L-cairo-1.ashx.png'
import third from '../Assests/div.featuredlist__img.png'
import fourth from '../Assests/FF4Gg0eWYAkXub- 1.png'
import frame from '../Assests/Frame 2087324883.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Events.css'

export default function Events() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return <>
        <section className='pb-1 mb-1 events-section'>
            <div className="container-fluid">
                <h2 className='green text-end pe-5 mt-0 mb-3 '> <span> المركز الإعلامى </span></h2>
                <div className="row ">
                    <div className='left col-sm-12 col-lg-5 col-xl-4'>
                        <div className='row item-1 d-flex flex-column lightbg p-2 my-2 mx-1 rounded-3'>
                            <div className='head-1 d-flex justify-content-between  align-items-center'>
                                <button className='btn rounded-pill  bg-green text-light  px-2 text-center mx-2 d-flex justify-content-center align-items-center'>
                                    <p className='m-0 pb-1 ' style={{ fontSize: '15px' }}> <span>جميع</span> <span className='  '>  المطبوعات</span></p>
                                </button>
                                <div className='fs-5 green  m-2     d-flex justify-content-center align-items-center'>
                                    <p className='m-0 pb-1 event-title text-black '>المطبوعات</p>
                                </div>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div className='col-sm-12 bg-wite py-2 rounded-3 container-fluid'>

                                        <div>
                                            <div className='col-12 pb-2 '>
                                                <Slider {...settings}>
                                                    <div className=' justify-content-center align-items-center'>
                                                        <img src={frame} className='w-100' alt="slider  image" />
                                                    </div>
                                                    <div className=' justify-content-center align-items-center'>
                                                        <img src={frame} className='w-100' alt="slider  image" />
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row  item-2  row lightbg px-3 pb-1 my-2  mx-1 rounded-3'>
                            <div className='head-2  col-sm-12  fs-5 my-2 d-flex justify-content-end green     '>
                                <p className='m-0 pb-1 mt-2 event-title green' >استبانات ونماذج</p>
                            </div>
                            <div className='col-sm-12 bg-white  rounded-3 my-2'>
                                <div>
                                    <div className='d-flex justify-content-end align-items-end py-3'>
                                        <span className='text-end text-black  '>التسجيل بورشة عمل التطوع 11-12 يناير 2023</span>
                                    </div>
                                    <div className='line mx-auto rounded-3'></div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end  align-items-center py-3'>
                                        <span className='  text-end text-black'> آداء الجامعات في النشاط البدني والرياضي 11-12 يناير 2023</span>
                                    </div>
                                    <div className='line mx-auto rounded-3'></div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end align-items-center py-3'>
                                        <span className='  text-end text-black'>التسجيل بورشة عمل إدارة الأنشطة الرياضية 17-18 يناير 2023</span>
                                    </div>
                                    <div className='line mx-auto rounded-3'></div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end align-items-center py-3'>
                                        <span className='  text-end text-black'>التسجيل بورشة عمل التطوع 11-12 يناير 2023</span>
                                    </div>
                                    <div className='line mx-auto rounded-3'></div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end align-items-center py-3'>
                                        <span className='  text-end text-black'>التسجيل بورشة عمل النشاط البدني 1-2 فبراير 2023</span>
                                    </div>
                                    <div className='line mx-auto rounded-3'></div>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-end align-items-center py-3'>
                                        <span className='  text-end text-black'>التسجيل بورشة عمل الحرم الجامعي الصحي 8-9 فبراير 2023</span>
                                    </div>
                                    <div className='line mx-auto rounded-3'></div>
                                </div>
                                <div className='mb-1 pb-2'>
                                    <div className='d-flex justify-content-end align-items-center py-3'>
                                        <span className='  text-end text-black'>التسجيل بورشة عمل الحرم الجامعي الصحي 8-9 فبراير 2023</span>
                                    </div>
                                    <div className='line  mx-auto rounded-3'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='right col-sm-12 col-lg-7 col-xl-8'>
                        <div className='right-top lightbg p-3 m-3 rounded-3'>
                            <div className='head-1 d-flex justify-content-between  align-items-center'>
                                <button className='btn rounded-pill  bg-green text-light  px-4 text-center mx-2 d-flex justify-content-center align-items-center'>
                                    <p className='m-0 pb-1 ' style={{ fontSize: '15px' }}> <span>جميع</span> <span className='fw-bolder'>  الفعاليات</span></p>
                                </button>
                                <div className='fs-5 green  m-2  d-flex justify-content-center align-items-center'>
                                    <p className='m-0 pb-1 event-title green ' style={{ fontSize: '50px !important' }}> الفعاليات</p>
                                </div>
                            </div>

                            <Slider {...settings} slidesToShow={3} slidesToScroll={1} >

                                <div className='p-2'>
                                    <div className='rounded-3 overflow-hidden '>
                                        <img src={first} className='w-100' alt="first image" />
                                    </div>
                                    <div className='right-top-slide mt-3'>
                                        <h6 className='green text-end fs-9'> تدشين مسابقات الموسم الثاني عشر </h6>
                                        <p className='text-black fs-9 text-end '>30 سبتمبر, 2021 - 08:07 م</p>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='rounded-3 overflow-hidden'>
                                        <img src={third} className='w-100' alt="second image" />
                                    </div>
                                    <div className='right-top-slide mt-3'>
                                        <h6 className='green text-end fs-9'> انطلاق مبادرة نشط </h6>
                                        <p className='text-black fs-9 text-end '>30 سبتمبر, 2021 - 08:07 م</p>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <div className='rounded-3 overflow-hidden'>
                                        <img src={second} className='w-100' alt="third image" />
                                    </div>
                                    <div className='right-top-slide mt-3'>
                                        <h6 className='green text-end fs-9'> تدشين مسابقات الموسم الثاني عشر </h6>
                                        <p className='text-black fs-9 text-end '>30 سبتمبر, 2021 - 08:07 م</p>
                                    </div>

                                </div>
                                <div className='p-2'>
                                    <div className='rounded-3 overflow-hidden'>
                                        <img src={second} className='w-100' alt="third image" />
                                    </div>
                                    <div className='right-top-slide mt-3'>
                                        <h6 className='green text-end fs-9'> تدشين مسابقات الموسم الثاني عشر </h6>
                                        <p className='text-black fs-9 text-end '>30 سبتمبر, 2021 - 08:07 م</p>
                                    </div>

                                </div>

                            </Slider>

                        </div>
                        <div className='lightbg ads-section p-3 m-3 rounded-3 '>
                            <div className='head-3 d-flex justify-content-between  align-items-center'>
                                <button className='btn rounded-pill  bg-green text-light  px-4 text-center mx-2 d-flex justify-content-center align-items-center'>
                                    <p className='m-0 pb-1 ' style={{ fontSize: '15px' }}> <span>جميع</span> <span className='fw-bolder'> الإعلانات</span></p>
                                </button>
                                <div className='fs-5 green  m-2  d-flex justify-content-center align-items-center'>
                                    <p className='m-0 pb-1 event-title green'>الإعلانات</p>
                                </div>
                            </div>
                            <div className='container pt-2'>
                                <div className="row">
                                    <div className='col-sm-12 bg-white     rounded-3'>
                                        <div className='col-sm-12 green '>
                                            <p className='green text-end mt-2 fs-14'>#يوم_التطوع_السعودي_والعالمي</p>
                                        </div>
                                        <div className='col-sm-12'>
                                            <div className='py-1 grborder'>
                                                <Slider {...settings}>
                                                    <div className='d-flex w-50 mx-auto justify-content-center align-items-center'>
                                                        <img src={fourth} className='w-100' alt="slider image" />
                                                    </div>
                                                    <div className='d-flex w-50 mx-auto justify-content-center align-items-center'>
                                                        <img src={fourth} className='w-100' alt="slider image" />
                                                    </div>
                                                </Slider>
                                            </div>
                                            <div className='translate-middle-y w-100 me-auto ms-2'>
                                                <button className='btn rounded-bill  bg-green text-light  px-4 text-center mx-2 d-flex justify-content-center align-items-center'>
                                                    <p className='m-0 pb-1 ' style={{ fontSize: '15px' }}>30 سبتمبر, 2021 - 08:07 م</p>
                                                </button>
                                            </div>
                                            <div className='fs-5  bg-green text-light  d-flex justify-content-center align-items-center'>
                                                <div> <span className=' fs-6'> </span></div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
        <hr />

    </>
}
