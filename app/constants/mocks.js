const categories = [
  {
    id: 'hotels',
    name: 'Reservation Hotel',
    tags: ['products', 'inspirations'],
    count: 147,
    image: require('../assets/hotel.png')
  },
  {
    id: 'locations',
    name: 'Location Voiture',
    tags: ['products', 'shop'],
    count: 16,
    image: require('../assets/car_renting.jpeg')
  },
  {
    id: 'plans',
    name: 'Plans suggeré',
    tags: ['products', 'inspirations'],
    count: 68,
    image: require('../assets/plan.png')
  },
  {
    id: 'settings',
    name: 'Settings',
    tags: ['products', 'shop'],
    count: 17,
    image: require('../assets/setting.jpeg')
  },
];

const products = [
  {
    id: 1, 
    name: '16 Best Plants That Thrive In Your Bedroom',
    description: 'Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.',
    tags: ['Interior', '27 m²', 'Ideas'],
    images: [
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      // showing only 3 images, show +6 for the rest
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
      require('../assets/images/plants_1.png'),
      require('../assets/images/plants_2.png'),
      require('../assets/images/plants_3.png'),
    ]
  }
];

const explore = [
  // images
  require('../assets/images/meca.jpeg'),
  require('../assets/images/istanbul.jpeg'),
  require('../assets/images/japan.jpeg'),
  require('../assets/images/meca.jpeg'),
    require('../assets/images/dubai.jpeg'),
    require('../assets/images/istanbul.jpeg'),
    require('../assets/images/japan.jpeg'),
    require('../assets/images/meca.jpeg'),
    require('../assets/images/dubai.jpeg'),
    require('../assets/images/istanbul.jpeg'),
    require('../assets/images/japan.jpeg'),
    require('../assets/images/meca.jpeg'),
];

const profile = {
  username: 'Testeur',
  location: 'Alger',
  email: 'ta7wissa@azimut.com',
  avatar: require('../assets/images/avatar.png'),
  budget: 1000,
  monthly_cap: 5000,
  notifications: true,
  newsletter: false,
};

export {
  categories,
  explore,
  products,
  profile,
}