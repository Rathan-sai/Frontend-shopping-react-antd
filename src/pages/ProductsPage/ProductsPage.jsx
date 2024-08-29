import {
  AppstoreOutlined,
  CalendarOutlined,
  DollarOutlined,
  PercentageOutlined,
  ShoppingCartOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { faker } from "@faker-js/faker";
import {
  Card,
  Checkbox,
  Col,
  Collapse,
  Grid,
  Layout,
  Pagination,
  Row,
  Skeleton,
} from "antd";
import React, { useState } from "react";
import "./ProductsPage.css";

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;
const filterItems = [
  {
    key: "brand",
    label: "BRAND",
    icon: <TagOutlined />,
    children: [
      {
        key: "brand1",
        label: "Brand A",
      },
      {
        key: "brand2",
        label: "Brand B",
      },
      {
        key: "brand3",
        label: "Brand C",
      },
    ],
  },
  {
    key: "category",
    label: "CATEGORY",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "category1",
        label: "Category 1",
      },
      {
        key: "category2",
        label: "Category 2",
      },
      {
        key: "category3",
        label: "Category 3",
      },
    ],
  },
  {
    key: "price",
    label: "PRICE",
    icon: <DollarOutlined />,
    children: [
      {
        key: "price1",
        label: "$0 - $50",
      },
      {
        key: "price2",
        label: "$50 - $100",
      },
      {
        key: "price3",
        label: "$100 - $200",
      },
    ],
  },
  {
    key: "gender",
    label: "GENDER",
    // icon: <GenderOutlined />,
    children: [
      {
        key: "gender1",
        label: "Men",
      },
      {
        key: "gender2",
        label: "Women",
      },
      {
        key: "gender3",
        label: "Unisex",
      },
    ],
  },
  {
    key: "sizes",
    label: "SIZES",
    // icon: <SizeOutlined />,
    children: [
      {
        key: "size1",
        label: "S",
      },
      {
        key: "size2",
        label: "M",
      },
      {
        key: "size3",
        label: "L",
      },
      {
        key: "size4",
        label: "XL",
      },
      {
        key: "size5",
        label: "XXL",
      },
    ],
  },
  {
    key: "discount",
    label: "DISCOUNT",
    icon: <PercentageOutlined />,
    children: [
      {
        key: "discount1",
        label: "10% Off",
      },
      {
        key: "discount2",
        label: "20% Off",
      },
      {
        key: "discount3",
        label: "30% Off",
      },
    ],
  },
  {
    key: "occasion",
    label: "OCCASION",
    icon: <CalendarOutlined />,
    children: [
      {
        key: "occasion1",
        label: "Casual",
      },
      {
        key: "occasion2",
        label: "Formal",
      },
      {
        key: "occasion3",
        label: "Sports",
      },
    ],
  },
  {
    key: "color",
    label: "COLOR",
    // icon: <PaletteOutlined />,
    children: [
      {
        key: "color1",
        label: "Red",
      },
      {
        key: "color2",
        label: "Blue",
      },
      {
        key: "color3",
        label: "Green",
      },
      {
        key: "color4",
        label: "Black",
      },
      {
        key: "color5",
        label: "White",
      },
    ],
  },
  {
    key: "deliveryTime",
    label: "DELIVERY TIME",
    icon: <ShoppingCartOutlined />,
    children: [
      {
        key: "delivery1",
        label: "1-3 Days",
      },
      {
        key: "delivery2",
        label: "4-7 Days",
      },
      {
        key: "delivery3",
        label: "1-2 Weeks",
      },
    ],
  },
  {
    key: "deals",
    label: "DEALS",
    icon: <TagOutlined />,
    children: [
      {
        key: "deal1",
        label: "Deal 1",
      },
      {
        key: "deal2",
        label: "Deal 2",
      },
      {
        key: "deal3",
        label: "Deal 3",
      },
    ],
  },
];

// Generate a large number of products
const generateProducts = (num) => {
  return Array.from({ length: num }, () => ({
    id: faker.number.int({ min: 1, max: 10000 }),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    imageUrl: `https://picsum.photos/200?random=${faker.number.int({
      min: 1,
      max: 1000,
    })}`,
  }));
};

const collapseItems = filterItems.map((filter) => ({
  key: filter.key,
  label: (
    <span>
      {filter.icon} {filter.label}
    </span>
  ),
  children: (
    <Checkbox.Group>
      {filter.children.map((item) => (
        <Checkbox key={item.key} value={item.key}>
          {item.label}
        </Checkbox>
      ))}
    </Checkbox.Group>
  ),
}));

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
  const screens = useBreakpoint();

  const products = generateProducts(3000);
  const totalProducts = products.length;

  // Paginate products
  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Handle page change
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Layout className="layout">
      <Header className="header"></Header>
      <Layout>
        {screens.md ? (
          <Sider width="18%" className="sider">
            <span
              style={{
                color: "#605962",
                fontSize: "2.5vw",
                fontFamily: "serif",
              }}
            >
              Filter Products
            </span>
            <Collapse defaultActiveKey={["brand"]} items={collapseItems} />
          </Sider>
        ) : null}
        <Content className="content">
          <div style={{ padding: "24px" }}>
            <Row
              gutter={[16, 39]}
              style={{
                marginRight: "8px",
                paddingBottom: "30px",
              }}
            >
              {paginatedProducts.length === 0
                ? Array.from({ length: pageSize }).map((_, index) => (
                    <Col
                      key={index}
                      xs={24} // Full width on extra small screens
                      sm={18} // Half width on small screens
                      md={12} // One-third width on medium screens
                      lg={6}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Card
                        hoverable
                        style={{
                          width: "100%",
                          height: "100%",
                          margin: "50px 0px",
                        }}
                        cover={<Skeleton.Image active />}
                      >
                        <Skeleton loading={true} active>
                          <Meta title="Loading..." description="Loading..." />
                        </Skeleton>
                      </Card>
                    </Col>
                  ))
                : paginatedProducts.map((product) => (
                    <Col
                      key={product.id}
                      xs={24} // Full width on extra small screens
                      sm={18} // Half width on small screens
                      md={12} // One-third width on medium screens
                      lg={6}
                    >
                      <Card
                        hoverable
                        style={{ width: "100%", height: "100%" }}
                        cover={
                          <img alt={product.title} src={product.imageUrl} />
                        }
                      >
                        <Meta
                          title={product.title}
                          description={
                            <div>
                              <div className="card-description">
                                {product.description}
                              </div>
                              <div
                                style={{
                                  marginTop: "10px",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                }}
                              >
                                ${product.price.toFixed(2)}
                              </div>
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  ))}
            </Row>
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalProducts}
              onChange={onPageChange}
              showSizeChanger={false}
              style={{
                marginTop: "16px",
                textAlign: "center",
                justifyContent: "center",
              }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProductsPage;
