"use client";
import {
  Coffee,
  Croissant,
  Filter,
  Sandwich,
  Search,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import MenuCard from "../MenuCard";

function Menu() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuItems = [
    // Coffee
    {
      id: 1,
      name: "Signature Kinara Latte",
      description:
        "Our house specialty with hints of vanilla and caramel, topped with artistic foam",
      price: "$5.50",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199342230_8ed274c9.png",
      category: "coffee",
      isBestseller: true,
    },
    {
      id: 2,
      name: "Ethiopian Pour Over",
      description:
        "Single-origin beans with bright citrus notes and floral undertones",
      price: "$4.75",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199338953_66572652.png",
      category: "coffee",
    },
    {
      id: 3,
      name: "Oat Milk Cappuccino",
      description:
        "Creamy oat milk with double espresso shot, perfectly balanced",
      price: "$5.25",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199339880_3a0c931e.png",
      category: "coffee",
      isNew: true,
    },
    {
      id: 4,
      name: "Cold Brew Reserve",
      description: "24-hour steeped cold brew with smooth chocolate finish",
      price: "$4.50",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199342815_e0a04811.jpg",
      category: "coffee",
    },
    {
      id: 5,
      name: "Honey Lavender Latte",
      description: "Aromatic lavender syrup with local honey and steamed milk",
      price: "$5.75",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199339798_0287fe48.png",
      category: "coffee",
      isNew: true,
    },
    {
      id: 6,
      name: "Classic Americano",
      description: "Bold espresso with hot water, simple and satisfying",
      price: "$3.75",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199339826_a4d40a28.png",
      category: "coffee",
    },
    // Pastries
    {
      id: 7,
      name: "Butter Croissant",
      description:
        "Flaky, golden layers of French butter pastry, baked fresh daily",
      price: "$4.25",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199367459_e66b0b42.png",
      category: "pastries",
      isBestseller: true,
    },
    {
      id: 8,
      name: "Almond Danish",
      description: "Sweet almond cream filling with toasted almond slices",
      price: "$4.50",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199357837_b668fb12.jpg",
      category: "pastries",
    },
    {
      id: 9,
      name: "Chocolate Croissant",
      description: "Rich dark chocolate wrapped in buttery croissant dough",
      price: "$4.75",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199369284_2adc0161.png",
      category: "pastries",
      isBestseller: true,
    },
    {
      id: 10,
      name: "Cinnamon Roll",
      description: "Warm, gooey cinnamon swirl with cream cheese frosting",
      price: "$4.95",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199359488_109f8a3e.jpg",
      category: "pastries",
      isNew: true,
    },
    {
      id: 11,
      name: "Blueberry Muffin",
      description: "Bursting with fresh blueberries and topped with streusel",
      price: "$3.95",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199365004_9cd85759.png",
      category: "pastries",
    },
    {
      id: 12,
      name: "Pistachio Éclair",
      description: "Choux pastry filled with pistachio cream and glazed",
      price: "$5.25",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199368192_df967e57.png",
      category: "pastries",
      isNew: true,
    },
    // Food
    {
      id: 13,
      name: "Avocado Toast Deluxe",
      description:
        "Sourdough with smashed avocado, poached egg, and microgreens",
      price: "$12.50",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199388391_3288dd58.jpg",
      category: "food",
      isBestseller: true,
    },
    {
      id: 14,
      name: "Turkey Club Sandwich",
      description: "Roasted turkey, bacon, lettuce, tomato on toasted ciabatta",
      price: "$13.95",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199394233_c2cb8f25.png",
      category: "food",
    },
    {
      id: 15,
      name: "Caprese Panini",
      description: "Fresh mozzarella, tomato, basil with balsamic glaze",
      price: "$11.50",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199396974_d6f5dc99.png",
      category: "food",
    },
    {
      id: 16,
      name: "Grilled Veggie Wrap",
      description: "Seasonal roasted vegetables with hummus in spinach wrap",
      price: "$10.95",
      image:
        "https://d64gsuwffb70l.cloudfront.net/6973d67d3eb0f504aeff9ae4_1769199407157_6e0b3da4.png",
      category: "food",
      isNew: true,
    },
  ];

  const categories = [
    { id: "all", name: "All Items", icon: Sparkles },
    { id: "coffee", name: "Coffee", icon: Coffee },
    { id: "pastries", name: "Pastries", icon: Croissant },
    { id: "food", name: "Food", icon: Sandwich },
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return (
    <section id="menu" className="py-24 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 bg-yellow-50 text-yellow-400 rounded-full text-sm font-semibold mb-4">
            Our Menu
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Crafted with <span className="text-yellow-400">Passion</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Every item on our menu is thoughtfully prepared using the finest
            ingredients, from locally roasted beans to freshly baked pastries.
          </p>
        </div>
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search menu items..."
              className="pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/50 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id ? "bg-yellow-400 text-white shadow-lg shadow-yellow-500/30" : "bg-white/10 text-white hover:bg-white/20"}`}
                >
                  <Icon className="w-5 h-5" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>
        {/* Result counts */}
        <div className="flex items-center gap-2 mb-8">
          <Filter className="w-4 h-4 text-stone-400" />
          <span className="text-stone-500">
            Showing {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "item" : "items"}
          </span>
        </div>
        {/* Menu items */}
        <div className="grid grid-cols-1 sn:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {" "}
              <MenuCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
