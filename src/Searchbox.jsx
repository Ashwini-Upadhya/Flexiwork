import './Searchbox.css'
export default function SearchBox() {
    return <div><input type="text" placeholder="Search" id="searchBar" className="search" ></input>
    <label htmlFor="searchBar"><button type="submit" id="searchButton" className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
        {console.log("button is clicked")}
        </button>
        </label>
        </div>
}