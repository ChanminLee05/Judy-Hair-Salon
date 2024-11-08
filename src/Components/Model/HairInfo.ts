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

type ServiceCategory = 'Hair Cut' | 'Hair Perm' | 'Coloring' | 'Treatment' | 'Hair Extension' | 'Hair Styling' | 'Hair Spa';

type HairCutCategory = 'Men Hair Cut' | 'Women Hair Cut';
type HairPermCategory = 'Men Hair Perm' | 'Men Heat Perm' | 'Men Magic Straight Perm' | 'Women Hair Perm' | 'Women Heat Perm' | 'Women Magic Straight Perm';
type HairColorCategory = 'Men\'s Coloring' | 'Women\'s Coloring' | 'Color Refresh' | 'Ombre' | 'Base Touch Up';
type HairTreatmentCategory = 'Men Hair Treatment' | 'Women Hair Treatment';
type HairStylingCategory = 'Shampoo & Blowout' | 'Curl' | 'Straightening' | 'Special Occasion' | 'Bridal' | 'Updo';
type HairSpaCategory = 'Scalp Massage';

type SubCategory = HairCutCategory | HairPermCategory | HairColorCategory | HairTreatmentCategory | 'Hair Extension' | HairStylingCategory | HairSpaCategory;


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