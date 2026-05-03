import { useState } from 'react'
import '../App.css'
import references from '../../data/references.js'
import { CheckCircle } from 'lucide-react'

function References() {

  return(
    <>
        <section className="w-auto flex flex-col justify-center gap-10 m-3 bg-gray-900 rounded-2xl p-5">
            <h3 className="text-teal-500 text-3xl font-bold text-center">References</h3>
            <div className="flex flex-col gap-5">
                {references.map((event, index) => (
                    <div key={index} className="flex flex-wrap gap-x-5">
                        <div>{event.reference}</div>
                        <div className={`flex items-center gap-2 p-1 rounded-xl text-sm ${event.type == 'Primary (Report)' ? 'bg-blue-600/50' : 'bg-teal-500/50'}`}>
                            <CheckCircle className="size-3"/> 
                            {event.type}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </>
    )
}

export default References