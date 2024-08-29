import { Carousel, Col, Row } from "antd";
import { Content } from "antd/es/layout/layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/Images/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg";
import image4 from "../../assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";
import image3 from "../../assets/images/hannah-morgan-ycVFts5Ma4s-unsplash.jpg";
import image2 from "../../assets/images/hugo-clement-JGtPrdnMgQc-unsplash.jpg";
import image5 from "../../assets/images/pexels-olly-3769747.jpg";
const MainPageContent = () => {
  const navigate = useNavigate();
  const imageSliderData = [
    {
      key: "1",
      label: "Summer Collection",
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "2",
      label: "New Arrivals",
      image:
        "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "3",
      label: "Men's Fashion",
      image:
        "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "4",
      label: "Women's Fashion",
      image:
        "https://images.pexels.com/photos/19292777/pexels-photo-19292777/free-photo-of-western-dress-2024-shoot-by-dhanno-mayra-jaffri.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "5",
      label: "Kids' Collection",
      image:
        "https://images.pexels.com/photos/19087853/pexels-photo-19087853/free-photo-of-girls-in-traditional-costumes-dancing-at-a-parade.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "6",
      label: "Accessories",
      image:
        "https://images.pexels.com/photos/5531013/pexels-photo-5531013.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "7",
      label: "Footwear",
      image:
        "https://images.pexels.com/photos/1476209/pexels-photo-1476209.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "8",
      label: "Sportswear",
      image:
        "https://images.pexels.com/photos/5741064/pexels-photo-5741064.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "9",
      label: "Winter Collection",
      image:
        "https://images.pexels.com/photos/5710043/pexels-photo-5710043.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "10",
      label: "On high Sale",
      image:
        "https://images.pexels.com/photos/13758357/pexels-photo-13758357.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "11",
      label: "Spring Collection",
      image:
        "https://images.pexels.com/photos/267307/pexels-photo-267307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: "12",
      label: "Luxury Watches",
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "13",
      label: "Handbags",
      image:
        "https://images.pexels.com/photos/167703/pexels-photo-167703.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "14",
      label: "Casual Wear",
      image:
        "https://images.pexels.com/photos/267312/pexels-photo-267312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: "15",
      label: "Formal Attire",
      image:
        "https://images.pexels.com/photos/5778469/pexels-photo-5778469.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "16",
      label: "Beachwear",
      image:
        "https://images.pexels.com/photos/800246/pexels-photo-800246.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "17",
      label: "Activewear",
      image:
        "https://images.pexels.com/photos/267310/pexels-photo-267310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: "18",
      label: "Jewelry Collection",
      image:
        "https://images.pexels.com/photos/267309/pexels-photo-267309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      key: "19",
      label: "Eyewear",
      image:
        "https://images.pexels.com/photos/3866006/pexels-photo-3866006.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      key: "20",
      label: "Holiday Specials",
      image:
        "https://images.pexels.com/photos/267317/pexels-photo-267317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const images = [image1, image2, image3, image4, image5];

  const handleClickOnCarousel = () => {
    console.log("click on the carusel or the grid images");

    navigate("/products-page");
  };

  return (
    <>
      <Carousel
        // style={{ cursor: "pointer" }}
        arrows
        autoplay={true}
        effect="fade"
        infinite={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <div
              onClick={handleClickOnCarousel}
              className="content-style"
              style={{ backgroundImage: `url(${image})`, cursor: "pointer" }}
            />
            <div onClick={handleClickOnCarousel} className="overlay-content">
              <h1>Where Style Meets Comfort</h1>
            </div>
          </div>
        ))}
      </Carousel>

      <br />
      <Content>
        <div>
          <Row gutter={[2, 2]}>
            {imageSliderData.map((item) => (
              <Col
                key={item.key}
                xs={{ flex: "100%" }}
                sm={{ flex: "50%" }}
                md={{ flex: "50%" }}
                lg={{ flex: "25%" }}
                xl={{ flex: "25%" }}
              >
                <div
                  onClick={handleClickOnCarousel}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <h3 style={{ marginTop: "10px" }}>{item.label}</h3>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </>
  );
};
export default MainPageContent;
