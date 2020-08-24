import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, Setdescription] = useState("initial value");

    return (
    <Fragment>
        <h1 className="text-cente mt-5">Pern Todo List</h1>
        <form className="d-flex mt-5">
            <input type="text" className="form-control" value={description}/>
            <button className="btn bnt-success">Add</button>
        </form>
    </Fragment>
    )
};

export default InputTodo;