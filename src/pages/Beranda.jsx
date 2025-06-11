import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { posts } from "../data/posts";

const Beranda = () => {
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const categories = ["all", ...new Set(posts.map((post) => post.category))];

  const filteredPost = posts.filter((post) => {
    const matchTitle = post.title
      .toLocaleLowerCase()
      .includes(search.toLocaleLowerCase());
      
      

    const matchCategory = category == "all" ? true : post.category == category;
    return matchTitle && matchCategory;
  });

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log("ini adalah nilai state search", search);
    console.log(filteredPost);
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="..."
          onChange={handleChange}
          value={search}
          className="w-full max-w-md px-4 py-2 border border-gray-300"
        />
        <select
          value={category}
          type="text"
          placeholder="search by category"
          onChange={handleCategory}
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPost.length > 0 ? (
          filteredPost.map((post) => <Card key={post.id} post={post} />)
        ) : (
        <div>
          <img  alt="not found" />
        </div>
        )}
      </div>
    </div>
  );
};

export default Beranda;