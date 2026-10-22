import axios from "axios";
import React, { useState } from "react";

const ApiProduct = () => {
    const [product, setProduct] = useState({
        id: 0,
        name: "",
        category: 0,
        price: 0,
        warranty: "",
        rating: 0,
        description: ""
    })
    const data = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
    }

    return (
        <div className="container p-5 text-center ">
            <div className="col-lg-6 shadow mx-auto">
                <h3 className="text-danger">Add product</h3>
                <form>
                    <input type="text" placeholder="Enter your name" name="name" required className="form-control mb-3" onChange={data} />
                    <input type="text" placeholder="Enter your catagory" name="category" required className="form-control mb-3" onChange={data} />
                    <input type="text" placeholder="Enter your  warranty" name="Warranty" required className="form-control mb-3" onChange={data} />
                    <input type="text" placeholder="Enter your description" name="description" required className="form-control mb-3" onChange={data} />
                    <input type="text" placeholder="Enter your price" name="price" required className="form-control mb-3" onChange={data} />
                    <input type="text" placeholder="Enter your id" name="id" required className="form-control mb-3" onChange={data} />
                    <input type="text" placeholder="Enter your rating" name="rating" required className="form-control mb-3" onChange={data} />
                    <button type="submit" className="btn  btn-primary w-50 h-100">submit</button>
                </form>
            </div>
        </div>
    );
};

export default ApiProduct;