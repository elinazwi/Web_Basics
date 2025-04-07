import React from "react";

export default function Button({title, onClick}) {
  return (
    <button className="bg-purple-300 hover:bg-purple-700 m-10 text-white px-4 py-2 rounded-lg hover:cursor-pointer" onClick={()=>{
     onClick()
    }}>
     {title}
      
    </button>
  );
}
