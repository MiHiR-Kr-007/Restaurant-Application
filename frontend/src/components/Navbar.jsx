import React, {useState} from "react";
import {data} from "../restApi.json";
import {Link} from "react-scroll";
import {GiHamburgerMenu} from "react-icons/gi";

function Navbar() {
    const [show, setShow] = useState(false);
    return (
        <>
            <nav>
                <div className="logo">Name</div>
                <div className={show ? "navLinks showmenu" : "navLinks"}>
                    <div className="links">
                        {data[0].navbarLinks.map((element) => (
                            <Link
                               to={element.link}
                               spy={true}
                               smooth = {true}
                               duration = {true}
                               key = {element.id}
                            >
                                {element.title}
                            </Link>
                        ))}
                    </div>
                    <button className="menuBtn">Our Menu</button>
                </div>
                <div className="hamburger" onClick={()=>setShow(!show)}>
                    <GiHamburgerMenu/>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
