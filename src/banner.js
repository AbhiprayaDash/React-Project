import React,{Component} from 'react';
import './styleun.css';
class Banner extends Component
{
    render()
    {
        return(
            
            <div className="xop-section">
            <ul className="xop-grid">
                            
                <li>
                    <div className="box box-1">
                        <a href="back/indexreg.php">
                            <div className="info">
                                <h3>Employeer</h3>
                                <p>"recruit some of the most beautiful minds."</p>
                            </div>
                        </a>
                    </div>
                </li>                    
            
                <li>
                    <div className="box box-2">
                        <a href="back/books.php">
                            <div className="info">
                                <h3>Employee</h3>
                                <p>"Get job oppurtunities from reputed firms &amp companies".</p>
                            </div>
                        </a>
                    </div>
                </li>

            </ul>
        </div>

        )
        
    }
}

export default Banner;
