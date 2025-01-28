import { useState } from "react";

const NewProduct = (props) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    const handleClear = () => {
        setName("");
        setAmount("");
    }

    return (
        <>
            <div className="mb-3">
                <input className="form-control" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <input type="number" className="form-control" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
            </div>
        
            <div className="mb-3">
                <button className="btn btn-light" onClick={handleClear}>Clear</button>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={() => props.addProductF({name, amount})}>Add</button>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" onClick={() => props.updateProductF({name, amount})}>Update</button>
            </div>
        </>
    )
};

export default NewProduct