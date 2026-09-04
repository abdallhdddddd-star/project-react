// import axios from "axios"; 
import { useForm } from "react-hook-form"

export default function Register() {
    const { handleSubmit, register } = useForm({
        defaultValues: {
            name: "",
            email: "",
            age: "",
            password: "",
            repassword: "",
        },
    });
    function  onsubmit(data) {
        console.log(data);



        // const {data}=axios.patch()
    }

    return (
        <div className="py-5 container mt-5">

            <form onSubmit={handleSubmit(onsubmit)} className="mt-5 w-50 m-auto bg-light p-4 shadow-lg">
                <h1 className="text-center text-dark p-3">Register Page</h1>
                {/*Input Name*/}
                <div className="mb-3">
                    <input 
                    {...register("name")}
                    type="text"
                        className="form-control"
                        placeholder="Enter your Name" />
                </div>
                {/*Input Email*/}
                <div className="mb-3">
                    <input
                    {...register("email")}
                    type="email"
                        className="form-control"
                        placeholder="Enter your Email" />
                </div>
                {/*Input age*/}
                <div className="mb-3">
                    <input
                    {...register("age")}
                    
                    type="number"
                        className="form-control"
                        placeholder="Enter your Age" />
                </div>
                {/*Input password*/}
                <div className="mb-3">
                    <input
                    {...register("password")}
                    
                    type="password"
                        className="form-control"
                        placeholder="Enter your Password" />
                </div>
                {/*Input confirm password*/}
                <div className="mb-3">
                    <input
                    {...register("repassword")}
                    
                    type="password"
                        className="form-control"
                        placeholder="Enter your Confirm Password" />
                </div>
                <button className=" btn btn-outline-dark mt-3  ">Register</button>
            </form>
        </div>
    )
}
