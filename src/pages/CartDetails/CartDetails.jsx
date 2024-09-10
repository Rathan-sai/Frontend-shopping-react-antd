import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../Components/CartContext";

const CartDetails = () => {
  const { cart } = useContext(CartContext);
  const [allProducts, setAllProducts] = useState([]);
  const [count, setCount] = useState(1);

  console.log(cart.length);
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setAllProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const cartProducts = allProducts.slice(0, 5);

  console.log("fetchproducts", allProducts);
  cartProducts.forEach((product) => console.log(product));

  return (
    <div style={{ marginTop: "4rem", padding: "40px" }}>
      <div className="flex flex-row mt-4 gap-10">
        <div style={{ width: "70vw" }}>
          <div className="border-4 p-1 bg-white flex justify-between items-center rounded-lg">
            <div className="font-mono text-5xl text-orange-500">Your Cart</div>
            <Button
              style={{ fontSize: "25px", color: "#007ff6", padding: "30px" }}
            >
              Enter Delivery Address
            </Button>
          </div>
          {cartProducts.map((product, index) => (
            <div className="flex flex-row h-60 mt-12 p-8 bg-white rounded-lg gap-8">
              <Card
                style={{
                  width: "300px",
                  height: "180px",
                  overflow: "hidden",
                  position: "relative",
                  border: "1px solid gray",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
              >
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "cover",
                  }}
                  alt={product.title}
                  src={product.images[0]}
                />
              </Card>
              <div>
                <p className="text-2xl text-black">{product.title}</p>
                <p className="text-gray-500 text-xl line-clamp-1 mt-1">
                  {product.description}
                </p>
                <div className="text-gray-500 text-xl line-clamp-1 mt-1">
                  Brand : {product.brand}
                </div>
                <div className="text-black-500 text-2xl line-clamp-1 mt-3 font-bold">
                  Price : Rs {(product.price * 10).toFixed(2)}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginRight: "80px",
                    padding: "10px",
                  }}
                >
                  <Button className="text-amber-800 p-4 w-64 text-xl">
                    Remove
                  </Button>
                  <ButtonGroup>
                    <Button onClick={decrease} icon={<MinusOutlined />} />
                    <Button>{count}</Button>
                    <Button onClick={increase} icon={<PlusOutlined />} />{" "}
                  </ButtonGroup>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>total amount</div>
      </div>
    </div>
  );
};

export default CartDetails;
