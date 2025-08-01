import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCoffee = () => {
    const coffee=useLoaderData()
    const{_id,name,chef,supplier,taste,category,details,photo}=coffee
    const handleUpdateCoffee=(e)=>{
                e.preventDefault()
        const form=e.target
        const name=form.name.value
        const chef=form.chef.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const updateCoffee={name,chef,supplier,taste,category,details,photo}
        console.log(updateCoffee)
        fetch(`http://localhost:5000/coffees/${_id}`,{
       method:'PUT',
       headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
Swal.fire({
  position: "center",
  icon: "success",
  title: "SuccessFully Updated",
  showConfirmButton: false,
  timer: 2000
});
            }
        })
    }
    return (
        <div className="mx-32 my-12 bg-[#F4F3F0] p-12 rounded-xl">
            <h3 className="text-3xl font-bold text-center my-6">Update Coffee : {coffee.name}</h3>
               <form onSubmit={handleUpdateCoffee} className="grid grid-cols-2 gap-8 mt-8">
             <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Name</span>
          </label>
          <input type="text" name="name" defaultValue={name} placeholder="Enter Coffee Name" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Chef</span>
          </label>
          <input type="text" name="chef" defaultValue={chef} placeholder="Enter Coffee Chef" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Supplier</span>
          </label>
          <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter Coffee Supplier" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Taste</span>
          </label>
          <input type="text" name="taste" defaultValue={taste} placeholder="Enter Coffee Taste" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Category</span>
          </label>
          <input type="text" name="category" defaultValue={category} placeholder="Enter Coffee Category" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Details</span>
          </label>
          <input type="text" name="details" defaultValue={details} placeholder="Enter Coffee Details" class="input input-bordered w-full " required />
        </div>
       
 <div className="flex flex-col col-span-2">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Photo URL</span>
          </label>
          <input type="text" name="photo" defaultValue={photo} placeholder="Enter Coffee Photo URL" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col col-span-2">
          <input type="submit" class="input input-bordered w-full bg-[#D2B48C] text-black" value="Update Coffee" />
        </div>
       
           </form>
        </div>
    );
};

export default UpdateCoffee;