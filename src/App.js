import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/UI/header/Header";
import TravelDestinations from "./components/UI/body/travelDestinations/TravelDestinations";
import Register from "./components/UI/register/Register";
import Footer from "./components/UI/footer/Footer"
// import SlideShow from "./components/UI/slideshow/SlideShow";
import Body from "./components/UI/body/Body";

function App() {
  // const images = [
  //   'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_960_720.jpg',
  //   'https://cdn.pixabay.com/photo/2018/07/16/16/08/island-3542290_960_720.jpg',
  // ];
  return (
    <Router>
    <div className="App">
    {/* <SlideShow images={images} /> */}
      <Header />
      <Switch> 
        <Route path="/register" component={Register} />
        {/* <Route path="/destinations" component={TravelDestinations} /> */}
      </Switch>
      <Body />
      <Footer />
    </div>
  </Router>
);
}

export default App;
