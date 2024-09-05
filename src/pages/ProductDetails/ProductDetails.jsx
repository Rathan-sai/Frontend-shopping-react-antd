// ProductDetail.js
import { Card, Col, Flex, Row, Space } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Components/GenerateProducts";

const ProductDetail = () => {
  const { productId } = useParams();

  const numericProductId = parseInt(productId, 10);

  const products = useProducts();
  const product = products.find((p) => p.id === numericProductId);

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id &&
        p.brand === product.brand
    )
    .slice(0, 10);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div class="relative top-11">
      <Space class="top-2" direction="vertical" size={30}>
        <Flex>
          <Card
            title={product.title}
            cover={<img alt={product.title} src={product.imageUrl} />}
            class="w-700 pl-1"
          >
            <p>{product.description}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
            {/* Add more details as necessary */}
          </Card>
        </Flex>

        <h3>Related Products</h3>
        <Row gutter={[16, 16]}>
          {relatedProducts.map((relatedProduct) => (
            <Col key={relatedProduct.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                cover={
                  <img
                    alt={relatedProduct.title}
                    src={relatedProduct.imageUrl}
                  />
                }
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <Meta
                  title={relatedProduct.title}
                  description={`$${relatedProduct.price.toFixed(2)}`}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    </div>
  );
};

export default ProductDetail;
