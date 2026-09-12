// import axios from "axios"; 
import { body, div } from "motion/react-m";
import { useForm } from "react-hook-form"
import { IoMdLogIn } from "react-icons/io";
import { motion } from "motion/react"
export default function Register() {
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            age: "",
            password: "",
            repassword: "",
        },
    });
    function onsubmit(data) {
        console.log(data);



        //  const {data}=axios.patch()
    }

    return  (
        <body className="bg-dark">
        <div className="py-5 container mt-5">

            <motion.form initial={{scale:0}} animate={{scale:1}} transition={{duration:1}}
             onSubmit={handleSubmit(onsubmit)}
                className="mt-5 w-50 m-auto bg-dark-subtle p-4 shadow-lg rounded-5 form-control ">
                <h1 className="text-center text-dark p-3">Register Page</h1>
                {/*Input Name*/}
                <div className="mb-3">
                    <input
                        {...register("name", {
                            required: { value: true, message: "Name is a Required" },
                            pattern: {
                                value: /^[A-Z][a-z]{3,20}$/,
                                message: "must Start upppercase letter min -3 max-20"
                            },
                        })}
                        type="text"
                        className="form-control"
                        placeholder="Enter your Name" />
                    {
                        errors?.name && <div className="mt-2 text-danger">{errors?.name.message} </div>
                    }
                </div>
                {/*Input Email*/}
                <div className="mb-3">
                    <input
                        {...register("email", {
                            required: { value: true, message: "Email is Register" }
                        })}
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email" />
                    { errors?.email&& <div className="mt-2 text-danger">{errors?.email.message} </div> }
                </div>
                {/*Input age*/}
                <div className="mb-3">
                    <input
                        {...register("age", {
                            required:{value:true, message:"age is Required"},
                         min:18, max:99
                        })}
                        type="number"
                        className="form-control"
                        placeholder="Enter your Age" />
                    {errors?.age&& <div className="mt-2 text-danger">{errors?.age.message} </div>}
                </div>
                {/*Input password*/}
                <div className="mb-3">
                    <input
                        {...register("password",{
                            required:{value:true, message:"password is required"},
                        })}

                        type="password"
                        className="form-control"
                        placeholder="Enter your Password" />
                      {  errors?.password&& <div className="mt-2 text-danger">{errors?.password.message} </div>}
                </div>
                {/*Input confirm password*/}
                <div className="mb-3">
                    <input
                        {...register("repassword",{
                           required:{value:true,message:"repassword is required"} 
                        })}

                        type="password"
                        className="form-control"
                        placeholder="Enter your Confirm Password" />
                           {  errors?.repassword&& <div className="mt-2 text-danger">{errors?.repassword.message} </div>}
                </div>
                <button className=" btn btn-outline-dark mt-3  "><IoMdLogIn />
                    Login</button>
            </motion.form>
        </div>
        </body>
    )
}
