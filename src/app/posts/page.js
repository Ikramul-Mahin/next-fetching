import Link from 'next/link';
import React from 'react';

const PostsPage =async() => {
	const res = await fetch("http://localhost:5000/posts",{
		
	})
	const posts = await res.json()
	// console.log(posts);
	return (
		<div>
	<h5>total posts:{posts.length}</h5>
	{
		posts.map((post) => 
		
		<div key={post.id} className="card w-50 bg-base-100 shadow-xl">
  <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Shoes!
      <div className="badge badge-secondary">{post.country}</div>
    </h2>
    <p>{post.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{post.age}</div> 

      <Link href={`/posts/${post.id}`}>
		<button className='btn btn-primary'>Detail</button>
		</Link>

    </div>
  </div>
</div>)
	}
		</div>
	);
};

export default PostsPage;