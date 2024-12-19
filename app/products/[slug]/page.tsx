import Link from "next/link";
import React from "react";

const ProductsDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const data = await fetch("http://localhost:3000/api/users");
  const users = await data.json();

  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-300 gap-4">
      <h1 className="text-blue-800 font-semibold text-2xl">
        Product Detail Page
      </h1>
      <p className="text-green-600 font-extrabold">
        Current Product Name: {(await params).slug}
      </p>

      <Link href="/products/" className="bg-blue-600 text-white px-8 py-4 mt-8">
        Back to Product List Page
      </Link>

      <div>
        {(await params).slug === "product-01" && (
          <p className="text-red-900 font-bold">
            Users: <span>{users.data[0]}</span>
          </p>
        )}
        {(await params).slug === "product-02" && (
          <p className="text-red-900 font-bold">
            Users: <span>{users.data[1]}</span>
          </p>
        )}
        {(await params).slug === "product-03" && (
          <p className="text-red-900 font-bold">
            Users: <span>{users.data[2]}</span>
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductsDetails;
