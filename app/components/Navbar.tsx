"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-[999] border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1
          onClick={() => router.push("/shop")}
          className="text-xl font-bold tracking-wide cursor-pointer"
        >
          LOS ALPES
        </h1>

        {/* MENU */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <Link href="/shop">Inicio</Link>
          <Link href="/shop/tienda">Tienda</Link>
          <Link href="/shop/categorias">Categorías</Link>
          <Link href="/shop/contacto">Contacto</Link>
        </nav>

        {/* ICONOS */}
        <div className="flex items-center gap-6">

          {/* USUARIO */}
          <User
            onClick={() => router.push("/shop/login")}
            className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
          />

          {/* CARRITO */}
          <ShoppingCart
            onClick={() => router.push("/shop/carrito")}
            className="w-5 h-5 cursor-pointer hover:opacity-70 transition"
          />

          {/* MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 border-t bg-white">
          <Link href="/shop" onClick={() => setOpen(false)}>Inicio</Link>
          <Link href="/shop/tienda" onClick={() => setOpen(false)}>Tienda</Link>
          <Link href="/shop/categorias" onClick={() => setOpen(false)}>Categorías</Link>
          <Link href="/shop/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </div>
      )}

    </header>
  );
}