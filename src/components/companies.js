import React,{Component} from 'react';
import imgdata from './company.json';
import './companystyle.css';

class company extends Component
{
    render()
    {
        return(
        <body>
            <h1>companies</h1>
            <br/>
            <main>
                <div className="wrapper">
                    <h2 className="gallery">Popular companies</h2>
                </div>
                <section className="gallery-links">
                
                 
                 {imgdata.map((images,index)=>{
                 return (
                 <a className="gallery-img" href=""><img src={images.source} alt="asian-paints"/></a>
                 )})}
                     
                     

                </section><br/><br/>
                <div class="wrapper">
                <h2 class="gallery">Trending companies</h2>
            </div>
            
                </main></body>
            

        )
        
    }
}
export default company;