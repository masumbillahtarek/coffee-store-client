import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Login = () => {
    const {signIn}=useContext(AuthContext)
    const handleLogin=(e)=>{
         e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        signIn(email,password)
          .then((result) => {
    console.log(result.user);
   //
   const user={email,lastLoggedAt:result?.user?.metadata?.lastSignInTime}
   fetch('http://localhost:5000/users',{
    method:'PATCH',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(user)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data)
   })
   //
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
    <h2 className='text-3xl font-bold text-center my-6'>Please Login
    </h2>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6 mx-auto">
          <button className="btn btn-primary ">Login</button>
        </div>
      </form>
    </div>
    );
};

export default Login;