// import { GridColDef } from '@mui/x-data-grid';

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 9,
        title: "Dashboard",
        url: "/",
        icon: "home.svg",
      },
      // {
      //   id: 2,
      //   title: "Profile",
      //   url: "/users/1",
      //   icon: "user.svg",
      // },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Orders Summary ",
        url: "/oderSummary",
        icon: "order.svg",
      },
      {
        id: 2,
        title: "Individuals Order",
        url: "/orders",
        icon: "order1.svg",
      },
      {
        id: 3,
        title: "Day Order",
        url: "/dayOrders",
        icon: "order2.svg",
      },
      {
        id: 4,
        title: "Meal Items",
        url: "/menu",
        icon: "product.svg",
      },
      {
        id: 5,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 6,
        title: "Organizations",
        url: "/companies",
        icon: "company.svg",
      },
      {
        id: 7,
        title: "Generate Label",
        url: "/generateLabels",
        icon: "label.svg",
      },
      {
        id: 8,
        title: "Administrator",
        url: "/users/:id",
        icon: "admin.svg",
      },

    ],
  },

  {
    id: 3,
    title: "Maintenance",
    listItems: [
      // {
      //   id: 1,
      //   title: "Settings",
      //   url: "/setting",
      //   icon: "setting.svg",
      // },
      {
        id: 1,
        title: "Logout",
        url: "/login",
        icon: "setting.svg",
      },

    ],
  },

];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    companyCode: "123",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    companyCode: "123",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    companyCode: "123",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    companyCode: "123",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    companyCode: "123",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    companyCode: "123",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    companyCode: "123",
    amount: "1.560",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  // icon: "/userIcon.svg",
  path: "/users",
  title: "Total Users",
  number: "11.238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  // icon: "/productIcon.svg",
  title: "Total Menu Items",
  path: "/menu",
  number: "30",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  path: "/",
  // icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$56.432",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};
export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Hubbard",
    firstName: "Eula",
    email: "kewez@@gmail.com",
    phone: "123 456 789",

    companyName: "abc",
   
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Manning",
    firstName: "Stella",
    email: "comhuhmit@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Greer",
    firstName: "Mary",
    email: "ujudokon@hottmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williamson",
    firstName: "Mildred",
    email: "tinhavabe@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gross",
    firstName: "Jose",
    email: "gobtagbes@yahoo.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Sharp",
    firstName: "Jeremy",
    email: "vulca.eder@mail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Lowe",
    firstName: "Christina",
    email: "reso.bilic@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dean",
    firstName: "Garrett",
    email: "codaic@mail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Parsons",
    firstName: "Leah",
    email: "uzozor@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Reid",
    firstName: "Elnora",
    email: "tuhkabapu@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dunn",
    firstName: "Gertrude",
    email: "gibo@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Williams",
    firstName: "Mark",
    email: "tic.harvey@hotmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Cruz",
    firstName: "Charlotte",
    email: "ceuc@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Harper",
    firstName: "Sara",
    email: "bafuv@hotmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "Griffin",
    firstName: "Eric",
    email: "ubi@gmail.com",
    phone: "123 456 789",
    companyName: "abc",
  
    createdAt: "01.02.2023",
  },
];
export const summaryOrder = [
  {
    orderId: 1,
    employeeName: "John Doe",
    organizationName: "ABC Corp",
    totalPrice: 66,
    orderDate: "2024-09-26",
    paymentStatus: "Pending",
    orderedMealItems: 3,
  },
  {
    orderId: 2,
    employeeName: "Jane Smith",
    organizationName: "XYZ Ltd",
    totalPrice: 66,
    orderDate: "2024-09-26",
    paymentStatus: "Delivered",
    orderedMealItems: 3,
  },
  {
    orderId: 3,
    employeeName: "Mike Johnson",
    organizationName: "Gourmet Inc.",
    totalPrice: 66,
    orderDate: "2024-09-26",
    paymentStatus: "In Progress",
    orderedMealItems: 3,
  },
  {
    orderId: 4,
    employeeName: "Anna Brown",
    organizationName: "Delicious LLC",
    totalPrice: 66,
    orderDate: "2024-09-26",
    paymentStatus: "Cancelled",
    orderedMealItems: 3,
  },
  {
    orderId: 5,
    employeeName: "Michael White",
    organizationName: "Fresh Foods",
    totalPrice: 66,
    orderDate: "2024-09-26",
    paymentStatus: "Delivered",
    orderedMealItems: 3,
  },
];

export const companies = [
  {
    id: 1,
    organizationId: 1001,
    organizationName: "ABC Corp",
    officeAddress: "123 Main St, Cityville",
    accessCode: "ABC123",
    notificationTime: "08:00 AM",
    orderDeadline: "10:00 AM",
    scheduledDeliveryFrom: "12:00 PM",
    scheduledDeliveryTo: "01:00 PM",
  },
  {
    id: 2,
    organizationId: 1002,
    organizationName: "XYZ Ltd",
    officeAddress: "456 Elm St, Townsville",
    accessCode: "XYZ456",
    notificationTime: "09:00 AM",
    orderDeadline: "11:00 AM",
    scheduledDeliveryFrom: "01:00 PM",
    scheduledDeliveryTo: "02:00 PM",
  },
  {
    id: 3,
    organizationId: 1003,
    organizationName: "Gourmet Inc.",
    officeAddress: "789 Oak St, Villagetown",
    accessCode: "GOUR789",
    notificationTime: "07:30 AM",
    orderDeadline: "09:30 AM",
    scheduledDeliveryFrom: "11:30 AM",
    scheduledDeliveryTo: "12:30 PM",
  },
  {
    id: 4,
    organizationId: 1004,
    organizationName: "Delicious LLC",
    officeAddress: "101 Pine St, Hamlet",
    accessCode: "DELI012",
    notificationTime: "08:30 AM",
    orderDeadline: "10:30 AM",
    scheduledDeliveryFrom: "12:30 PM",
    scheduledDeliveryTo: "01:30 PM",
  },
  {
    id: 5,
    organizationId: 1005,
    organizationName: "Fresh Foods",
    officeAddress: "202 Maple St, Borough",
    accessCode: "FRESH345",
    notificationTime: "09:15 AM",
    orderDeadline: "11:15 AM",
    scheduledDeliveryFrom: "01:15 PM",
    scheduledDeliveryTo: "02:15 PM",
  },
];

export const dayOrders = [
  {
    orderDetailId: 1,
    orderId: 1,
    employeeName: "John Doe",
    organizationName: "ABC Corp",
    menuItemName: "Chicken Salad",
    quantity: 1,
    totalPrice: 10.0,
    dayOfWeek: "Monday",
    mealDate: "2024-09-26",
  },
  {
    orderDetailId: 2,
    orderId: 2,
    employeeName: "Jane Smith",
    organizationName: "XYZ Ltd",
    menuItemName: "Veggie Wrap",
    quantity: 2,
    totalPrice: 20.0,
    dayOfWeek: "Tuesday",
    mealDate: "2024-09-27",
  },
  {
    orderDetailId: 3,
    orderId: 3,
    employeeName: "Mike Johnson",
    organizationName: "Gourmet Inc.",
    menuItemName: "Beef Burger",
    quantity: 1,
    totalPrice: 15.0,
    dayOfWeek: "Wednesday",
    mealDate: "2024-09-28",
  },
  {
    orderDetailId: 4,
    orderId: 4,
    employeeName: "Anna Brown",
    organizationName: "Delicious LLC",
    menuItemName: "Caesar Salad",
    quantity: 3,
    totalPrice: 30.0,
    dayOfWeek: "Thursday",
    mealDate: "2024-09-29",
  },
  {
    orderDetailId: 5,
    orderId: 5,
    employeeName: "Michael White",
    organizationName: "Fresh Foods",
    menuItemName: "Grilled Chicken",
    quantity: 2,
    totalPrice: 25.0,
    dayOfWeek: "Friday",
    mealDate: "2024-09-30",
  },
];

export const individualsOrders = [
  {
    id: 1,
    orderId: 1,
    employeeName: "john Doe",
    organizationName: "ABC Corp",
    mealOrdered: [
      { name: "Chicken Salad", quantity: 1, price: "140" }
    ],
    orderDate: "2024-09-26",
    paymentStatus: "Pending",
    
  },
  {
    id: 2,
    orderId: 2,
    employeeName: "john Doe",
    organizationName: "XYZ Ltd",
    mealOrdered: [
      { name: "Veggie Wrap", quantity: 1, price: "120" }
    ],
    orderDate: "2024-09-25",
    paymentStatus: "Delivered",
    
  },
  {
    id: 3,
    orderId: 3,
    employeeName: "john Doe",
    organizationName: "Gourmet Inc.",
    mealOrdered: [
      { name: "Beef Burger", quantity: 1, price: "40" }
    ],
    orderDate: "2024-09-26",
    paymentStatus: "In Progress",
    
  },
  {
    id: 4,
    orderId: 4,
    employeeName: "john Doe",
    organizationName: "Delicious LLC",
    mealOrdered: [
      { name: "Caesar Salad", quantity: 1, price: "500" }
    ],
    orderDate: "2024-09-24",
    paymentStatus: "Cancelled",
    
  },
  {
    id: 5,
    employeeName: "john Doe",
    organizationName: "Fresh Foods",
    mealOrdered: [
      { name: "Grilled Chicken", quantity: 1, price: "4" }
    ],
    orderDate: "2024-09-25",
    paymentStatus: "Delivered",
    
  },
];

export const products = [
  {
    id: 1,
    title: "Playstation 5 Digital Edition",
    ingredients: "N/A",
    allergens: "N/A",
    price: "$250.99",
    originalStock: 100,
    remainingStock: 50,
    mealType: "Electronics",
    dayOfWeek: "Monday",
    availability: true,
    orderDate: "2024-09-25",
  },
  {
    id: 2,
    title: "Dell Laptop KR211822",
    ingredients: "N/A",
    allergens: "N/A",
    price: "$499.99",
    originalStock: 80,
    remainingStock: 30,
    mealType: "Electronics",
    dayOfWeek: "Tuesday",
    availability: true,
    orderDate: "2024-09-25",
  },
  {
    id: 3,
    title: "Samsung TV 4K SmartTV",
    ingredients: "N/A",
    allergens: "N/A",
    price: "$999.49",
    originalStock: 60,
    remainingStock: 20,
    mealType: "Electronics",
    dayOfWeek: "Wednesday",
    availability: true,
    orderDate: "2024-09-25",
  },
  {
    id: 4,
    title: "Apple Iphone 14 Pro Max",
    ingredients: "N/A",
    allergens: "N/A",
    price: "$799.49",
    originalStock: 120,
    remainingStock: 60,
    mealType: "Electronics",
    dayOfWeek: "Thursday",
    availability: true,
    orderDate: "2024-09-25",
  },
  {
    id: 5,
    title: "Philips Hue Play Gradient",
    ingredients: "N/A",
    allergens: "N/A",
    price: "$39.99",
    originalStock: 200,
    remainingStock: 150,
    mealType: "Electronics",
    dayOfWeek: "Friday",
    availability: true,
    orderDate: "2024-09-25",
  },
];

export const singleUser = {
  id: 1,
  title: "John Doe",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    // username: "Johndoe99",
    fullName: "John Doe",
    email: "johndoe@gmail.com",
    // phone: "123 456 789",
    // status: "verified",
    adminRole:"Super Admin"
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "John Doe added 3 items into their wishlist",
      time: "1 week ago",
    },
    {
      text: "John Doe purchased Sony Bravia KD-32w800",
      time: "2 weeks ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "1 month ago",
    },
    {
      text: "John Doe added 1 items into their wishlist",
      time: "1 month ago",
    },
    {
      text: "John Doe reviewed a product",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "$250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
