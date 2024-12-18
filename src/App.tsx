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
  notice: "With any color service, enjoy a complimentary Olaplex treatment—for healthier, more vibrant hair and your ultimate satisfaction!",
  services: [
    { category: 'Cut', subCategory: 'Men\'s Hair Cut', 
      price: "$30+"
    },
    { category: 'Cut', subCategory: 'Women\'s Hair Cut', 
      price: "$40+"
    },
    { category: 'Perm', subCategory: 'Men\'s Standard Perm',  
      price: "$70+"
    },
    { category: 'Perm', subCategory: 'Men\'s Down Perm', 
      price: "$100+"
    },
    { category: 'Perm', subCategory: 'Men\'s Multi Perm', 
      price: "$150+"
    },
    { category: 'Perm', subCategory: 'Women\'s Standard Perm', 
      price: "$120+"
    },
    { category: 'Perm', subCategory: 'Women\'s Straight Perm', 
      price: "$200+"
    },
    { category: 'Perm', subCategory: 'Women\'s Digital Perm', 
      price: "$200+"
    },
    { category: 'Color', subCategory: 'Men\'s Solid Color', 
      price: "$70+" 
    },
    { category: 'Color', subCategory: 'Women\'s Solid Color', 
      price: "$120+"
    },
    { category: 'Color', subCategory: 'Base/Roots Touch Up', 
      price: "$80"
    },
    { category: 'Color', subCategory: 'Women\'s Highlights', 
      price: "$150+"
    },
    { category: 'Color', subCategory: 'Women\'s Multicolor', 
      price: "$150+"
    },
    { category: 'Color', subCategory: 'Women\'s Balayage', 
      price: "$250+"
    },
    { category: 'Styling/Care', subCategory: 'Hair Therapy Treatment', 
      price: "$50+"
    },
    { category: 'Styling/Care', subCategory: 'Olaplex Bonding Treatment', 
      price: "$85+"
    },
    { category: 'Styling/Care', subCategory: 'Hair Botox', 
      price: "$250+"
    },
    { category: 'Styling/Care', subCategory: 'Scalp Massage', 
      price: "$100+"
    },
    { category: 'Styling/Care', subCategory: 'Shampoo & Blowout', 
      price: "$50"
    },
    { category: 'Styling/Care', subCategory: 'Hair Extension', 
      price: "Upon Consultation"
    },
    { category: 'Styling/Care', subCategory: 'Updo', 
      price: "Upon Consultation"
    },
    { category: 'Styling/Care', subCategory: 'Bridal', 
      price: "Upon Consultation"
    }
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
