"use client"
import { useState } from "react";

export default function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) =>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }
  let renderTask = <h2>No Task Available</h2>
  if (mainTask.length) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8 ">
          <div className="flex items-center justify-between w-2/3">
            <h3 className="text-2xl font-semibold">{t.title}</h3>
            <p className="text-lg font-medium">{t.desc}</p>
            <button 
            onClick={()=>{
              deleteHandler(i)
            }}
            className="bg-red-600 text-white px-4 py-2 rounded font-bold"> 
              Delete
            </button>
          </div>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className="bg-teal-500 p-11 text-5xl font-bold flex justify-center items-center">My To do List</h1>
      <form
        onSubmit={submitHandler}
        className='flex flex-row justify-evenly m-4 p-4'>
        <input
          type="text"
          className='bg-gray-100 px-4 m-8 rounded border-teal-700 border-2'
          placeholder='write Title here'
          value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }}

        />
        <input
          type="text"
          className='bg-gray-100 px-4 m-8 rounded border-teal-700 border-2'
          placeholder='write description here'
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className="bg-teal-800 text-white p-2 px-5 m-8 rounded ">
          Submit
        </button>
      </form>
      <hr />
      <div className="bg-slate-200 p-8 text-2xl">
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  );
}
