import { useEffect, useRef } from "react";
import heroImage from "../assets/images/hero-removebg-preview.png";
import Swal from 'sweetalert2';
import aboutImage from "../assets/images/me1.jpeg";
import ciImage from "../assets/images/ci-bg.png";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import Typed from "typed.js";
const HomePage = () => {
  const typedElement = useRef(null);
  const handleForm = () => {
    Swal.fire({
      title: "Gagal",
      text: "Form belum berfungsi",
      icon: "warning"
    });
  }

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Students", "Web Developer"],
      typeSpeed: 300,
      backSpeed: 200,
      backDelay: 1000,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });

  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div
          className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32"
        >
          <div className="box">
            <h3
              className="text-md font-semibold text-green-500
                    "
            >
              Hello, i'am there
            </h3>
            <h1 className="lg:text-6xl/tight  text-3xl font-bold  text-white">
              Wildan Ferdiansyah
            </h1>
            <h4 className="text-2xl text-white font-semibold mb-6">
              I am a{" "}
              <span className="typed text-green-500" ref={typedElement}></span>
            </h4>
            <p className="text-gray-100 text-base mb-7">
              I am a Student at University STMIK Widya Pratama Pekalongan. I
              take the major in Information System. I dont scared about tech
              winter and i keep learning following the latest technologies.
            </p>

            <div className="mt-8 flex gap-3 items-center">
              <a
                href="mailto:ferdiansyahwildan2@gmail.com"
                className="bg-green-500 hover:bg-green-600 transition-all py-3 px-8 text-white shadow rounded-sm"
              >
                Hire Me
              </a>
              <a
                href="https://www.instagram.com/wildan14ferdi?igsh=bnJncnhmY3I2bHBx"
                target="_blank"
              >
                <i className="ri-instagram-line text-red-500 text-3xl"></i>
              </a>
              <a
                href="https://www.facebook.com/wildan.ferdiansyah.5492?mibextid=rS40aB7S9Ucbxw6v"
                target="blank"
              >
                <i className="ri-facebook-fill text-blue-600 text-3xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-wildan-ferdiansyah-b267a0274/
                          "
                target="_blank"
              >
                <i className="ri-linkedin-fill text-blue-500 text-3xl"></i>
              </a>
            </div>
          </div>
          <div className="box ">
            <img
              src={heroImage}
              alt=""
              className="md:w-full w-[350px] mx-auto md:m-0"
            />
          </div>
        </div>
        <div className="about grid md:grid-cols-2 grid-cols-1 gap-20 items-center md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img
              src={aboutImage}
              alt=""
              className="lg:w-[400px] w-[300px] rounded-lg  md:m-0 mx-auto "
            />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl md:text-left text-center font-bold  text-white mb-4">
              About Me
            </h1>
            <p className="text-gray-100 text-base md:text-left text-center">
              {" "}
              I have a passion for technology and love to learn. And i really
              want to become a Web Developer. I found myself in the Web
              Development field.
            </p>
            <div className="mt-4">
              <a
                href="https://api.whatsapp.com/send?phone=625225959650"
                target="_blank"
                className="text-green-500 hover:text-green-600 font-medium"
              >
                Contact Me Personal <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
        <div className="skills pt-32" id="skills">
          <h1 className="lg:text-5xl/tight text-3xl  text-center font-bold  text-white mb-4">
            Skills & Technologies
          </h1>
          <div className="service-box pt-12  grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="ri-html5-line text-orange-500 text-2xl"></i>
              <h2 className="text-white text-xl font-semibold">HTML</h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="ri-css3-line text-sky-500 text-2xl"></i>
              <h2 className="text-white text-xl font-semibold">CSS</h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="ri-javascript-line text-yellow-400 text-2xl"></i>
              <h2 className="text-white text-xl font-semibold">Javascript</h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="fa-brands fa-php text-2xl text-purple-500"></i>
              <h2 className="text-white text-xl font-semibold">PHP</h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <img src={ciImage} alt="" className="w-6" />
              <h2 className="text-white text-xl font-semibold">
                Codeigniter 4
              </h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="ri-tailwind-css-line text-sky-400 text-2xl"></i>
              <h2 className="text-white text-xl font-semibold">Tailwind</h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="ri-bootstrap-line text-purple-600 text-2xl"></i>
              <h2 className="text-white text-xl font-semibold">Bootstrap</h2>
            </div>
            <div className="box flex gap-3 items-center bg-slate-800 p-2 rounded-sm hover:scale-105 cursor-pointer">
              <i className="ri-reactjs-line text-sky-500 text-2xl"></i>
              <h2 className="text-white text-xl font-semibold">React JS</h2>
            </div>
          </div>
        </div>
        <div className="project pt-32" id="project">
          <h1 className="lg:text-5xl/tight text-3xl  text-center font-bold  text-white mb-4">
            {" "}
            My Project
          </h1>
          <div className="project-box pt-12  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-4 bg-slate-700 shadow rounded-sm">
              <img src={project1} alt="" />
              <h3 className="text-xl font-bold mt-6 mb-2 text-white">
                Project Calculator
              </h3>
              <p className="text-base mb-5 text-white">
                A simple calculator just using HTML, CSS and Javascript
              </p>
              <a
                href=""
                className="bg-green-500 block w-full text-center hover:bg-green-600 transition-all py-3 px-8 text-white shadow rounded-sm"
              >
                See Project
              </a>
            </div>
            <div className="box p-4 bg-slate-700 shadow rounded-sm">
              <img
                src={project2}
                alt=""
                className="lg:h-[275px] md:h-[240px] object-cover"
              />
              <h3 className="text-xl font-bold mt-6 mb-2 text-white">
                Project Check Khodam
              </h3>
              <p className="text-base mb-5 text-white">
                A project is popular in indonesia now. Just using HTML, CSS and
                Javascript
              </p>
              <a
                href=""
                className="bg-green-500 block w-full text-center hover:bg-green-600 transition-all py-3 px-8 text-white shadow rounded-sm"
              >
                See Project
              </a>
            </div>
            <div className="box p-4 bg-slate-700 shadow rounded-sm">
              <img src={project3} alt="" className="h-[275px] object-center" />
              <h3 className="text-xl font-bold mt-6 mb-2 text-white">
                Project Todo List
              </h3>
              <p className="text-base mb-11 text-white">
                A project is to use HTML, CSS and Javascript
              </p>
              <a
                href=""
                className="bg-green-500 block w-full text-center hover:bg-green-600 transition-all py-3 px-8 text-white shadow rounded-sm"
              >
                See Project
              </a>
            </div>
          </div>
        </div>
        <div className="pt-32 " id="contact">
            <div className=" items-start gap-14 p-8 mx-auto max-w-lg bg-slate-700 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
              <div className="text-center text-3xl font-bold text-white">
                <h1 className="mb-4">Contact Me</h1>
              </div>
              <form className="ml-auo space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-green-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-green-500"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-green-500"
                ></textarea>
                <button
                onClick={handleForm}
                  type="button"
                  className="text-white bg-green-500 hover:bg-green-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
