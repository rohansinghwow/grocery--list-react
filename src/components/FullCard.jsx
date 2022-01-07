import React from "react";

import SingleList from "./SingleList";


export default function FullCard(){

    const [data,setData] = React.useState(setDatafromLocalStorageOrNot())
    const [listData, setlistData] = React.useState([])
    
    
    function setDatafromLocalStorageOrNot(){
        const list = localStorage.getItem('todo')
        if(list){
            return JSON.parse(list)
        }
        else{
            return []
        }
    }
    

    function handleChange(event){
        setlistData(prevData=>{
            return (prevData=event.target.value)
        })
        
    }
    function handleSubmit(event){
            event.preventDefault()
            const newList = [...data, listData]
            setData(prevData=>prevData=newList)
            
            
    }

    function clearAll(){
        setData([])
        localStorage.clear()
    }

    function handleEditChange(editIndex,val){
        console.log(data[editIndex])
         
        setData(()=>{
            const newArr = [...data]
            newArr[editIndex] = val
            return newArr
        })
        
        
        
    }

    function handleDelete(id){
        const listfilter = data.filter((item,index)=>index!==id)
        setData(listfilter)
    }
    
    React.useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(data))
        
    }, [data])

    return(
        <div className="divide-y mt-5 pb-6 divide-gray-300 max-w-screen-sm shadow-md bg-white container rounded-md mx-auto">

            <form onSubmit={handleSubmit} className="input-feild flex px-4 py-4 justify-between items-center">
                <input onChange={handleChange} value={listData} type="text" name="inputText" id="inputText" className="input-box py-2 px-2 w-12/13 border-rose-500 border-2 rounded" />
                <button className="px-6 text-fuchsia-50 rounded hover:bg-blue-400 py-2 bg-blue-500">Add</button>
            </form>

        {data.map((item,index)=><SingleList key={index} id={index} text={item} delete={handleDelete}  editChange={handleEditChange}/>)}

        
            

        <button onClick={clearAll} className=" px-4 py-2 bg-blue-500 rounded text-gray-50  grid place-content-center w-32  mx-auto shadow-sm"><span className="text-center">Clear All</span></button>
        </div>
    )
}
