import React from "react"
import { navItem } from "../../utils/navItems"
import { NavBar } from "../NavBar"



export function PageLayout({children}){


const tools = navItem.tools.map((item, index) => {
    return <li key={index}><a href={`${item}`}>{item}</a></li>
})

const community = navItem.community.map((item, index) => {
    return <li key={index}><a href={`${item}`}>{item}</a></li>
})


    return(
        <div className="layout-container">
            <div className="nav-item-container" style={{backgroundColor:'#DDE5EE', paddingTop:'33px'}}>
                <div style={{paddingLeft:'21px'}}>
                    <img src="/images/logo11.svg" alt="logo"></img>
                </div>
                <div className="dashboard-container" style={{display:'flex', alignItems:'center', columnGap: '5px'}}>
                    <img src="/images/category.svg" alt="dashboard"></img>
                    <p>Dashboard</p>
                </div>
                <p className="nav-head">Tools</p>
                <ul className="sidenav-anchor">
                    {tools}
                </ul>
                <p className="nav-head" style={{marginTop:'27px'}}>Community</p>
                <ul className="sidenav-anchor">
                    {community}
                </ul>
            </div>
            <div>
                <NavBar />
                <div  style={{paddingInline:'21px', paddingTop:'57px'}} className='layout-background'>
                    <img src="/images/android-chrome-512x512-2.svg" alt='background' style={{position:'absolute', left:'-250px', bottom:'40px', zIndex:'-20'}}></img>
                    <img src="/images/android-chrome-512x512-3.svg" alt="background" style={{position:'absolute', right:'0', bottom:'0', zIndex:'-20'}}></img>
                {children}
                </div>
            </div>
        </div>
    )
}