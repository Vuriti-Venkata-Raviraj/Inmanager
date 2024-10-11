'use client';

const TimeframeButtons = () => {
  const timeframes = [
    { label: "Today", svgPath: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z", bgColor: "#E7DDFF" },
    { label: "This Week", svgPath: "M128,24a8,8,0,0,0-8,8v16H136V32A8,8,0,0,0,128,24ZM48,32A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,16H208v16H48V48Zm0,192V96h160v144ZM152,112H104v48h48a8,8,0,0,1,0,16H88a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16Z", bgColor: "#e7edf3" },
    { label: "This Month", svgPath: "M128,16A16,16,0,0,0,112,32V40H144V32A16,16,0,0,0,128,16ZM48,32A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v16H48V48Zm0,192V96h160v144ZM72,112a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h112a8,8,0,0,1,0,16H72Zm96,48H72a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H72Z", bgColor: "#e7edf3" },
    { label: "All Time", svgPath: "M128,16A16,16,0,0,0,112,32V40H144V32A16,16,0,0,0,128,16ZM48,32A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v16H48V48Zm0,192V96h160v144ZM128,112a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H128Zm0,48H72a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h56a8,8,0,0,1,0,16H72Z", bgColor: "#e7edf3" },
    { label: "Urgent", svgPath: "M176,56H80a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H176a8,8,0,0,0,8-8V64A8,8,0,0,0,176,56Zm0,136H80V64h96ZM120,96a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V104A8,8,0,0,0,120,96Zm0,32a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V128A8,8,0,0,0,120,128Z", bgColor: "#fce4e4" },
    { label: "Important", svgPath: "M176,56H80a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H176a8,8,0,0,0,8-8V64A8,8,0,0,0,176,56Zm0,136H80V64h96ZM120,96a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V104A8,8,0,0,0,120,96Zm0,32a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V128A8,8,0,0,0,120,128Z", bgColor: "#fff9c4" },
    { label: "Info", svgPath: "M128,16A16,16,0,0,0,112,32V40H144V32A16,16,0,0,0,128,16ZM48,32A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v16H48V48Zm0,192V96h160v144ZM128,112a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H128Zm0,48H72a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h56a8,8,0,0,1,0,16H72Z", bgColor: "#e6ffe6" },
  ];

  return (
    <div>
      <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        October 24th, 2024
      </h2>
      <div className="flex gap-3 p-3 flex-wrap pr-4">
        {timeframes.map((timeframe, index) => (
          <div
            key={index}
            className={`flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl cursor-pointer pl-2 pr-4`}
            style={{ backgroundColor: timeframe.bgColor }}
          >
            <div className="text-[#0e141b]" data-icon="Calendar" data-size="20px" data-weight="regular">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 256 256"
                fill="currentColor"
              >
                <path d={timeframe.svgPath} />
              </svg>
            </div>
            <span className="text-[#0e141b] text-sm font-medium leading-normal">{timeframe.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="layout-content-container flex flex-col w-full">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <h1 className="text-3xl font-black bg-gradient-to-r bg-clip-text text-transparent from-cyan-500 to-blue-500">
          Hello Dileep,
        </h1>
        <div className="flex justify-center">
          <img
            src="dileepdp.jpeg"
            alt="user-logo"
            className="bg-center bg-cover aspect-square w-16 h-16 rounded-full shadow-lg"
          />
        </div>
      </div>
      <TimeframeButtons />
    </div>
  );
}
