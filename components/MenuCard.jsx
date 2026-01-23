import Image from "next/image";
import React from "react";

function MenuCard({
  id,
  name,
  description,
  price,
  image,
  isBestseller,
  isNew,
}) {
  return (
    <div className="group relative border border-yellow-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isNew && (
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full animate-pulse">
              New
            </span>
          )}
          {isBestseller && (
            <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-semibold rounded-full">
              BESTSELLER
            </span>
          )}
        </div>
      </div>
      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-yellow-700 transition-colors duration-300">
            {name}
          </h3>
          <span className="text-lg font-bold text-yellow-600">{price}</span>
        </div>
        <p className="text-white text-sm leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-amber-400 via-amber-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    </div>
  );
}

export default MenuCard;
