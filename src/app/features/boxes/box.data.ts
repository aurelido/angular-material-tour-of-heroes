export interface Box {
    id: number;
    name: string;
    type?: string;
    description?: string;
    stars?: number;
    price: number;  // Unit price in cts e.g. 100 = 1€
    size?: string;
}


export const BOXES: Box[] = [
    {
        id: 1,
        name: 'Sweet Box',
        type: 'SweetBox',
        description: "All you need is love... But a little sweet now and then doesn't hurt",
        stars: 5,
        size: 'large',
        price: 4500
    },
    {
        id: 2,
        name: 'Salty Box',
        type: 'SaltyBox',
        description: 'There are exactly as many occasions in life as we choose to celebrate.',
        stars: 5,
        size: 'large',
        price: 5000
    },
    {
        id: 3,
        name: 'Special Box',
        type: 'SpecialBox',
        description: 'For a special ocasionm, A great option to enjoy anytime, anywhere.',
        stars: 5,
        size: 'large',
        price: 5500
    },
    {
        id: 4,
        name: 'Brownies Box Nº1',
        description: 'You will never enjoy more getting a box full of brownies',
        stars: 5,
        size: 'small',
        price: 2500
    },
    {
        id: 5,
        name: 'Brownies Box Nº2',
        description: 'You will never enjoy more getting a box full of brownies',
        stars: 5,
        size: 'medium',
        price: 4500
    },
    {
        id: 6,
        name: 'Cookies Box Nº1',
        description: 'Treat yourself or anyone with a box full of  cookies',
        stars: 4.5,
        size: 'small',
        price: 2500
    },
    {
        id: 7,
        name: 'Cookies Box Nº2',
        description: 'Treat yourself or anyone with a box full of  cookies',
        stars: 5,
        size: 'medium',
        price: 3500
    }
];