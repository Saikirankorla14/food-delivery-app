const mongoose = require("mongoose");
const Restaurant = require("./models/Restaurant");
const MenuItem = require("./models/MenuItem");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

const seedRestaurants = [
  {
    name: "Burger Palace",
    cuisine: "American",
    address: "123 Main St",
    deliveryTime: 30,
    minOrder: 10,
    image: "https://source.unsplash.com/random/300x200/?burger",
  },
  // Add more restaurants...
];

const seedMenuItems = [
  {
    name: "Classic Burger",
    description: "Beef patty with lettuce and cheese",
    price: 8.99,
    category: "Burgers",
    restaurantId: null, // Will be set programmatically
    image: "https://source.unsplash.com/random/300x200/?burger",
  },
  // Add more menu items...
];

const seedDatabase = async () => {
  await Restaurant.deleteMany();
  await MenuItem.deleteMany();

  const restaurants = await Restaurant.insertMany(seedRestaurants);

  const menuItemsWithRestaurant = seedMenuItems.map((item) => ({
    ...item,
    restaurantId: restaurants[0]._id,
  }));

  await MenuItem.insertMany(menuItemsWithRestaurant);

  console.log("Database seeded!");
  process.exit();
};

seedDatabase();
