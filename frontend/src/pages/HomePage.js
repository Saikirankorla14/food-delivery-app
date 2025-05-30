import React, { useEffect, useState } from "react";
import { getMenuItems } from "../services/api";

function HomePage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getMenuItems().then((res) => setMenuItems(res.data));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {menuItems.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>${item.price}</p>
          <img src={item.image} alt={item.name} width="150" />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
