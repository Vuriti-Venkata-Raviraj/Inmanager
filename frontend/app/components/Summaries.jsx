'use client'
import { useState } from 'react';

export default function Summaries() {
  const [summaries] = useState([
    { label: 'Today', bgColor: 'bg-[#E7DDFF]' },
    { label: 'August 2023', bgColor: 'bg-[#e7edf3]' },
  ]);

  return (
    <div className="p-4">
      <h2 className="text-[22px] font-bold text-[#0e141b]">Your Summaries</h2>
      
    </div>
  );
}
