import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

function Nav(){


    
    function popupclick () {
        
        
        let popup = document.getElementById(`popup`)
        if(popup.style.animationName === ``) {
            popup.style.animationName = `popup` 
            popup.style.display = `flex`
            
        } else if(popup.style.animationName = `popup`) {
            popup.style.animationName = `off`
            popup.style.display = 'none'
            let mytimeout = setTimeout(() => {
                popup.style.animationName = ``
                popup.display = 'none'
            }, 0);
            mytimeout()
        } 
        
    }

   

    

    return(
        <section>

        
            <div className='popup' id='popup'>
                <div className='menuIcon' onClick={popupclick}>
                    X
                </div>
                <span className="ul li">Stories</span>
                <span className="ul">Post</span>
                <span className="ul">Author</span>
                <input type='text' placeholder="  Search" className="input"/>

            </div>
       
        

        
        <div className="nav">
            <div className="logo"></div>
            <div className="list">
                <span className="ul li">Stories</span>
                <span className="ul">Post</span>
                <span className="ul">Author</span>
                <input type='text' placeholder="  Search" className="input"/>
            </div>
            <div className='menuIcon' onClick={popupclick}>
                <AiOutlineMenu />
            </div>
            
        </div>
        </section>
    )
}
export default Nav