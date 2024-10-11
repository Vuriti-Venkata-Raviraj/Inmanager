import Image from "next/image";

export default function InManager() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden"
      style={{ fontFamily: "Manrope, Noto Sans, sans-serif" }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e141b]">
            <Image src="/logo.jpeg" alt="Logo" width={48} height={48} className="h-12 w-12 rounded-full" />
            <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">InManager</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Features</a>
              <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Pricing</a>
              <a className="text-[#0e141b] text-sm font-medium leading-normal" href="#">Enterprise</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#5ea5ed] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Sign up</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Log in</span>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/c8bca1b5-37a2-4620-b71f-a14a2655be0d.png")',
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      InManager
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      The intelligent email and messaging summarization tool
                    </h2>
                  </div>
                  <div className="flex-wrap gap-3 flex">
                    <a href="index.html">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#5ea5ed] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                        <span className="truncate">Try for free</span>
                      </button>
                    </a>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                      <span className="truncate">Watch demo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Key features
                </h1>
                <p className="text-[#0e141b] text-base font-normal leading-normal max-w-[720px]">
                  InManager is designed to help you save time and stay organized by summarizing your communications, so you can quickly understand the content without reading the full message. InManager uses natural language processing to help you find the most important messages in your inbox, so you can focus on what matters first. And InManager's AI technology helps you save time by summarizing your messages, so you can spend less time reading and more time doing.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/sdxl10/a85f39b7-44f3-4676-9ccb-c7a3983e6dff.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Summarize your communications</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      InManager creates concise, easy-to-read summaries of your emails and messages, so you can quickly understand the content without reading the full message.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/stability/dab60a55-920f-49ea-8286-51916e139713.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Prioritize your most important messages</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      InManager uses natural language processing to help you find the most important messages in your inbox, so you can focus on what matters first.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                    style={{
                      backgroundImage:
                        'url("https://cdn.usegalileo.ai/stability/93a5293d-b934-4664-9b64-ab90456a53d1.png")',
                    }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Save time on email and messaging</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                      InManager's AI technology helps you save time by summarizing your messages, so you can spend less time reading and more time doing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex px-4 py-3 justify-center">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-[#5ea5ed] text-[#0e141b] gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em]"
              >
                <div class="text-[#0e141b]" data-icon="ArrowRight" data-size="24px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                    ></path>
                  </svg>
                </div>
                <a href="index.html"><span class="truncate">Try for free</span></a>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
