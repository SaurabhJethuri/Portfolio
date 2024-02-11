import React from 'react'

function About({ about }) {
    return (
        <div ref={about} className=" w-[100%] h-auto flex md:pt-0 pt-16 flex-col md:flex-row flex-wrap items-center">
            <div className="w-[90%] md:w-[30%] h-auto mx-4 my-4 bg-neutral-800 ">
                <div className="text-2xl md:hidden flex justify-center text-white font-bold"><i className="fa-solid fa-compass py-2 px-2 pt-2"></i> PORTFOLIO</div>
                <div className='flex justify-center '>
                    <img className=' w-96 h-96 rounded-full' src="https://res.cloudinary.com/dkfa7he1b/image/upload/v1707673164/PortfolioData/IMG_20231116_204110_di8idt.jpg" alt="" />

                </div>

            </div>
            <div className="w-[90%] md:w-[66.5%] h-auto md:h-96 my-4 py-4 bg-neutral-800 md:text-start md:px-4 text-center ">
                <p className="text-yellow-400">HELLO I'M</p>
                <h1 className='text-white font-bold text-3xl md:text-6xl'>Saurabh Jethuri</h1>
                <p className='text-white text-xl pb-2'>I am a Web developer</p>
                <p className='text-white text-xl px-2 md:px-0'>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. Let's create something amazing together!</p>
                <div className='flex md:justify-start justify-evenly'>
                    <div className='mt-14 my-4  '>
                        <a className="bg-indigo-700 rounded-xl font-bold px-4 py-4 text-white" href="https://drive.google.com/file/d/1oZTJuZwE7k-duECGRwQbhJxHVSBrgI3g/view?usp=sharing">Check Resume</a>
                    </div>
                    <div className='mt-14 my-4 '>
                        <a className="bg-indigo-700 md:hidden rounded-xl font-bold px-4 py-4 text-white" href="https://github.com/SaurabhJethuri">Github Profile</a>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default About