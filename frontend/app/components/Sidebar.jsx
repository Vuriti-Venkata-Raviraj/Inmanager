'use client'
import { useState } from 'react';

export default function Sidebar() {
  const [menuItems] = useState([
    { label: 'Email', icon: 'Envelope', bgColor: 'bg-[#e7edf3]' },
    { label: 'WhatsApp', icon: 'WhatsappLogo', bgColor: '' },
    { label: 'LinkedIn', icon: 'LinkedinLogo', bgColor: '' },
  ]);

  return (
    <div className="flex flex-col w-80 bg-slate-50 p-4 min-h-[700px] justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <a href="landing.html">
            <img src="logo.jpeg" className="h-12 w-12 rounded-full" alt="Logo" />
          </a>
          <div className="flex flex-col">
            <h1 className="text-[#0e141b] text-base font-medium">InManager</h1>
            <p className="text-[#4e7397] text-sm">Workplace Communication</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {menuItems.map((item, index) => (
            <div key={index} className={`flex items-center gap-3 px-3 py-2 cursor-pointer rounded-xl ${item.bgColor}`}>
              <div className={`text-[#0e141b]`} data-icon={item.icon} data-size="24px">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  {/* Icon Path */}
                </svg>
              </div>
              <p className="text-[#0e141b] text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-[#5ea5ed] text-[#0e141b] text-sm font-bold h-10 px-4 rounded-xl">
        <a href="landing.html">Log Out</a>
      </button>
    </div>
  );
}
