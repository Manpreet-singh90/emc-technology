import Building_Management_IMAGE from '@/assets/services/Building_Management.jpg';
import Electrical_construction_IMAGE from '@/assets/services/Electrical_construction.jpg';
import Mechanical_Engineering_IMAGE from '@/assets/services/Mechanical_Engineering.jpg';
import Mechanical_and_electrical_maintenances_IMAGE from '@/assets/services/Mechanical_and_electrical_maintenances.jpg';
import Medium_voltag_IMAGE from '@/assets/services/Medium_voltag.jpg';
import Mechanical_CONSTRUCTION_BANNER_IMAGE from '@/assets/service-detail/mechanical-construction_banner.jpg';
import Mechanical_CONSTRUCTION_LEFT_IMAGE from '@/assets/service-detail/mechanical-construction-left.jpg';
import Mechanical_CONSTRUCTION_RIGHT_IMAGE from '@/assets/service-detail/mechanical-construction-right.png';



export const SERVICES = [
    {
        id: 1,
        image: Mechanical_Engineering_IMAGE,
        category: "Mechanical construction",
        description:
            "At Housa, we know that buying and home is one life’s biggest milestones, Our experienced team is here guide.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M6.31818 19.2955C6.14639 16.9763 7.98171 15 10.3073 15H37.6927C40.0183 15 41.8536 16.9763 41.6818 19.2955L40.2744 38.2955C40.1197 40.3843 38.3798 42 36.2853 42H11.7147C9.62016 42 7.88032 40.3843 7.72559 38.2955L6.31818 19.2955Z" stroke="white" strokeWidth={3} strokeLinejoin="round" />
                <path d="M16 19V10C16 7.79086 17.7909 6 20 6H28C30.2091 6 32 7.79086 32 10V19" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 34H32" stroke="white" strokeWidth={3} strokeLinecap="round" />
            </svg>
        )
    },
    {
        id: 2,
        image: Electrical_construction_IMAGE,
        category: "Electrical construction",
        description:
            "Selling your home doesn’t have to be overwhelming. With Housa, our and dedicated experts will make process.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 19L38.3162 7.94868C38.1416 7.42474 37.5753 7.14158 37.0513 7.31623L26 11" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 7C33 22 30 25 20 29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 3,
        image: Building_Management_IMAGE,
        category: "Building Management System",
        description:
            "Finding the right rental property is easy with Housebox. Whether you’re seeking a cozy apartment spacious.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 19L38.3162 7.94868C38.1416 7.42474 37.5753 7.14158 37.0513 7.31623L26 11" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 7C33 22 30 25 20 29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 4,
        image: Mechanical_and_electrical_maintenances_IMAGE,
        category: "Mechanical and electrical maintenances",
        description:
            "Finding the right rental property is easy with Housebox. Whether you’re seeking a cozy apartment spacious.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 19L38.3162 7.94868C38.1416 7.42474 37.5753 7.14158 37.0513 7.31623L26 11" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 7C33 22 30 25 20 29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        id: 5,
        image: Medium_voltag_IMAGE,
        category: "Medium voltage system construction",
        description:
            "Finding the right rental property is easy with Housebox. Whether you’re seeking a cozy apartment spacious.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                <path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M42 19L38.3162 7.94868C38.1416 7.42474 37.5753 7.14158 37.0513 7.31623L26 11" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M38 7C33 22 30 25 20 29" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];



export const SERVICE_DETAIL = [
    {
        id: 1,
        serviceId: 1,
        title: 'How to Sell Your Property Fast & Get the Best Price',
        image: Mechanical_CONSTRUCTION_BANNER_IMAGE,
        author: 'Alex Roy',
        category: 'Deluxe',
        content: [
            "Selling your property quickly while securing the best price requires the right strategy. Start by enhancing your home's curb appeal—first impressions matter! A well-maintained exterior, fresh paint, and a tidy landscape can attract more buyers. Next, stage your home to highlight its best features, keeping it clean, decluttered, well-lit. Pricing your property competitively is crucial research the market and set a realistic price that attracts buyers.",
            "Property quickly while maximizing value requires a strategic approach. Start by making a great first impression- boost your home's curb appeal with fresh paint, well-maintained landscaping, and a clean, inviting entrance. Inside, declutter and stage each room to make it look spacious, bright, and appealing to potential buyers."
        ],
        images: [
            Mechanical_CONSTRUCTION_LEFT_IMAGE,
            Mechanical_CONSTRUCTION_RIGHT_IMAGE
        ],
        strategies: [
            "Selling your home quickly requires a well-planned approach to attract the right buyers. First, enhance your curb appeal by ensuring your home looks inviting—fresh paint, a tidy lawn, and a welcoming entrance can make a big difference.",
            "Inside, declutter and stage your home to highlight its best features, making it feel spacious and move-in ready. Pricing your property competitively is crucial. Research the local market and set a price that attracts buyers while maximizing your profit."
        ],
        videoImage: '/assets/img/all-images/blog/blog-img19.png',
        virtualTourContent: [
            "Take a closer look at our stunning properties through immersive video tours. Whether you're searching for a modern apartment, a luxurious villa, or a cozy family home, our high-quality videos bring each property to life.",
            "Explore every detail, from spacious interiors to breathtaking views, all from the comfort of your screen. Why wait for a visit when you can explore stunning properties right now?"
        ]
    },
    {
        id: 2,
        serviceId: 2,
        title: 'How to Sell Your Property Fast & Get the Best Price',
        image: Mechanical_CONSTRUCTION_BANNER_IMAGE,
        author: 'Alex Roy',
        category: 'Deluxe',
        content: [
            "Selling your property quickly while securing the best price requires the right strategy. Start by enhancing your home's curb appeal—first impressions matter! A well-maintained exterior, fresh paint, and a tidy landscape can attract more buyers. Next, stage your home to highlight its best features, keeping it clean, decluttered, well-lit. Pricing your property competitively is crucial research the market and set a realistic price that attracts buyers.",
            "Property quickly while maximizing value requires a strategic approach. Start by making a great first impression- boost your home's curb appeal with fresh paint, well-maintained landscaping, and a clean, inviting entrance. Inside, declutter and stage each room to make it look spacious, bright, and appealing to potential buyers."
        ],
        images: [
            Mechanical_CONSTRUCTION_LEFT_IMAGE,
            Mechanical_CONSTRUCTION_RIGHT_IMAGE
        ],
        strategies: [
            "Selling your home quickly requires a well-planned approach to attract the right buyers. First, enhance your curb appeal by ensuring your home looks inviting—fresh paint, a tidy lawn, and a welcoming entrance can make a big difference.",
            "Inside, declutter and stage your home to highlight its best features, making it feel spacious and move-in ready. Pricing your property competitively is crucial. Research the local market and set a price that attracts buyers while maximizing your profit."
        ],
        videoImage: '/assets/img/all-images/blog/blog-img19.png',
        virtualTourContent: [
            "Take a closer look at our stunning properties through immersive video tours. Whether you're searching for a modern apartment, a luxurious villa, or a cozy family home, our high-quality videos bring each property to life.",
            "Explore every detail, from spacious interiors to breathtaking views, all from the comfort of your screen. Why wait for a visit when you can explore stunning properties right now?"
        ]
    }, {
        id: 3,
        serviceId: 3,
        title: 'How to Sell Your Property Fast & Get the Best Price',
        image: Mechanical_CONSTRUCTION_BANNER_IMAGE,
        author: 'Alex Roy',
        category: 'Deluxe',
        content: [
            "Selling your property quickly while securing the best price requires the right strategy. Start by enhancing your home's curb appeal—first impressions matter! A well-maintained exterior, fresh paint, and a tidy landscape can attract more buyers. Next, stage your home to highlight its best features, keeping it clean, decluttered, well-lit. Pricing your property competitively is crucial research the market and set a realistic price that attracts buyers.",
            "Property quickly while maximizing value requires a strategic approach. Start by making a great first impression- boost your home's curb appeal with fresh paint, well-maintained landscaping, and a clean, inviting entrance. Inside, declutter and stage each room to make it look spacious, bright, and appealing to potential buyers."
        ],
        images: [
            Mechanical_CONSTRUCTION_LEFT_IMAGE,
            Mechanical_CONSTRUCTION_RIGHT_IMAGE
        ],
        strategies: [
            "Selling your home quickly requires a well-planned approach to attract the right buyers. First, enhance your curb appeal by ensuring your home looks inviting—fresh paint, a tidy lawn, and a welcoming entrance can make a big difference.",
            "Inside, declutter and stage your home to highlight its best features, making it feel spacious and move-in ready. Pricing your property competitively is crucial. Research the local market and set a price that attracts buyers while maximizing your profit."
        ],
        videoImage: '/assets/img/all-images/blog/blog-img19.png',
        virtualTourContent: [
            "Take a closer look at our stunning properties through immersive video tours. Whether you're searching for a modern apartment, a luxurious villa, or a cozy family home, our high-quality videos bring each property to life.",
            "Explore every detail, from spacious interiors to breathtaking views, all from the comfort of your screen. Why wait for a visit when you can explore stunning properties right now?"
        ]
    }, {
        id: 4,
        serviceId: 4,
        title: 'How to Sell Your Property Fast & Get the Best Price',
        image: Mechanical_CONSTRUCTION_BANNER_IMAGE,
        author: 'Alex Roy',
        category: 'Deluxe',
        content: [
            "Selling your property quickly while securing the best price requires the right strategy. Start by enhancing your home's curb appeal—first impressions matter! A well-maintained exterior, fresh paint, and a tidy landscape can attract more buyers. Next, stage your home to highlight its best features, keeping it clean, decluttered, well-lit. Pricing your property competitively is crucial research the market and set a realistic price that attracts buyers.",
            "Property quickly while maximizing value requires a strategic approach. Start by making a great first impression- boost your home's curb appeal with fresh paint, well-maintained landscaping, and a clean, inviting entrance. Inside, declutter and stage each room to make it look spacious, bright, and appealing to potential buyers."
        ],
        images: [
            Mechanical_CONSTRUCTION_LEFT_IMAGE,
            Mechanical_CONSTRUCTION_RIGHT_IMAGE
        ],
        strategies: [
            "Selling your home quickly requires a well-planned approach to attract the right buyers. First, enhance your curb appeal by ensuring your home looks inviting—fresh paint, a tidy lawn, and a welcoming entrance can make a big difference.",
            "Inside, declutter and stage your home to highlight its best features, making it feel spacious and move-in ready. Pricing your property competitively is crucial. Research the local market and set a price that attracts buyers while maximizing your profit."
        ],
        videoImage: '/assets/img/all-images/blog/blog-img19.png',
        virtualTourContent: [
            "Take a closer look at our stunning properties through immersive video tours. Whether you're searching for a modern apartment, a luxurious villa, or a cozy family home, our high-quality videos bring each property to life.",
            "Explore every detail, from spacious interiors to breathtaking views, all from the comfort of your screen. Why wait for a visit when you can explore stunning properties right now?"
        ]
    }, {
        id: 5,
        serviceId: 5,
        title: 'How to Sell Your Property Fast & Get the Best Price',
        image: Mechanical_CONSTRUCTION_BANNER_IMAGE,
        author: 'Alex Roy',
        category: 'Deluxe',
        content: [
            "Selling your property quickly while securing the best price requires the right strategy. Start by enhancing your home's curb appeal—first impressions matter! A well-maintained exterior, fresh paint, and a tidy landscape can attract more buyers. Next, stage your home to highlight its best features, keeping it clean, decluttered, well-lit. Pricing your property competitively is crucial research the market and set a realistic price that attracts buyers.",
            "Property quickly while maximizing value requires a strategic approach. Start by making a great first impression- boost your home's curb appeal with fresh paint, well-maintained landscaping, and a clean, inviting entrance. Inside, declutter and stage each room to make it look spacious, bright, and appealing to potential buyers."
        ],
        images: [
            Mechanical_CONSTRUCTION_LEFT_IMAGE,
            Mechanical_CONSTRUCTION_RIGHT_IMAGE
        ],
        strategies: [
            "Selling your home quickly requires a well-planned approach to attract the right buyers. First, enhance your curb appeal by ensuring your home looks inviting—fresh paint, a tidy lawn, and a welcoming entrance can make a big difference.",
            "Inside, declutter and stage your home to highlight its best features, making it feel spacious and move-in ready. Pricing your property competitively is crucial. Research the local market and set a price that attracts buyers while maximizing your profit."
        ],
        videoImage: '/assets/img/all-images/blog/blog-img19.png',
        virtualTourContent: [
            "Take a closer look at our stunning properties through immersive video tours. Whether you're searching for a modern apartment, a luxurious villa, or a cozy family home, our high-quality videos bring each property to life.",
            "Explore every detail, from spacious interiors to breathtaking views, all from the comfort of your screen. Why wait for a visit when you can explore stunning properties right now?"
        ]
    },
];