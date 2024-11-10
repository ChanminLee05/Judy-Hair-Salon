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
    findUsOnInstagram: string;
    hoursOfOperation: string;
    visitUs: string;
    addressLabel: string;
    phoneLabel: string;
    bookNow: string;
    ourLocation: string;
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
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            hairPerm: {
                title: "Hair Perm",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            kBeautyStyling: {
                title: "K-beauty Styling",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
            hairSpa: {
                title: "Hair Spa",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            },
        },
        findUsOnInstagram: "Find Us on Instagram",
        hoursOfOperation: "Hours of Operation",
        visitUs: "VISIT US",
        addressLabel: "ADDRESS:",
        phoneLabel: "PHONE:",
        bookNow: "Book Now",
        ourLocation: "Our Location",
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
                description: "로렘 입숨 돌로르 시트 아메트, 콘섹테투어 아디피시싱 엘리트.",
            },
            hairPerm: {
                title: "헤어 펌",
                description: "로렘 입숨 돌로르 시트 아메트, 콘섹테투어 아디피시싱 엘리트.",
            },
            kBeautyStyling: {
                title: "케이 뷰티 스타일링",
                description: "로렘 입숨 돌로르 시트 아메트, 콘섹테투어 아디피시싱 엘리트.",
            },
            hairSpa: {
                title: "헤어 스파",
                description: "로렘 입숨 돌로르 시트 아메트, 콘섹테투어 아디피시싱 엘리트.",
            },
        },
        findUsOnInstagram: "인스타그램에서 저희를 만나보세요",
        hoursOfOperation: "운영 시간",
        visitUs: "찾아 오시는 길",
        addressLabel: "주소:",
        phoneLabel: "전화번호:",
        bookNow: "예약하기",
        ourLocation: "위치",
    },
}

export default languageData;