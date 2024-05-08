import React from 'react';
export async function generateStaticParams() {
  const res =await fetch("http://localhost:5000/posts")
  const posts = await res.json()
  const ids=posts.map(post=>{
    return{
      id:post.id+"",
    }
    
  })
  console.log(ids);
  return ids;
}
const DetailPage = async({params}) => {
	const res =  await fetch(`http://localhost:5000/posts/${params.id}`)
	const post = await res.json();
	return (
		<div>
			<p>Post detail</p>
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
      
    </div>
  </div>
</div>
		</div>
	);
};

export default DetailPage;