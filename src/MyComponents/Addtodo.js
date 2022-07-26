
import React, { useState } from "react";

const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert('Title or Description cannot be Blank!!')
        }
        else{props.addtodo(title,desc);
        setTitle("");
        setDesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add To do</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        To do Title
                    </label>
                    <input
                        type="title"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value) } }
                        aria-describedby="emailHelp"
                    />

                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        To do Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="desc"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value) } }
                    />
                </div>
                <button type="submit" className="btn btn-sm btn-success">
                    Add To do
                </button>
            </form>
        </div>
    );
};

export default Addtodo;
