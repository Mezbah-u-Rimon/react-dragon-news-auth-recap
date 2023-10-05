import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();

        const from = new FormData(e.currentTarget)
        const name = from.get("name")
        const photo = from.get("photo")
        const email = from.get("email")
        const password = from.get("password")

        console.log(name, photo, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })

    }

    return (
        <div className="pb-20">
            <Navbar></Navbar>
            <div>
                <h2 className="text-3xl my-10 text-center"> Please Register </h2>
                <form onSubmit={handleRegister} className="md:3/4 lg:w-1/2 mx-auto ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name </span>
                        </label>
                        <input type="text" name="name" placeholder=" Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URl </span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Your Photo URL " className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email Address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            name="password"
                            placeholder="Enter Your Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register </button>
                    </div>
                </form>
                <p className="text-center mt-4"> Already have an account ? <Link className="text-red-600 font-bold" to="/login"> Login </Link> </p>
            </div>
        </div>
    );
};

export default Register;