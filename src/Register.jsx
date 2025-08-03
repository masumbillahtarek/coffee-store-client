import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2'
const Register = () => {
    const{createUser}=useContext(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password)
        createUser(email,password)
          .then((result) => {
    console.log(result.user)
    //Start database
    const createAt=result.user?.metadata?.creationTime
    const user={name,email,CreatedAt:createAt};
    fetch('http://localhost:5000/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
Swal.fire({
  position: "center",
  icon: "success",
  title: "Your Account SuccessFully Registered",
  showConfirmButton: false,
  timer: 2000
});
        }
    })
    //End Database
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  console.log(errorCode,errorMessage)
  });
    }
    return (
   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
    <h2 className='text-3xl font-bold text-center my-6'>Please Register</h2>
      <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6 mx-auto">
          <button className="btn btn-primary ">Register</button>
        </div>
      </form>
    </div>
    );
};

export default Register;