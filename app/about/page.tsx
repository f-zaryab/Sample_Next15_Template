import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col justify-center items-center bg-slate-300 gap-4">
      <h1 className="text-blue-800 font-semibold text-2xl">About Page</h1>

      <Link href="/" className="bg-blue-600 text-white px-8 py-4">
        Back to Home page
      </Link>
    </section>
  );
};

export default AboutPage;
