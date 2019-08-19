import React,{Component} from 'react';
import './styleun.css';

class Nav extends Component
{
    render()
    {
        return(
            <nav>
  <ul>
      <li><a href="">Home</a></li>
      <li><a href="/companies">Companies</a></li>
      <li><a href="/jobs">Employers/jobs</a></li>
      <li><a href="/skills">Skill Developement</a></li>
      <li><a href="/startups">Startup</a></li>
  </ul>
</nav>

        )
        
    }
}
export default Nav;