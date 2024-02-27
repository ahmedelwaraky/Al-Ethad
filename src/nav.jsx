import { useState } from 'react'
import home from '../src/Assests/house-2.png'
import up from '../src/Assests/status-up.png'
import ranking from '../src/Assests/ranking.png'
import dots from '../src/Assests/dots.png'
import cup from '../src/Assests/cup.png'

const TopNav = props => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <div class="navbar container navbar-expand-lg  navbar-light rounded">
            <ul class="social-icons d-flex align-items-center mt-2">
                <span className='language'>English <a><i className=' fa fa-globe'></i> </a></span>
                <li><a href="#"><i class="fab fa-snapchat"></i></a></li>
                <li><a href="#"><i class="fa-solid fa-play"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
            <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className={`${isNavCollapsed ? 'collapse justify-content-end ' : ''} navbar-collapse`} id="navbarsExample09">
                <div className=" justify-content-start" id="navbarNav">
                    <ul className="navbar-nav  flex-sm-column flex-column-reverse pt-2 align-items-end flex-xs-column flex-md-row w-100 ">
                        <li className="nav-item    bg-danger">
                            <a className="nav-link" href="#"><span className='m-1 menu-text '>  المركز الإعلامى  </span><img src={ranking}></img></a>
                        </li>
                        <li className="nav-item d-flex">
                            <a className="nav-link " href="#"><span className='m-1  menu-text'>الخدمات الإلكترونية </span><img src={dots}></img></a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"> <span className='m-1  menu-text'>المسابقات </span><img src={cup}></img></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><span className='m-1  menu-text'> الإتحاد الرياضي </span><img src={up}></img> </a>
                        </li>
                        <li className="nav-item active ">
                            <a className="nav-link" href="#"><span className='m-1  menu-text'>الرئيسية </span><img src={home}></img> <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div> </div>
        </div>
    );
}

export default TopNav;