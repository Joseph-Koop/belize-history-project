import { useState } from 'react'
import '../App.css'
import data from '../../data/data.js'
import { SquareArrowRight, SquareArrowLeft } from 'lucide-react'

function Timeline() {
  const [current, setCurrent] = useState(0);

  function navigate(index){
    setCurrent(index);
  }

  return(
    <>
        <section className="w-auto flex justify-around m-3 rounded-full border border-blue-700">
          {data.map((event, index) => (
            <div key={index} className={`flex justify-center items-center h-10 w-20 rounded-full hover:cursor-pointer hover:bg-blue-800 ${current == index ? 'bg-blue-700' : ''}`} onClick={() => navigate(index)}>
              {event.date}
            </div>
          ))}
        </section>
        <section className="w-auto justify-center p-9 m-3 flex flex-wrap gap-10 h-90 bg-gray-900 rounded-2xl">
          <div className="overflow-hidden w-100">
            <img src={data[current].image} alt={data[current].name} className="max-w-100 max-h-75 object-cover" />
          </div>
          <div className="grid grid-cols-1 gap-10 max-w-300">
            <div className="flex items-center gap-10">
              <h3 className="text-red-900 text-5xl">{data[current].date}</h3>
              <h3 className="text-red-800 text-3xl">{data[current].name}</h3>
            </div>
            <p>{data[current].description}</p>
          </div>
        </section>
        <section className="w-auto flex justify-end p-3 m-3 gap-3">
          <SquareArrowLeft className="hover:text-blue-600 hover:cursor-pointer size-8" onClick={current !== 0 ? () => navigate(current - 1) : null}/>
          <SquareArrowRight className="hover:text-blue-600 hover:cursor-pointer size-8" onClick={current !== (data.length - 1) ? () => navigate(current + 1) : null}/>
        </section>
        <section className="w-auto flex justify-center">
          <video key={data[current].date} controls autoPlay className="-translate-y-20 rounded-xl w-75 h-75">
            <source src={`${import.meta.env.BASE_URL}${data[current].date}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
    </>
    )
}

export default Timeline