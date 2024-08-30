import {React } from "react"
import {useState} from "react"
import "./FlexiHeader.css"
export default function FlexiHeader() {
    let [Menu, setMenu] = useState(['Home', ' Categories', 'About'])
    return(
        <div>
            <header id='head'>
                <span className="logo"> Flexiwork </span>
                <span><input type="text" placeholder="Search" id="searchBar" className="search"/><button type="submit" id="searchButton" className="search"><i style={{ height:'30px', width: '30px'}} class="fa-solid fa-magnifying-glass"></i></button></span>
            </header>
            <menu className="menu"> 
                {Menu.map((values) =>( <button style={{margin:'10px', height:'30px', border:'0px', paddingLeft:'15px',paddingRight:'15px', borderRadius:'20px'}}>{values}</button>))} 
            </menu>
            
        </div>
    )
        
    
}