import "./Banner.css";
import axios from "axios";
import { useEffect, useState } from "react"; 
 
const Banner = () => {  

    const [banner, setBanner] = useState([]);
    const [i, setIndex] = useState(0);
    var host = 'http://ur1stop.com/', bannerStyle, NTDZ_Banner_Link, NTDZ_Banner_Name, c;

    const getBanner = async () => {   
        const { data } = await axios.get(            
            `http://127.0.0.1/banner_1.php`
        );
        setBanner(data);       
        //console.log('banner data ' + data);
    };  

    useEffect(() => {        
        getBanner();        
    }, []); 

    c = 'default'; 

    if(banner.products != undefined)
    { 
        NTDZ_Banner_Link = host + banner.products[i].NTDZ_Banner_Link;
        NTDZ_Banner_Name = banner.products[i].NTDZ_Banner_Name; 

        if(NTDZ_Banner_Name == 'onclick') 
        { 
            c = 'pointer'; 
        }     

        //console.log('banner i ' + i + ' ' + banner + ' ' + NTDZ_Banner_Link + ' ' + NTDZ_Banner_Name + ' ' + bannerStyle);
    }

    return (  
        <div id="bannerContainerId" class='bannerContainer'>
            <div class='bannerInnerContainer'>    
                <img id= {`bannerImage_${i}`} ind={i} class='bannerImg' src={NTDZ_Banner_Link} placeholder={NTDZ_Banner_Name} style={{width: '100%', height: '100%', cursor: c }} onload='showDots(this)' />         
            </div> 						      
        </div>
    );
};

export default Banner;