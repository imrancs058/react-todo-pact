import React, { useEffect, useState } from "react";
import axios from 'axios';
import './index.css'
function App() {

  const [item,setItem]=useState("")
  const [itemList,setItemList]=useState([])
    const submitHandler=(e)=>{
      e.preventDefault();
        axios.post('http://localhost:3322/todo',{name:item}).then((response)=>{
            var ls=itemList;
            ls.push(response.data.name)
            setItemList(ls);
        }).catch((err)=>{
            console.log(err.message)
        })
    }

    useEffect(() => {
        axios.get('http://localhost:3322/todo').then((response)=>{
            let itemarray=[];
            var arr=response["data"];
            arr.forEach((item)=>{
                itemarray.push(item.name)
            })
            setItemList(itemarray);

        })
    },[itemList]);


    return(
      <div className="App">
          <form className={'marginLeft mb-1'} onSubmit={submitHandler}>
        <input type="text" id="add-todo-txt" value={item} onChange={e => setItem(e.target.value)}/>
        <button id={"add-todo-btn"} type="submit">Add</button>
          </form>
        <div id="add-todo-list">
            {itemList.map((itemTodo,index)=>{
                return (<div className={'ml-2 mb-1 '} key={index}>
                    <span className={'app border bg-light'}>{itemTodo}</span>

                </div>)
            })}


        </div>
      </div>
  )
}

export default App;
