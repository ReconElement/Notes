import axios from 'axios';
async function getData(){
    let response;
    try{
       response = await axios.get("http://localhost:3000/router")
    }
    catch(error){
        console.log(error);
    }
    return response.data;
}

async function postData({title, content}){
    let response;
    try {
        response = await axios.post("http://localhost:3000/router",{title: title, content: content});
    }
    catch(error){
        console.log(error);
    }
    return response.data;
}

async function putData(id, title, content){
    let response;
    try{
        response = await axios.put(`http://localhost:3000/router/${id}`,
            { title: title, content: content}
        );
    }
    catch(error){
        console.log(error);
    }
    return response;
}

async function deleteData(id){
    let response;
    try{
        response = await axios.delete(`http://localhost:3000/router/${id}`);
    }
    catch(error){
        console.log(error);
    }
    return response.data;
}

export {getData, postData, putData, deleteData};

const data = await getData();
export {data};