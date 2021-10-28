import React, { useEffect, useState } from "react";

function App() {
  const [item,setItem]=useState("")
  return(
      <div>
        <input type="text" id="add-todo-txt" value="" onChange={(evt)=>setItem(evt.target.value)}/>
        <button id={"add-todo-btn"}>Add</button>
        <div id="add-todo-list">


        </div>
      </div>
  )
}

export default App;
