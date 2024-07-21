import { lazy } from "react";
import Layout from "../components/Global/Layout";

const HomePage = lazy(() => import("../pages/home/Home"));
const AboutUsPage = lazy(() => import("../pages/aboutus/AboutUs"));
const ContactUsPage = lazy(() => import("../pages/contactus/ContactUs"));

export const routes = [
  {
    title: "Home Page",
    url: "/",
    page: <Layout pages={<HomePage />} />,
  },
  {
    title: "About Us Page",
    url: "/about-us",
    page: <Layout pages={<AboutUsPage />} />,
  },
  {
    title: "Contact Us Page",
    url: "/contact-us",
    page: <Layout pages={<ContactUsPage />} />,
  },
];
