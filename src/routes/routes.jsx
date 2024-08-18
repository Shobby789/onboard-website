import { lazy } from "react";
import Layout from "../components/Global/Layout";
import ThankYouPage from "../pages/thankyou/ThankYouPage";
import Layout2 from "../components/Global/Layout2";

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
  {
    title: "Thank You Page",
    url: "/thank-you",
    page: <Layout2 pages={<ThankYouPage />} />,
  },
];
