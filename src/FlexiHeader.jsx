import {React } from "react"
import {useState} from "react"
import "./FlexiHeader.css"
import SearchBox from "./Searchbox"
export default function FlexiHeader() {
    let [Menu, setMenu] = useState(['Home', ' Categories', 'About'])
    return(
        <div>
            <header id='head'>
                <span className="logo"> Flexiwork </span> <SearchBox/>
            </header>
            <menu className="menu"> 
                {Menu.map((values) =>( <button style={{margin:'10px', height:'30px', border:'0px', paddingLeft:'15px',paddingRight:'15px', borderRadius:'20px'}}>{values}</button>))} 
            </menu>
            
        </div>
    )
        
    
}