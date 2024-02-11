import React from 'react'

function Contact({ contact }) {
    return (
        <div ref={contact} className='w-[100%] h-auto text-white flex flex-col md:flex-row flex-wrap items-center'>
            <div className=' w-[90%] md:w-[97.5%] h-auto mx-4 mb-4 bg-neutral-800 px-6 py-4 flex flex-col items-center '>
                <p className='text-3xl font-bold pb-4 flex md:block flex-col items-center'>Contact Me</p>
                <p className='text-gray-400' >Feel free to reach out to me for any questions</p>
                <form className='flex flex-col w-[90%] md:w-[50%] h-auto' method="Post" action="#">

                    <input className='w-[100%] h-8 my-4 rounded px-4 text-black' placeholder="Your Name" type="text" id="name" name="name" required />

                    <input className='w-[100%] h-8 my-4 rounded px-4 text-black' placeholder="Your Email" type="email" id="email" name="email" required />

                    <textarea className='w-[100%] my-4 rounded px-4 text-black' placeholder="Message" rows="4" id="message" name="message" required></textarea>

                    <input className='bg-indigo-700 w-16 h-8 rounded hover:cursor-pointer' type="submit" value="Submit" disabled />


                </form>

            </div>
        </div>
    )
}

export default Contact