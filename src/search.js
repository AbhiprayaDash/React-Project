import React,{Component} from 'react';
import './styleun.css';
class Search extends Component
{
    render()
    {
        return(
            <div className="search-box">
            <input className="search-txt" type="text" name="" placeholder="type here..."/>
            <a className="search-btn" href="">
                <i className="fas fa-search"/>
            </a>
        </div>

        )
        
    }
}
export default Search;