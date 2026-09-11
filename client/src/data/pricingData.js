export const pricingDetail = [
    {
        id: 1,
        title: "Standard",
        description: "Perfect for individuals getting started.",
        featured: false,
        price: {
            monthly: 299,
            annually : 1999
        },
        features: [
            {name: "5 collections", available: true},
             {name:"Track Calls", available: true},
            {name: "Summary & Analysis", available: true},
            {name: "Working Hours Report", available: true},
            {name: "Periodic Reports", available: false},
            {name: "Manage Admin Users", available: false},
            {name: "Daily Status Report", available: false},
            {name: "Lead Management", available: false},
            {name: "Live Monitoring", available: false},
       ]
    },
    {
        id: 2,
        title: "Extended",
        description: "Best choice for growing businesses.",
        featured: true,
        price: {
            monthly: 399,
            annually : 3499
        },
        features: [
            {name:"Unlimited collections", available: true},
            {name:"Track Calls", available: true},
            {name:"Summary & Analysis", available: true},
            {name:"Working Hours Report", available: true},
            {name:"Periodic Reports", available: true},
            {name:"Manage Admin Users", available: true},
            {name:"Daily Status Report", available: false},
            {name:"Lead Management", available: false},
            {name:"Live Monitoring", available: false},
        ]
    },
    {
        id: 3,
        title: "Premium+",
        description: "For enterprise-level business teams",
        featured: false,
        price: {
            monthly: 599,
            annually: 5599
        },
        features: [
            {name:"Unlimited collections", available: true},
            {name:"Track Calls", available: true},
            {name:"Summary & Analysis", available:true},
            {name:"Working Hours Report", available: true},
           {name: "Periodic Reports", available: true},
            {name:"Manage Admin Users", available: true},
            {name:"Daily Status Report", available: true},
           {name: "Lead Management", available: true},
           {name: "Live Monitoring", available: true}
            
        ]
    }
]