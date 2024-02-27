import React from 'react'
import bag from '../src/Assests/bag.svg'
import tag from '../src/Assests/Link.png'
import handball from '../src/Assests/handboll.png'
import volly from '../src/Assests/vollyball.png'
import tennisT from '../src/Assests/tenies.png'
import tennis from '../src/Assests/tenies main.png'
import football from '../src/Assests/footballl.png'
import SliderChamp from './SliderChamp.jsx'



export default function NewChampions() {
    return (
        <>
            <div className='new-cham container-fluid  pt-5 pb-5'>
                <div className='row d-flex flex-row-reverse p-4'>
                    <div className='col-12 col-md-4 col-lg-3 '>
                        <div className='card-layer d-flex justify-content-center pt-2 pb-2'>
                            <div className='col-10 ms-1 col-md-9 '>
                                <div className='inner-services  title-box text-center h-100 px-3 pb-4 shadow rounded d-flex flex-column align-items-center justify-content-center  '>
                                    <img className=" mt-2 mb-2" src={tag} />
                                    <p>أحدث المسابقات</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-8 col-lg-9 row d-flex '>
                        <SliderChamp />

                    </div>
                </div>
            </div>
        </>
    )
}
