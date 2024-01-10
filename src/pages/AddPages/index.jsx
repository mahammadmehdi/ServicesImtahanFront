import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./index.scss"

function AddPages() {
    const navigate = useNavigate()
  const [icons, setIcons] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {
    fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({
        icons: icons,
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigate("/")
  }

  return (
    <div className="addPages">

        <HelmetProvider>
          <Helmet>
            <title>Add Pages</title>
          </Helmet>
      </HelmetProvider>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setIcons(e.target.value)}/>
        <input type="text" onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" onChange={(e)=>setDescription(e.target.value)}/>

        <button>add</button>
      </form>
    </div>
  );
}

export default AddPages;
