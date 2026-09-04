import { FiArrowRight } from "react-icons/fi";
import styles from "./hero.module.css"
console.log(styles);

export default function Hero() {

    return (<>
        
        <div className={styles.Hero}>
            <div className={`caption text-light text-center` + styles["p-6"]}>
                <h1 className={styles["text-xxl"]}>Discover Amazing Products
                    <span className={styles["span"]} > at Great Prices</span></h1>
                <p id="about" className=" fs-3 w-75 mx-auto">Shop from our curated collection of premium products. Quality guaranteed, prices you'll love.</p>
                <div className="btns d-flex gap-3 justify-content-center ">
                    <button className="btn btn-primary text-light btn-lg" >Shop Now<FiArrowRight />

                    </button>
                    <button className=" btn btn-outline-light btn-lg">View Products</button>
                </div>
            </div>
        </div>
    </>)
}
