import { MenuOutlined } from "@ant-design/icons";
import {
  Badge,
  Button,
  Dropdown,
  Grid,
  Input,
  Menu,
  Space,
  Switch,
} from "antd";
import { motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineShopping, AiOutlineUser } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../Components/CartContext";
import "./Navbar.css";
const { Search } = Input;

const womenDropdownItems = [
  {
    key: "Women-1",
    type: "group",
    label: "Women",
    children: [
      { key: "Women-1-1", label: "Shoes" },
      { key: "Women-1-2", label: "Jeans" },
      { key: "Women-1-3", label: "Shirts" },
      { key: "Women-1-4", label: "Accessories" },
      { key: "Women-1-5", label: "Jackets" },
      { key: "Women-1-6", label: "Dresses" },
      { key: "Women-1-7", label: "Skirts" },
      { key: "Women-1-8", label: "Tops" },
      { key: "Women-1-9", label: "Sweaters" },
      { key: "Women-1-10", label: "Blazers" },
    ],
  },
  {
    key: "Women-2",
    type: "group",
    label: "Accessories",
    children: [
      { key: "Women-2-1", label: "Watches" },
      { key: "Women-2-2", label: "Sunglasses" },
      { key: "Women-2-3", label: "Bags" },
      { key: "Women-2-4", label: "Belts" },
      { key: "Women-2-5", label: "Hats" },
      { key: "Women-2-6", label: "Scarves" },
      { key: "Women-2-7", label: "Jewelry" },
      { key: "Women-2-8", label: "Gloves" },
      { key: "Women-2-9", label: "Hair Accessories" },
      { key: "Women-2-10", label: "Tights" },
    ],
  },
  {
    key: "Women-3",
    type: "group",
    label: "Activewear",
    children: [
      { key: "Women-3-1", label: "Leggings" },
      { key: "Women-3-2", label: "Sports Bras" },
      { key: "Women-3-3", label: "Workout Tops" },
      { key: "Women-3-4", label: "Jackets" },
      { key: "Women-3-5", label: "Shorts" },
      { key: "Women-3-6", label: "Track Pants" },
      { key: "Women-3-7", label: "Running Shoes" },
      { key: "Women-3-8", label: "Yoga Mats" },
      { key: "Women-3-9", label: "Gym Bags" },
      { key: "Women-3-10", label: "Hoodies" },
    ],
  },
  {
    key: "Women-4",
    type: "group",
    label: "Lingerie",
    children: [
      { key: "Women-4-1", label: "Bras" },
      { key: "Women-4-2", label: "Panties" },
      { key: "Women-4-3", label: "Lingerie Sets" },
      { key: "Women-4-4", label: "Shapewear" },
      { key: "Women-4-5", label: "Sleepwear" },
      { key: "Women-4-6", label: "Robes" },
      { key: "Women-4-7", label: "Corsets" },
      { key: "Women-4-8", label: "Bodysuits" },
      { key: "Women-4-9", label: "Bridal Lingerie" },
      { key: "Women-4-10", label: "Leggings" },
    ],
  },
  {
    key: "Women-5",
    type: "group",
    label: "Shoes",
    children: [
      { key: "Women-5-1", label: "Flats" },
      { key: "Women-5-2", label: "Heels" },
      { key: "Women-5-3", label: "Boots" },
      { key: "Women-5-4", label: "Sneakers" },
      { key: "Women-5-5", label: "Sandals" },
      { key: "Women-5-6", label: "Loafers" },
      { key: "Women-5-7", label: "Mules" },
      { key: "Women-5-8", label: "Wedges" },
      { key: "Women-5-9", label: "Slippers" },
      { key: "Women-5-10", label: "Espadrilles" },
    ],
  },
];

const ChildrenDropdownItems = [
  {
    key: "children-1",
    type: "group",
    label: "New In",
    children: [
      { key: "children-1-1", label: "Footwear & Accessories" },
      { key: "children-1-2", label: "Innerwear & Sleepwear" },
    ],
  },
  {
    key: "children-2",
    type: "group",
    label: "Boys",
    children: [
      { key: "children-2-1", label: "Denims & Trousers" },
      { key: "children-2-2", label: "Joggers & Track Pants" },
      { key: "children-2-3", label: "Outerwear" },
      { key: "children-2-4", label: "Shirts" },
      { key: "children-2-5", label: "Shorts & 3/4ths" },
      { key: "children-2-6", label: "T-shirts" },
    ],
  },
  {
    key: "children-3",
    type: "group",
    label: "Toys",
    children: [
      { key: "children-3-1", label: "Action-Figurine & Collectibles" },
      { key: "children-3-2", label: "Creative & Educational Toys" },
      { key: "children-3-3", label: "Gaming, Robots & Vehicles" },
      { key: "children-3-4", label: "Infants Toys" },
      { key: "children-3-5", label: "Role & Pretend Play" },
      { key: "children-3-6", label: "School, Party Supplies & Books" },
      { key: "children-3-7", label: "Soft Toys" },
      { key: "children-3-8", label: "Toy-Guns & Accessories" },
    ],
  },
  {
    key: "children-4",
    type: "group",
    label: "Shop by Age",
    children: [
      { key: "children-4-1", label: "0 to 2 Years" },
      { key: "children-4-2", label: "2 to 5 Years" },
      { key: "children-4-3", label: "5 to 8 Years" },
      { key: "children-4-4", label: "8 to 12 Years" },
      { key: "children-4-5", label: "12 Years and Above" },
    ],
  },
  {
    key: "children-5",
    type: "group",
    label: "Girls",
    children: [
      { key: "children-5-1", label: "Dresses & Frocks" },
      { key: "children-5-2", label: "Jeans & Jeggings" },
      { key: "children-5-3", label: "Leggings" },
      { key: "children-5-4", label: "Outerwear" },
      { key: "children-5-5", label: "Skirts & Shorts" },
      { key: "children-5-6", label: "Tops & T-shirts" },
    ],
  },
  {
    key: "children-6",
    type: "group",
    label: "Featured",
    children: [
      { key: "children-6-1", label: "Denims Under 799" },
      { key: "children-6-2", label: "Shirts Under 599" },
      { key: "children-6-3", label: "T-Shirts Under 399" },
      { key: "children-6-4", label: "Dresses Under 499" },
      { key: "children-6-5", label: "Tops Under 399" },
    ],
  },
  {
    key: "children-7",
    type: "group",
    label: "Baby",
    children: [{ key: "children-7-1", label: "Sets" }],
  },
  {
    key: "children-8",
    type: "group",
    label: "Toys and Babycare",
    children: [
      { key: "children-8-1", label: "Action-Figurine & Collectibles" },
      { key: "children-8-2", label: "Creative & Educational Toys" },
      { key: "children-8-3", label: "Gaming, Robots & Vehicles" },
      { key: "children-8-4", label: "Infants Toys" },
      { key: "children-8-5", label: "Role & Pretend Play" },
      { key: "children-8-6", label: "School, Party Supplies & Books" },
      { key: "children-8-7", label: "Soft Toys" },
      { key: "children-8-8", label: "Toy-Guns & Accessories" },
    ],
  },
];

const menDropdownItems = [
  {
    key: "men-1",
    type: "group",
    label: "Footwear",
    children: [
      { key: "men-1-1", label: "Casual Shoes" },
      { key: "men-1-2", label: "Flip-Flops & Slippers" },
      { key: "men-1-3", label: "Formal Shoes" },
      { key: "men-1-4", label: "Sandals" },
      { key: "men-1-5", label: "Sneakers" },
      { key: "men-1-6", label: "Sports Shoes" },
      { key: "men-1-7", label: "Casual Shoes" },
      { key: "men-1-8", label: "Flip-Flops & Slippers" },
      { key: "men-1-9", label: "Formal Shoes" },
      { key: "men-1-10", label: "Sandals" },
      { key: "men-1-11", label: "Sneakers" },
      { key: "men-1-12", label: "Sports Shoes" },
      { key: "men-1-13", label: "Casual Shoes" },
      { key: "men-1-14", label: "Flip-Flops & Slippers" },
      { key: "men-1-15", label: "Formal Shoes" },
      { key: "men-1-16", label: "Sandals" },
      { key: "men-1-17", label: "Sneakers" },
      { key: "men-1-18", label: "Sports Shoes" },
    ],
  },
  {
    key: "men-2",
    type: "group",
    label: "Accessories",
    children: [
      { key: "men-2-1", label: "Backpacks" },
      { key: "men-2-2", label: "Bags & Wallets" },
      { key: "men-2-3", label: "Belts" },
      { key: "men-2-4", label: "Caps & Hats" },
      { key: "men-2-5", label: "Fashion Accessories" },
      { key: "men-2-6", label: "Luggage & Trolleys" },
      { key: "men-2-7", label: "Socks" },
      { key: "men-2-8", label: "Sunglasses & Frames" },
      { key: "men-2-9", label: "Watches" },
    ],
  },
  {
    key: "men-3",
    type: "group",
    label: "Precious Jewellery",
    children: [
      { key: "men-3-1", label: "Gold and Silver Coins" },
      { key: "men-3-2", label: "Gold And Diamond Jewellery" },
      { key: "men-3-3", label: "Silver Jewellery" },
    ],
  },
  {
    key: "men-4",
    type: "group",
    label: "Innerwear",
    children: [
      { key: "men-4-1", label: "Briefs" },
      { key: "men-4-2", label: "Trunks & Boxers" },
      { key: "men-4-3", label: "Vests" },
    ],
  },
  {
    key: "men-5",
    type: "group",
    label: "Featured",
    children: [
      { key: "men-5-1", label: "Bags Under 1499" },
      { key: "men-5-2", label: "Footwear Under 1499" },
      { key: "men-5-3", label: "Jeans Under 1199" },
      { key: "men-5-4", label: "Shorts & 3/4ths under 699" },
    ],
  },
];

const unisexDropdownItems = [
  {
    key: "uni-1",
    type: "group",
    label: "New In",
    children: [
      { key: "uni-1-1", label: "Footwear & Accessories" },
      { key: "uni-1-2", label: "Innerwear & Sleepwear" },
    ],
  },
  {
    key: "uni-2",
    type: "group",
    label: "Shop by Age",
    children: [
      { key: "uni-2-1", label: "0 to 2 Years" },
      { key: "uni-2-2", label: "2 to 5 Years" },
      { key: "uni-2-3", label: "5 to 8 Years" },
      { key: "uni-2-4", label: "8 to 12 Years" },
      { key: "uni-2-5", label: "12 Years and Above" },
    ],
  },
  {
    key: "uni-3",
    type: "group",
    label: "Featured",
    children: [
      { key: "uni-3-1", label: "Denims Under 799" },
      { key: "uni-3-2", label: "Shirts Under 599" },
      { key: "uni-3-3", label: "T-Shirts Under 399" },
      { key: "uni-3-4", label: "Dresses Under 499" },
      { key: "uni-3-5", label: "Tops Under 399" },
    ],
  },
  {
    key: "uni-4",
    type: "group",
    label: "Footwear",
    children: [
      { key: "uni-4-1", label: "Casual Shoes" },
      { key: "uni-4-2", label: "Flip-Flops & Slippers" },
      { key: "uni-4-3", label: "Formal Shoes" },
      { key: "uni-4-4", label: "Sandals" },
      { key: "uni-4-5", label: "Sneakers" },
      { key: "uni-4-6", label: "Sports Shoes" },
    ],
  },
  {
    key: "uni-5",
    type: "group",
    label: "Accessories",
    children: [
      { key: "uni-5-1", label: "Backpacks" },
      { key: "uni-5-2", label: "Bags & Wallets" },
      { key: "uni-5-3", label: "Belts" },
      { key: "uni-5-4", label: "Caps & Hats" },
      { key: "uni-5-5", label: "Fashion Accessories" },
      { key: "uni-5-6", label: "Luggage & Trolleys" },
      { key: "uni-5-7", label: "Socks" },
      { key: "uni-5-8", label: "Sunglasses & Frames" },
      { key: "uni-5-9", label: "Watches" },
    ],
  },
  {
    key: "uni-6",
    type: "group",
    label: "Toys and Babycare",
    children: [
      { key: "uni-6-1", label: "Action-Figurine & Collectibles" },
      { key: "uni-6-2", label: "Creative & Educational Toys" },
      { key: "uni-6-3", label: "Gaming, Robots & Vehicles" },
      { key: "uni-6-4", label: "Infants Toys" },
      { key: "uni-6-5", label: "Role & Pretend Play" },
      { key: "uni-6-6", label: "School, Party Supplies & Books" },
      { key: "uni-6-7", label: "Soft Toys" },
      { key: "uni-6-8", label: "Toy-Guns & Accessories" },
    ],
  },
  {
    key: "uni-7",
    type: "group",
    label: "Collections",
    children: [
      { key: "uni-7-1", label: "AJIO Exclusives" },
      { key: "uni-7-2", label: "Footwear & Accessories" },
    ],
  },
  {
    key: "uni-8",
    type: "group",
    label: "Featured Brands",
    children: [
      { key: "uni-8-1", label: "Crocs" },
      { key: "uni-8-2", label: "MINI KLUB" },
      { key: "uni-8-3", label: "Gini & Jony" },
      { key: "uni-8-4", label: "Hamleys" },
      { key: "uni-8-5", label: "Mothercare" },
      { key: "uni-8-6", label: "Marks & Spencer" },
      { key: "uni-8-7", label: "Pepe Jeans" },
      { key: "uni-8-8", label: "Peppermint" },
      { key: "uni-8-9", label: "UCB Kids" },
      { key: "uni-8-10", label: "U.S.P.A Kids" },
      { key: "uni-8-11", label: "MILA BABY" },
      { key: "uni-8-12", label: "Adidas Kids" },
      { key: "uni-8-13", label: "Lee Cooper" },
    ],
  },
];

const combinedDropdownItems = [
  {
    key: "subWomen",
    label: "Women",
    children: [
      {
        key: "subWomen1",
        label: "Women",
        children: [
          { key: "Women-1-1", label: "Shoes" },
          { key: "Women-1-2", label: "Jeans" },
          { key: "Women-1-3", label: "Shirts" },
          { key: "Women-1-4", label: "Accessories" },
          { key: "Women-1-5", label: "Jackets" },
          { key: "Women-1-6", label: "Dresses" },
          { key: "Women-1-7", label: "Skirts" },
          { key: "Women-1-8", label: "Tops" },
          { key: "Women-1-9", label: "Sweaters" },
          { key: "Women-1-10", label: "Blazers" },
        ],
      },
      {
        key: "subWomen2",
        label: "Accessories",
        children: [
          { key: "Women-2-1", label: "Watches" },
          { key: "Women-2-2", label: "Sunglasses" },
          { key: "Women-2-3", label: "Bags" },
          { key: "Women-2-4", label: "Belts" },
          { key: "Women-2-5", label: "Hats" },
          { key: "Women-2-6", label: "Scarves" },
          { key: "Women-2-7", label: "Jewelry" },
          { key: "Women-2-8", label: "Gloves" },
          { key: "Women-2-9", label: "Hair Accessories" },
          { key: "Women-2-10", label: "Tights" },
        ],
      },
      {
        key: "subWomen3",
        label: "Activewear",
        children: [
          { key: "Women-3-1", label: "Leggings" },
          { key: "Women-3-2", label: "Sports Bras" },
          { key: "Women-3-3", label: "Workout Tops" },
          { key: "Women-3-4", label: "Jackets" },
          { key: "Women-3-5", label: "Shorts" },
          { key: "Women-3-6", label: "Track Pants" },
          { key: "Women-3-7", label: "Running Shoes" },
          { key: "Women-3-8", label: "Yoga Mats" },
          { key: "Women-3-9", label: "Gym Bags" },
          { key: "Women-3-10", label: "Hoodies" },
        ],
      },
      {
        key: "subWomen4",
        label: "Lingerie",
        children: [
          { key: "Women-4-1", label: "Bras" },
          { key: "Women-4-2", label: "Panties" },
          { key: "Women-4-3", label: "Lingerie Sets" },
          { key: "Women-4-4", label: "Shapewear" },
          { key: "Women-4-5", label: "Sleepwear" },
          { key: "Women-4-6", label: "Robes" },
          { key: "Women-4-7", label: "Corsets" },
          { key: "Women-4-8", label: "Bodysuits" },
          { key: "Women-4-9", label: "Bridal Lingerie" },
          { key: "Women-4-10", label: "Leggings" },
        ],
      },
      {
        key: "subWomen5",
        label: "Shoes",
        children: [
          { key: "Women-5-1", label: "Flats" },
          { key: "Women-5-2", label: "Heels" },
          { key: "Women-5-3", label: "Boots" },
          { key: "Women-5-4", label: "Sneakers" },
          { key: "Women-5-5", label: "Sandals" },
          { key: "Women-5-6", label: "Loafers" },
          { key: "Women-5-7", label: "Mules" },
          { key: "Women-5-8", label: "Wedges" },
          { key: "Women-5-9", label: "Slippers" },
          { key: "Women-5-10", label: "Espadrilles" },
        ],
      },
    ],
  },
  {
    key: "subMen",
    label: "Men",
    children: [
      {
        key: "subMen1",
        label: "Footwear",
        children: [
          { key: "men-1-1", label: "Casual Shoes" },
          { key: "men-1-2", label: "Flip-Flops & Slippers" },
          { key: "men-1-3", label: "Formal Shoes" },
          { key: "men-1-4", label: "Sandals" },
          { key: "men-1-5", label: "Sneakers" },
          { key: "men-1-6", label: "Sports Shoes" },
          { key: "men-1-7", label: "Casual Shoes" },
          { key: "men-1-8", label: "Flip-Flops & Slippers" },
          { key: "men-1-9", label: "Formal Shoes" },
          { key: "men-1-10", label: "Sandals" },
          { key: "men-1-11", label: "Sneakers" },
          { key: "men-1-12", label: "Sports Shoes" },
          { key: "men-1-13", label: "Casual Shoes" },
          { key: "men-1-14", label: "Flip-Flops & Slippers" },
          { key: "men-1-15", label: "Formal Shoes" },
          { key: "men-1-16", label: "Sandals" },
          { key: "men-1-17", label: "Sneakers" },
          { key: "men-1-18", label: "Sports Shoes" },
        ],
      },
      {
        key: "subMen2",
        label: "Accessories",
        children: [
          { key: "men-2-1", label: "Backpacks" },
          { key: "men-2-2", label: "Bags & Wallets" },
          { key: "men-2-3", label: "Belts" },
          { key: "men-2-4", label: "Caps & Hats" },
          { key: "men-2-5", label: "Fashion Accessories" },
          { key: "men-2-6", label: "Luggage & Trolleys" },
          { key: "men-2-7", label: "Socks" },
          { key: "men-2-8", label: "Sunglasses & Frames" },
          { key: "men-2-9", label: "Watches" },
        ],
      },
      {
        key: "subMen3",
        label: "Precious Jewellery",
        children: [
          { key: "men-3-1", label: "Gold and Silver Coins" },
          { key: "men-3-2", label: "Gold And Diamond Jewellery" },
          { key: "men-3-3", label: "Silver Jewellery" },
        ],
      },
      {
        key: "subMen4",
        label: "Innerwear",
        children: [
          { key: "men-4-1", label: "Briefs" },
          { key: "men-4-2", label: "Trunks & Boxers" },
          { key: "men-4-3", label: "Vests" },
        ],
      },
      {
        key: "subMen5",
        label: "Featured",
        children: [
          { key: "men-5-1", label: "Bags Under 1499" },
          { key: "men-5-2", label: "Footwear Under 1499" },
          { key: "men-5-3", label: "Jeans Under 1199" },
          { key: "men-5-4", label: "Shorts & 3/4ths under 699" },
        ],
      },
    ],
  },
  {
    key: "subChildren",
    label: "Children",
    children: [
      {
        key: "subChildren1",
        label: "New In",
        children: [
          { key: "children-1-1", label: "Footwear & Accessories" },
          { key: "children-1-2", label: "Girls Clothing" },
          { key: "children-1-3", label: "Boys Clothing" },
        ],
      },
      {
        key: "subChildren2",
        label: "Girls Clothing",
        children: [
          { key: "children-2-1", label: "Clothing Sets" },
          { key: "children-2-2", label: "Dresses" },
          { key: "children-2-3", label: "Ethnic Wear" },
          { key: "children-2-4", label: "Jackets" },
          { key: "children-2-5", label: "Jeans" },
          { key: "children-2-6", label: "Jumpsuits" },
          { key: "children-2-7", label: "Leggings" },
          { key: "children-2-8", label: "Nightwear" },
          { key: "children-2-9", label: "Skirts & Pants" },
          { key: "children-2-10", label: "Shorts" },
        ],
      },
      {
        key: "subChildren3",
        label: "Boys Clothing",
        children: [
          { key: "children-3-1", label: "Clothing Sets" },
          { key: "children-3-2", label: "Jeans" },
          { key: "children-3-3", label: "Jumpsuits" },
          { key: "children-3-4", label: "Knitwear" },
          { key: "children-3-5", label: "Outerwear" },
          { key: "children-3-6", label: "Shirts" },
          { key: "children-3-7", label: "T-shirts" },
          { key: "children-3-8", label: "Trousers & Pants" },
        ],
      },
      {
        key: "subChildren4",
        label: "Footwear",
        children: [
          { key: "children-4-1", label: "Casual Shoes" },
          { key: "children-4-2", label: "Flip-Flops" },
          { key: "children-4-3", label: "Formal Shoes" },
          { key: "children-4-4", label: "Sandals" },
          { key: "children-4-5", label: "School Shoes" },
          { key: "children-4-6", label: "Slippers" },
          { key: "children-4-7", label: "Sneakers" },
          { key: "children-4-8", label: "Sports Shoes" },
        ],
      },
    ],
  },
  {
    key: "subUnisex",
    label: "Unisex",
    children: [
      {
        key: "subUnisex1",
        label: "Unisex New In",
        children: [
          { key: "unisex-1-1", label: "Footwear & Accessories" },
          { key: "unisex-1-2", label: "Clothing" },
          { key: "unisex-1-3", label: "Sportswear" },
        ],
      },
      {
        key: "subUnisex2",
        label: "Unisex Clothing",
        children: [
          { key: "unisex-2-1", label: "T-shirts" },
          { key: "unisex-2-2", label: "Jeans" },
          { key: "unisex-2-3", label: "Jackets" },
          { key: "unisex-2-4", label: "Trousers" },
        ],
      },
      {
        key: "subUnisex3",
        label: "Unisex Footwear",
        children: [
          { key: "unisex-3-1", label: "Casual Shoes" },
          { key: "unisex-3-2", label: "Flip-Flops" },
          { key: "unisex-3-3", label: "Formal Shoes" },
          { key: "unisex-3-4", label: "Sandals" },
        ],
      },
    ],
  },
];

const { useBreakpoint } = Grid;

const Navbar = () => {
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [isCollapseVisible, setIsCollapseVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const targetPath = "/";
  const screens = useBreakpoint();
  const cartProducts = useContext(CartContext);
  const [show, setShow] = useState(true);

  const MenuItem = ({ children, menuItems }) => {
    return (
      <Dropdown
        menu={{
          items: menuItems,
          className: "custom-dropdown",
        }}
        trigger={["hover"]}
        placement="bottom"
        overlayStyle={{}}
      >
        <motion.div
          className="menu-item dark:text-white dark:hover:text-red-500"
          whileHover={{ color: "#000000" }}
          whileTap={{ scale: 0.95 }}
          initial={{ position: "relative" }}
        >
          {children}
          <motion.div
            className="underline"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Dropdown>
    );
  };

  useEffect(() => {
    if (shouldNavigate) {
      if (location.pathname === targetPath) {
        window.location.reload();
      } else {
        navigate(targetPath);
      }
      setShouldNavigate(false);
    }
  }, [shouldNavigate, location.pathname, navigate, targetPath]);

  const toggleCollapse = () => {
    setIsCollapseVisible(!isCollapseVisible);
  };

  const handleTitleClick = () => {
    setShouldNavigate(true);
  };

  const handleTopMenuClick = () => {
    navigate("/products-page");
  };

  const handleCartClick = () => {
    navigate("/cart-details");
  };

  return (
    <nav>
      <div className="w-full fixed top-0 left-0 py-3 px-8 shadow-lg rounded-xl z-[1000] bg-white dark:bg-black">
        {screens.xl ? (
          <Space className="header-content" size={30}>
            <div onClick={handleTitleClick} className="title">
              smile & style
            </div>
            <Space size={30}>
              <MenuItem
                onClick={handleTopMenuClick}
                menuItems={ChildrenDropdownItems}
              >
                Children
              </MenuItem>
              <MenuItem
                onClick={handleTopMenuClick}
                menuItems={menDropdownItems}
              >
                Men
              </MenuItem>
              <MenuItem
                onClick={handleTopMenuClick}
                menuItems={womenDropdownItems}
              >
                Women
              </MenuItem>
              <MenuItem
                onClick={handleTopMenuClick}
                menuItems={unisexDropdownItems}
              >
                UniSex
              </MenuItem>
            </Space>
            <div className="menu-content">
              <Search
                placeholder="input search text"
                allowClear
                style={{
                  width: 300,
                }}
              />
              {/* <DarkModeToggle /> */}
              <Switch checked={show} onChange={() => setShow(!show)} />
              <Badge count={show ? 25 : 0} showZero color="#faad14" />
              <Badge count={cartProducts !== null ? cartProducts.length : 0} />
              <Badge
                count={
                  show ? (
                    <AiOutlineShopping
                      className="dark:text-white hover:cursor-pointer"
                      style={{ fontSize: "30px" }}
                      onClick={handleCartClick}
                    />
                  ) : (
                    0
                  )
                }
              />

              <Badge count={cartProducts.length}>
                <AiOutlineShopping
                  className="dark:text-white hover:cursor-pointer"
                  style={{ fontSize: "30px" }}
                  onClick={handleCartClick}
                />
              </Badge>
              <AiOutlineUser
                className="dark:text-white hover:cursor-pointer"
                style={{ fontSize: "30px" }}
              />
            </div>
          </Space>
        ) : (
          <div>
            <Space className="header-content" size={30}>
              <div onClick={handleTitleClick} className="title">
                smile & style
              </div>
              <Space size={20} className="menu-content">
                <Button
                  type="text"
                  className="menu-content"
                  style={{
                    color: "black",
                    fontSize: "24px",
                    padding: "0px",
                    top: "0.2rem",
                  }}
                  onClick={toggleCollapse}
                >
                  <MenuOutlined />
                </Button>
                <AiOutlineShopping
                  className="menu-content"
                  style={{ fontSize: "30px" }}
                />
                <AiOutlineUser
                  className="menu-content"
                  style={{ fontSize: "30px" }}
                />
              </Space>
            </Space>
          </div>
        )}
      </div>
      {isCollapseVisible && (
        <Menu
          style={{
            marginTop: "90px",
            marginLeft: "0px",
            borderRadius: "0px 0px 20px 20px",
            width: 256,
          }}
          open
          mode="vertical"
          items={combinedDropdownItems}
        />
      )}
    </nav>
  );
};

export default Navbar;
