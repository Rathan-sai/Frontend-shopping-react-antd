import { Checkbox } from "antd";
import React, { useState } from "react";

const FilterComponent = ({ productsList, filterItems }) => {
  // State to track selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    category: [],
    price: [],
    gender: [],
    sizes: [],
    color: [],
    discount: [],
    occasion: [],
    deliveryTime: [],
    deals: [],
  });

  // Function to handle checkbox changes for each filter type
  const handleFilterChange = (filterType, checkedValues) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: checkedValues,
    }));
  };

  // Helper function to filter products based on selected filters
  const filterProducts = (products) => {
    return products.filter((product) => {
      // Check brand filter
      if (
        selectedFilters.brand.length > 0 &&
        !selectedFilters.brand.includes(product.brand)
      ) {
        return false;
      }

      // Check category filter
      if (
        selectedFilters.category.length > 0 &&
        !selectedFilters.category.includes(product.category)
      ) {
        return false;
      }

      // Check price filter (adjust conditions based on your product price properties)
      if (selectedFilters.price.length > 0) {
        const productPrice = product.price;
        const isPriceInRange = selectedFilters.price.some((priceRange) => {
          switch (priceRange) {
            case "price1":
              return productPrice >= 0 && productPrice <= 50;
            case "price2":
              return productPrice > 50 && productPrice <= 200;
            case "price3":
              return productPrice > 200 && productPrice <= 500;
            case "price4":
              return productPrice > 500 && productPrice <= 1000;
            default:
              return false;
          }
        });
        if (!isPriceInRange) {
          return false;
        }
      }

      // Check gender filter
      if (
        selectedFilters.gender.length > 0 &&
        !selectedFilters.gender.includes(product.gender)
      ) {
        return false;
      }

      // Check sizes filter
      if (
        selectedFilters.sizes.length > 0 &&
        !selectedFilters.sizes.includes(product.size)
      ) {
        return false;
      }

      // Check color filter
      if (
        selectedFilters.color.length > 0 &&
        !selectedFilters.color.includes(product.color)
      ) {
        return false;
      }

      // Check discount filter
      if (selectedFilters.discount.length > 0) {
        const isDiscountMatch = selectedFilters.discount.some((discount) => {
          switch (discount) {
            case "discount1":
              return product.discount >= 10;
            case "discount2":
              return product.discount >= 20;
            case "discount3":
              return product.discount >= 30;
            default:
              return false;
          }
        });
        if (!isDiscountMatch) {
          return false;
        }
      }

      // Check occasion filter
      if (
        selectedFilters.occasion.length > 0 &&
        !selectedFilters.occasion.includes(product.occasion)
      ) {
        return false;
      }

      // Check delivery time filter
      if (
        selectedFilters.deliveryTime.length > 0 &&
        !selectedFilters.deliveryTime.includes(product.deliveryTime)
      ) {
        return false;
      }

      // Check deals filter
      if (
        selectedFilters.deals.length > 0 &&
        !selectedFilters.deals.includes(product.deal)
      ) {
        return false;
      }

      // If all checks pass, include the product
      return true;
    });
  };

  // Get the filtered and sorted products
  const filteredProducts = filterProducts(productsList).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Generate collapse items with onChange handlers for each filter type
  const collapseItems = filterItems.map((filter) => ({
    key: filter.key,
    label: (
      <span
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {filter.icon} {filter.label}
      </span>
    ),
    children: (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <Checkbox.Group
          onChange={(checkedValues) =>
            handleFilterChange(filter.key, checkedValues)
          }
          style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
        >
          {filter.children.map((item) => (
            <Checkbox
              key={item.key}
              value={item.key}
              style={{ flexBasis: "30%", flexGrow: 1 }}
            >
              {item.label}
            </Checkbox>
          ))}
        </Checkbox.Group>
      </div>
    ),
  }));

  return (
    <div>
      {/* Render your filters (e.g., using Collapse component with collapseItems) */}

      {/* Render filtered products */}
      <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterComponent;
