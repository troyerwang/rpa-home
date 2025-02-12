"use client"
import Image from 'next/image';
import { useState } from "react";
import { SiWechat, SiXiaohongshu } from 'react-icons/si';

export default function ComingSoon() {
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* 头像 */}
      <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white">
        <Image src="/images/avatar.jpg" alt="Avatar" width={128} height={128} priority/>
      </div>

      {/* 提示语 */}
      <h1 className="mt-6 text-3xl font-bold">敬请期待</h1>
      <p className="mt-2 text-lg opacity-80">【RPA应用商店】即将上线</p>
      <p className="mt-2 text-lg opacity-80"> 如果你找到这里了，不如加个好友，或者关注一下</p>

      {/* 社交媒体图标 */}
      <div className="mt-4 flex space-x-6">
        <button onClick={() => setShowQR(true)} className="hover:scale-110 transition-transform">
          <SiWechat size={30} className="text-green-400" />
        </button>
        <a href="https://www.xiaohongshu.com/user/profile/5c59b5760000000012024184" target='_blank' className="hover:scale-110 transition-transform">
        <SiXiaohongshu size={40} className="text-red-500" />
        </a>
      </div>

      {/* 微信二维码模态框 */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-lg text-center relative">
            <h2 className="text-lg font-semibold text-gray-700">添加微信，请注明rpaapps</h2>
            <Image src="/images/wechat.png" alt="WeChat QR Code" width={200} height={200} style={{ width: "auto", height: "auto" }}  />
            <button onClick={() => setShowQR(false)} className="absolute top-2 right-2 text-gray-600 hover:text-black">✕</button>
          </div>
        </div>
      )}

    </div>
  );
}
