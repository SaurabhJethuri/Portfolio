import React from 'react'
import { educations } from '/data.js'

function Education({ education }) {
    return (
        <div ref={education} className='w-[100%] h-auto text-white flex flex-col md:flex-row flex-wrap items-center'>
            <div className=' w-[90%] md:w-[97.5%] h-auto mx-4 mb-4 bg-neutral-800 px-6 py-4 '>
                <p className='text-2xl font-bold pb-4 flex md:block justify-center'>Education</p>
                <div className=' flex flex-wrap gap-12 overflow-x-hidden no-scrollbar max-h-[400px] '>

                    {
                        educations.map((data, i) => (
                            <div
                                key={data + i}
                                className="w-40% md:w-[48%] flex  flex-col border-white border-2 rounded-xl p-2">
                                <h1 className='font-bold md:text-xl'>{data.name}</h1>
                                <p >{data.course}</p>
                                <p className='text-gray-500 text-sm' >{data.duration}</p>
                                <p className='pb-2'>Grade : {data.grade}</p>
                                <p className='text-blue-300'>{data.description}</p>

                            </div>
                        )
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Education