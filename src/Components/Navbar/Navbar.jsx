import React from 'react'

function Navbar({ about, skills, project, education, contact }) {

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <nav className="h-14 w-full md:sticky fixed bg-neutral-800 flex justify-between md:px-4  items-center ">
            <div className="text-2xl w-fit md:flex gap-4 hidden  text-white font-bold"><i className="fa-solid fa-compass"></i> PORTFOLIO</div>

            <ul className="flex justify-center w-full md:font-bold text-white">
                <li onClick={() => scrollToSection(about)} className="md:mx-[20px] mx-[10px] cursor-pointer">About</li>
                <li onClick={() => scrollToSection(skills)} className="md:mx-[20px] mx-[10px] cursor-pointer">Skills</li>
                <li onClick={() => scrollToSection(project)} className="md:mx-[20px] mx-[10px] cursor-pointer">Projects</li>
                <li onClick={() => scrollToSection(education)} className="md:mx-[20px] mx-[10px] cursor-pointer">Education</li>
                <li onClick={() => scrollToSection(contact)} className="md:mx-[20px] mx-[10px] cursor-pointer">Contact</li>
            </ul>



            <div className="hidden w-40 md:flex px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">
                <a href="https://github.com/SaurabhJethuri">Github Profile</a>
            </div>

        </nav>
    )
}

export default Navbar