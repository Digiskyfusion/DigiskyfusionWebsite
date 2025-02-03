import React from 'react'

function WholeCircle() {
    let obj = [
        { "name": "POLO", "nickname": "RALPH LAUREN" },
        { "name": "POLO", "nickname": "RALPH LAUREN" },
        { "name": "POLO", "nickname": "RALPH LAUREN" },
        { "name": "POLO", "nickname": "RALPH LAUREN" },
        { "name": "POLO", "nickname": "RALPH LAUREN" },
        { "name": "POLO", "nickname": "RALPH LAUREN" }
    ];
  return (
    <div className='px-5 relative mt-12 md:mt-8'>
    <div className='bg-gradient-to-r from-[#F16D3C] to-[#0E546A] rounded-2xl  md:rounded-full flex flex-wrap justify-evenly items-center p-4'>
        {
            obj.map((current, index) => (
                <div key={index} className='flex flex-wrap flex-col  justify-evenly items-center text-white md:mx-2 p-2'>
                    <h1 className='text-lg font-bold sm:mr-2'>{current.name}</h1>
                    <p className='text-sm'>{current.nickname}</p>
                </div>
            ))
        }
    </div>
</div>
  )
}

export default WholeCircle
