import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee=(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value
        const chef=form.chef.value
        const supplier=form.supplier.value
        const taste=form.taste.value
        const category=form.category.value
        const details=form.details.value
        const photo=form.photo.value
        const coffee={name,chef,supplier,taste,category,details,photo}
        console.log(coffee)
        fetch('http://localhost:5000/coffees',{
       method:'POST',
       headers:{
        'content-type':'application/json'
       },
       body:JSON.stringify(coffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
  position: "center",
  icon: "success",
  title: "Your Coffee is Successfully Added",
  showConfirmButton: false,
  timer: 2000
});
form.reset()
            }
        })
    }
    return (
        <div className="mx-32 my-12 bg-[#F4F3F0] p-12 rounded-xl">
           <h2 className="text-center text-3xl my-4 font-bold text-[#374151]">Add New Coffee </h2> 
           <p className="text-center px-40 text-lg my-2">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
           <form onSubmit={handleAddCoffee} className="grid grid-cols-2 gap-8 mt-8">
             <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Name</span>
          </label>
          <input type="text" name="name" placeholder="Enter Coffee Name" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Chef</span>
          </label>
          <input type="text" name="chef" placeholder="Enter Coffee Chef" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Supplier</span>
          </label>
          <input type="text" name="supplier" placeholder="Enter Coffee Supplier" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Taste</span>
          </label>
          <input type="text" name="taste" placeholder="Enter Coffee Taste" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Category</span>
          </label>
          <input type="text" name="category" placeholder="Enter Coffee Category" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Details</span>
          </label>
          <input type="text" name="details" placeholder="Enter Coffee Details" class="input input-bordered w-full " required />
        </div>
       
 <div className="flex flex-col col-span-2">
        <label class="label">
         <span class="label-text text-xl my-2 text-black">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="Enter Coffee Photo URL" class="input input-bordered w-full " required />
        </div>
         <div className="flex flex-col col-span-2">
          <input type="submit" class="input input-bordered w-full bg-[#D2B48C] text-black" value="Add Coffee" />
        </div>
       
           </form>
        </div>
    );
};

export default AddCoffee;