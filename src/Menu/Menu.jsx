import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, NavDropdown, Navbar, Row, Dropdown, Nav, NavItem } from 'react-bootstrap';
import './Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faConciergeBell, faChalkboardTeacher, faBuilding, faSun } from '@fortawesome/free-solid-svg-icons';
import home from '../../src/Assests/house-2.png'
import up from '../../src/Assests/status-up.png'
import ranking from '../../src/Assests/ranking.png'
import dots from '../../src/Assests/dots.png'
import cup from '../../src/Assests/cup.png'
import card from '../../src/Assests/personalcard.png'
import stracture from '../../src/Assests/stract.png'
import up2 from '../../src/Assests/cup-new.png'
import sms from '../../src/Assests/sms-tracking.png'
import cup2 from '../../src/Assests/cup-new.png'
import setting from '../../src/Assests/setting check.png'
import flags from '../../src/Assests/group flag.png'
import bag2 from '../../src/Assests/bag.png'
import news from '../../src/Assests/news.png'
import cut from '../../src/Assests/cut.png'
import videoplay from '../../src/Assests/video-play.png'
import gallery from '../../src/Assests/gallery.png'
import ads from '../../src/Assests/sms-tracking.png'
import printer from '../../src/Assests/printer.png'
import DropdownItem from 'react-bootstrap/esm/DropdownItem.js';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse.js';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle.js';


export default function Menu() {
    return (
        <div className="menu-section">
            <Navbar className='container-fluid d-flex justify-content-between  navbar-container '
                expand="lg" collapseOnSelect>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <div className='Navbar-inner pe-5 '>
                            <Nav>
                                <Nav.Link  >
                                    <div className='hover-green d-flex gap-1 align-items-center  '>
                                        <img className='py-1' src={home}></img>
                                        <a href='#'> الرئيسية</a>
                                    </div>
                                </Nav.Link>
                                <NavDropdown title={
                                    <div className='hover-green d-flex gap-1 align-items-center  '>
                                        <img className='py-1' src={up}></img>
                                        <a href='#'>الإتحاد الرياضي</a>
                                        <i class="fa-solid fa-caret-down"></i>
                                    </div>
                                }>
                                    <div className='d-flex justify-content-start'>

                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-1 align-items-center  '>
                                                <img className='py-1 ' src={card}></img>

                                                <a href='#'>  عن الإتحاد</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className=' d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1' src={card}></img>
                                                <a href='#'>  رئيس الإتحاد</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className=' d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1' src={stracture}></img>
                                                <a href='#'> الهيكل الإداري</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className=' d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1 px-0 ' src={card}></img>
                                                <a href='#' className=''>  اللوائح والقوانين</a>
                                            </div>
                                        </DropdownItem>


                                    </div>
                                </NavDropdown>

                                <Nav.Link  >
                                    <div className='hover-green d-flex gap-1 align-items-center  '>
                                        <img className='py-1' src={cup}></img>
                                        <a href='#'> المسابقات</a>
                                    </div>
                                </Nav.Link>

                                <NavDropdown title={
                                    <div className='hover-green d-flex gap-1 align-items-center  '>
                                        <img className='py-1' src={dots}></img>
                                        <a href='#'>الخدمات الإلكترونية </a>
                                        <i class="fa-solid fa-caret-down"></i>
                                    </div>
                                }>
                                    <div className='d-flex justify-content-start'>

                                        <DropdownItem >
                                            <div className='d-flex  gap-1 align-items-center  '>
                                                <img className='py-1 ' src={up2}></img>
                                                <a href='#'> بوابة المنتخبات والنتائج </a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex  gap-2 align-items-center  '>
                                                <img className='py-1' src={sms}></img>
                                                <a href='#'> البريد الإلكتروني</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex  gap-2 align-items-center  '>
                                                <img className='py-1' src={cup2}></img>
                                                <a href='#'> بوابة المسابقات</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex  gap-2 align-items-center  '>
                                                <img className='py-1 px-0 ' src={setting}></img>
                                                <a href='#' className=''>  بوابة الأهلية</a>
                                            </div>
                                        </DropdownItem>

                                        <DropdownItem >
                                            <div className='d-flex  gap-2 align-items-center  '>
                                                <img className='py-1 px-0 ' src={setting}></img>
                                                <a href='#' className=''>  نظام إدارة المهام</a>
                                            </div>
                                        </DropdownItem>

                                    </div>
                                </NavDropdown>

                                <NavDropdown title={
                                    <div className='hover-green d-flex gap-1 align-items-center  '>
                                        <img className='py-1' src={ranking}></img>
                                        <a href='#'>المركز الإعلامى</a>
                                        <i class="fa-solid fa-caret-down"></i>

                                    </div>
                                }>
                                    <div className='d-flex justify-content-start'>

                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-1 align-items-center  '>
                                                <img className='py-1 ' src={news}></img>

                                                <a href='#'>  الأخبار</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1' src={cut}></img>
                                                <a href='#'>  الفعاليات</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1' src={videoplay}></img>
                                                <a href='#'> الوسائط</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1 px-0 ' src={gallery}></img>
                                                <a href='#' className=''>  الإعلانات</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='pt-1 px-0 ' src={ads}></img>
                                                <a href='#' className=''>  الملف الإعلامى</a>
                                            </div>
                                        </DropdownItem>
                                        <DropdownItem >
                                            <div className='d-flex fw-bolder gap-2 align-items-center  '>
                                                <img className='py-1 px-0 ' src={printer}></img>
                                                <a href='#' className=''>  المطبوعات</a>
                                            </div>
                                        </DropdownItem>


                                    </div>
                                </NavDropdown>


                            </Nav>
                        </div>
                    </Nav>

                </Navbar.Collapse>


                <ul class="social-icons d-flex align-items-center mt-2 ps-5">
                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-play"></i></a></li>
                    <li><a href="#"><i class="fab fa-snapchat"></i></a></li>
                    <span className='language'> <a><i className=' fa fa-globe'></i> </a>English </span>
                </ul>
            </Navbar>


        </div>
    );
}
