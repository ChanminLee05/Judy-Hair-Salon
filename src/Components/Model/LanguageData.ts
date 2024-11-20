interface ServiceDetail {
    title: string;
    description: string;
}

interface Services {
    service: string;
    color: string;
    cut: string;
    perm: string;
    styling: string;
    hairColoring: ServiceDetail;
    hairPerm: ServiceDetail;
    kBeautyStyling: ServiceDetail;
    hairSpa: ServiceDetail;
}

interface LanguageStrings {
    prices: string;
    gallery: string;
    bookOnline: string;
    discoverStyle: string;
    bookAppointment: string;
    servicesTitle: string;
    services: Services;
    hoursOfOperation: string;
    visitUs: string;
    addressLabel: string;
    phoneLabel: string;
    bookNow: string;
    ourLocation: string;
    notice: string;
}

type LanguageData = {
    English: LanguageStrings;
    Korean: LanguageStrings;
};

const languageData: LanguageData = {
    English: {
        prices: "Prices",
        gallery: "Gallery",
        bookOnline: "Book Online",
        discoverStyle: "Discover your own style",
        bookAppointment: "Book an Appointment",
        servicesTitle: "Our Services",
        services: {
            service: "Services",
            color: "Color",
            cut: "Cut",
            perm: "Perm",
            styling: "Styling",
            hairColoring: {
                title: "Hair Coloring",
                description: "All hair color services include complimentary <b>Olaplex</b> treatment to protect and strengthen your hair. Enjoy vibrant, rich color without compromising hair health!",
            },
            hairPerm: {
                title: "Hair Perm",
                description: "Explore a variety of perm styles to suit your unique look! Our perm services include a personalized consultation to ensure the best results for your hair type.",
            },
            kBeautyStyling: {
                title: "K-beauty Styling",
                description: "Transform with the latest K-beauty trends! From bridal styling to modern Korean looks, enjoy a personalized consultation to achieve your perfect style.",
            },
            hairSpa: {
                title: "Hair Spa",
                description: "Revitalize your hair and scalp with our luxurious spa services. Enjoy soothing scalp massages, deep conditioning, and nutrient-rich hydration treatments for ultimate hair health.",
            },
        },
        hoursOfOperation: "Hours of Operation",
        visitUs: "VISIT US",
        addressLabel: "ADDRESS:",
        phoneLabel: "PHONE:",
        bookNow: "Book Now",
        ourLocation: "Our Location",
        notice: "With any color service, enjoy a complimentary Olaplex treatment—for healthier, more vibrant hair and your ultimate satisfaction!",
    },
    Korean: {
        prices: "가격",
        gallery: "갤러리",
        bookOnline: "온라인 예약",
        discoverStyle: "나만의 스타일을 발견하세요",
        bookAppointment: "예약하기",
        servicesTitle: "서비스",
        services: {
            service: "서비스",
            color: "염색",
            cut: "컷",
            perm: "펌",
            styling: "스타일링",
            hairColoring: {
                title: "헤어 컬러링",
                description: "모든 헤어 컬러 서비스에는 고객님의 모발 건강을 위한 <b>올라플렉스 케어</b>가 포함되어 있습니다. 선명하고 풍부한 컬러와 함께 손상 없이 아름다운 스타일을 경험하세요!",
            },
            hairPerm: {
                title: "헤어 펌",
                description: "나만의 스타일을 완성할 다양한 펌을 경험해보세요! 펌 서비스에는 모발 타입에 맞는 최상의 결과를 위한 맞춤 상담이 포함됩니다.",
            },
            kBeautyStyling: {
                title: "케이 뷰티 스타일링",
                description: "트렌디한 한국 스타일로 변신해보세요! 신부 스타일링부터 최신 K-뷰티 스타일까지, 맞춤 상담 후 완성도 높은 스타일을 제공합니다.",
            },
            hairSpa: {
                title: "헤어 스파",
                description: "두피 마사지부터 깊은 컨디셔닝, 영양, 수분 케어까지 제공하는 헤어 스파로 건강하고 생기 있는 머릿결을 완성하세요.",
            },
        },
        hoursOfOperation: "운영 시간",
        visitUs: "찾아 오시는 길",
        addressLabel: "주소:",
        phoneLabel: "전화번호:",
        bookNow: "예약하기",
        ourLocation: "위치",
        notice: "모든 염색 시 무료로 제공되는 Olaplex 트리트먼트로 더욱 건강하고 생기 넘치는 머릿결과 최고의 만족을 경험해보세요!",
    },
}

export default languageData;