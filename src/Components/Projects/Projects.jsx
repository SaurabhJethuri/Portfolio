import React from 'react'
import { data } from '/data.js'

function Projects({ project }) {
    return (
        <div ref={project} className='w-[100%] h-auto text-white flex flex-col md:flex-row flex-wrap items-center'>

            <div className=' w-[90%] md:w-[97.5%] h-auto mx-4 mb-4 bg-neutral-800 px-6 py-4     '>
                <p className='text-2xl font-bold pb-4 flex md:block justify-center'>Projects</p>


                <div className=' flex flex-col md:flex-row gap-12  md:justify-start  items-center overflow-x-hidden no-scrollbar max-h-[510px]'>


                    {
                        data.map((data, i) => (
                            <div
                                key={data + i}
                                className="w-64 h-72 flex flex-col items-center text-center border-white border-2 rounded-xl p-2">
                                <a href={data.gitUrl}><img className="w-44 h-44" src={data.imgUrl} alt="" /></a>
                                <h1 className='font-bold'>{data.title}</h1>
                                <p>{data.description}</p>


                            </div>
                        )
                        )
                    }

                </div>

            </div>

        </div>
    )
}

export default Projects