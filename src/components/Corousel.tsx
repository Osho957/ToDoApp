import { useState } from "react";
import '../components/Corousel.css';

export default function Corousel() {
    const [current,setCurrent] = useState<number>(0);
  const images = [
    "https://cdn.pixabay.com/photo/2021/11/17/16/40/bike-ride-6804105_960_720.jpg",
    "https://cdn.pixabay.com/photo/2022/02/15/22/10/town-7015699_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/10/24/18/16/stream-6738889_960_720.jpg",
  ];
  return (
      <>
      <div className="img_container"><img src={images[current]} alt ="Images" /></div>
      <div className="btn_container">    
      <button className="btn" disabled = {current===0?true:false} onClick={()=>setCurrent(current-1)}>Left</button>
      <button className="btn" disabled = {current===images.length-1?true:false} onClick={()=>setCurrent(current+1)}>Right</button>
      </div>

      
      </>
  );
}
