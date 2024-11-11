export type HairStudio = {
    name: string;
    address: Address;
    phoneNumber: string;
    instagram: string;
    services: Service[];
    hours: OperatingHours[];
}

export type Address = {
    streetNumber: string;
    unitNumber?: string;
    city: string;
    province: string;
    zipCode: string;
}

type ServiceCategory = 'Cut' | 'Perm' | 'Color' | 'Styling/Care';

type HairCutCategory = 'Men Hair Cut' | 'Women Hair Cut';
type HairPermCategory = 'Men Hair Perm' | 'Men Heat Perm' | 'Men Magic Straight Perm' | 'Women Hair Perm' | 'Women Heat Perm' | 'Women Magic Straight Perm';
type HairColorCategory = 'Men\'s Coloring' | 'Women\'s Coloring' | 'Color Refresh' | 'Ombre' | 'Base Touch Up';
type HairStylingCategory = 'Shampoo & Blowout' | 'Men Hair Treatment' | 'Women Hair Treatment' | 'Straightening' | 'Special Occasion' | 'Bridal' | 'Updo' | 'Hair Extension' | 'Scalp Massage';

type SubCategory = HairCutCategory | HairPermCategory | HairColorCategory | HairStylingCategory;


export type Service = {
    category: ServiceCategory;
    subCategory: SubCategory;
    description: string;
    price: string;
}

export type OperatingHours = {
    day: string;
    time: string;
}

export type StoreNameOnly = Pick<HairStudio, 'name'>
export type ServiceOnly = Pick<HairStudio, 'services'>