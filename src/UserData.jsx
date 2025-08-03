import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UserData = () => {
const loadedUsers=useLoaderData()
const[users,setUsers]=useState(loadedUsers)
console.log(users)
const handleDelete=(id)=>{
fetch(`http://localhost:5000/users/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.deletedCount>0){
        Swal.fire({
  position: "center",
  icon: "success",
  title: "SuccessFully Deleted Users",
  showConfirmButton: false,
  timer: 1500
});
const remaining=users.filter(user=>user._id!==id)
setUsers(remaining)
    }
})
}
    return (
        <div>
            <h3 className="text-3xl text-center">Users Data : {users.length}</h3>
                        <div className=" mx-28 my-12">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Create At</th>
        <th>Last SignInTime</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map(user=> <tr>
        <td>{user?.name}</td>
        <td>{user?.email}</td>
        <td>{user?.CreatedAt}</td>
        <td>{user?.lastLoggedAt}</td>
        <td><button onClick={()=>handleDelete(user._id)}>Delete</button></td>
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default UserData;