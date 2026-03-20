"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Tienda() {
  const [open, setOpen] = useState(false);

  // estado filtros (listo para backend)
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");

  const productos = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    nombre: "Sillón moderno",
    precio: "Q1,200",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
  }));

  return (
    <main className="bg-white text-black">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 border-b">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-xl font-bold">LOS ALPES</h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <Link href="/">Inicio</Link>
            <Link href="/shop/tienda">Tienda</Link>
            <Link href="/shop/categorias">Categorías</Link>
            <Link href="/shop/contacto">Contacto</Link>
          </nav>

          <div className="flex items-center gap-4">
            <ShoppingCart />
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden flex flex-col items-center py-4 gap-4 border-t">
            <Link href="/">Inicio</Link>
            <Link href="/shop/tienda">Tienda</Link>
            <Link href="/shop/categorias">Categorías</Link>
            <Link href="/shop/contacto">Contacto</Link>
          </div>
        )}
      </header>

      {/* HEADER */}
      <section className="mt-[80px] px-6 md:px-10 py-10 border-b">
        <h1 className="text-3xl font-bold">Todos los productos</h1>
        <p className="text-gray-500 mt-2">
          Explora nuestra colección completa
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 md:px-10 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* FILTROS */}
        <div className="space-y-8">

          <div>
            <p className="font-semibold mb-3">Categoría</p>
            <select
              className="w-full border p-2"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="living">Living</option>
              <option value="dormitorio">Dormitorio</option>
              <option value="oficina">Oficina</option>
            </select>
          </div>

          <div>
            <p className="font-semibold mb-3">Precio</p>
            <select
              className="w-full border p-2"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="low">Menor a Q1,000</option>
              <option value="mid">Q1,000 - Q2,000</option>
              <option value="high">Mayor a Q2,000</option>
            </select>
          </div>

        </div>

        {/* PRODUCTOS */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">

          {productos.map((p) => (
            <div key={p.id} className="group">

              <div className="relative h-[250px] overflow-hidden rounded-lg">
                <Image
                  unoptimized
                  src={p.img}
                  alt={p.nombre}
                  fill
                  sizes="33vw"
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="mt-2">
                <p className="text-sm">{p.nombre}</p>
                <p className="font-semibold">{p.precio}</p>
              </div>

            </div>
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