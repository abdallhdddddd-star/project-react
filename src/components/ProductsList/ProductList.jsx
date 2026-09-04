import axios from "axios";
import { useEffect, useState } from "react"

import Card from "../Card/Card";


export default function ProductList() {
    const [Products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getProduct() {

        try {
            setIsLoading(true);
            const { data } = await axios.get("https://fakestoreapi.com/products");
            setProducts(data);
            setError("")
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getProduct();
    }, []);


  

    if(error){
        return <div className="alert alert-danger"></div>
    }





    return (
        <>
            <section>
                <div className="container py-5 overflow-hidden">
                    <header className=" text-center ">
                        <h1 className=" text-body">Our Featured Products</h1>
                        <p>Discover our handpicked selection of premium products at unbeatable prices</p>
                    </header>


                    <div id="row" className="row gy-3">

                        {Products.map((product) => <Card product={product} key={product.id} />)}
                    </div>
                </div>


            </section>






        </>
    )
}
