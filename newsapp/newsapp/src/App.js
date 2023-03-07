import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./App.css"

function App() {
  const[news,setNews]=useState([])

  useEffect(()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f919f5a25d68406ea36c6d21bd25cad0").then((res)=>{
      setNews(res.data.articles)
    })
   
  },[])
  return (
    <>
    
    <div className='container my-5'>
      <div className="row text-center">.
      {
news.map((val)=>{
  return(
<div className="card" style={{width:"18rem"}}>
  <img src={val.urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{val.title}</h5>
    <p className="card-text">{val.description}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
  ) 
  })
      }
      
      
      </div>

    </div>
    </>
  )
}

export default App
