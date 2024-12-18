export type HairStudio = {
    name: string;
    address: Address;
    phoneNumber: string;
    instagram: string;
    services: Service[];
    hours: OperatingHours[];
    notice: string;
}

export type Address = {
    streetNumber: string;
    unitNumber?: string;
    city: string;
    province: string;
    zipCode: string;
}

type ServiceCategory = 'Cut' | 'Perm' | 'Color' | 'Styling/Care';

type HairCutCategory = 'Men\'s Hair Cut' | 'Women\'s Hair Cut';
type HairPermCategory = 'Men\'s Standard Perm' | 'Men\'s Down Perm' | 'Men\'s Multi Perm' | 'Women\'s Standard Perm' | 'Women\'s Straight Perm' | 'Women\'s Digital Perm';
type HairColorCategory = 'Men\'s Solid Color' | 'Men\'s Hair Dye' | 'Women\'s Solid Color' | 'Women\'s Hair Dye' | 'Base/Roots Touch Up' | 'Root Hair Dye' | 'Women\'s Highlights' | 'Women\'s Highlights Dye' | 'Women\'s Multicolor' | 'Women\'s Multicolor Dye' | 'Women\'s Balayage' | 'Women\'s Balayage Dye';
type HairTherapy = 'Hair Therapy Treatment' | 'Olaplex Bonding Treatment' | 'Hair Botox' | 'Scalp Massage';
type HairStylingCategory = 'Shampoo & Blowout' | 'Bridal' | 'Updo' | 'Hair Extension';

type SubCategory = HairCutCategory | HairPermCategory | HairColorCategory | HairTherapy | HairStylingCategory;


export type Service = {
    category: ServiceCategory;
    subCategory: SubCategory;
    price: string;
}

export type OperatingHours = {
    day: string;
    time: string;
}

export type StoreNameOnly = Pick<HairStudio, 'name'>
export type ServiceOnly = Pick<HairStudio, 'services'>