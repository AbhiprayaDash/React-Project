import React,{Component} from 'react';

import Nav from './nav';
import Search from './search';
import Banner from './banner';
import styles from './bodystyle.css';

class Header extends Component
{
  render()
  {
return(

  <div className={styles.bod}>
<Nav/>
<br/><br/><br/>
        <p>Search for job here</p>
<Search/>
<Banner/>
        </div>

)
}}
export default Header;
