import React from 'react'
import home from '../Assests/home-trend-up.png'
import home2 from '../Assests/Vector.png'
import jul from '../Assests/6 Jul.png'
import boy from '../Assests/Path 4357.png'
import girl from '../Assests/Path 4352.png'
import school1 from '../Assests/logo (2) 1.png'
import school2 from '../Assests/KSU_ShieldLogo_Colour_RGB 1.png'
import './Main.css'

export default function Main() {
    return (
        <>

            <section className='main-section mb-5 pb-5 bg-green container-fluid  overflow-hidden'>
                <div className="container-fluid">
                    <div className="row m-0 p-0">
                        {/* this is the left fu  side */}
                        <div className="left-side  col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-between  mt-5">
                            <div className='row w-100 bg-white triangle d-flex justify-content-between shadow'>
                                <div className='col-10  shadow '>
                                    <div className='title text-end green pt-3'>
                                        <span className=' fs-3 '>مؤشر الرياضة الجامعية</span>
                                    </div>
                                    <div className='line-chart-container rounded bg-white move2   mt-4 p-3 shadow'>
                                        <div>
                                            <div className='fs-6 mt-2 '><span >جامعة الإمام عبدالرحمن بن فيصل</span></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className=" ratt  overflow-hidden">
                                                    <div className="radd1 position-relative">
                                                        <div className='bg-warning  position-absolute '></div>
                                                    </div>
                                                </div>
                                                <div className=' border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>12,130</span>
                                                </div>
                                            </div>
                                            <div className='line2 mx-auto my-2 rounded-3'></div>
                                        </div>
                                        <div>
                                            <div className=' fs-6 mt-2 '><span className='text-start m-0'>جامعة الملك سعود</span ></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className=" ratt2 overflow-hidden">
                                                    <div className="radd2 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>11,040</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='chart-item  fs-6 text-start mt-2'><span> جامعة الملك عبدالعزيز</span ></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className="ratt3 overflow-hidden">
                                                    <div className="radd3 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>10,475</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='chart-item  fs-6  text-start mt-2 '><span> جامعة القصيم</span></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className="ratt4 overflow-hidden">
                                                    <div className="radd4 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>10,420</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='chart-item  fs-6  text-start mt-2'><span>  جامعة الملك فهد للبترول والمعادن</span></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className="ratt5 overflow-hidden">
                                                    <div className="radd5 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>9,810</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='chart-item  fs-6 text-start  mt-2'><span> جامعة الباحة</span></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className="ratt6 overflow-hidden">
                                                    <div className="radd6 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>9,810</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='chart-item  fs-6 text-start mt-2'><span > جامعة جازان </span></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className="ratt7 overflow-hidden">
                                                    <div className="radd7 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>9,810</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='chart-item  fs-6  me-5 mt-2'><span> جامعة طيبة </span></div>
                                            <div className='d-flex  justify-content-between'>
                                                <div className=" ratt8 overflow-hidden">
                                                    <div className="radd8 position-relative">
                                                        <div className='long2 mx-1 position-absolute top-100'></div>
                                                    </div>
                                                </div>
                                                <div className='border border-1 border-grey p-2 rounded-1'>
                                                    <span className='text-black'>9,810</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='buttons d-flex justify-content-around'>
                                        <div className='d-flex flex-row-reverse justify-content-around pb-3 pt-4  '>
                                            <div className='d-flex'>
                                                <button className='m-2 btn btn-light d-flex'>طالبات <span><img className='boy-img' src={girl}></img></span></button>
                                                <button className='m-2 bg-green btn btn-success d-flex'>  طلاب <img className='filter-white boy-img' src={boy}></img> </button>
                                            </div>
                                            <div className='text-white text-end fs-6 pt-3 '><i class="fa-solid fa-arrow-down"></i><span > تفاصيل المؤشر </span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className='points col-2 bg-green    '>
                                    <div className='content  w-80 bg-green d-flex text-center flex-column align-items-center'>
                                        <img className='home-icon w-80' src={home} alt="home" />
                                        <p className='text-white text-center fw-bolder'>نقــــاط</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="right-side  col-12 col-md-12 col-lg-6 col-xl-6 d-flex justify-content-between   mt-5">
                            <div className='row  w-100 bg-white h-100 triangle2 d-flex justify-content-start shadow'>

                                <div className='col-2 bg-green'>
                                    <div className='title bg-green pt-3 h-100'>
                                        <img className='w-80' src={home2} alt="home h-100" />
                                    </div>
                                </div>

                                <div className='col-10  '>
                                    <div className='pe-2 pt-3 text-end'>
                                        <span className=' fs-3 green'>أحدث الأنشطة الرياضية</span>
                                    </div>

                                    <div className='goals-container bg-light move3  rounded bg-white mt-4 p-3 shadow'>
                                        {/* match*/}
                                        <div className="container  my-2">
                                            <div className="row p-1  rounded-3 bg-gray">
                                                <div className="col-sm-12">
                                                    <div className="row d-flex flex-row-reverse bg-white p-1 rounded-3">
                                                        <div className='col-5 fs-8 py-1 bg-green rounded-3 d-flex justify-content-between align-items-center text-white text-end '>
                                                            <span>جامعة الملك سعود</span> <span><img className='ps-2' src={school1} alt="" /></span></div>
                                                        <div className='col-2 fw-bolder text-center fs-6'><span>VS</span></div>
                                                        <div className='col-5 fs-8 py-1 bg-yellow rounded-3 d-flex justify-content-between align-items-center text-white text-end'>
                                                            <span>جامعة الإمام محمد بن سعود الإسلامية</span> <span><img className='ps-1' src={school2} alt="" /></span></div>
                                                    </div>
                                                    <div className="row mt-1 d-flex justify-content-center gap-1 ">
                                                        <div className="col-2   "><p className='fs-7'  >6<br /> أبريل <span>  </span> </p></div>
                                                        <div className="col-2 "><img className=' boy-img' src={boy} alt="" /></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>3</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>:</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>2</span></div>
                                                        <div className="col-3 text-end  "><span >كره القدم</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* match*/}
                                        {/* match*/}
                                        <div className="container my-2">
                                            <div className="row p-1  rounded-3 bg-gray">
                                                <div className="col-sm-12">
                                                    <div className="row d-flex flex-row-reverse  bg-white p-1 rounded-3">
                                                        <div className='col-5 fs-8 py-1 bg-green rounded-3 d-flex justify-content-between align-items-center text-white text-end '>
                                                            <span>جامعة الملك سعود</span> <span><img className='ps-2' src={school1} alt="" /></span></div>
                                                        <div className='col-2 fw-bolder text-center fs-6'><span>VS</span></div>
                                                        <div className='col-5 fs-8 py-1 bg-yellow rounded-3 d-flex justify-content-between align-items-center text-white text-end'>
                                                            <span>جامعة الإمام محمد بن سعود الإسلامية</span> <span><img className='ps-1' src={school2} alt="" /></span></div>
                                                    </div>
                                                    <div className="row mt-1 d-flex justify-content-center gap-1 ">
                                                        <div className="col-2   "><p className='fs-7'  >6<br /> أبريل <span>  </span> </p></div>
                                                        <div className="col-2 "><img className=' boy-img' src={boy} alt="" /></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>3</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>:</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>2</span></div>
                                                        <div className="col-3 text-end  "><span >كره القدم</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* match*/}
                                        {/* match*/}
                                        <div className="container my-2">
                                            <div className="row p-1  rounded-3 bg-gray">
                                                <div className="col-sm-12">
                                                    <div className="row bg-white d-flex flex-row-reverse p-1 rounded-3">
                                                        <div className='col-5 fs-8 py-1 bg-green rounded-3 d-flex justify-content-between align-items-center text-white text-end '>
                                                            <span>جامعة الملك سعود</span> <span><img className='ps-2' src={school1} alt="" /></span></div>
                                                        <div className='col-2 fw-bolder text-center fs-6'><span>VS</span></div>
                                                        <div className='col-5 fs-8 py-1 bg-yellow rounded-3 d-flex justify-content-between align-items-center text-white text-end'>
                                                            <span>جامعة الإمام محمد بن سعود الإسلامية</span> <span><img className='ps-1' src={school2} alt="" /></span></div>
                                                    </div>
                                                    <div className="row mt-1 d-flex justify-content-center gap-1 ">
                                                        <div className="col-2   "><p className='fs-7'  >6<br /> أبريل <span>  </span> </p></div>
                                                        <div className="col-2 "><img className=' boy-img' src={boy} alt="" /></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>3</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>:</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>2</span></div>
                                                        <div className="col-3 text-end  "><span >كره القدم</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* match*/}
                                        {/* match*/}
                                        <div className="container my-2">
                                            <div className="row p-1  rounded-3 bg-gray">
                                                <div className="col-sm-12">
                                                    <div className="row d-flex flex-row-reverse  bg-white p-1 rounded-3">
                                                        <div className='col-5 fs-8 py-1 bg-green rounded-3 d-flex justify-content-between align-items-center text-white text-end '>
                                                            <span>جامعة الملك سعود</span> <span><img className='ps-2' src={school1} alt="" /></span></div>
                                                        <div className='col-2 fw-bolder text-center fs-6'><span>VS</span></div>
                                                        <div className='col-5 fs-8 py-1 bg-yellow rounded-3 d-flex justify-content-between align-items-center text-white text-end'>
                                                            <span>جامعة الإمام محمد بن سعود الإسلامية</span> <span><img className='ps-1' src={school2} alt="" /></span></div>
                                                    </div>
                                                    <div className="row mt-1 d-flex justify-content-center gap-1 ">
                                                        <div className="col-2   "><p className='fs-7'  >6<br /> أبريل <span>  </span> </p></div>
                                                        <div className="col-2 "><img className=' boy-img' src={boy} alt="" /></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>3</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>:</span></div>
                                                        <div className="col-1 text-center"><span className='fw-bolder fs-5'>2</span></div>
                                                        <div className="col-3 text-end  "><span >كره القدم</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* match*/}

                                    </div>

                                    <div className=' d-flex justify-content-end pb-3 pt-4   '>
                                        <div className='d-flex'>
                                            <button className='m-1 btn btn-light d-flex'>طالبات <span><img className='boy-img' src={girl}></img></span></button>
                                            <button className='m-1 bg-green btn btn-success d-flex'>  طلاب <img className='filter-white boy-img' src={boy}></img> </button>
                                        </div>
                                        <div className='text-white text-end fs-7 pt-3'><i class="fa-solid fa-arrow-down"></i> <span>جميع المسابقات و النتائج </span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </>
    )
}
