import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

const CarouselArrowComponent = ({ direction, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      style={{
        backgroundColor: hovered
          ? "rgba(245, 247, 248, 0.8)"
          : "rgb(207 207 207)",
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        height: "30%",
        width: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        ...(direction === "left"
          ? {
              left: "0%",
              borderTopRightRadius: "50%",
              borderBottomRightRadius: "50%",
            }
          : {
              right: "0%",
              borderTopLeftRadius: "50%",
              borderBottomLeftRadius: "50%",
            }),
      }}
    >
      {direction === "left" ? (
        <LeftOutlined
          style={{
            fontSize: "30px",
            color: hovered ? "black" : "white",
            cursor: "pointer",
          }}
        />
      ) : (
        <RightOutlined
          style={{
            fontSize: "30px",
            color: hovered ? "black" : "white",
            cursor: "pointer",
          }}
        />
      )}
    </div>
  );
};
export default CarouselArrowComponent;
