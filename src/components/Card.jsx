import React from "react";
import { Link } from "react-router-dom";
const Card = ({ post }) => {
  return (
    <Link to={`/newsdetail/${post.id}`}>
    <div className=" p-6 rounded-3xl shadow-md">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-auto h-48 object-cover  rounded-xl mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{post.date}</p>
      
      <p className="text-gray-600">{post.excerpt}</p>
      
    </div>
    </Link>
  );
};

export default Card;