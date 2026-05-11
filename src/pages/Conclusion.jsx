import { useState } from 'react'
import '../App.css'

function Conclusion() {

  return(
    <>
        <section className="w-auto grid grid-cols-2 gap-5 m-3">
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Lesson #1</h3>
              <div className="text-center text-xl">
                Unity is powerful in creating change.
              </div>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Lesson #2</h3>
              <div className="text-center text-xl">
                Economic hardship can lead to political change.
              </div>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Lesson #3</h3>
              <div className="text-center text-xl">
                Leadership plays a key role in national development.
              </div>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Lesson #4</h3>
              <div className="text-center text-xl">
                Change won't come if we sit back and do nothing, we have to learn to take initiative. 
              </div>
          </div>
        </section>
        <section className="w-auto flex justify-center">
          <video controls autoPlay className="rounded-xl w-75 h-75">
            <source src={`${import.meta.env.BASE_URL}conclusion.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
    </>
    )
}

export default Conclusion