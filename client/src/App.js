import { useState, useEffect } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'
import { BiRefresh } from 'react-icons/bi'
import axios from 'axios'
import mongoDbLogo from './images/mongodblogo.PNG'
import expressLogo from './images/expressLogo.PNG'
import reactLogo  from './images/reactLogo.png'
import nodejsLogo from './images/nodejslogo.jpg'
import './App.css';

function App() {
  const [count, setCount] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchCounter = async() =>{
    try{
      const res = await axios.get(`${process.env.REACT_APP_API}/api/counters`)
      
      setCount(res.data)
      setLoading(false)
    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(() => {
    fetchCounter()
  }, [])

  const decrement  = async() => {
    try{
      const res = await axios.put(`${process.env.REACT_APP_API}/api/counters/dec/${count._id}`)
      setCount(res.data)
    }catch(err){
      console.log(err.message)
    }
  }

  const increment  = async() => {
    try{
      const res = await axios.put(`${process.env.REACT_APP_API}/api/counters/inc/${count._id}`)
      setCount(res.data)
    }catch(err){
      console.log(err.message)
    }
  }

  const reset = async() => {
    try{
      await axios.put(`${process.env.REACT_APP_API}/api/counters/reset/${count._id}`)
      fetchCounter()
    }catch(err){
      console.log(err.message)
    }
  }


  return (
    <div className="App">
      <div className="container">
        <div className="orange-box">
          <h1>Counter App</h1>
        </div>

        <div className="white-box">
          <div className="dec-btn" onClick={decrement}>
            <FaMinus />
          </div>
          <div className="center">
            {
              count && !loading?
              <>
                <h1 className='number'>{count.value}</h1>
                <div className="reset-btn" onClick={reset}>
                  <BiRefresh />
                  Reset
                </div>
              </>
              :
              <p className='loading'>Loading...</p>
            }
           
          </div>
         
          <div className="inc-btn" onClick={increment}>
            <FaPlus />
          </div>
        </div>

        <div className="footer">
          <small>Powered by:</small>
          <div className="images">
            <img src={mongoDbLogo} alt="react" className='mongoDBLogo' />
            <img src={expressLogo} alt="react" className='expressLogo' />
            <img src={reactLogo} alt="react" className='reactLogo' />
            <img src={nodejsLogo} alt="react" className='nodeJSLogo' />
          </div>
       
        </div>

      </div>
    </div>
  );
}

export default App;
