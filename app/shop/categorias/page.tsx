"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Categorias() {
  const [open, setOpen] = useState(false);

  const categorias = [
    {
      name: "Living",
      img: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
      link: "/categorias/living",
    },
    {
      name: "Dormitorio",
      img: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
      link: "/categorias/dormitorio",
    },
    {
      name: "Oficina",
      img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      link: "/categorias/oficina",
    },
    {
      name: "Comedor",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      link: "/categorias/comedor",
    },
    {
      name: "Exterior",
      img: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
      link: "/categorias/exterior",
    },
    {
      name: "Decoración",
      img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      link: "/categorias/decoracion",
    },
  ];

  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 border-b">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold tracking-wide">LOS ALPES</h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/shop">Inicio</Link>
            <Link href="/shop/tienda">Tienda</Link>
            <Link href="/shop/categorias">Categorías</Link>
            <Link href="/shop/contacto">Contacto</Link>
          </nav>

          <div className="flex items-center gap-4">
            <ShoppingCart className="w-5 h-5" />

            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden flex flex-col items-center py-4 gap-4 border-t">
            <Link href="/shop" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/shop/tienda" onClick={() => setOpen(false)}>Tienda</Link>
            <Link href="/shop/categorias" onClick={() => setOpen(false)}>Categorías</Link>
            <Link href="/shop/contacto" onClick={() => setOpen(false)}>Contacto</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative h-[300px] w-full mt-[70px]">
        <Image
          unoptimized
          src="https://images.unsplash.com/photo-1618220179428-22790b461013"
          alt="categorias"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold">
            Categorías
          </h1>
          <p className="text-sm md:text-base mt-2 text-gray-200 max-w-md">
            Explora nuestros muebles por espacios
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-10 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categorias.map((cat, i) => (
            <Link key={i} href={cat.link} className="group block">
              <div className="relative h-[300px] overflow-hidden rounded-xl">
                <Image
                  unoptimized
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                <div className="absolute bottom-4 left-4">
                  <p className="text-white text-xl font-semibold tracking-wide">
                    {cat.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-xl font-bold mb-4">LOS ALPES</h2>
            <p className="text-sm text-gray-400">
              Muebles modernos para transformar tu hogar con estilo.
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Tienda</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link href="/shop/tienda">Productos</Link></li>
              <li><Link href="/shop/categorias">Categorías</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Ayuda</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link href="/shop/contacto">Contacto</Link></li>
              <li><Link href="#">Envíos</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Contacto</p>
            <p className="text-sm text-gray-400">
              Guatemala<br />
              info@losalpes.com<br />
              +502 1234-5678
            </p>
          </div>

        </div>

        <div className="border-t border-gray-800 text-center text-sm text-gray-500 py-4">
          © {new Date().getFullYear()} Los Alpes
        </div>
      </footer>

    </main>
  );
}