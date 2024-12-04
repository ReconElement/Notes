import { useState } from 'react'
import {useEffect} from 'react';
import './App.css'
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Sidebar2 from './components/Sidebar2.jsx';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(0);
    const [update, setUpdate] = useState(false);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                let data = await fetch("http://localhost:3000/router");
                data = await data.json();
                setData(data);
            }
            catch(err){
                console.log(err);
            }
            finally{
                setLoading(false);
            }
        }
        fetchData();
    }, [update]);
  return (
   <div className="m-1 flex flex-row h-screen ">
    <Sidebar2 data={data} setData={setData} loading={loading} setLoading={setLoading} show={show} setShow={setShow}/>
    <Content data={data} setData={setData} loading={loading} setLoading={setLoading} show={show} setShow={setShow} update={update} setUpdate={setUpdate}/>
   </div>
  )
}

export default App
