import { useEffect, useState, useRef } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const navRef = useRef(null);
  const handleHamburger = () => {
    setShow(!show);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  let scrollActive = scroll ? "py-5 bg-slate-800 shadow" : "py-4";

  let menuActive = show ? "left-0" : "-left-full";
  return (
    <nav className={`navbar fixed w-full transition-all ${scrollActive}`}>
      <div className="container mx-auto px-4">
        <div className="navbar flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-3xl text-xl text-white font-bold">
              Wildan FE
            </h1>
          </div>
          <ul
          ref={navRef}
            className={`flex z-50 lg:gap-12 md:static md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:flex-row md:shadow-none md:p-0 md:m-0 md:transition-none gap-8 text-white md:text-lg text-sm fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-950 bg-green-500 transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-line text-2xl md:hidden block"></i>
              <a href="#home" className="font-medium md:hover:text-green-400">
                Home
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-user-line text-2xl md:hidden block"></i>
              <a href="#about" className="font-medium md:hover:text-green-400">
                About Me
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-tools-line text-2xl md:hidden block"></i>
              <a href="#skills" className="font-medium md:hover:text-green-400">
                Skills
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-computer-line text-2xl md:hidden block"></i>
              <a href="#project" className="font-medium md:hover:text-green-400">
                Project
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-contacts-line text-2xl md:hidden block"></i>
              <a href="#contact" className="font-medium md:hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
          <div className="button flex items-center gap-2">
            <a
              href="../assets/images/CV SAYA.pdf"
              download="CV SAYA.pdf"
              className=" text-white outline outline-green-400 rounded-full px-4 py-2 font-semibold  hover:bg-green-500 transition-all"
            >
              Download CV
            </a>
            <i
              className="ri-menu-line text-3xl text-white md:hidden block"
              onClick={handleHamburger}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
