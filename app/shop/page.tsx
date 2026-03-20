"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Truck, CreditCard, ShieldCheck } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);

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
            <Link href="/shop">Inicio</Link>
            <Link href="/shop/tienda">Tienda</Link>
            <Link href="/shop/categorias">Categorías</Link>
            <Link href="/shop/contacto">Contacto</Link>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative w-full h-[90vh] mt-[70px]">
        <Image
          unoptimized
          src="https://images.unsplash.com/photo-1567016432779-094069958ea5"
          alt="hero"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-20 text-white">
          <h2 className="text-4xl md:text-6xl font-bold max-w-xl">
            Muebles que transforman tu hogar
          </h2>

          <p className="mt-4 text-lg max-w-md">
            Diseño moderno, calidad premium y confort en cada espacio
          </p>

          <Link
            href="/tienda"
            className="mt-6 w-fit bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-200 transition"
          >
            VER COLECCIÓN
          </Link>
        </div>
      </section>

      {/* BENEFICIOS PRO */}
      <section className="py-16 px-6 md:px-10 border-b">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

    {/* ITEM */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full mb-4">
        <Truck className="w-5 h-5" />
      </div>
      <p className="font-semibold">Envíos a todo el país</p>
      <p className="text-sm text-gray-500 mt-1">
        Entrega rápida y segura
      </p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full mb-4">
        <CreditCard className="w-5 h-5" />
      </div>
      <p className="font-semibold">Pagos seguros</p>
      <p className="text-sm text-gray-500 mt-1">
        Tarjetas y transferencia
      </p>
    </div>

    {/* ITEM */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 flex items-center justify-center border border-black rounded-full mb-4">
        <ShieldCheck className="w-5 h-5" />
      </div>
      <p className="font-semibold">Garantía de calidad</p>
      <p className="text-sm text-gray-500 mt-1">
        Materiales premium
      </p>
    </div>

  </div>
</section>

      {/* CATEGORÍAS */}
      <section className="py-14 px-6 md:px-10">
        <h2 className="text-2xl font-bold mb-8">Categorías</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Living",
              img: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
            },
            {
              name: "Dormitorio",
              img: "https://images.unsplash.com/photo-1505693314120-0d443867891c",
            },
            {
              name: "Oficina",
              img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
            },
          ].map((cat, i) => (
            <div key={i} className="relative h-[300px] group cursor-pointer">
              <Image
                unoptimized
                src={cat.img}
                alt={cat.name}
                fill
                sizes="33vw"
                className="object-cover group-hover:scale-105 transition"
              />

              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <p className="text-white text-lg font-semibold">
                  {cat.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="px-6 md:px-10 pb-14">
        <h2 className="text-2xl font-bold mb-8">Más vendidos</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1,2,3,4].map((item) => (
            <div key={item} className="group">
              <div className="relative h-[250px] overflow-hidden">
                <Image
                  unoptimized
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
                  alt="producto"
                  fill
                  sizes="25vw"
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="mt-2">
                <p className="text-sm">Sillón moderno</p>
                <p className="font-semibold">Q1,200</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BANNER */}
      <section className="relative h-[300px]">
        <Image
          unoptimized
          src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
          alt="banner"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p className="text-white text-xl font-bold">
            Ofertas especiales esta semana
          </p>
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
              <li><Link href="/tienda">Productos</Link></li>
              <li><Link href="/categorias">Categorías</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-4">Ayuda</p>
            <ul className="text-sm text-gray-400 space-y-2">
              <li><Link href="/contacto">Contacto</Link></li>
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