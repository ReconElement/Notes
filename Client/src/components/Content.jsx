import { useState } from "react";
import {useEffect} from "react";
import Editor from "./Editor";
import Display from "./Display"
const Content = ({data, setData, loading, setLoading, show, setShow, update, setUpdate})=>{


    const [edit, getEdited] = useState({
        id: null,
        title: " ",
        content: " ",
    });
    const [object, setObject] = useState({
        title: " ",
        content: " ",
    });
    const [deleted, setDelete] = useState(-1);
  return (
    <div className="bg-blue-200 flex flex-col h-screen container mx-auto">
        <Editor object={object} setObject={setObject} data={data} setData={setData} loading={loading} setLoading={setLoading} show={show} setShow={setShow} update={update} setUpdate={setUpdate} edit={edit} getEdited={getEdited}/>
        <Display data={data} setData={setData} loading={loading} setLoading={setLoading} show={show} setShow={setShow} getEdited={getEdited} edit={edit} object={object} setObject={setObject} delete={deleted} setDelete={setDelete}
        setUpdate={setUpdate} update={update}/>
    </div>
  )
}
export default Content;