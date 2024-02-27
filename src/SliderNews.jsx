import React, { useRef } from 'react'
import Slider from 'react-slick';
import newsImg from '../src/Assests/news-img.png'

export default function SliderNews() {


    const sliderRef = useRef(null)
    console.log(sliderRef.current);

    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
        <div className='container-fluid overflow-hidden ' style={{ margin: " 70px 0 " }}>
            <div className='container d-flex gap-3 pb-2'>
                <div className='prev bg-warning rounded news-slider-prev'
                    onClick={() => sliderRef.current.slickPrev()}
                >
                    <i class="fa-solid fa-chevron-left p-2 rounded text-light "></i>
                </div>
                <div className='next bg-warning rounded news-slider-next'
                    onClick={() => sliderRef.current.slickNext()}

                >
                    <i className="fa-solid fa-chevron-right p-2 text-light "></i>
                </div>
            </div>
            <div className='slider-news-2  '>
                <Slider ref={sliderRef}  {...settings}>
                    <div className='slider-news ms-2 col-12 col-md-10 d-flex align-items-center'>
                        <div className='slide row col-11 flex-row-reverse   '>
                            <div className='img-news  col-12 col-md-6  d-flex justify-content-start '>
                                <img src={newsImg}  ></img>
                            </div>
                            <div className='slider-text col-12 col-md-6 mt-5  d-flex flex-column justify-content-end'>
                                <div className='row bg-light text-end p-3  pt-4 pb-1 rounded d-flex flex-column justify-content-end'>
                                    <h4 className='font-weight-bold pb-2 text-bold fs-25  '>
                                        26 جامعة وكلية في بطولة ألعاب قوى
                                        الجامعات بجدة
                                    </h4>
                                    <p className=' text-dark fs-11 text-black' style={{ lineHeight: '35px' }}>
                                        الرياض 04 رجب 1443 هـ الموافق 05 فبراير 2022 م واسانطلقت أمس على ملعب ومضمار مدينة الملك عبدالله الرياضية بطولة ألعاب القوى، بتنظيم وإشراف من الاتحاد الرياضي للجامعات السعودية، وذلك ضمن روزنامة الموسم الثاني عشر للاتحاد بمشاركة 26 جامعة وكلية.وأكد رئيس الاتحاد الرياضي للجامعات السعودية الدكتور خالد المزيني أن البطولة تُعد الأكبر من حيث المشاركات، وقال: "تكتسب أهمية كبرى كوننا نهدف منها إلى خدمة الرياضة الجامعية ودعم رياضة الوطن"....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='slider-news  ms-2 col-12 col-md-10 d-flex align-items-center'>
                        <div className='slide row col-11  flex-row-reverse   '>
                            <div className='img-news  col-12 col-md-6  d-flex justify-content-start '>
                                <img src={newsImg}  ></img>
                            </div>
                            <div className='slider-text col-12  col-md-6 mt-5  d-flex flex-column justify-content-end'>
                                <div className='row bg-light text-end p-3  pt-4 pb-1 rounded d-flex flex-column justify-content-end'>
                                    <h4 className='font-weight-bold pb-2 fs-25 '>
                                        26 جامعة وكلية في بطولة ألعاب قوى
                                        الجامعات بجدة
                                    </h4>
                                    <p className=' text-dark fs-11' style={{ lineHeight: '35px' }}>
                                        الرياض 04 رجب 1443 هـ الموافق 05 فبراير 2022 م واسانطلقت أمس على ملعب ومضمار مدينة الملك عبدالله الرياضية بطولة ألعاب القوى، بتنظيم وإشراف من الاتحاد الرياضي للجامعات السعودية، وذلك ضمن روزنامة الموسم الثاني عشر للاتحاد بمشاركة 26 جامعة وكلية.وأكد رئيس الاتحاد الرياضي للجامعات السعودية الدكتور خالد المزيني أن البطولة تُعد الأكبر من حيث المشاركات، وقال: "تكتسب أهمية كبرى كوننا نهدف منها إلى خدمة الرياضة الجامعية ودعم رياضة الوطن"....
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}
