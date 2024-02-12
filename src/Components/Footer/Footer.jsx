import React from 'react'

function Footer() {
    return (
        <footer className="h-auto w-full bg-neutral-800 flex flex-col justify-center py-4 px-4 md:px-4 items-center text-white ">
            <h1 className='text-xl font-bold '>Saurabh Jethuri</h1>
            <div className='flex gap-4'>
                <a href="https://github.com/SaurabhJethuri"><img className='w-6 h-6 my-1' src={`/logos/github.png`} alt="" /></a>
                <a href="https://www.linkedin.com/in/saurabh-jethuri-172a1b25a"><img className='w-6 h-6 my-1' src={`/logos/linkedin.png`} alt="" /></a>
                <a href="https://leetcode.com/saurabhjethuri124/"><img className='w-6 h-6 my-1' src={`/logos/leetcode.png`} alt="" /></a>
            </div>
            <p>&copy; 2024 Saurabh Jethuri. All rights reserved.</p>


        </footer>
    )
}

export default Footer

