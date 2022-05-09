import React, { Component } from "react";
import banner from "../media/banners/welcome.png";

class Banner extends Component {
  render() {
    return <img src={banner} className="banner" alt="banner" />;
  }
}

export default Banner;
