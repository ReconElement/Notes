import { useState } from "react";
import {postData, putData} from "../data.js"
// const Editor = ()=>{
//     const [title, setTitle] = useState(" ");
//     const [content, setContent] = useState(" ");
//     return (
//         <div className="p-2">
//             <form onSubmit = {
//                 (e)=>{
//                     e.preventDefault();
//                     e.stopPropagation();
//                 }
//             }>
//                 <label htmlFor="title">Title: </label><br/>
//                 <input type="text" id="title" name="title" onChange = {
//                     (e)=>{
//                         e.preventDefault();
//                         e.stopPropagation();
//                         setTitle(e.target.title);
//                     }
//                 }/><br/>
//                 <label htmlFor="content">Note: </label><br/>
//                 <textarea id="content" name="content" rows="5"  cols="40" onChange={
//                     (e)=>{
//                         e.preventDefault();
//                         e.stopPropagation();
//                         setContent(e.target.content);
//                     }
//                 }/><br/>
//                 <input className="text-blue-800 p-2 bg-slate-300" type="submit" value="Submit" />
//             </form>
//             <h1>{title} {content}</h1>
//         </div>
//     )
// };

// export default Editor;
const Editor = ({update, setUpdate, edit, getEdited, show, object, setObject}) => {

  function handleTitleChange(e) {
    setObject({
      ...object,
      title: e.target.value,
    });
  }

  function handleContentChange(e) {
    setObject({
      ...object,
      content: e.target.value,
    });
  }

  function handleReset() {
    document.getElementById("title").value=' ';
    document.getElementById("content").value=' ';
    setObject({
      title: " ",
      content: " ",
    });
  }

  return (
    <div className="border-zinc-500">
      <form
        className="p-2"
        onSubmit={async (e) => {
          e.preventDefault();
          if(document.getElementById('title').value.length <= 0 && document.getElementById('content').value.length <= 0) {
            return;
          }
          if(edit.id !== null){
              const res = await putData(edit.id, object.title, object.content);
              console.log(edit.id, object.title, object.content);
              console.log(res);
              document.getElementById("title").value = " ";
              document.getElementById("content").value = " ";
              setObject({
                  title: " ",
                  content: " "
              });
              edit.id = null;
              setUpdate(()=>!update);
              return;
          }
          // postData(object).then(res=>(console.log(res)));
          const res = await postData(object);
          console.log(res);
          console.log(object)
          document.getElementById('title').value = ' ';
          document.getElementById('content').value=' ';
          setObject({
              title: " ",
              content: " "
          })
          setUpdate(()=>!update);

        }}
      >
        <label htmlFor="title">Title: </label>
        <br />
        <input
          type="text"
          id="title"
          name="title"
          value={object?.title}
          onChange={handleTitleChange}
        />
        <br />
        <label htmlFor="content">Note: </label>
        <br />
        <textarea
          id="content"
          name="content"
          rows="5"
          cols="40"
          value={object?.content}
          onChange={handleContentChange}
        />
        <br />
        <input
          className="text-blue-800 p-2 m-1 bg-slate-300"
          type="submit"
          value="Submit"
        />
        <Button onClick={handleReset}>Reset</Button>
        <input
          className="text-blue-800 p-2 m-1 bg-slate-300"
          type="button"
          value="Reset"
          onClick={handleReset}
        />
      </form>
    </div>
  );
};

const Button = ({ onClick, children }) => {
  <button className="text-blue-800 p-2 m-1 bg-slate-300" onClick={onClick}>
    {children}
  </button>;
};

export default Editor;
