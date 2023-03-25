import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

import React, { useState } from "react";

export default function ProductRegistration() {
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        class: ""
    });

    const onChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        
    axios
    .post("http://localhost:5000/api/product", product)
    .then((res) => {
        console.log("Inside");
        setProduct({
            title: "",
            price: "",
            class: ""
        });
        navigate("/");
    })
    .catch((err) => console.log("Error while product registration"));
    }

  return (
    <div className="product">
      <Card color="transparent" shadow={false}>
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
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Create
          </Button>
        </form>
      </Card>
    </div>
  );
}
