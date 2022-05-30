import { useEffect, useState } from "react";
import React from "react";
import { Sun, Moon, House } from "phosphor-react";
import './style.css'




function Home() {

  const [hour, setHour] = useState(6);
  let periodo =<Sun size={150} color="#e8f812" />;
  
  
  useEffect(() => {
    let interval = null;
   

    interval = setInterval(() => {
      setHour(hour + 1);
    }, 1000);

    if (hour > 23) {
      setHour(0);
    }
   
    return () => clearInterval(interval);
  }, [hour]);

  if (hour>= 18 || hour<6 ){
    periodo= <Moon size={150} color="#4f59ee" />;    
  }

  




  return (
    <div className='container'>
       <h1>Geração de Energia Solar </h1>
      <h2>Hora do dia: {hour}h </h2>
      {periodo}
      <div>
        <House size={300} color="#eeab4f" />
      </div>  
      
      
    </div>
  )
}

export default Home;
