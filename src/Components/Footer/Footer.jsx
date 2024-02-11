import React from 'react'

function Footer() {
    return (
        <footer className="h-auto w-full bg-neutral-800 flex flex-col justify-center py-4 px-4 md:px-4 items-center text-white ">
            <h1 className='text-xl font-bold '>Saurabh Jethuri</h1>
            <div className='flex gap-4'>
                <a href="https://github.com/SaurabhJethuri"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/saurabh-jethuri-172a1b25a"><i className="fa-brands fa-linkedin"></i></a>
                <a href="https://leetcode.com/saurabhjethuri124/"><i className="fa-brands fa-squarespace"></i></a>
            </div>
            <p>&copy; 2024 Saurabh Jethuri. All rights reserved.</p>


        </footer>
    )
}

export default Footer

