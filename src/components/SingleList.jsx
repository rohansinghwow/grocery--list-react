import React from "react";

export default function SingleList(props){

    const textEdit = React.useRef(null)
    const [edit,setEdit] = React.useState(false)


    function handleEdit(){
        console.log('Hey')
        setEdit(prevData=>!prevData)
    }
    return (
        <div className="flex justify-between flex-wrap items-center list px-4 py-6 w-full">
                <div className="list-content flex justify-start items-center">
                    
                    {edit ? <input type='text' placeholder=" " name="editInput" ref={textEdit} defaultValue={props.text}  className="text-gray-600 py-1 px-1 border-2 border-blue-500 rounded-md "/>:
                    <span className="text-gray-600 ml-2">{props.text}</span>}
                   
                    
                </div>
                
                {
                
                edit?
                <div className="btn flex justify-around items-center">
                    <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 rounded text-gray-50 hover:cursor-pointer hover:bg-blue-400 font-semibold">Close</button>
                    <button className="px-4 py-2 bg-blue-500 rounded text-gray-50 hover:cursor-pointer hover:bg-blue-400 font-semibold ml-2" onClick={()=>{
                        props.editChange(props.id,textEdit.current.value)
                        handleEdit()
                    }
                    }>Ok</button>
                </div>
                :

                <div className="btn">
                                    
                <button onClick={()=>props.delete(props.id)} className="px-4 py-2 bg-rose-500 rounded text-gray-50 hover:cursor-pointer hover:bg-rose-400 font-semibold">Delete</button>

                <button onClick={handleEdit} className="px-4 py-2 bg-blue-500 rounded text-gray-50 hover:cursor-pointer hover:bg-blue-400 font-semibold ml-2">Edit</button>


                </div>
                
                }

                
    </div>
    )
    
    }
    
    
