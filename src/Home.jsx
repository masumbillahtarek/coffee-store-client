import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const Home = () => {
    const loadedCoffees=useLoaderData()
    const[coffees,setCoffees]=useState(loadedCoffees)
   const handleDelete=(id)=>{
console.log(id)
Swal.fire({
  title: "Are you sure?",
  text: "Do you want to Delete this item!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
      fetch(`http://localhost:5000/coffees/${id}`,{
    method:'DELETE'
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.deletedCount>0){
 Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
const allCoffees=coffees.filter(coffee=>coffee._id!==id)
setCoffees(allCoffees)
    }
})
  }
});
   }
   //

    return (
        <div className="mx-32 my-12">
            <h2 className="text-center text-3xl my-10 font-bold">Our Products :  {coffees.length}</h2>
            <div className="grid grid-cols-2 gap-9">
                {
                    coffees.map(coffee=><Coffee key={coffee._id} handleDelete={handleDelete} coffee={coffee}></Coffee>)
                }
            </div>
        </div>
    );
};
const Coffee=({coffee,handleDelete})=>{
    const{_id,photo,name,chef}=coffee
    return(
        <div className="flex justify-between  items-center bg-[#F5F4F1] p-8 rounded-xl">
       <div><img className="w-24 h-32" src={photo} alt="" /></div>
       <div>
        <h2 className="text-2xl">{name}</h2>
       <h2 className="text-2xl my-2">{chef}</h2>
       <h2 className="text-2xl">Price : 60 Tk</h2></div>
       <div className="flex flex-col">

        <Link to={`/coffee/${_id}`}><button className="btn btn-neutral">Details</button></Link>
       <Link to={`/update/${_id}`}> <button className="btn btn-neutral my-6">Update</button></Link>
        <button onClick={()=>handleDelete(_id)} className="btn btn-neutral">Remove</button>
       </div>
        </div>
    )
}
export default Home;