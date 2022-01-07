import React from "react";

export default function SingleList(props){

    const textEdit = React.useRef(null)

    return (
        <div className="flex justify-between flex-wrap items-center list px-4 py-6 w-full">
                <div className="list-content flex justify-start items-center">
                    <input className="accent-rose-300 text-gray-100  border-blue-600 w-5 h-5 mx-3 rounded-md"  type="checkbox" />
                    {props.edit ? <input type='text' name="editInput" ref={textEdit} defaultValue={props.text}  className="text-gray-600 py-1 px-1"/>:
                    <span className="text-gray-600 ">{props.text}</span>}
                   
                    
                </div>
                
                {
                
                props.edit?
                <div className="btn">
                    <button onClick={props.editFunction}>Close</button>
                    <button onClick={()=>props.editChange(props.id,textEdit.current.value)}>Ok</button>
                </div>
                :

                <div className="btn">
                                    
                <button onClick={()=>props.delete(props.id)} className="px-4 py-2 bg-rose-500 rounded text-gray-50 hover:cursor-pointer hover:bg-rose-400 font-semibold">Delete</button>

                <button onClick={props.editFunction} className="px-4 py-2 bg-blue-500 rounded text-gray-50 hover:cursor-pointer hover:bg-blue-400 font-semibold">Edit</button>


                </div>
                
                }

                
    </div>
    )
    
    }
    
    
