import React,{useState} from 'react'

const Calculator = () => {
    const [num,useNum]=useState("")
    function display(e)
    {
        let temp=e.target.innerText
        console.log(temp)
        if(temp=='=')
        {
            useNum((eval(num)))
            console.log(num)
        }
        else if(temp=='AC')
        {
            useNum("")
        }
        else if(temp=='DEL')
        {
            useNum(num.slice(0,num.length-1))
        }
        else
        {
            useNum(num+temp)
        }
    }
  return (
    <div>
        <div className=' h-screen flex justify-center items-center'>
            <div className=' w-[35vw] h-[70vh] flex flex-col gap-2 '>
                <div className=''>
                     <div className='bg-pink-300 w-[35vw] h-[15vh] rounded-lg flex items-center justify-end text-2xl'>{num}</div>
                </div>
               <div className=' h-[65vh] grid grid-cols-4 grid-rows-5 gap-2'>
                    <button onClick={display}className='bg-cyan-300 col-span-2 border-1 rounded-2xl'>AC</button>
                    <button onClick={display}className='bg-cyan-300 col-span-2 border-1 rounded-2xl'>DEL</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>1</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>2</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>3</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>+</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>4</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>5</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>6</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>-</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>7</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>8</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>9</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>*</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>/</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>0</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>%</button>
                    <button onClick={display}className='bg-cyan-300 border-1 col-span-1 rounded-2xl'>=</button>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
