"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // evita refresh
    router.push("/shop/cuenta"); // redirección directa
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center">

      {/* BACKGROUND */}
      <Image
        unoptimized
        src="https://images.unsplash.com/photo-1567016432779-094069958ea5"
        alt="fondo muebles"
        fill
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CARD */}
      <div className="relative z-10 bg-white w-full max-w-md p-10 rounded-xl shadow-xl">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Iniciar sesión
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">

          {/* USUARIO */}
          <div>
            <label className="text-sm font-medium">Usuario</label>
            <input
              type="text"
              placeholder="Ingresa tu usuario"
              className="w-full border mt-2 p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* CONTRASEÑA */}
          <div>
            <label className="text-sm font-medium">Contraseña</label>
            <input
              type="password"
              placeholder="Ingresa tu contraseña"
              className="w-full border mt-2 p-3 focus:outline-none focus:border-black"
            />
          </div>

          {/* OLVIDÉ CONTRASEÑA */}
          <div className="text-right">
            <Link href="#" className="text-sm text-gray-500 hover:text-black">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          {/* BOTÓN */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition"
          >
            INGRESAR
          </button>

        </form>

        {/* CREAR CUENTA */}
        <div className="text-center mt-6 text-sm text-gray-500">
          ¿No tienes cuenta?{" "}
          <Link href="#" className="text-black font-medium">
            Crear cuenta
          </Link>
        </div>

      </div>

    </main>
  );
}