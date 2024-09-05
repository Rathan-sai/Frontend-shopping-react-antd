// // ProductContext.js
// import { faker } from "@faker-js/faker";
// import React, { createContext, useContext, useEffect, useState } from "react";

// const ProductContext = createContext();

// export const ProductProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const generateProducts = (num) => {
//       const brands = [
//         "Nike",
//         "Adidas",
//         "Puma",
//         "Reebok",
//         "Under Armour",
//         "Levi's",
//         "H&M",
//         "Zara",
//         "Uniqlo",
//         "Gucci",
//       ];
//       const genders = ["Men", "Women", "Unisex"];
//       const categories = ["Children", "Adult", "Old"];
//       const sizes = ["S", "M", "L", "XL", "XXL"];
//       const colors = [
//         "Red",
//         "Blue",
//         "Green",
//         "Black",
//         "White",
//         "Yellow",
//         "Pink",
//       ];
//       const maxDiscount = 50; // Maximum discount percentage

//       return Array.from({ length: num }, () => ({
//         id: faker.number.int({ min: 1, max: 10000 }),
//         title: faker.commerce.productName(),
//         description: faker.commerce.productDescription(),
//         price: parseFloat(faker.commerce.price()),
//         imageUrl: `https://picsum.photos/200?random=${faker.number.int({
//           min: 1,
//           max: 1000,
//         })}`,
//         brand: faker.helpers.arrayElement(brands),
//         gender: faker.helpers.arrayElement(genders),
//         category: faker.helpers.arrayElement(categories),
//         size: faker.helpers.arrayElement(sizes),
//         color: faker.helpers.arrayElement(colors),
//         discount: parseFloat(
//           (faker.number.int({ min: 0, max: maxDiscount }) / 100).toFixed(2)
//         ), // Discount as a fraction
//       }));
//     };

//     // Generate products once when the component mounts
//     setProducts(generateProducts(1000));
//   }, []);

//   return (
//     <ProductContext.Provider value={products}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// export const useProducts = () => useContext(ProductContext);

// ProductContext.js
import React, { createContext, useContext } from "react";
import products from "./Proudct.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
