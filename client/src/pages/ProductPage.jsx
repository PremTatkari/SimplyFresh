import React, {useState,useEffect} from "react";
import axios from "axios";
import Cards from "../components/Cards";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

export default function ProductPage() {
  const [products, setProduct] = useState([]);

  const {email} = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/product/${email}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log("Error");
      });
  }, []);


  const productList =
  products.length === 0
    ? "No products"
    : products.map((product, key) => (
        <Cards
          title={product.title}
          price={product.price}
          class={product.class}
          key={key}
        />
      ));
  return (
    
    <div className="bg-white">
      <Navbar/>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {email + "'s produce" }
        </h2>
      
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productList}
          {/* {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))} */}
        </div>

      </div>
      <div class="fixed inset-x-0 bottom-0"><Footer /> </div>
    </div>
  );
}
