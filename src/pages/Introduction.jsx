import { useState } from 'react'
import '../App.css'

function Introduction() {

  return(
    <>
        <section className="w-auto grid grid-cols-2 gap-5 m-3">
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Theme</h3>
              <div className="text-center text-xl">
                Breaking Colonial Chains: The Rise of Nationalism in Belize
              </div>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Topic</h3>
              <div className="text-center text-xl">
                The Belize Nationalist Movement, 1949-1981
              </div>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Central Research Question</h3>
              <div className="text-center text-xl">
                How did different social groups in Belize come together to challenge colonial rule and achieve independence?
              </div>
          </div>
          <div className="flex flex-col gap-3 p-5 bg-gray-900 rounded-2xl justify-center items-center">
              <h3 className="text-teal-500 text-3xl font-bold">Thesis</h3>
              <div className="text-center text-xl">
                Belize’s independence was achieved through the combined efforts of workers, nationalist groups, and political leaders, whose responses to economic hardship and colonial control united the country and led to self-government and eventual independence in 1981.
              </div>
          </div>
        </section>
        <section className="w-auto flex justify-center">
          <video controls autoPlay className="rounded-xl w-75 h-75">
            <source src={`${import.meta.env.BASE_URL}introduction.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
    </>
    )
}

export default Introduction