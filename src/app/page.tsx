"use client";
import { Navbar } from "@/components/Navbar";

const products = [
  { id: "1", title: "Handmade Ceramic Mug Set", price: 34.99, image: "https://via.placeholder.com/200/8d6e63/fff?text=Mug", rating: 4.8, reviews: 234, shop: "Clay Studio", category: "Home" },
  { id: "2", title: "Custom Name Necklace", price: 28.99, image: "https://via.placeholder.com/200/fdd835/000?text=Necklace", rating: 4.9, reviews: 1892, shop: "Gold Designs", category: "Jewelry" },
  { id: "3", title: "Watercolor Pet Portrait", price: 89.99, image: "https://via.placeholder.com/200/42a5f5/fff?text=Portrait", rating: 5.0, reviews: 67, shop: "Art by Sarah", category: "Art" },
  { id: "4", title: "Personalized Cutting Board", price: 45.99, image: "https://via.placeholder.com/200/8d6e63/fff?text=Board", rating: 4.7, reviews: 456, shop: "Wood Works", category: "Home" },
  { id: "5", title: "Hand-knit Baby Blanket", price: 65.00, image: "https://via.placeholder.com/200/f48fb1/fff?text=Blanket", rating: 4.9, reviews: 312, shop: "Knit Happy", category: "Baby" },
  { id: "6", title: "Soy Candle Gift Set", price: 29.99, image: "https://via.placeholder.com/200/ff8a65/fff?text=Candles", rating: 4.6, reviews: 567, shop: "Wick & Wax", category: "Home" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-orange-100 rounded-lg p-8 mb-8 text-center">
          <h1 className="text-3xl font-bold">Find things you love</h1>
          <p className="text-gray-600 mt-2">Unique handmade and vintage items</p>
          <div className="flex justify-center gap-4 mt-4">
            <input type="text" placeholder="Search for anything" className="w-96 px-4 py-2 rounded-full border" />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold">Search</button>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Popular right now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <img src={p.image} alt={p.title} className="aspect-square rounded-lg object-cover group-hover:opacity-90" />
              <p className="font-medium mt-2 text-sm"></p>
              <p className="text-xs text-gray-500 truncate">{p.title}</p>
              <div className="flex items-center gap-1 text-xs">
                <span className="text-green-600">? {p.rating}</span>
                <span className="text-gray-400">({p.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
