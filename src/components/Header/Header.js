import "./Header.css";
import axios from "axios";
import { useState, useEffect, useLayoutEffect, useRef } from "react"; 
import Dropdown from '../../components/Dropdown/Dropdown'; 
import ShopDropdown from '../../components/ShopDropdown/ShopDropdown'; 
import SearchDropdown from '../../components/SearchDropdown/SearchDropdown'; 

const Header = () => {

  const [cartCountUserResponse, setCartCountUserResponse] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [keyword, setKeyword] = useState(''); 
  const [shopDropdown, setShopDropdown] = useState(false);
  const [searchDropdown, setSearchDropdown] = useState(false);
  var dataArray, d, gHtml, s = ''; 

  const ref = useRef();
  //const [height, setHeight] = useState(0);
  //const [dimensions, setDimensions] = useState(getDimensions);
  const size = useDimensions(ref);

  const getCartCountUser = async () => 
  { const { data } = await axios.get(`http://127.0.0.1/getCartCountUser_test.php`); setCartCountUserResponse(data); };

  useEffect(() => { getCartCountUser(); }, []);  

  const handleChange = (e) => {        
      if(e.target.value.length > 1) 
      { 
          setKeyword(e.target.value); setDropdown(false); setShopDropdown(false); setSearchDropdown(true); 
          //console.log('handle change called ' + e.target.value); 
      }
      else { setKeyword(''); setSearchDropdown(false); }        
  };

  const onMouseEnter = () => { setShopDropdown(false); setSearchDropdown(false); setDropdown(true); };
  const onMouseLeave = () => { setDropdown(false); }; 
  const onShopMouseEnter = () => { setDropdown(false); setSearchDropdown(false); setShopDropdown(true); };
  const onShopMouseLeave = () => { setShopDropdown(false); };  
  const onSearchMouseEnter = () => { setDropdown(false); setSearchDropdown(false); setSearchDropdown(true); };
  const onSearchMouseLeave = () => { setSearchDropdown(false); };  
  const onHeaderMouseLeave = () => { setDropdown(false); setShopDropdown(false); setSearchDropdown(false); }; 
 
  dataArray = cartCountUserResponse.toString().split("|||"); 
  d = dataArray[0].trim().toString();
  //console.log('header ' + d + ' w ' + size.width + ' h ' + size.height +  ' t ' + size.top + ' r ' + size.right + ' b ' + size.bottom + ' l ' + size.left);  
  //console.log('header searchDropdown ' + searchDropdown);   
 
  return ( 
    <div ref={ref} id="headerContentId" className="headerContent" onMouseLeave={onHeaderMouseLeave}> 
    <div id="aboveHeaderMenuContainerId" className="aboveHeaderMenuContainer"> 
        <div className="aboveHeaderMenu"> 
            <div className="aboveHeaderMenuLeft"></div>   
            <div className="aboveHeaderMenuCenter">Your one stop shop for all electronics needs!</div>
            <div className="aboveHeaderMenuRight">          
                <div className="aboveHeaderMenuRightPhone">866.232.7408</div> 
                <div className="aboveHeaderMenuRightChat">
                    <div className="aboveHeaderMenuRightChatFlex">
                        <img src="http://127.0.0.1/images/ruaa/chat.png" onClick="" alt="" /> 				                          
                        <div className="aboveHeaderMenuRightChatCaption">Live Chat</div>
                    </div>
                </div> 
                <div className="aboveHeaderMenuRightMessage" onclick="onClickContactUs()">Message Us</div>  
            </div> 
        </div>
    </div>
    <div id="lineId" className="line"> </div>
    <div id="headerMenuId" className="headerMenu">     
      <div className="menuItemLeft below1000WidthFlex">          				             
          <img className="hamburgerIcon" src="http://127.0.0.1/menu_icon.png" onClick="showMobileMenu()" loading="lazy" alt="" /> 			             

          <div id="topDealsMenuItemMobile" className="menuButton" >
              <div onClick="selectUpgradeOption(50,50)" onMouseEnter={onMouseEnter}>
                Top Deals                                
              </div>           
              {dropdown && <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><Dropdown /></div>}      
          </div>          

          <div className="menuButton" onClick="topDeals()">All Products</div>				            
      </div> 
      <div className="menuItemLeft above1000WidthFlex">          				             				             
        <div className="topDealsMenuItem home">				               	 
            <img src="http://127.0.0.1/images/ruaa/logo_symbol.png" onClick="onClickHome();" loading="lazy" alt="" />   
        </div> 
        <div id="topDealsMenuItem" onMouseEnter={onMouseEnter}>
          <div className="topDealsMenuItemDiv" onClick="selectUpgradeOption(55,55)">
            Top deals         
            {dropdown && <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><Dropdown /></div>}    
          </div>                   
        </div>  
        <div id="buyMenuItem" onClick="topDeals()">Shop</div> 

        <div id="servicesMenuItem" onMouseEnter={onShopMouseEnter}>
            <div onClick="selectUpgradeOption(41,41)">
                <div>Services</div>                
            </div>  
            {shopDropdown && <div onMouseEnter={onShopMouseEnter} onMouseLeave={onShopMouseLeave}><ShopDropdown /></div>} 
        </div>  
    </div> 
    <div className="menuItemRight">    
        <div className="menuItemRightItemSearchBar">  
          <div id="searchDiv">                            				                       
            <input id="search" placeholder="SEARCH.." onKeyUp={ (e) => { setSearchDropdown(false); var timer; clearTimeout(timer); timer = setTimeout(() => { handleChange(e) }, 500) } } /> 
            {searchDropdown && <div onMouseEnter={onSearchMouseEnter} onMouseLeave={onSearchMouseLeave}><SearchDropdown keyword={keyword}/></div>} 
          </div>         
        </div>    
        <div className="menuItemRightItem searchIconDiv" onClick="if($('.mobileSearchBar').is(':visible')) $('.mobileSearchBar').hide();else $('.mobileSearchBar').show(); $('#myDropdown200').hide();">
            <img src="http://127.0.0.1/images/ruaa/search_icon.png" alt="" />				                
        </div>   
        <div id="cartIconDiv" className="menuItemRightItem">
            <div id="cartCounter"></div>
            <img id="mobileCart" src="http://127.0.0.1/images/ruaa/shopping_bag_icon.png" onClick="historyPush('cart');" alt="" />   
        </div>
        <div className="menuItemRightItem profile" style={{ display: d === '0'? 'block': 'none'}}>
            <img src="http://127.0.0.1/images/ruaa/sign_in_icon.png" onclick="userCalled=0;showCartSignInForm(0,0);" link="" loading="lazy" alt="" />				                 
        </div>      

        <div className="menuItemInitials" style={{ display: d === '0'? 'none': 'table'}}>
            <div className="menuItemInitialsDiv">
                <div className="initials" onClick="userDropDown();"></div>
            </div>				               
        </div>          
    </div>        
    <div className="menuItemLogo">                                     
      <div className="menuItemLogoItem">
            <img src="http://127.0.0.1/images/ruaa/logo_symbol.png" alt="" onClick="onClickHome()" /> 				                
      </div>
    </div>
 </div>    
</div>  
  );
};

function useDimensions(targetRef) {
  const getDimensions = () => {
    return {
      width: targetRef.current ? targetRef.current.offsetWidth : 0,
      height: targetRef.current ? targetRef.current.offsetHeight : 0,
      top: targetRef.current ? targetRef.current.top : 0,
      right: targetRef.current ? targetRef.current.right : 0,
      bottom: targetRef.current ? targetRef.current.bottom : 0,
      left: targetRef.current ? targetRef.current.left : 0
    };
  };

  const [dimensions, setDimensions] = useState(getDimensions);

  const handleResize = () => {
    setDimensions(getDimensions());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    handleResize();
  }, []);
  return dimensions;
}

export default Header;