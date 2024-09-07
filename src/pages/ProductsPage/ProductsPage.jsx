import {
  AppstoreOutlined,
  BgColorsOutlined,
  CalendarOutlined,
  DollarOutlined,
  LineHeightOutlined,
  MinusCircleOutlined,
  PercentageOutlined,
  ShoppingCartOutlined,
  TagOutlined,
} from "@ant-design/icons";
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
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Components/GenerateProducts";
import "./ProductsPage.css";

const { Header, Footer, Sider, Content } = Layout;
const { Meta } = Card;
const { useBreakpoint } = Grid;

const brands = [
  "Nike",
  "Adidas",
  "Puma",
  "Reebok",
  "Under Armour",
  "Levi's",
  "H&M",
  "Zara",
  "Uniqlo",
  "Gucci",
];
const genders = ["Men", "Women", "Unisex"];
const categories = ["Children", "Adult", "Old"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["Red", "Blue", "Green", "Black", "White", "Yellow", "Pink"];

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(20);
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
  const screens = useBreakpoint();
  const navigate = useNavigate();

  const handleFilterChange = (filterType, checkedValues) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: checkedValues,
    }));
  };

  const filterItems = [
    {
      key: "brand",
      label: "BRAND",
      icon: <TagOutlined />,
      children: brands.map((brand) => ({
        key: brand,
        label: brand,
      })),
    },
    {
      key: "category",
      label: "CATEGORY",
      icon: <AppstoreOutlined />,
      children: categories.map((category, index) => ({
        key: category,
        label: category,
      })),
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
          label: "$50 - $200",
        },
        {
          key: "price3",
          label: "$200 - $500",
        },
        {
          key: "price4",
          label: "$500 - $1000",
        },
      ],
    },
    {
      key: "gender",
      label: "GENDER",
      icon: <MinusCircleOutlined />,
      children: genders.map((gender, index) => ({
        key: gender,
        label: gender,
      })),
    },
    {
      key: "sizes",
      label: "SIZES",
      icon: <LineHeightOutlined />,
      children: sizes.map((size, index) => ({
        key: size,
        label: size,
      })),
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
        {
          key: "discount4",
          label: "40% Off",
        },
        {
          key: "discount5",
          label: "50% Off",
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
      icon: <BgColorsOutlined />,
      children: colors.map((color, index) => ({
        key: color,
        label: color,
      })),
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

  const collapseItems = filterItems.map((filter) => ({
    key: filter.key,
    label: (
      <span>
        {filter.icon} {filter.label}
      </span>
    ),
    children: (
      <Checkbox.Group
        onChange={(checkedValues) =>
          handleFilterChange(filter.key, checkedValues)
        }
      >
        {filter.children.map((item, index) => (
          <div
            key={`${filter.key}${index}`}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              gap: "10px",
            }}
          >
            <Checkbox value={item.key}>{item.label}</Checkbox>
          </div>
        ))}
      </Checkbox.Group>
    ),
  }));

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
        console.log(product.price);
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

      return true;
    });
  };

  const productsList = useProducts();
  let products = filterProducts(
    [...productsList].sort((a, b) => a.title.localeCompare(b.title))
  );
  const totalProducts = products.length;

  const paginatedProducts = products.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCardClick = (productId) => {
    console.log(products.find((p) => (p.id = productId)));
    navigate(`/product-details/${productId}`);
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
              style={{ marginRight: "8px", paddingBottom: "30px" }}
            >
              {paginatedProducts.length === 0
                ? Array.from({ length: pageSize }).map((_, index) => (
                    <Col
                      key={index}
                      xs={24}
                      sm={18}
                      md={12}
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
                    <Col key={product.id} xs={24} sm={18} md={12} lg={6}>
                      <Card
                        hoverable
                        style={{ width: "100%", height: "100%" }}
                        cover={
                          <img alt={product.title} src={product.imageUrl} />
                        }
                        onClick={() => handleCardClick(product.id)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.1, 1.05)";
                          e.currentTarget.style.boxShadow =
                            "0 8px 30px rgba(0, 0, 0, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
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
