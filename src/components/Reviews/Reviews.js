import "./Reviews.css";
import axios from "axios";
import { useState, useEffect, useLayoutEffect, useRef } from "react"; 
 
const Reviews = () => {   
    
    const [reviews, setReviews] = useState([]);
    const [dot, setDot] = useState([]);
    const [page, setPage] = useState(0);
    const { height, wWidth } = useWindowDimensions();
    var rev = '', review_total_columns = 0, reviewPages = 0, i = 0, reviewDot = '', dotClass = '', reviewDotMargin = '', dataArray; //, host = 'http://ur1stop.com/';
    //const ref = useRef();    
    //const size = useDimensions(ref);

    const getReviews = async (page) => {   
        const { innerWidth: width, innerHeight: height } = window;
        const { data } = await axios.get(            
            `http://127.0.0.1/reviews.php?width=${width}&page=${page}`
        );                     
        console.log('reviews data ' + `http://127.0.0.1/reviews.php?width=${width}&page=${page}` + ' ' + wWidth);                 
        dataArray = data.split("|||");            rev = dataArray[0];    reviewDot = ''; 
        setReviews(rev); 
        if(width <= 480) { review_total_columns = 2; } else { review_total_columns = 3; } reviewPages = Number(data[1]) / review_total_columns;

        if(width > 1000)                    { reviewDotMargin = 'margin: 0% 0.7%'; }                                 
        if(width > 480 && width <= 1000)    { reviewDotMargin = 'margin: 0% 1%'; }
        if(width <= 480)                    { reviewDotMargin = 'margin: 0% 1.5%'; }    

        for(i = 0; i < reviewPages; i++)
        {              
            dotClass = ''; if(page == i) dotClass = 'present';
            reviewDot = reviewDot + "<span id='reviewDot_"+i+"' class='reviewDot "+dotClass+"' style='"+reviewDotMargin+"' onclick=reviews("+i+")></span>";
        } 
        setDot(reviewDot); 
          
        /* if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1 ) { console.log('Opera'); }
        else if(navigator.userAgent.indexOf("Chrome") != -1 ) { console.log('Chrome'); }
        else if(navigator.userAgent.indexOf("Safari") != -1)  
        { $('.user_img_container').css('margin', '0px 5px 0px 0px'); $('.user_img').css('height', '30px'); $('.star_img').css('height', '20px'); console.log('Safari'); }
        else if(navigator.userAgent.indexOf("Firefox") != -1 ) { console.log('Firefox'); }
        else if((navigator.userAgent.indexOf("MSIE") != -1 ) || (!!document.documentMode == true )) { console.log('IE'); }   //IF IE > 10
        else { console.log('unknown browser'); } */                   
    };  

    useEffect(() => {      
        getReviews(page);                     
        function handleResize() {
          getReviews(page);
        }   
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);      

    //console.log('topdeals data ' + topDeals);

    const rawMarkup = () => {   
      return { __html: reviews };
    }; 

    const rawMarkupDot = () => {   
        return { __html: dot };
      }; 

    return (  
      <div>
        <div className="services">   
            <div className="servicesNested below1000WidthServices">
                <div className="servicesNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/buy.png" align="middle" onClick="buy()" loading="lazy" alt="" />
                    </div>               
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/repair.png" align="middle" onClick="repair()" loading="lazy" alt="" />
                    </div>              
                </div>   
                <div className="servicesNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/rent.png" align="middle" onClick="rent()" loading="lazy" alt="" />
                    </div>              
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/recycle.png" align="middle" onClick="showRecyclePage()" loading="lazy" alt="" />
                    </div>              
                </div>       
            </div> 

            <div className="servicesNested above1000WidthServices">             
                <div className="servicesNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/buy.png?v=3940394" align="middle" onClick="buy()" loading="lazy" alt="" />
                    </div>                  
                </div>
                <div className="servicesNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/repair.png" align="middle" onClick="repair()" loading="lazy" alt="" />
                    </div> 
                </div>
                <div className="servicesNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/rent.png" align="middle" onClick="rent()" loading="lazy" alt="" />
                    </div>                  
                </div>   
                <div className="servicesNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/recycle.png" align="middle" onClick="showRecyclePage()" loading="lazy" alt="" />
                    </div>                  
                </div>                                      
            </div> 
        </div>    

        <div className="topDealsContainer">   
            <div className="topDealsCaption"> 
                <h1>Customers Reviews</h1>                
            </div>              
            <div className="reviews" style={{ margin: wWidth > 1000 ? '0% 5%': '0% 1%' }} dangerouslySetInnerHTML={rawMarkup()} />
            <div className="reviewIndicators" dangerouslySetInnerHTML={rawMarkupDot()} />   
        </div>  

        <div className="threecolumns">   
            <div className="threecolumnsNested">                                      
                <div className="threecolumnsNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/moneyback_icon_phone.png" loading="lazy" alt="" />
                    </div>                
                    <div>
                        <br /><div class="threecolumnsNestedInnerHeaderItem">Money Back Guarantee</div>                           
                    </div>                    
                </div>       
                <div className="threecolumnsNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/warranty_icon_phone.png" loading="lazy" alt="" />
                    </div>                
                    <div>
                        <br /><div className="threecolumnsNestedInnerHeaderItem">12 Months Warranty</div>                         
                    </div>                    
                </div> 
                <div className="threecolumnsNestedInner"> 
                    <div>
                        <img src="https://www.ur1stop.com/images/ruaa/support_icon_phone.png" loading="lazy" alt="" />
                    </div>                 
                    <div>
                        <br /><div className="threecolumnsNestedInnerHeaderItem">24x7 Email Support</div>                            
                    </div>                         
                </div>            
            </div>    
        </div>

        <div class="ourPartner">   
            <div class="ourPartnerCaption"> 
                <h1>Our Partners</h1>                 
            </div>
            <div class="ourPartnerNested"> 
                <div class="ourPartnerNestedInner">
                    <img src="https://www.ur1stop.com/images/ruaa/brands.jpg" loading="lazy" alt="" />
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
        height: targetRef.current ? targetRef.current.offsetHeight : 0
      };
    };
  
    const [dimensions, setDimensions] = useState(getDimensions);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const handleResize = () => {
      setDimensions(getDimensions());
      setWindowDimensions(getWindowDimensions());
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

function getWindowDimensions() {
  const { innerWidth: wWidth, innerHeight: height } = window;
  return {
    wWidth,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default Reviews;