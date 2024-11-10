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
    { category: 'Hair Cut', subCategory: 'Men Hair Cut', description: "Standard men's haircut", price: "$30 +" },
    { category: 'Hair Cut', subCategory: 'Women Hair Cut', description: "Standard women's haircut", price: "$45 +" },
    { category: 'Hair Perm', subCategory: 'Men Hair Perm', description: "Basic perm for men", price: "$60 +" },
    { category: 'Hair Perm', subCategory: 'Men Heat Perm', description: "Standard heat perm for men", price: "$100 +" },
    { category: 'Hair Perm', subCategory: 'Men Magic Straight Perm', description: "Standard magic straight perm for men", price: "$100 +" },
    { category: 'Hair Perm', subCategory: 'Women Hair Perm', description: "Basic perm for women", price: "$120 +" },
    { category: 'Hair Perm', subCategory: 'Women Heat Perm', description: "Standard heat perm for women", price: "$160 +" },
    { category: 'Hair Perm', subCategory: 'Women Magic Straight Perm', description: "Standard magic straight perm for women", price: "$160 +" },
    { category: 'Coloring', subCategory: 'Men\'s Coloring', description: "Basic hair coloring for men", price: "$40 +" },
    { category: 'Coloring', subCategory: 'Women\'s Coloring', description: "Basic hair coloring for women", price: "$120 +" },
    { category: 'Coloring', subCategory: 'Color Refresh', description: "Basic hair coloring for women", price: "$70 +" },
    { category: 'Coloring', subCategory: 'Ombre', description: "Basic hair coloring for women", price: "Upon Consultation" },
    { category: 'Treatment', subCategory: 'Men Hair Treatment', description: "Basic hair treatment for men", price: "$40 +" },
    { category: 'Treatment', subCategory: 'Women Hair Treatment', description: "Basic hair treatment for women", price: "$65 +" },
    { category: 'Hair Styling', subCategory: 'Shampoo & Blowout', description: "Basic hair styling with shampoo and dry", price: "$35 +" },
    { category: 'Hair Styling', subCategory: 'Curl', description: "Basic hair styling with curl service", price: "$35 +" },
    { category: 'Hair Styling', subCategory: 'Straightening', description: "Basic hair styling with straightening", price: "$35 +" },
    { category: 'Hair Styling', subCategory: 'Special Occasion', description: "Basic hair styling for special occasion", price: "$65 +" },
    { category: 'Hair Styling', subCategory: 'Bridal', description: "Basic hair styling for bridal", price: "Upon Consultation" },
    { category: 'Hair Extension', subCategory: 'Hair Extension', description: "Standard hair extensions", price: "$100 +" },
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


  data.services.forEach((service, index) => {
    console.log(`Service ${index + 1}:`, service);
  });

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
