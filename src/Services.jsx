import React from 'react'
import bag from '../src/Assests/bag.svg'
import flag from '../src/Assests/flagsvg.svg'
import sms from '../src/Assests/sms-tracking.svg'
import setting from '../src/Assests/setting.svg'
import arrow from '../src/Assests/status-up.svg'
import bawbat from '../src/Assests/bawabat.svg'


export default function Services() {
    return (
        <>
            <div className='services-section mt-5  align-items-center  container-fluid d-flex    half-height'>
                <div className='container-fluid h-90 d-flex '>
                    <div className='row flex-column w-100 h-100 align-items-end flex-nowrap '>
                        <div className='right rounded align-self-end col-sm-4 col-md-4 h-100 d-flex align-items-center justify-content-end'>
                            <h2 className="w-50 text-center ">
                                الخدمات الإلكترونية
                            </h2>
                        </div>
                        <div className='left flex-wrap align-self-start shadow-lg rounded  col-10 pt-2 pb-2  d-flex flex-row-reverse justify-content-start'>

                            <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                                <div className='card h-100 '>
                                    <div className='inner-services text-center h-100 p-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center  '>
                                        <img className=" mt-4 mb-2" src={bag} />
                                        <p>نظام إدارة المهام</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                                <div className='card h-100 '>
                                    <div className='inner-services text-center h-100 p-3 pb-4 shadow  rounded d-flex flex-column align-items-center justify-content-center '>
                                        <img className=" mt-4 mb-2" src={flag} />
                                        <p> بوابة نشط</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                                <div className='card h-100 '>
                                    <div className='inner-services text-center h-100 p-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center  '>
                                        <img className=" mt-4 mb-2" src={sms} />
                                        <p>البريد الإلكتروني</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                                <div className='card h-100 '>
                                    <div className='inner-services text-center h-100 p-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center '>
                                        <img className=" mt-4 mb-2" src={setting} />
                                        <p>بوابة الأهلية</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                                <div className='card h-100 '>
                                    <div className='inner-services text-center h-100 p-3 pb-4  shadow rounded d-flex flex-column align-items-center  justify-content-center'>
                                        <img className=" mt-4 mb-2" src={arrow} />
                                        <p>بوابة المنتخابات والنتائج</p>
                                    </div>
                                </div>
                            </div>
                            <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                                <div className='card h-100 '>
                                    <div className='inner-services text-center h-100 p-3 pb-4  shadow rounded d-flex flex-column align-items-center  justify-content-center'>
                                        <img className=" mt-4 mb-2" src={bawbat} />
                                        <p>بوابة المسابقات</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile section */}
            <div className='services-section-responsive pb-5 d-flex flex-column align-items-center '>
                <div className='title-elm rounded col-11 d-flex align-items-center justify-content-center'>
                    <h2 className="w-50 text-center ">
                        الخدمات الإلكترونية
                    </h2>
                </div>
                <div className='services-elm col-11  align-items-center '>
                    <div className='flex-wrap align-self-start shadow-lg   rounded  pt-2 pb-2  d-flex flex-row-reverse justify-content-start'>
                        <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-services text-center h-100 p-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center  '>
                                    <img className=" mt-4 mb-2" src={bag} />
                                    <p>نظام إدارة المهام</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-services text-center h-100 p-3 pb-4 shadow  rounded d-flex flex-column align-items-center justify-content-center '>
                                    <img className=" mt-4 mb-2" src={flag} />
                                    <p> بوابة نشط</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-services text-center h-100 p-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center  '>
                                    <img className=" mt-4 mb-2" src={sms} />
                                    <p>البريد الإلكتروني</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-services text-center h-100 p-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center '>
                                    <img className=" mt-4 mb-2" src={setting} />
                                    <p>بوابة الأهلية</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-services text-center h-100 p-3 pb-4  shadow rounded d-flex flex-column align-items-center  justify-content-center'>
                                    <img className=" mt-4 mb-2" src={arrow} />
                                    <p>بوابة المنتخابات والنتائج</p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-md-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-services text-center h-100 p-3 pb-4  shadow rounded d-flex flex-column align-items-center  justify-content-center'>
                                    <img className=" mt-4 mb-2" src={bawbat} />
                                    <p>بوابة المسابقات</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
