import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageConnection from "./connection/PageConnection";
import BlogListPage from "./pages/BlogListPage";
import SingleBlogPage from "./pages/SingleBlogPage";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Authentication from "./pages/Authentication";
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageConnection />}>
        <Route index element={<HomePage />} />
        <Route path="story" element={<BlogListPage />} />
        <Route path="single" element={<SingleBlogPage />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="login" element={<Authentication />} />
        <Route path="profile" element={<CreateStory />} />
      </Route>
    </Routes>
  );
}

export default App;
