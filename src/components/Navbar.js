import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar () {
  return (
    <div className="container-fluid overflow-hidden" >
    <div className="row vh-100 overflow-auto">
        <div className="col-12 col-sm-3 col-xl-2 px-sm-2 px-0 bg-dark d-flex sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                <a href="" className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5">B<span className="d-none d-sm-inline">rand</span></span>
                </a>
                <ul class="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                    <NavLink to="/">
                    <li class="nav-item">
                        <a href="#" className="nav-link px-sm-0 px-2">
                        <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span></a>
                    </li>
                    </NavLink>
                    <NavLink to="/about">
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-sm-0 px-2">
                        <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">About Me</span> </a>
                    </li>
                    </NavLink>
                   <NavLink to="/project">
                   <li>
                        <a href="#" className="nav-link px-sm-0 px-2">
                        <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Projects</span></a>
                    </li>
                   </NavLink>
                    <li>
                        <a href="#" className="nav-link px-sm-0 px-2">
                        <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Resume</span></a>
                    </li>
                   <NavLink to="/contact">
                   <li>
                        <a href="#" className="nav-link px-sm-0 px-2">
                        <i class="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Contact</span></a>
                    </li>
                   </NavLink>
                </ul>
            </div>
        </div>
        <div className="col d-flex flex-column h-sm-100">
            <main className="row overflow-auto">
                <div className="col pt-4">
                    <h3>Vertical Sidebar that switches to Horizontal Navbar</h3>
                    <p className="lead">An example multi-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single menu is be open at a time.</p>
                    <hr />
                    <h3>More content...</h3>
                    <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                    <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
                </div>
            </main>
           
        </div>
        </div>
    </div>
  )
};

export default Navbar;