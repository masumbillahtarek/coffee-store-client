import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const coffee=useLoaderData()
     const{name,chef,supplier,taste,category,details,photo}=coffee
    return (
        <div className="flex justify-around  items-center bg-[#F5F4F1] p-8 rounded-xl mx-48 my-12">
       <div><img className="w-32 h-48" src={photo} alt="" /></div>
       <div className='flex flex-col gap-2'>
        <h2 className="text-2xl"><span className='font-bold'>Name : </span>{name}</h2>
       <h2 className="text-2xl "><span className='font-bold'>Chef :</span> {chef}</h2>
       <h2 className="text-2xl"><span className='font-bold'>Price :</span> 60 Tk</h2>
        <h2 className="text-2xl"><span className='font-bold'>Supplier : </span>{supplier}</h2>
        <h2 className="text-2xl"><span className='font-bold'>Taste : </span>{taste}</h2>
         <h2 className="text-2xl"><span className='font-bold'>Category :</span> {category}</h2>
          <h2 className="text-2xl"><span className='font-bold'> Details : </span>{details}</h2>
       </div>
      
        </div>
    );
};

export default CoffeeDetails;