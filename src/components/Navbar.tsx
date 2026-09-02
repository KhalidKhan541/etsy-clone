"use client";
export function Navbar() {
  return (
    <nav className="border-b sticky top-0 bg-white z-10">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <span className="text-2xl font-bold text-orange-600">etsy</span>
        <div className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:text-orange-600">Home</a>
          <a href="#" className="hover:text-orange-600">Jewelry & Accessories</a>
          <a href="#" className="hover:text-orange-600">Clothing & Shoes</a>
          <a href="#" className="hover:text-orange-600">Home & Living</a>
          <a href="#" className="hover:text-orange-600">Gifts & Gift Cards</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-orange-600">Sign in</button>
          <button className="hover:text-orange-600">??</button>
        </div>
      </div>
    </nav>
  );
}
