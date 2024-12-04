import hamburger from '../assets/hamburger.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import {list} from "postcss";
//import { data } from '../data';
function Sidebar() {
    const [display, setDisplay] = useState(false);
    const [data, setData] = useState([]);
    const fetchData = ()=>{
        return axios.get('http://localhost:3000/router').then((response)=> setData(response.data))
    }
    useEffect(()=>{
        fetchData();
    }, []);
  return (
    <div className="p-4 flex flex-col">
       <div className="flex flex-row"><div><button className="pt-0.5" onClick={()=>{setDisplay(!display)}}><img src={hamburger} width="20" height="20" alt="menu-logo"/></button></div>
       <div><p className = "px-2">{display && "Notes"}</p></div>
       </div>
        <div>{display && <Menubar data={data}/>}</div>
    </div>
  )
}
// function Menubar(){
//     return(
//         <div className="bg-blue-200">
//             <ul className="">
//                 <li className='bg-blue-400 p-1 m-3'>What is up dude?</li>
//                      <li className='bg-blue-400 p-1 m-3'>What is up dude?</li>
//                <li className="bg-blue-400 p-1 m-3">New Note added</li>
//                 <li className="bg-blue-400 p-1 m-3">How do you do?</li>
//             </ul>
//         </div>
//     )
// }
 function Menubar(props){
    // const titleItem = data.map((datum)=>{<li className="bg-blue-400 p-1 m-3">{datum.title}</li>});
    return (
        <div className="bg-blue-200">
          <ul>
              {props.data.map((item) => {
                  return (
                      <li key={item.id} className="bg-blue-400 p-1 m-3">{item.title}</li>
                  )
              })}
          </ul>
        </div>
    )
};


export default Sidebar;