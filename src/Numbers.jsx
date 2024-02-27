import React from 'react'
import uni from '../src/Assests/031---University.png'
import comp from '../src/Assests/Group.png'
import intComp from '../src/Assests/Group (1).png'
import girl from '../src/Assests/soccer-player.png'
import boy from '../src/Assests/soccer-player (1).png'
import forecast from '../src/Assests/weather-forecast 1.png'


export default function Numbers() {
    return (
        <>
            <div className='number-container  my-5 py-4 container-fluid '>
                <div className='container '>
                    <div className='row d-flex flex-row justify-content-between flex-row-reverse'>
                        <div className='card-layer col-6 col-sm-4 col-lg-2 p-3'>
                            <div className='title-side  '>
                                <div className='text-light d-flex flex-column align-items-center'>
                                    <p><img src={forecast} className='mt-2 ' /></p>
                                    <p >الموسم</p>
                                    <h2>13</h2>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-lg-2  p-2'>
                            <div className='card h-100 '>
                                <div className='inner-content h-100 pt-1 text-light border rounded d-flex flex-column align-items-center m-1 bg-success'>
                                    <h2>65</h2>
                                    <p>الجامعات</p>
                                    <p><img src={uni} className='mt-2' /></p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-lg-2  p-2'>
                            <div className='card h-100'>
                                <div className='inner-content h-100 pt-1 text-light border rounded d-flex flex-column align-items-center m-1 bg-success'>
                                    <h2>42</h2>
                                    <p> المسابقات</p>
                                    <p><img src={comp} className='mt-2' /></p>
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-lg-2 p-2'>
                            <div className='card h-100'>
                                <div className='inner-content h-100 pt-1  text-light border rounded d-flex flex-column align-items-center m-1 bg-success'>
                                    <h2>3</h2>
                                    <p className='text-center'>المسابقات الدولية</p>
                                    <img src={intComp} className='mt-2 mb-2' />
                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6  col-sm-4 col-lg-2 p-2'>
                            <div className='card h-100'>
                                <div className='inner-content h-100  pt-1 text-light border rounded d-flex flex-column align-items-center m-1 bg-success'>
                                    <h2>5646</h2>
                                    <p  >الطلاب</p>
                                    <p><img src={boy} className='mt-2' /></p>

                                </div>
                            </div>
                        </div>
                        <div className='card-layer col-6 col-sm-4 col-lg-2 p-2'>
                            <div className='card h-100 '>
                                <div className='inner-content h-100 pt-1 text-light border rounded d-flex flex-column align-items-center m-1 bg-success'>
                                    <h2>3056</h2>
                                    <p  >الطالبات</p>
                                    <p><img src={girl} className='mt-2' /></p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
            {/* mm */}
        </>
    )
}

