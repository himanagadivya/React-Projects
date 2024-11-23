import React, { useState } from 'react'

function PrimaryGalleryComponent() {
  


const allImages = [
  {
    id:0,
    imgUrl:"https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg"
  },
  {
    id:1,
    imgUrl:"https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg"
  },
  {
    id:2,
    imgUrl:"https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg"
  },
  {
    id:3,
    imgUrl:"https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg"
  },
  {
    id:4,
    imgUrl:"https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg"
  },
  {
    id:5,
    imgUrl:"https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg"
  },

]
let [showimage,setimage] = useState(allImages[0]);
const imageClick = (image)=>{
  setimage(image);

}
const previous = ()=>{
  let findpresentIndex  = allImages.findIndex((t)=> t.id == showimage.id);
  let nextIndex = findpresentIndex - 1
  if(nextIndex != -1){
    setimage(allImages[nextIndex]);
  }
  else{
    setimage(allImages[allImages.length-1]);
  }

}
const next = ()=>{
  let findpresentIndex  = allImages.findIndex((t)=> t.id == showimage.id);
  let nextIndex = findpresentIndex + 1
  if(nextIndex <= allImages.length-1){
    setimage(allImages[nextIndex]);
  }
  else{
    setimage(allImages[0]);
  }
  

  
}



  return (
    <div>
      <div className='primary'>
       <h1>PrimaryGalleryComponent</h1>
       <div className='d-flex align-items-center justify-content-center'>
       
        {
          <div className=''>
              <img  src={showimage.imgUrl}/>
            </div>
        
        
       
        }
        </div>
        <div className='d-flex align-items-center justify-content-center'>
        <div><button className='previous' onClick={previous}>Previous</button></div>

        {
        allImages.map((t)=>{
          return (
            <div>
          <div key={t.id} className=''>
            
          <img  src={t.imgUrl}  width="200px" height="200px" onClick={()=>imageClick(t)}/>
          
        </div>
        </div>
        )
        })
      }
        <div><button className='next' onClick={next}>Next</button></div>

       </div>
      </div>
    </div>
  )
}

export default PrimaryGalleryComponent