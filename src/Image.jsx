import React  from 'react';
import Img from "./img/headerBcg.jpeg";
import ImgP from "./img/person1.jpg";

function Image() {
    
   return (
      <>
      <div className='container-fluid'>
           <div className="header_image">
            <img className="img-fluid" style={{width: '100%',height:'140px'}}
            src={Img}
            alt="img"/>
        </div>
                <div className="profile_image">
                    <img className="circle" style={{width:'200px', height: '200px',
                                           borderRadius: '100%',top: '20px',
                                            position: 'absolute'}}
                                     src={ImgP}
                                    alt="Joh Doe"/>

                </div>
      </div>
    </>
   )

}
export default Image;