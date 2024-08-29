import {React } from "react"
import {useState} from "react"
import "./FlexiHeader.css"
export default function FlexiHeader() {
    let [Menu, setMenu] = useState(['home', ' categories', 'About'])
    return(
        <div>
            <header id='head'>
                <span className="logo"> Logo </span>
                <span><input type="text" placeholder="Search" id="searchBar" className="search" /> <button type="submit" id="searchButton" className="search">Search</button></span>
            </header>
            <menu className="menu"> 
                {Menu.map((values) =>( <button style={{marginLeft:'20px', paddingLeft:'10px', borderRadius:'20px', border:'2px solid default'}}>{values}</button>))} 
            </menu>
        </div>
    )
        
    
}