import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import axios from "axios";
import Footer from "../components/Footer";

import { useNavigate } from "react-router";

import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import globalVar from "../components/globalVar";

export default function ProductRegistration() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        class: "",
        farmer: ""
    });

    const onChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:5000/api/product", product)
            .then((res) => {
                setProduct({
                    title: "",
                    price: "",
                    class: "",
                    farmer: ""
                });
                globalVar = true;
                navigate("/");
            })
            .catch((err) => console.log("Error while product registration"));
    }

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const fileInput = useRef(null)

    return (
        <div>
            <Navbar />
            <div className="product">
                <Card color="white" className="p-5" shadow={false}>
                    <Typography variant="h4" color="blue-gray">
                        Create a Listing
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Enter your details of product.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={onSubmit}>
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" label="Name" name="title" value={product.title} onChange={onChange} />
                            <Input size="lg" label="Price" name="price" type="number" value={product.price} onChange={onChange} />
                            <Input size="lg" label="Class" name="class" value={product.class} onChange={onChange} />
                            <Input size="lg" label="Farmer" name="farmer" value={product.farmer} onChange={onChange} />
                        </div>
                        <Typography variant="h4" color="blue-gray">
                            Add image
                        </Typography>
                        <input type="file" onChange={handleChange} style={{ display: 'none' }} ref={fileInput} />
                        <button
                            className='upload-btn'
                            onClick={() => fileInput.current.click()}
                        >Choose File</button>
                        <img src={file} />



                        <Button type="submit" className="mt-6" fullWidth>
                            Create
                        </Button>
                    </form>
                </Card>
            </div>
            <div class="fixed inset-x-0 bottom-0"><Footer /> </div>
        </div>
    );
}
