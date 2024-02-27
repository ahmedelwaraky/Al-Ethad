import React from 'react'
import saudi from '../Assests/Logo-saudi-vision-2030-download-free-PNG.png'
import brands from '../Assests/╪¡╪│╪º╪¿╪º╪¬ ╪º┘ä╪¬┘ê╪º╪╡┘ä-01 1.png'
import './footer.css'
export default function Footer() {
    return <>
        <footer className='bg-green'>
            <div className="footer-section container mt-5  ">
                <div className="row flex-row-reverse row-cols-sm-1 row-cols-md-3 bg-hard rounded-5 move p-4">
                    <div>
                        <div className='p-5 mx-auto'><img src={saudi} className='w-100 footer-img' alt="saudi logo" /></div>
                        <p className='text-white text-center fs-13'>تابعنا علي حسابات التواصل الإجتماعي</p>
                        <div className='px-5 w-75 mx-auto'><img src={brands} className='w-100' alt="saudi logo" /></div>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-secondary fs-19'>معلومات التواصل</h4>
                        <div className='text-white d-flex mt-3 justify-content-end'>
                            <p className='me-2 text-center fs-13'>شارع التخصصي - المعذر الشمالي - الرياض 12712</p> <span><i className="fa-solid fa-location-dot "></i></span>
                        </div>
                        <div className='text-white d-flex mt-2 justify-content-end'>
                            <span><i className="fa-solid fa-phone"></i></span>
                        </div>
                        <div className='text-white d-flex mt-3 justify-content-end '>
                            <a className='footer-link me-2 text-white text-center '>mailto:susf-gs@moe.gov.sa</a><span><i className="fa-solid fa-envelope"></i></span>
                        </div>
                        <div className='text-white d-flex mt-3 justify-content-end'>
                            <a className='me-2 text-white text-center fs-13'> https://twitter.com/Susfchannel</a> <span><i className="fa-brands fa-twitter"></i></span>
                        </div>
                        <div className='text-white d-flex mt-3 justify-content-end'>
                            <a className='me-2 text-white text-center fs-13'>https://www.youtube.com/user/susfchannel</a><span><i className="fa-brands fa-youtube"></i></span>
                        </div>
                        <div className='text-white d-flex mt-3 justify-content-end '>
                            <a className='me-2 text-white text-center fs-13 '>https://www.instagram.com/susfchannel</a><span><i className="fa-brands fa-instagram"></i></span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h4 className='text-secondary fs-19'>روابط مفيدة</h4>
                        <div className='text-white'>
                            <p className='mt-3 fs-13'>وزارة التعليم</p>
                            <p className='mt-3 fs-13'>الاتحاد العربي للرياضة الجامعية</p>
                            <p className='mt-3 fs-13'>الاتحاد الدولي للرياضة الجامعية</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white copy text-center fs-3 pb-3   move'><span>جميع الحقوق محفوظة لـوزارة التعليم - التعليم العالي - المملكة العربية السعودية</span></div>
        </footer>

    </>
}
