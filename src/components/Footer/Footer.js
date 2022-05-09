import "./Footer.css";
 
const Footer = () => {  

var host = 'http://ur1stop.com/';

  return (  
    <div id="footerId" className="footer"> 
	    <div className="footerNested below767Width">      
			<div className="footerNestedInner footerNestedInnerLogo">
				<img src={`${host}images/ruaa/footer_logo.jpg`} onClick="onClickHome()" alt="" /> 				                
			</div> 

            <div className="footerNestedInnerFlex"> 
                <div className="footerNestedInner"> 
                    <div className="footerNestedInnerHeaderItem">Main Menu</div>
                    <div className="footerNestedInnerItem" onClick="onClickHome()">Home</div>
                    <div className="footerNestedInnerItem" onClick="appleWindows='';showProducts('','','')">Our Products</div>
                    <div className="footerNestedInnerItem" onClick="appleWindows='';showProducts('accessory','','')">Our Accessories</div>
                    <div className="footerNestedInnerItem" onClick="repair()">Repair</div>
                    <div className="footerNestedInnerItem" onClick="rent()">Rent</div>
                    <div className="footerNestedInnerItem" onClick="onClickAboutUs()">About Us</div>
                    <div className="footerNestedInnerItem" onClick="globalRMAEmail='';globalRMAOrderNo='';globalRMAOrderLineNo='';showRmaPage()">Request Return Label</div>
                </div>   
                <div className="footerNestedInner"> 
                    <div className="footerNestedInnerHeaderItem">Useful Links</div>
                    <div className="footerNestedInnerItem" onClick="newScrollTop()">Go To Top</div>
                    <div className="footerNestedInnerItem" onClick="showTermsAndConditionPage()">Terms of Service</div>
                    <div className="footerNestedInnerItem" onClick="showPrivacyPolicyPage()">Privacy Policy</div>
                    <div className="footerNestedInnerItem" onClick="showShippingPage()">Shipping</div>
                    <div className="footerNestedInnerItem" onClick="showReturnPage()">Returns</div>
                    <div className="footerNestedInnerItem" onClick="showFaqPage()">FAQ</div>
                    <div className="footerNestedInnerItem" onClick="onClickContactUs()">Contact us</div>                     
                </div>
            </div>

            <div className="footerNestedInnerFlex"> 
                <div className="footerNestedInner">
                    <div className="footerNestedInnerHeaderItem">Contact Us</div>
                    <div className="footerNestedInnerItem footerAddress">540 Lunt Ave,<br />Schaumburg,<br />IL - 60193, USA<br /><br /><br /><br />sales@ur1stop.com<br />1 (866) 232-7408</div>
                </div> 
                <div className="footerNestedInner">
                    <div className="footerNestedInnerHeaderItem">Follow Us</div>
                    <div className="socialMediaIcons">                         
                        <div className="socialMediaIconsItem">
                            <img src={`${host}images/ruaa/fb_icon.jpg`} className="searchIconImg" onClick="window.open('https://www.facebook.com/Ur1Stop-108750524391892')" alt="" />                                  
                        </div>
                        <div className="socialMediaIconsItem">
                            <img id="mobileCart" src={`${host}images/ruaa/inst_icon.jpg`} onClick="window.open('https://www.instagram.com/ur1stop.store')" alt="" />                                  
                        </div>
                        <div className="socialMediaIconsItem">
                            <img src={`${host}images/ruaa/twitter_icon.jpg`} onClick="window.open('https://twitter.com/UR1Stopcom')" alt="" />                                 
                        </div>            
                    </div> 
                    <div className="footerNestedInnerItem">2021 ur1stop.com<br />All Rights Reserved.</div>
                </div> 
            </div>
        </div> 
        <div className="footerNested above767Width">      
            <div className="footerNestedInner">
                <img src={`${host}images/ruaa/footer_logo.jpg`} onClick="onClickHome()" alt="" /> 				               
            </div> 
            <div className="footerNestedInner"> 
                <div className="footerNestedInnerHeaderItem">Main Menu</div>
                <div className="footerNestedInnerItem" onClick="onClickHome()">Home</div>
                <div className="footerNestedInnerItem" onClick="appleWindows='';showProducts('','','')">Our Products</div>
                <div className="footerNestedInnerItem" onClick="appleWindows='';showProducts('accessory','','')">Our Accessories</div>
                <div className="footerNestedInnerItem" onClick="repair()">Repair</div>
                <div className="footerNestedInnerItem" onClick="rent()">Rent</div>
                <div className="footerNestedInnerItem" onClick="onClickAboutUs()">About Us</div>
                <div className="footerNestedInnerItem" onClick="globalRMAEmail='';globalRMAOrderNo='';globalRMAOrderLineNo='';showRmaPage()">Request Return Label</div>
            </div>   
            <div className="footerNestedInner"> 
                <div className="footerNestedInnerHeaderItem">Useful Links</div>
                <div className="footerNestedInnerItem" onClick="newScrollTop()">Go To Top</div>
                <div className="footerNestedInnerItem" onClick="showTermsAndConditionPage()">Terms of Service</div>
                <div className="footerNestedInnerItem" onClick="showPrivacyPolicyPage()">Privacy Policy</div>
                <div className="footerNestedInnerItem" onClick="showShippingPage()">Shipping</div>
                <div className="footerNestedInnerItem" onClick="showReturnPage()">Returns</div>
                <div className="footerNestedInnerItem" onClick="showFaqPage()">FAQ</div>
                <div className="footerNestedInnerItem" onClick="showJobsPage()">Careers</div>
            </div>
            <div className="footerNestedInner">
                <div className="footerNestedInnerHeaderItem">Contact Us</div>
                <div className="footerNestedInnerItem footerAddress">540 Lunt Ave,<br />Schaumburg,<br />IL - 60193, USA<br /><br />sales@ur1stop.com<br />1 (866) 232-7408</div>
            </div> 
            <div className="footerNestedInner">
                <div className="footerNestedInnerHeaderItem">Follow Us</div>
                <div className="socialMediaIcons">                         
                    <div className="socialMediaIconsItem">
                        <img src={`${host}images/ruaa/fb_icon.jpg`} className="searchIconImg" onClick="window.open('https://www.facebook.com/Ur1Stop-108750524391892')" alt="" />                         
                    </div>
                    <div className="socialMediaIconsItem">
                        <img src={`${host}images/ruaa/inst_icon.jpg`} id="mobileCart" onClick="window.open('https://www.instagram.com/ur1stop.store')" alt="" />                             
                    </div>
                    <div className="socialMediaIconsItem">
                        <img src={`${host}images/ruaa/twitter_icon.jpg`} onClick="window.open('https://twitter.com/UR1Stopcom')" alt="" />                             
                    </div>            
                </div> 
                <div className="footerNestedInnerItem">2021 ur1stop.com<br />All Rights Reserved.</div>
            </div> 
        </div>      
    </div>  

  );
};

export default Footer;