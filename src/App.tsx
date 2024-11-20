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
    { category: 'Cut', subCategory: 'Men\'s Hair Cut', 
      description: { 
        English: "Elevate your style with a tailored men's haircut designed for sophistication.", 
        Korean: "세련된 스타일을 위해 맞춤형 남성 헤어컷을 제공합니다."
      }, 
      price: { English: "$30 +", Korean: "$30 +"} 
    },
    { category: 'Cut', subCategory: 'Women\'s Hair Cut', 
      description: { 
          English: "Experience elegance with a personalized women's haircut crafted to enhance your beauty.", 
          Korean: "아름다움을 돋보이게 하는 맞춤형 여성 헤어컷으로 우아함을 경험하세요."
      }, 
      price: { English: "$40 +", Korean: "$40 +" } 
    },
    { category: 'Perm', subCategory: 'Men\'s Standard Perm', 
      description: { 
          English: "Achieve a refined look with a men's standard perm, tailored for style and sophistication.", 
          Korean: "남성 기본 펌으로 세련된 스타일을 연출하고 고급스러운 느낌을 더하세요."
      }, 
      price: { English: "$70 +", Korean: "$70 +" } 
    },
    { category: 'Perm', subCategory: 'Men\'s Down Perm', 
      description: { 
          English: "Smooth and refine your look with a men's down perm, perfect for controlling stubborn hair and creating a sleek, natural style.", 
          Korean: "남성 다운 펌으로 거친 머리카락을 매끄럽게 정리하고 자연스러운 스타일을 연출하세요."
      }, 
      price: { English: "$100 +", Korean: "$100 +" } 
    },
    { category: 'Perm', subCategory: 'Men\'s Multi Perm', 
      description: { 
          English: "Achieve a dynamic, voluminous look with a men's multi perm, offering versatile curls and texture for a bold, stylish appearance.", 
          Korean: "다양한 스타일을 연출할 수 있는 남성 멀티 펌으로 볼륨감 넘치는 스타일을 완성하세요."
      }, 
      price: { English: "$150 +", Korean: "$150 +" } 
    },
    { category: 'Perm', subCategory: 'Women\'s Standard Perm', 
      description: { 
          English: "Transform your hair with a classic women's standard perm, adding beautiful, natural-looking curls and long-lasting volume.", 
          Korean: "여성 기본 펌으로 자연스러운 컬과 오랜 지속력을 더해 머리를 변신시켜 보세요."
      }, 
      price: { English: "$120 +", Korean: "$120 +" } 
    },
    { category: 'Perm', subCategory: 'Women\'s Straight Perm', 
      description: { 
          English: "Achieve sleek, straight, and frizz-free hair with our Women's Straight Perm, perfect for a smooth, polished look that lasts.", 
          Korean: "매끄럽고 곱슬거림 없는 직모를 위한 여성 스트레이트 펌으로 세련된 느낌을 유지하세요."
      }, 
      price: { English: "$200 +", Korean: "$200 +" } 
    },
    { category: 'Perm', subCategory: 'Women\'s Digital Perm', 
      description: { 
          English: "Get soft, natural waves with our Women's Digital Perm, designed to add volume and texture for a relaxed, long-lasting curl.", 
          Korean: "자연스러운 웨이브를 연출하는 여성 디지털 펌으로 볼륨과 질감을 더해 부드럽고 오래 지속되는 컬을 제공합니다."
      }, 
      price: { English: "$200 +", Korean: "$200 +" } 
    },
    { category: 'Color', subCategory: 'Men\'s Solid Color', 
      description: { 
          English: "Achieve a bold, sleek look with our Men's Solid Color service, offering a rich, uniform shade that enhances your style.", 
          Korean: "남성 단색 컬러 서비스로 강렬하고 세련된 스타일을 완성하세요."
      }, 
      price: { English: "$70 +", Korean: "$70 +" } 
    },
    { category: 'Color', subCategory: 'Women\'s Solid Color', 
      description: { 
          English: "Transform your look with our Women's Solid Color service, delivering a vibrant, consistent hue for a polished and radiant finish.", 
          Korean: "여성 단색 컬러 서비스로 매력적이고 생기 있는 색상을 제공합니다."
      }, 
      price: { English: "$120 +", Korean: "$120 +" } 
    },
    { category: 'Color', subCategory: 'Base/Roots Touch Up', 
      description: { 
          English: "Refresh your look with our Women's Base/Roots Touch Up service, expertly covering regrowth to maintain a seamless, vibrant color.", 
          Korean: "새로 자란 머리카락을 자연스럽게 커버하여 더욱 선명하고 화사한 색상을 유지합니다."
      }, 
      price: { English: "$80", Korean: "$80" } 
    },
    { category: 'Color', subCategory: 'Women\'s Highlights', 
      description: { 
          English: "Add dimension and brightness to your hair with our Women's Highlights service, creating a sun-kissed, natural look that enhances your style.", 
          Korean: "자연스러운 햇볕에 그을린 듯한 느낌을 주는 여성 하이라이트로 차별화된 스타일을 연출하세요."
      }, 
      price: { English: "$150 +", Korean: "$150 +" } 
    },
    { category: 'Color', subCategory: 'Women\'s Multicolor', 
      description: { 
          English: "Transform your look with our Women's Multicolor service, offering a vibrant blend of shades for a bold, dynamic style that stands out.", 
          Korean: "여성 멀티컬러 서비스로 다채로운 색조를 믹스하여 독특하고 대담한 스타일을 완성하세요."
      }, 
      price: { English: "$150 +", Korean: "$150 +" } 
    },
    { category: 'Color', subCategory: 'Women\'s Balayage', 
      description: { 
          English: "Achieve a natural, sun-kissed look with our Women's Balayage service, featuring hand-painted highlights that seamlessly blend for a soft, dimensional finish.", 
          Korean: "여성 발레야지 서비스로 부드럽고 자연스러운 손톱 컬러가 특징입니다."
      }, 
      price: { English: "$250 +", Korean: "$250 +" } 
    },
    { category: 'Styling/Care', subCategory: 'Hair Therapy Treatment', 
      description: { 
          English: "Revitalize your hair with our Hair Therapy Treatment, designed to nourish, repair, and restore strength, leaving your hair soft, smooth, and healthy.", 
          Korean: "헤어 치료 트리트먼트로 머리카락을 회복하고 영양을 공급하여 부드럽고 건강한 상태로 유지합니다."
      }, 
      price: { English: "$50 +", Korean: "$50 +" } 
    },
    { category: 'Styling/Care', subCategory: 'Olaplex Bonding Treatment', 
      description: { 
          English: "Experience the ultimate repair with our Olaplex Bonding Treatment, designed to strengthen and rebuild damaged hair from the inside out, leaving your hair visibly healthier and more resilient.", 
          Korean: "머리카락의 손상을 내부에서부터 복구하고 강화하는 올라플렉스 본딩 트리트먼트로 머리카락을 재건합니다."
      }, 
      price: { English: "$85 +", Korean: "$85 +" } 
    },
    { category: 'Styling/Care', subCategory: 'Hair Botox', 
      description: { 
          English: "Revitalize your hair with our Hair Botox treatment, which deeply nourishes and smooths each strand, reducing frizz and restoring a youthful, glossy shine for softer, more manageable hair.", 
          Korean: "헤어 보톡스로 머리카락을 깊게 영양을 공급하여 부드럽고 윤기 있는 건강한 머리로 회복시켜줍니다."
      }, 
      price: {  English: "$250 +", Korean: "$250 +" } 
    },
    { category: 'Styling/Care', subCategory: 'Scalp Massage', 
      description: { 
          English: "Indulge in a soothing scalp massage to relieve tension, increase circulation, and promote hair growth, leaving your scalp feeling refreshed and rejuvenated.", 
          Korean: "두피 마사지를 통해 긴장을 풀고 혈액순환을 촉진시켜 건강한 머리카락 성장을 돕습니다."
      }, 
      price: { English: "$100 +", Korean: "$100 +" } 
    },
    { category: 'Styling/Care', subCategory: 'Shampoo & Blowout', 
      description: { 
          English: "Enjoy a luxurious Shampoo & Blowout that cleanses, nourishes, and adds volume to your hair, leaving it smooth, shiny, and effortlessly styled.", 
          Korean: "샴푸 및 블로우아웃 서비스로 머리카락을 깨끗하게 세척하고 영양을 공급하며 볼륨감을 추가하여 부드럽고 윤기 있는 스타일을 완성하세요."
      }, 
      price: { English: "$50", Korean: "$50" }
    },
    { category: 'Styling/Care', subCategory: 'Hair Extension', 
      description: { 
          English: "Enhance your natural beauty with our premium Hair Extensions, offering added length, volume, and versatility for a flawless, glamorous look.", 
          Korean: "프리미엄 헤어 익스텐션으로 자연미를 더하고 길이, 볼륨 및 다양한 스타일을 추가하여 완벽하고 화려한 룩을 연출하세요."
      }, 
      price: { English: "Upon Consultation", Korean: "상담 후 결정" }
    },
    { category: 'Styling/Care', subCategory: 'Updo', 
      description: { 
          English: "Achieve an elegant and sophisticated look with our Updo service, perfect for special occasions, offering a flawless, long-lasting style tailored to your unique preferences.", 
          Korean: "특별한 날을 위한 완벽하고 우아한 업두 스타일을 경험하세요. 맞춤형 서비스를 제공합니다."
      }, 
      price: { English: "Upon Consultation", Korean: "상담 후 결정" }
    },
    { category: 'Styling/Care', subCategory: 'Bridal', 
      description: { 
          English: "Create the perfect bridal look with our specialized Bridal service, offering elegant, customized hair styling that ensures you look stunning on your special day, with styles that are as timeless as your love.", 
          Korean: "결혼식을 위한 특별한 맞춤형 헤어스타일로 아름다운 신부 스타일을 완성하세요."
      }, 
      price: { English: "Upon Consultation", Korean: "상담 후 결정" }
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
