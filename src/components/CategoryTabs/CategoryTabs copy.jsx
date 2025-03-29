import React, { useEffect, useRef } from "react";
import "./CategoryTabs.css"; // Import CSS file
import Lawn from "../../assets/LawnMaintainance.jpeg"
import Plantcare from "../../assets/Plantcare.jpeg"
import Fencing from "../../assets/Fencing.jpeg"
import Plumbing1 from "../../assets/leakrepair.jpg"
import Plumbing2 from "../../assets/Piperepair.jpg"
import Plumbing3 from "../../assets/watergeyser.jpeg"
import Electric1 from "../../assets/wiring.jpeg"
import Electric2 from "../../assets/lightrepair.jpg"
import Electric3 from "../../assets/circutrepair.jpg"


const categories = {
  Gardening: [
    { name: "Lawn maintenance", img: Lawn },
    { name: "Tree and plant care", img: Plantcare},
    { name: "Fencing", img: Fencing},
  ],
  Electrician: [
    { name: "Wiring & Rewiring", img: Electric1 },
    { name: "Lighting Fixture Installation", img: Electric2 },
    { name: "Circuit Breakering Repair", img: Electric3 },
  ],
  Plumbing: [
    { name: "Pipes Repair & Installation", img: Plumbing2 },
    { name: "Faucets & Leak Repair", img: Plumbing1 },
    { name: "Water Heaters Repair & Installation", img: Plumbing3 },
  ],
};

const CategoryTabs = () => {
  const categoryRef = useRef(null);
  const buttonsRef = useRef(null);
  const defaultCategory = "Gardening"; // Default category

  const handleClick = (category) => {
    if (categoryRef.current) {
      categoryRef.current.innerHTML = `
        <div class="product-grid">
          ${categories[category]
            .map(
              (item) => `
            <div class="product-card">
              <img src="${item.img}" alt="${item.name}" />
              <p>${item.name}</p>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }

    // Remove 'active' class from all buttons and set clicked one
    if (buttonsRef.current) {
      Array.from(buttonsRef.current.children).forEach((btn) =>
        btn.classList.remove("active")
      );
      const clickedButton = Array.from(buttonsRef.current.children).find(
        (btn) => btn.innerText === category
      );
      if (clickedButton) clickedButton.classList.add("active");
    }
  };

  // Set default category on mount
  useEffect(() => {
    handleClick(defaultCategory);
  }, []);

  return (
    <div className="category-container">
      {/* Categories */}
      <div className="category-buttons" ref={buttonsRef}>
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            className={category === defaultCategory ? "active" : ""}
            onClick={() => handleClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Subcategories Grid */}
      <div ref={categoryRef} className="subcategory-container"></div>
    </div>
  );
};

export default CategoryTabs;
