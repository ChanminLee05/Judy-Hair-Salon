import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import {HairStudio} from "./Components/Model/HairInfo";
import MainPage from "./Components/MainPage";
import ServiceDetailPage from "./Components/Price/ServiceDetailPage";

let data:HairStudio = {
  name: 'Judy Hair Studio',
  address: {
    streetNumber: '285 Desrochers Blvd SW',
    city: 'Edmonton',
    province: 'AB',
    zipCode: 'T6W 3H9'
  },
  phoneNumber: '780-935-0887',
  instagram: '@judyhairsalon',
  services: [
    { category: 'Cut', subCategory: 'Men Hair Cut', description: "Standard men's haircut", price: "$30 +" },
    { category: 'Cut', subCategory: 'Women Hair Cut', description: "Standard women's haircut", price: "$45 +" },
    { category: 'Perm', subCategory: 'Men Hair Perm', description: "Basic perm for men", price: "$60 +" },
    { category: 'Perm', subCategory: 'Men Heat Perm', description: "Standard heat perm for men", price: "$100 +" },
    { category: 'Perm', subCategory: 'Men Magic Straight Perm', description: "Standard magic straight perm for men", price: "$100 +" },
    { category: 'Perm', subCategory: 'Women Hair Perm', description: "Basic perm for women", price: "$120 +" },
    { category: 'Perm', subCategory: 'Women Heat Perm', description: "Standard heat perm for women", price: "$160 +" },
    { category: 'Perm', subCategory: 'Women Magic Straight Perm', description: "Standard magic straight perm for women", price: "$160 +" },
    { category: 'Color', subCategory: 'Men\'s Coloring', description: "Basic hair coloring for men", price: "$40 +" },
    { category: 'Color', subCategory: 'Women\'s Coloring', description: "Basic hair coloring for women", price: "$120 +" },
    { category: 'Color', subCategory: 'Color Refresh', description: "Basic hair coloring for women", price: "$70 +" },
    { category: 'Color', subCategory: 'Ombre', description: "Basic hair coloring for women", price: "Upon Consultation" },
    { category: 'Styling/Care', subCategory: 'Men Hair Treatment', description: "Basic hair treatment for men", price: "$40 +" },
    { category: 'Styling/Care', subCategory: 'Women Hair Treatment', description: "Basic hair treatment for women", price: "$65 +" },
    { category: 'Styling/Care', subCategory: 'Shampoo & Blowout', description: "Basic hair styling with shampoo and dry", price: "$35 +" },
    { category: 'Styling/Care', subCategory: 'Straightening', description: "Basic hair styling with straightening", price: "$35 +" },
    { category: 'Styling/Care', subCategory: 'Special Occasion', description: "Basic hair styling for special occasion", price: "$65 +" },
    { category: 'Styling/Care', subCategory: 'Hair Extension', description: "Standard hair extensions", price: "$100 +" },
    { category: 'Styling/Care', subCategory: 'Bridal', description: "Basic hair styling for bridal", price: "Upon Consultation" },
  ],
  hours: [
    { day: 'Monday', time: '10:00 - 18:00' },
    { day: 'Tuesday', time: '10:00 - 18:00' },
    { day: 'Wednesday', time: '10:00 - 18:00' },
    { day: 'Thursday', time: '10:00 - 18:00' },
    { day: 'Friday', time: '10:00 - 18:00' },
    { day: 'Saturday', time: '10:00 - 18:00' },
    { day: 'Sunday', time: 'Closed' }
  ]
}

function App() {


  // data.services.forEach((service, index) => {
  //   console.log(`Service ${index + 1}:`, service);
  // });

  return (
      <Router>
        <Routes>
          <Route index element={<MainPage info={data}/>} />
          <Route path="/" element={<MainPage info={data} />} />
          <Route path="/service-detail" element={<ServiceDetailPage  info={data}/>} />
        </Routes>
      </Router>
  );
}

export default App;
