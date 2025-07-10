export const mockData = {
  stats: {
    students: 127,
    compost: 450,
    species: 89
  },
  
  teamMembers: [
  {
    id: 1,
    name: "Gaia Gozzi",
    role: "Project Coordinator",
    bio: "Leads project planning and ensures overall coordination, bringing a passion for campus sustainability.",
    image: "/img/gaia.jpg"
  },
  {
    id: 2,
    name: "Tomina Saveanu",
    role: "Ecology & Biodiversity Lead",
    bio: "Expert in local ecosystems, biodiversity, and guiding the garden’s ecological impact.",
    image: "/img/tomania.jpg"
  },
  {
    id: 3,
    name: "Sara Spiegel",
    role: "Workshop/Education Coordinator",
    bio: "Designs and leads student learning activities and workshops in sustainability.",
    image: "/img/sara.jpg"
  },
  {
    id: 4,
    name: "Melrose Tamuke",
    role: "Communication & Outreach",
    bio: "Connects the project to the wider campus and community through outreach and events.",
    image: "/img/melrose.jpg"
  },
  {
    id: 5,
    name: "Muhammad Abubakar",
    role: "Technical/Logistics Manager",
    bio: "Oversees infrastructure, setup, and technical support for garden operations.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  }
],

  partners: [
    { name: "Campus Sustainability Office", logo: "🏫" },
    { name: "Local Farmers Market", logo: "🥕" },
    { name: "Environmental Club", logo: "🌍" },
    { name: "Student Union", logo: "🤝" },
    { name: "Biology Department", logo: "🔬" }
  ],
  
  gardenSections: [
    {
      id: 1,
      name: "Vegetable Beds",
      description: "Seasonal vegetables grown using organic methods",
      coordinates: { x: 20, y: 30 },
      image: "https://images.pexels.com/photos/927890/pexels-photo-927890.jpeg"
    },
    {
      id: 2,
      name: "Herb Garden",
      description: "Medicinal and culinary herbs for education and harvest",
      coordinates: { x: 60, y: 25 },
      image: "https://images.pexels.com/photos/2926581/pexels-photo-2926581.jpeg"
    },
    {
      id: 3,
      name: "Fruit Orchard",
      description: "Native fruit trees providing habitat and food",
      coordinates: { x: 80, y: 60 },
      image: "https://images.unsplash.com/photo-1717607423584-49450c57d361"
    },
    {
      id: 4,
      name: "Pollinator Garden",
      description: "Native flowers supporting bees and butterflies",
      coordinates: { x: 30, y: 70 },
      image: "https://images.unsplash.com/photo-1705083717066-cafd1845e6a6"
    },
    {
      id: 5,
      name: "Compost Area",
      description: "Three-bin system for organic waste processing",
      coordinates: { x: 70, y: 80 },
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469"
    },
    {
      id: 6,
      name: "Greenhouse",
      description: "Year-round growing space for seedlings and research",
      coordinates: { x: 50, y: 40 },
      image: "https://images.pexels.com/photos/5217779/pexels-photo-5217779.jpeg"
    }
  ],
  
  events: [
    {
      id: 1,
      title: "Weekly Garden Workday",
      date: "2025-07-15",
      time: "14:00",
      type: "Workshop",
      description: "Join us for hands-on gardening activities, learning, and community building.",
      capacity: 25,
      registered: 18,
      image: "https://images.unsplash.com/photo-1563281709-7af174759d98"
    },
    {
      id: 2,
      title: "Composting Workshop",
      date: "2025-07-20",
      time: "13:00",
      type: "Educational",
      description: "Learn the science and practice of turning organic waste into garden gold.",
      capacity: 20,
      registered: 15,
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469"
    },
    {
      id: 3,
      title: "Pollinator Garden Tour",
      date: "2025-07-25",
      time: "10:00",
      type: "Tour",
      description: "Explore our pollinator garden and learn about native plants and wildlife.",
      capacity: 30,
      registered: 22,
      image: "https://images.unsplash.com/photo-1705083717066-cafd1845e6a6"
    },
    {
      id: 4,
      title: "Harvest Festival",
      date: "2025-08-01",
      time: "11:00",
      type: "Event",
      description: "Celebrate the season's harvest with food, music, and community.",
      capacity: 100,
      registered: 67,
      image: "https://images.unsplash.com/photo-1717607423584-49450c57d361"
    }
  ],
  
  volunteerRoles: [
    {
      id: 1,
      title: "Garden Maintenance",
      description: "Help with planting, weeding, watering, and general garden upkeep.",
      timeCommitment: "2-4 hours/week",
      perks: ["Fresh produce share", "Garden tools access", "Workshop priority"],
      skills: ["Physical activity", "Attention to detail", "Reliability"]
    },
    {
      id: 2,
      title: "Education Assistant",
      description: "Support workshops and educational programs for students and community.",
      timeCommitment: "3-5 hours/week",
      perks: ["Teaching experience", "Leadership development", "Event planning skills"],
      skills: ["Communication", "Patience", "Organization"]
    },
    {
      id: 3,
      title: "Social Media Coordinator",
      description: "Create content and manage our social media presence.",
      timeCommitment: "2-3 hours/week",
      perks: ["Portfolio building", "Creative freedom", "Network connections"],
      skills: ["Social media savvy", "Photography", "Writing"]
    },
    {
      id: 4,
      title: "Research Assistant",
      description: "Help with data collection and analysis for our sustainability projects.",
      timeCommitment: "4-6 hours/week",
      perks: ["Research experience", "Academic credit potential", "Publication opportunities"],
      skills: ["Data analysis", "Research methods", "Critical thinking"]
    }
  ],
  
  resources: [
    {
      id: 1,
      title: "Composting Guide",
      type: "PDF",
      description: "Step-by-step guide to home and community composting",
      downloadUrl: "#",
      size: "2.3 MB"
    },
    {
      id: 2,
      title: "Seasonal Planting Calendar",
      type: "PDF",
      description: "When to plant vegetables and herbs in our climate zone",
      downloadUrl: "#",
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Native Pollinator Plant List",
      type: "PDF",
      description: "Local plants that support bees, butterflies, and other pollinators",
      downloadUrl: "#",
      size: "1.5 MB"
    },
    {
      id: 4,
      title: "Permaculture Basics",
      type: "Video",
      description: "Introduction to permaculture principles and practices",
      duration: "15 minutes",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "Seed Starting Workshop",
      type: "Video",
      description: "Learn how to start plants from seed indoors",
      duration: "22 minutes",
      videoUrl: "#"
    }
  ],
  
  blogPosts: [
    {
      id: 1,
      title: "Spring Garden Transformation",
      date: "2025-07-01",
      excerpt: "See how our garden has transformed this spring with new plantings and infrastructure improvements.",
      image: "https://images.unsplash.com/photo-1717607423584-49450c57d361",
      author: "Sarah Chen"
    },
    {
      id: 2,
      title: "The Science of Composting",
      date: "2025-06-15",
      excerpt: "Understanding the microbiology behind turning organic waste into nutrient-rich soil amendment.",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469",
      author: "Marcus Thompson"
    },
    {
      id: 3,
      title: "Building Wildlife Habitat",
      date: "2025-06-01",
      excerpt: "How our pollinator garden is creating habitat for local wildlife and supporting biodiversity.",
      image: "https://images.unsplash.com/photo-1705083717066-cafd1845e6a6",
      author: "Elena Rodriguez"
    }
  ],
  
  impactMetrics: {
    co2Sequestered: 1250,
    wasteReduced: 890,
    biodiversityIndex: 87,
    waterSaved: 3400,
    studentsEngaged: 127,
    communityEvents: 24
  },
  
  wishlistItems: [
    { item: "Rain barrels", cost: 150, priority: "high" },
    { item: "Garden tools", cost: 75, priority: "medium" },
    { item: "Compost bins", cost: 200, priority: "high" },
    { item: "Native plant seeds", cost: 45, priority: "medium" },
    { item: "Greenhouse supplies", cost: 300, priority: "low" }
  ]
};