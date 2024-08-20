import React from "react";
import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

// Define icon components for easy reference
const Icons = {
  FaCreditCard,
  FaBook,
  FaBriefcase,
};

// Define the sublinks data structure
const sublinks = [
  {
    id: 1,
    page: "products",
    links: [
      {
        id: 1,
        label: "payment",
        icon: <Icons.FaCreditCard />,
        url: "/products",
      },
      {
        id: 2,
        label: "terminal",
        icon: <Icons.FaCreditCard />,
        url: "/products",
      },
      {
        id: 3,
        label: "connect",
        icon: <Icons.FaCreditCard />,
        url: "/products",
      },
    ],
  },
  {
    id: 2,
    page: "developers",
    links: [
      { id: 1, label: "plugins", icon: <Icons.FaBook />, url: "/products" },
      { id: 2, label: "libraries", icon: <Icons.FaBook />, url: "/products" },
      { id: 3, label: "help", icon: <Icons.FaBook />, url: "/products" },
      { id: 4, label: "billing", icon: <Icons.FaBook />, url: "/products" },
    ],
  },
  {
    id: 3,
    page: "company",
    links: [
      { id: 1, label: "about", icon: <Icons.FaBriefcase />, url: "/products" },
      {
        id: 2,
        label: "customers",
        icon: <Icons.FaBriefcase />,
        url: "/products",
      },
    ],
  },
];

export default sublinks;
