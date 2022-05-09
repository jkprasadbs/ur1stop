import React, { useState, useEffect, useLayoutEffect } from 'react';
import { MenuItems } from '../../components/MenuItems/MenuItems';
import './Dropdown.css';
import { Link } from 'react-router-dom';

//function Dropdown(props) {
const Dropdown = () => {
  const [click, setClick] = useState(false);
  const [top, setTop] = useState(70);   
  const handleClick = () => setClick(!click); 
  var headerHeight = 0, aboveHeaderHeight = 0, lineHeight = 0, headerHeight = 0, totalHeaderHeight = 0;

  const handleResize = () => {
    aboveHeaderHeight = document.getElementById('aboveHeaderMenuContainerId').offsetHeight;
    lineHeight = document.getElementById('lineId').offsetHeight;
    headerHeight = document.getElementById('headerMenuId').offsetHeight;    
    totalHeaderHeight = aboveHeaderHeight + lineHeight + headerHeight;
    //document.getElementById('bannerContainerId').style.top = headerHeight + 'px';

    console.log('Dropdown handleResize ' + aboveHeaderHeight + ' ' + lineHeight + ' ' + headerHeight + ' ' + totalHeaderHeight);

    setTop(totalHeaderHeight);
  };

  useEffect(() => { 
    handleResize();       
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);   

  return (
    <> 
      <div className='dropdown-content' id='myDropdown55' style={{top: top + 'px', display: 'block'}} >             
            <div>   
                <div>				                            
                    <div className="tDMItem"><Link to='/topDeals/14'>Gaming Computers</Link></div> 		 
                    <div className="tDMItem"><Link to='/topDeals/1'>Notebooks</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/12'>TVs</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/3'>All in Ones</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/10'>Refurbished Apple</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/17'>Video Games</Link></div> 
                </div>
                <div> 
                    <div className="tDMItem"><Link to='/topDeals/2'>Desktops</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/4'>Monitors</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/13'>Tablets</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/5'>Accessories</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/9'>Refurbished Windows</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/19'>Cameras</Link></div> 
                </div>
                <div> 
                    <div className="tDMItem"><Link to='/topDeals/7'>HP</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/8'>Lenovo</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/6'>Dell</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/11'>Graphic Cards</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/16'>Gaming Consoles</Link></div> 
                    <div className="tDMItem"><Link to='/topDeals/20'>Security Cameras</Link></div> 
                </div>
            </div> 
        </div>   
    </>
  );
}

export default Dropdown;
