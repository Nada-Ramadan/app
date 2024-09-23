import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Projects() {
  return (
    <div>
        <div>
            <h1>Projects</h1>
            <Link to={"web"}>
                <button className='btn btn-outline dark'>Web Application</button>
            </Link>
            <Link to={"mobile"}>
                <button className='btn btn-outline dark'>Mobile Application</button>
            </Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}
