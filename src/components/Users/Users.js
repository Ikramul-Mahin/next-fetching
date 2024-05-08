"use client"
import React, { useEffect, useState } from 'react';

const Users = () => {
	const [users,setUsers] = useState([]);
	useEffect(()=>{
		fetch("https://jsonplaceholder.typicode.com/users")
		.then((res)=>res.json())
		.then((data)=> setUsers(data))
	},[])
	return (
		<div>
			<h1>totalusers:{users.length}</h1>
			{
				users.map((user)=>
				<div key={user.id} className="card w-50 bg-base-100 shadow-xl">
				<figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
				<div className="card-body">
				  <h2 className="card-title">
					 Shoes!
					 <div className="badge badge-secondary">{user.name}</div>
				  </h2>
				  <div className="card-actions justify-end">
			 
			 
				  </div>
				</div>
			 </div>)
			}
		</div>
	);
};

export default Users;