import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';

const WeatherWrap = styled.div`
  width: 100vw;
  height: 50vh;
  border: 1px solid black;
  display: flex;
  text-align: center;
  justify-content: center;

  .appContentWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

const ResultWrap =  styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
`


function Weather() {
  const API_KEY = '82785b4e5c8cd96dfb5089073ff53cc1';

  const [location, setLocation] = useState("");
  const [result,setResult] = useState({});
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async(e) => {
    if(e.key==='Enter') {
      try{
        const data = await axios({
          method : 'get',
          url : url
        })

        console.log(data);
        setResult(data);
      }

      catch(error) {
        alert(error);
      }
    }
  }

  return (
    <WeatherWrap>
      <div className='appContentWrap'>
        <input 
          placeholder='도시 이름을 입력하세요'
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
          type='text'
          onKeyDown={searchWeather}/>
          {
            Object.keys(result).length !==0 &&
            <ResultWrap>
              <div className='city'>
                {result.data.name}
              </div>
              <div className='temperature'>
                {Math.round((result.data.main.temp - 273.15) * 10) / 10}°C
              </div>
              <div className="sky">
                {result.data.weather[0].main}
              </div>
            </ResultWrap>
          }
      </div>
      
    </WeatherWrap>
  )
}


export default Weather;
