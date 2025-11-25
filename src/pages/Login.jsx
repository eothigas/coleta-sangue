import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Sistema de Coletas de Sangue</h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Senha</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Entrar
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Não tem conta? <a href="#" className="text-blue-500 hover:underline">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
}
