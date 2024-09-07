import { InboxOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Card, Flex, Image, Rate, Skeleton, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarouselArrowComponent from "../../Components/CarouselArrowComponent";
import "./ProductDetails.css";

const ProductDetail = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const containerRef = useRef(null);
  const navigate = useNavigate();
  // const { addToCart } = useContext(CartContext);

  const numericProductId = parseInt(productId, 10);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setAllProducts(data.products);

      // Find the product by ID once the products are fetched
      const foundProduct = data.products[0];
      setProduct(foundProduct); // Update state with the found product
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [numericProductId]);

  // Filter related products based on category and brand, excluding the current product
  //   const relatedProducts = allProducts
  //     .filter(
  //       (p) =>
  //         p.category === product?.category &&
  //         p.id !== product?.id &&
  //         p.brand === product?.brand
  //     )
  //     .slice(0, 10);
  const relatedProducts = allProducts.slice(0, 10);
  const newProducts = allProducts.slice(20, 27);

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 340;
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 340;
    }
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div class="mt-[6rem]">
      <Space
        direction="vertical"
        size={30}
        style={{ top: "6rem", maxWidth: "99vw" }}
      >
        <Flex class="p-4 flex flex-row gap-7" justify="space-between">
          <Card
            title={product.title}
            cover={
              product.images && product.images.length > 0 ? (
                <Image src={product.images[0]} />
              ) : (
                <div>No Image Available</div>
              )
            }
            className="card-style"
          ></Card>
          <Space direction="vertical" style={{ paddingTop: "20px" }}>
            <div style={{ fontSize: "40px", gap: "20px", fontWeight: "bold" }}>
              {product.title}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
                fontSize: "20px",
                alignItems: "center",
              }}
            >
              <Rate defaultValue={product.rating} allowHalf />
              <p>400 Rating & 200 Reviews</p>
            </div>
            <p style={{ fontSize: "60px", fontFamily: "cursive" }}>
              Price: ₹{product.price.toFixed(2) * 50}
            </p>
            <p style={{ fontSize: "20px" }}>{product.description}</p>
            <div className="product-info">
              <div className="price-details">
                <div className="monthly-emi">₹2,500/month</div>
                <div className="emi-details">
                  12 months No Cost EMI Plan with American Express
                  <a href="#">Details</a>
                </div>
              </div>

              <div className="offers">
                <strong>Available offers:</strong>
                <ul>
                  <li>
                    Bank Offer: Get ₹50 Instant Discount on first Flipkart UPI
                    transaction on orders of ₹200 and above <a href="#">T&C</a>
                  </li>
                  <li>
                    Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank
                    Credit Card <a href="#">T&C</a>
                  </li>
                  <li>
                    Bank Offer: 10% off up to ₹1,500 on Federal Bank Credit Card
                    Transactions, on orders of ₹5,000 and above{" "}
                    <a href="#">T&C</a>
                  </li>
                  <li>
                    No cost EMI ₹2,500/month. Standard EMI also available{" "}
                    <a href="#">View Plans</a>
                  </li>
                  <li>
                    <a href="#">View 12 more offers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                className="button-style"
                style={{ backgroundColor: "#7c76ee" }}
              >
                <ShoppingCartOutlined />
                Add Card
              </Button>
              <Button
                className="button-style"
                style={{ backgroundColor: "orange" }}
                // onClick={() => addToCart(product)}
              >
                <InboxOutlined />
                Order Now
              </Button>
            </div>
          </Space>
        </Flex>

        <div className="relative w-full bg-white rounded-xl drop-shadow-lg p-5">
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "cursive",
              padding: "0px 20px 20px 20px",
            }}
          >
            Check On Our New Products
          </div>
          <div
            style={{
              display: "flex",
              position: "relative",
            }}
          >
            <div
              className="new-products-style"
              style={{
                scrollBehavior: "smooth",
              }}
            >
              {newProducts.map((newProduct) => (
                <div
                  key={newProduct.id}
                  style={{
                    display: "flex",
                    minWidth: "500px",
                    height: "200px",
                    gap: "20px",
                    backgroundColor: "#c7eee9",
                    borderRadius: "20px",
                    overflowX: "hidden",
                    border: "2px solid black",
                  }}
                >
                  <Card
                    style={{
                      width: "250px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {loading ? (
                      <Skeleton active />
                    ) : (
                      <img
                        style={{ position: "relative", top: "-25px" }}
                        alt={newProduct.title}
                        src={newProduct.images[0]}
                      />
                    )}
                  </Card>
                  <div
                    style={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {newProduct.title}
                    <Button type="primary" size="large">
                      {Math.floor(Math.random() * (75 - 45 + 1)) + 45} % OFF
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl drop-shadow-lg p-5">
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              fontFamily: "cursive",
              padding: "0px 20px 20px 20px",
            }}
          >
            Related Products
          </div>

          <div
            className="new-products-style"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
            }}
            ref={containerRef}
          >
            {relatedProducts.map((newProduct) => (
              <div
                key={newProduct.id}
                style={{
                  display: "flex",
                }}
              >
                <Card
                  key={newProduct.id}
                  hoverable
                  style={{
                    width: 340,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    margin: "20px 0px",
                  }}
                  cover={
                    loading ? (
                      <Skeleton.Image />
                    ) : (
                      <img
                        alt="product"
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "300px",
                          objectFit: "fill",
                        }}
                        src={newProduct.images[0]}
                      />
                    )
                  }
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 30px rgba(0, 0, 0, 0.3)";
                    e.currentTarget.style.zIndex = 1;
                    e.currentTarget.style.backgroundColor = "#d4e6dc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.zIndex = 0;
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  <Meta
                    style={{ fontSize: "25px", fontWeight: "bold" }}
                    title={newProduct.title}
                    description={`Price: ₹${(newProduct.price * 10).toFixed(
                      2
                    )}`}
                  />
                </Card>
              </div>
            ))}
          </div>

          <CarouselArrowComponent direction="left" onClick={handlePrev} />
          <CarouselArrowComponent direction="right" onClick={handleNext} />
        </div>
      </Space>
    </div>
  );
};

export default ProductDetail;
