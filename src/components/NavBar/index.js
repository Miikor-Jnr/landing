import React from "react";


export function NavBar(){
    return (
        <div className="navbar-wrapper">
<div>
    <ul>
        <li><a href={'/dashboard'}>Dashboard</a></li>
        <li><a href={'/settings'}>Settings</a></li>
        <li><a href={'/resellers'}>Resellers</a></li>
        <li><a href={'/premium-tools'}>Premium tools</a></li>
    </ul>
</div>
<div >
    <input className="search" type='text' placeholder="Search tools" />
</div>
<div style={{display:'flex', columnGap:'23px', alignItems:'center', justifyContent:'right'}}>
    <img src="/images/message-notif.svg" alt="message"></img>
    <img src="/images/Group.svg" alt="group"></img>
    <img src="/images/logout.svg" alt="logout"></img>
</div>
        </div>
    )
}