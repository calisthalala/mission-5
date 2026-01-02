import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar"; 

const Auth = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      navigate("/home");
    } else {
      setIsLogin(true);
    }
  };

  return (
    <div className="bg-[#FFF9EE] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      {/* AUTH CONTENT */}
      <div className="flex items-center justify-center px-3 py-10">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-5 sm:p-8">

          {/* TITLE */}
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-800">
            {isLogin ? "Masuk ke Akun" : "Pendaftaran Akun"}
          </h3>

          <p className="text-sm sm:text-base text-center text-gray-500 mt-1">
            {isLogin
              ? "Yuk, lanjutin belajarmu di videobelajar."
              : "Yuk, daftarkan akunmu sekarang juga!"}
          </p>

          <form onSubmit={handleSubmit} className="mt-6">

            {/* REGISTER ONLY */}
            {!isLogin && (
              <>
                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    placeholder="Masukkan email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    Jenis Kelamin *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none">
                    <option>Wanita</option>
                    <option>Pria</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-sm text-gray-700 mb-2">
                    No. HP *
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2 px-3 py-3 border border-gray-200 rounded-lg">
                      <span className="text-sm">+62</span>
                    </div>
                    <input
                      type="text"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                    />
                  </div>
                </div>
              </>
            )}

            {/* LOGIN ONLY */}
            {isLogin && (
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  placeholder="Masukkan email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
            )}

            {/* PASSWORD */}
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">
                Kata Sandi *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-3 right-3 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">
                  Konfirmasi Kata Sandi *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute top-3 right-3 text-gray-500"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-end mb-4">
              <span className="text-sm text-green-600 cursor-pointer">
                Lupa Password?
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              {isLogin ? "Masuk" : "Daftar"}
            </button>

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full mt-3 bg-green-100 text-green-600 py-3 rounded-lg font-semibold"
            >
              {isLogin ? "Daftar" : "Masuk"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
