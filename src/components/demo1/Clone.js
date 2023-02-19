import React from "react";

const Clone = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-12 gap-8">
      <div>
        <img
          alt="avt"
          src="https://www.xuanphuc.space/static/media/logo-full.9869b084c6f8eb254212.png"
          className="w-32"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl text-center">
          Đăng nhập vào SateLLite
        </h1>
      </div>
      <div className="flex gap-4">
        <ul className="border-2 border-red-500 p-3 rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
          <li>
            <img
              alt=""
              src="https://www.xuanphuc.space/static/media/google.cadee8cdb0c0afb1a713.png"
              className="w-8"
            />
          </li>
        </ul>
        <ul className="border-2 border-red-500 p-3  rounded-full cursor-pointer hover:bg-slate-200 transition-all ">
          <li>
            <img
              alt=""
              src="https://www.xuanphuc.space/static/media/facebook.01a470d813915c298403.png"
              className="w-8"
            />
          </li>
        </ul>
      </div>
      <p>Hoặc đăng nhập với email và mật khẩu của bạn:</p>
      <div className="w-full flex flex-col gap-2">
        <input className="border border-gray-400 rounded-full w-full p-3 px-5 focus:outline-none" placeholder="Email của bạn ..."/>
        <input className="border border-gray-400 rounded-full w-full p-3 px-5 focus:outline-none" placeholder="Mật khẩu ..."/>
      </div>
      <div className="w-full flex gap-3">
        <button className="w-full rounded-full p-3 g-red-500 bg-red-500 border border-red-500 text-white font-bold hover:bg-red-600 transition-all ">Đăng Nhập</button>
        <button className="w-full rounded-full p-3 g-red-500 border border-red-500 text-red-500 hover:bg-gray-100 transition-all ">Đăng ký</button>
      </div>
      <div>
        <button className=" text-red-500 font-bold hover:underline">Quên mật khẩu ?</button>
      </div>
      <div>
        <p className="text-center text-sm">Việc bạn tiếp tục sử dụng trang web này đồng nghĩa bạn đồng ý với <span className="text-red-500">Điều khoản sử dụng</span> của chúng tôi.</p>
      </div>
    </div>
  );
};

export default Clone;
