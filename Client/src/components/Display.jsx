import {useEffect} from "react";
import {useState} from "react";
import {deleteData} from "../data.js";
const Display = ({data, setData, loading, setLoading, show, setShow, edit, getEdited, object, setObject, deleted, setDelete, update, setUpdate})=>{
    return (
        <div className="p-3">
            <h1 className="text-center">{loading ? "loading..." : data?.[show]?.title}</h1>
            <p>{loading ? "loading..." : data?.[show]?.content}</p>
            <input type="submit" className="text-blue-800 p-2 m-1 bg-slate-300"
                   value={"Edit"}
                   onClick={() => {
                       edit = data?.[show];
                       // setObject(edit);
                       edit.id = null;
                       show = parseInt(show);
                       edit.id = show + 1;
                       getEdited(edit);
                       setObject({title: edit.title, content: edit.content})
                       console.log(edit?.id, edit.title, edit.content);
                   }}
            />
            <input type="submit" className="text-blue-800 p-2 m-1 bg-slate-300"
                   value={"Delete"}
                   onClick={async () => {
                       // setObject(edit);
                       // edit.id = null;
                       show = parseInt(show);
                       deleted = show +1;
                       // edit.id = show + 1;
                       // getEdited(edit);
                       setDelete(deleted)
                       console.log(deleted);
                       const response = await deleteData(deleted);
                       console.log(response);
                       setUpdate(()=>!update);
                       // setObject({title: edit.title, content: edit.content})
                       // console.log(edit?.id, edit.title, edit.content);
                   }}
            />
        </div>
    )
};

// https://www.angularminds.com/blog/real-time-data-synchronization-in-react-application
export default Display;
