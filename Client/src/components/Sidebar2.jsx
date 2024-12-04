import hamburger from '../assets/hamburger.svg';
import {useState, useEffect} from 'react';
function Sidebar2({data, setData, loading, setLoading, show, setShow}){
    const [display, setDisplay] = useState(false);
    return (
        <div className="p-4 flex flex-col">
            <div className="flex flex-row"><div><button className="pt-0.5" onClick={()=>{setDisplay(!display)}}><img src={hamburger} width="20" height="20" alt="menu-logo"/></button></div>
                <div><p className = "px-2">{display && "Notes"}</p></div>
            </div>
            <div>{display && <Menubar data={data} setShow={setShow} loading={loading} />}</div>
        </div>
    )
}

function Menubar(props){
    // const titleItem = data.map((datum)=>{<li className="bg-blue-400 p-1 m-3">{datum.title}</li>});
    function onClick(event){
        event.preventDefault();
        event.stopPropagation();
        props.setShow(event.target.id);
        console.log(event.target.id);
    }
    return (
        <div className="bg-blue-200">
            <ul>
                {props.data.map((item, id) => {
                    return (
                        <li onClick={onClick} key={item.id} id={id} className="bg-blue-400 p-1 m-3">{item.title}</li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Sidebar2;