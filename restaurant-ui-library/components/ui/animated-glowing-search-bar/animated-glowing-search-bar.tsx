"use client"

const SearchComponent = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute -z-10 h-min-screen w-full" />
      <div id="poda" className="group relative flex items-center justify-center">
        {/* multiple layered shadows */}
        {[150, 140, 140, 140].map((_, idx) => (
          <div
            key={idx}
            className="absolute -z-10 h-full max-h-[70px] w-full max-w-[314px] overflow-hidden rounded-xl blur-[3px]
              before:absolute before:-left-1/2 before:-top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-20]
              before:h-[999px] before:w-[999px] before:bg-no-repeat before:content-['']
              before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)]
              before:transition-all before:duration-[2000ms]
              group-focus-within:before:duration-[4000ms] group-focus-within:before:rotate-[420deg]
              group-hover:before:rotate-[-120deg]"
          />
        ))}

        <div
          className="absolute -z-10 h-full max-h-[63px] w-full max-w-[307px] overflow-hidden rounded-lg blur-[2px]
            before:absolute before:-left-1/2 before:-top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-10]
            before:h-[600px] before:w-[600px] before:bg-no-repeat before:content-['']
            before:rotate-[83deg]
            before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)]
            before:brightness-140 before:transition-all before:duration-[2000ms]
            group-focus-within:before:duration-[4000ms] group-focus-within:before:rotate-[443deg]
            group-hover:before:rotate-[-97deg]"
        />

        <div
          className="absolute -z-10 h-full max-h-[59px] w-full max-w-[303px] overflow-hidden rounded-xl blur-[0.5px]
            before:absolute before:-left-1/2 before:-top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-5]
            before:h-[600px] before:w-[600px] before:bg-no-repeat before:content-['']
            before:rotate-70
            before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)]
            before:brightness-130 before:transition-all before:duration-[2000ms]
            group-focus-within:before:duration-[4000ms] group-focus-within:before:rotate-[430deg]
            group-hover:before:rotate-[-110deg]"
        />

        <div id="main" className="relative">
          <input
            placeholder="Search..."
            type="text"
            name="search"
            className="h-[56px] w-[301px] rounded-lg border-none bg-[#010201] px-[59px] text-lg text-white placeholder-gray-400 focus:outline-none"
          />
          <div
            id="input-mask"
            className="pointer-events-none absolute left-[70px] top-[18px] h-[20px] w-[100px] bg-gradient-to-r from-transparent to-black group-focus-within:hidden"
          />
          <div
            id="pink-mask"
            className="pointer-events-none absolute left-[5px] top-[10px] h-[20px] w-[30px] bg-[#cf30aa] opacity-80 blur-2xl transition-all duration-[2000ms] group-hover:opacity-0"
          />
          <div
            className="absolute right-[7px] top-[7px] h-[42px] w-[40px] overflow-hidden rounded-lg
              before:absolute before:-left-1/2 before:-top-1/2 before:h-[600px] before:w-[600px] before:rotate-90 before:bg-[conic-gradient(rgba(0,0,0,0),#3d3a4f,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#3d3a4f,rgba(0,0,0,0)_100%)] before:brightness-135 before:content-[''] before:animate-spin-slow"
          />
          <div
            id="filter-icon"
            className="pointer-events-none absolute right-2 top-2 z-10 flex h-full max-h-10 w-full max-w-[38px] items-center justify-center overflow-hidden rounded-lg border border-transparent bg-gradient-to-b from-[#161329] via-black to-[#1d1b4b]"
          >
            <svg preserveAspectRatio="none" height="27" width="27" viewBox="4.8 4.56 14.832 15.408" fill="none">
              <path
                d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                stroke="#d6d6e6"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div id="search-icon" className="pointer-events-none absolute left-5 top-[15px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              className="feather feather-search"
            >
              <circle stroke="url(#search)" r="8" cy="11" cx="11" />
              <line stroke="url(#searchl)" y2="16.65" y1="22" x2="16.65" x1="22" />
              <defs>
                <linearGradient gradientTransform="rotate(50)" id="search">
                  <stop stopColor="#f8e7f8" offset="0%" />
                  <stop stopColor="#b6a9b7" offset="50%" />
                </linearGradient>
                <linearGradient id="searchl">
                  <stop stopColor="#b6a9b7" offset="0%" />
                  <stop stopColor="#837484" offset="50%" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchComponent
