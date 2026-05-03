import { useState } from 'react'
import '../App.css'
import { useNavigate, useLocation } from 'react-router-dom'

function Layout() {

    const navigate = useNavigate();
    const location = useLocation();

  return(
    <>
        <section className="w-auto p-3 m-3">
          <h1 className="text-[50px] text-center text-blue-600">
            Belize History Project
          </h1>
          <h3 className="text-[20px] text-center">
            Belize Nationalist Movement
          </h3>
          <div className="w-auto flex justify-center">
            <select name="page-select" id="page-select" value={location.pathname} className="bg-blue-700 p-2 mt-6 rounded-xl hover:cursor-pointer hover:bg-blue-800" onChange={(e) => navigate(e.target.value)}>
              <option value="/introduction">Introduction</option>
              <option value="/">Timeline</option>
              <option value="/conclusion">Conclusion</option>
              <option value="/references">References</option>
            </select>
          </div>
        </section>
    </>
    )
}

export default Layout