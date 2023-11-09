export default function Nav(props: { styles: object }) {

    const { styles } = props

    return (
        <nav id="nav" className="w-full fixed z-50">
            <div className="container-travelers px-5 md:px-5 lg:px-0 z-20 relative">
                <div className="flex items-center md:gap-x-[48px] lg:gap-x-[70px] xl:gap-x-[80px] py-[14px]">
                    {/* <!-- HAMBURGER BUTTON SHOW IN MOBILE --> */}
                    <div className="w-4/12 block md:hidden">
                        <button type="button" className="text-[#1E1E1E]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                    {/* <!-- NAV LOGO --> */}
                    <div className="w-4/12 md:w-auto">
                        <a href="/" className="nav-anchor font-heavitas text-base" style={{ color: styles.color }}>TRAVELERS</a>
                    </div>
                    <div className="hidden md:flex md:w-auto md:gap-x-[22px] lg:gap-x-[28px] xl:gap-x-[35px]">
                        <a href="/" className="nav-anchor font-medium text-base" style={{ color: styles.color }}>Home</a>
                        <a href="/" className="nav-anchor font-medium text-base" style={{ color: styles.color }}>About Us</a>
                        <a href="/" className="nav-anchor font-medium text-base" style={{ color: styles.color }}>Destinations</a>
                        <a href="/" className="nav-anchor font-medium text-base" style={{ color: styles.color }}>Travel Deals</a>
                        <a href="/" className="nav-anchor font-medium text-base" style={{ color: styles.color }}>Blog</a>
                        <a href="/" className="nav-anchor font-medium text-base" style={{ color: styles.color }}>Services</a>
                    </div>
                    {/* <!-- BOOK A TRAVEL --> */}
                    <div className="w-4/12 md:w-auto flex justify-end ml-auto">
                        {/* <!-- BUTTON BOOK TRAVEL --> */}
                        <a href="/"
                            className="inline-block py-[8px] px-[10px] md:py-[10px] md:px-[12px] lg:py-[13px] lg:px-[13px] font-bold text-sm md:text-base text-[#EDEDED] rounded-[10px] whitespace-nowrap"
                            style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>Book <span
                                className="hidden md:inline-block">a travel</span>
                            <span className="inline-block md:hidden">Now</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <!-- SLIDE WHEN SCROLL --> */}
            <div className="absolute w-full h-full bg-white top-0 transform -translate-y-full transition duration-500" style={{ transform: styles.transform }}></div>
        </nav>
    )
}