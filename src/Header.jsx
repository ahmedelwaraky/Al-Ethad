import { useState } from 'react'
import logo from '../src/Assests/Logo.png'
import Minstary from '../src/Assests/Minstary.png'

export default function Header() {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <>
            <div className='topBar container-fuid overflow-hidden pt-2 px-3'>
                <div className='row'>
                    <div className='col-3 col-md-2 d-flex flex-row justify-content-end mt-1'>
                        <img src={Minstary} className='minst-logo' />
                    </div>
                    <div className='col-6  col-md-8 topbar-middle d-flex flex-row gap-3 align-items-end' >
                        <p> <a className='text-decoration-none h6' href=''>الدعم الفنى </a></p>
                        <p> <a className='text-decoration-none h6' href=''> الشروط والأحكام </a></p>
                    </div>
                    <div className='col-3 col-md-2  d-flex flex-row justify-content-start pe-5 '>
                        <img src={logo} className='logo-main' />
                    </div>
                </div>
            </div>
        </>
    )
}
