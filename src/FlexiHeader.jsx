import {React } from "react"
import {useState} from "react"
import "./FlexiHeader.css"
import SearchBox from "./Searchbox"
export default function FlexiHeader() {
    let [Menu, setMenu] = useState(['Home', ' Categories', 'About'])
    return(
        <div>
            <header id='head'>
                <span className="logo"> <img src="imgpsh_fullsize_anim (3).png" alt="FlexiWork" /> </span> <SearchBox/>
            </header>
            <menu className="menu"> 
                {Menu.map((values) =>( <button className="menuButton" >{values}</button>))} 
            </menu>
            
        </div>
    )
        
    
}