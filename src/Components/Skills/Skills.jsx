import React from 'react'
import { skil } from '/data.js'

function Skills({ skills }) {
    return (
        <div ref={skills} className='w-[100%] h-auto text-white flex flex-col md:flex-row flex-wrap items-center'>
            <div className=' w-[90%] md:w-[97.5%] h-auto mx-4 mb-4 bg-neutral-800 px-6 py-4 '>
                <span className='font-bold text-2xl'>Skills</span>
                <div className='flex flex-row flex-wrap my-4 gap-4'>
                    {
                        skil.map((skill, i) => (
                            <div
                                key={skill + i}
                                className=' px-3 md:px-5 text-xl hover:bg-neutral-800 hover:cursor-pointer py-1 flex bg-neutral-900 gap-2 items-center justify-center border-4 border-neutral-700 rounded-md'
                            >

                                <span>{skill}</span>
                                <img className='md:h-6 md:w-6 w-4 h-4' src={`/logos/${skill}.png`} alt="" />

                            </div>
                        )
                        )
                    }
                </div>

            </div>



        </div>
    )
}

export default Skills