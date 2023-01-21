import "./Home.scss";

import React from "react";
import Header from "../../layouts/Header/Header";
import Images from "../../layouts/Images/Images";
import { SearchProvider } from "../../contexts/searchContext";
import Message from "../../layouts/Message/Message";
import Add_Image from "../../components/Add_Image/Add_Image";

function Home() {
  return (
    <section id="home">
      <SearchProvider>
        <Header />
        <Images />
      </SearchProvider>
      <Message id="add_image-message">
        <Add_Image />
      </Message>
    </section>
  );
}

export default Home;
