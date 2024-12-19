import React from "react";
import Link from "next/link";

const porductsList = [
  {
    id: "01",
    label: "Product 01",
    name: "product-01",
  },
  {
    id: "02",
    label: "Product 02",
    name: "product-02",
  },
  {
    id: "03",
    label: "Product 03",
    name: "product-03",
  },
];

const ProductsPage = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-300 gap-4">
      <h1 className="text-blue-800 font-semibold text-2xl">Products Page</h1>

      <div className="flex flex-wrap gap-16">
        {porductsList.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.name}`}
            className="bg-blue-400 text-white px-8 py-4"
          >
            {product.label}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
