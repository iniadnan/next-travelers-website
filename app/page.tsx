"use client"

import { useEffect, useState, useRef } from "react";
import './page.css'
import Image from 'next/image'
import Nav from "./components/Nav"
import Footer from "./components/Footer";
import DestinationCard from './components/DestinationCard';

import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Page() {

  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isScrollToEscapeParadise, setIsScrollToEscapeParadise] = useState<boolean>(false)
  const [isScrollToNotification, setIsScrollToNotification] = useState<boolean>(false)
  const [positionEscapeParadise, setPositionEscapeParadise] = useState<number>(0)
  const [positionNotification, setPositionNotification] = useState<number>(0)
  const [stylesNav, setStylesNav] = useState<object>({
    transform: "translateY(-100%)",
    color: "#EDEDED",
  })

  const escapeParadise = useRef()
  const notificationRef = useRef()

  const stylesHeader = {
    widthLeft: "8%",
    widthRight: "92%",
    transformTo0: "translateY(0px)",
  }

  function isScrolling() {
    if (window.scrollY > 100) {
      setStylesNav({
        transform: "translateY(0%)",
        color: "#1E1E1E",
      })
    }
    if (window.scrollY < 100) {
      setStylesNav({
        transform: "translateY(-100%)",
        color: "#EDEDED",
      })
    }
    // WHEN WINDOW IN AREA ESCAPE PARADISE
    if (window.scrollY > (positionEscapeParadise + 450)) {
      setIsScrollToEscapeParadise(true);
    }
    // WHEN WINDOW IN AREA ESCAPE PARADISE
    if (window.scrollY > (positionNotification + 450)) {
      setIsScrollToNotification(true);
    }
  }

  // SCROLLING INIT
  useEffect(() => {
    document.addEventListener('scroll', isScrolling);
    setIsMounted(true)
    setPositionEscapeParadise(escapeParadise.current.getBoundingClientRect().top);
    setPositionNotification(notificationRef.current.getBoundingClientRect().top)
  }, [])

  // SWIPER INIT
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      // Swiper options here
      slidesPerView: "auto",
      spaceBetween: 18,
      modules: [Navigation, Autoplay],
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".popular-destination-swiper-button-next",
        prevEl: ".popular-destination-swiper-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: "auto",
          spaceBetween: 12,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1040: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        1240: {
          slidesPerView: 3,
          spaceBetween: 18,
        },
      },
    });
  }, [])

  return (
    <>
      <Nav styles={stylesNav} />
      <header id='header'>
        <div className="h-screen w-full flex flex-nowrap relative overflow-hidden">
          {/* <!-- HEADER LEFT --> */}
          <div className="header-left h-full" style={{ width: isMounted ? stylesHeader.widthLeft : '' }}>
            <Image className="h-full w-full object-cover" height="800" width="200" src="/images/header-left.webp"
              alt="Ornament" />
          </div>
          {/* <!-- HEADER RIGHT: MAIN IMAGE --> */}
          <div className="header-right h-full relative" style={{ width: isMounted ? stylesHeader.widthRight : '' }}>
            {/* <!-- TEXT & 1M IMAGE --> */}
            <div className="absolute top-[80%] md:top-1/2 transform -translate-y-1/2 left-0 z-10">
              {/* <!-- TEXT --> */}
              <svg className="w-[120px] md:w-[140px] lg:w-[157px]" width="157" height="437" viewBox="0 0 157 437"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.53325 39.1116L11.0445 40.4418C10.6213 41.5328 11.3348 42.7727 12.7156 43.5041C14.1049 44.2401 15.4062 44.0785 15.8907 43.1637C16.3204 42.3525 15.9627 41.5884 14.6394 40.4564L13.2045 39.2432C11.1696 37.5353 10.6562 35.7715 11.6208 33.9506C12.8367 31.6552 15.6261 31.1877 18.4048 32.6597C21.3044 34.1957 22.3344 36.6531 21.1844 38.9283L18.7423 37.6346C19.2137 36.5361 18.6286 35.4084 17.3255 34.7181C16.0397 34.037 14.8521 34.1926 14.363 35.1159C13.9562 35.884 14.3317 36.6355 15.5905 37.7222L16.9315 38.8415C19.1421 40.6976 19.6626 42.3437 18.6569 44.2422C17.3769 46.6585 14.6089 47.1483 11.5195 45.5117C8.52498 43.9255 7.37209 41.4914 8.53325 39.1116Z"
                  fill="white" />
                <path
                  d="M37.5971 58.4396L36.183 60.4298L28.5725 55.0225L36.7343 43.535L44.3449 48.9423L42.9365 50.9246L37.7301 47.2254L35.7618 49.9958L40.6736 53.4857L39.3614 55.3326L34.4495 51.8427L32.3907 54.7405L37.5971 58.4396Z"
                  fill="white" />
                <path
                  d="M57.4059 62.3533L54.3493 65.6453L56.21 67.3729C57.2978 68.3829 58.5128 68.3517 59.463 67.3283C60.3932 66.3264 60.3186 65.0577 59.2451 64.061L57.4059 62.3533ZM52.8941 67.2126L49.3857 70.9912L47.2244 68.9845L56.8128 58.6577L61.0423 62.5847C63.4182 64.7908 63.6151 67.3057 61.7214 69.3453C60.4921 70.6692 58.7419 71.1763 57.122 70.5385L55.4902 76.6591L53.0426 74.3866L54.626 68.8206L52.8941 67.2126Z"
                  fill="white" />
                <path
                  d="M69.5538 91.943L67.3065 89.1889L75.2304 76.6102L77.3172 79.1677L70.7894 88.6534L70.8327 88.7064L81.4352 84.2144L83.4664 86.7038L69.5538 91.943Z"
                  fill="white" />
                <path d="M82.2029 109.278L80.6053 106.799L92.4504 99.1654L94.048 101.644L82.2029 109.278Z"
                  fill="white" />
                <path
                  d="M91.1988 125.38C89.3897 121.699 90.7197 118.184 94.8039 116.176C98.8793 114.173 102.484 115.286 104.284 118.949C105.779 121.99 104.988 125.252 102.256 126.845L100.989 124.268C102.42 123.26 102.851 121.569 102.093 120.026C101.111 118.028 98.8037 117.562 96.1393 118.871C93.4399 120.198 92.3992 122.287 93.3942 124.312C94.1652 125.881 95.6411 126.559 97.2777 126.103L98.544 128.68C95.5754 129.769 92.7236 128.483 91.1988 125.38Z"
                  fill="white" />
                <path
                  d="M105.254 152.667L102.936 153.432L100.01 144.566L113.392 140.15L116.318 149.016L114.008 149.778L112.007 143.713L108.78 144.778L110.668 150.5L108.516 151.21L106.628 145.488L103.253 146.602L105.254 152.667Z"
                  fill="white" />
                <path
                  d="M110.603 165.597L111.135 168.389C110.019 168.74 109.497 170.072 109.789 171.607C110.083 173.152 111.023 174.067 112.04 173.873C112.942 173.701 113.314 172.944 113.371 171.204L113.421 169.325C113.482 166.669 114.538 165.166 116.562 164.781C119.114 164.295 121.222 166.18 121.81 169.269C122.424 172.492 121.15 174.833 118.655 175.357L118.138 172.642C119.29 172.324 119.805 171.162 119.529 169.713C119.257 168.284 118.393 167.454 117.366 167.65C116.513 167.812 116.161 168.575 116.099 170.237L116.064 171.983C115.997 174.869 115.038 176.304 112.927 176.706C110.241 177.218 108.128 175.363 107.475 171.929C106.841 168.6 108.02 166.178 110.603 165.597Z"
                  fill="white" />
                <path
                  d="M111.498 206.356L111.556 203.535L125.645 203.828L125.594 206.288L116.279 212.678L116.278 212.756L125.455 212.947L125.396 215.769L111.308 215.475L111.359 213.034L120.722 206.636L120.724 206.548L111.498 206.356Z"
                  fill="white" />
                <path
                  d="M123.322 239.661C122.601 243.769 119.386 245.871 114.961 245.094C110.546 244.319 108.24 241.247 108.961 237.14C109.684 233.023 112.897 230.93 117.312 231.705C121.737 232.482 124.044 235.545 123.322 239.661ZM120.898 239.236C121.296 236.966 119.706 235.18 116.792 234.668C113.887 234.158 111.795 235.288 111.395 237.567C110.996 239.837 112.578 241.612 115.483 242.122C118.397 242.634 120.499 241.506 120.898 239.236Z"
                  fill="white" />
                <path
                  d="M99.4416 273.84L110.036 278.013L110.057 277.959L109.067 273.706L111.538 274.68L112.556 278.996L111.482 281.722L98.3713 276.556L99.4416 273.84Z"
                  fill="white" />
                <path d="M85.2997 302.962L86.8147 300.431L98.9051 307.67L97.3901 310.2L85.2997 302.962Z"
                  fill="white" />
                <path
                  d="M77.118 315.605L78.8375 313.367L90.0117 321.953L88.5123 323.905L77.2229 323.531L77.1753 323.593L84.4544 329.186L82.7349 331.424L71.5607 322.838L73.0482 320.902L84.3822 321.298L84.4358 321.228L77.118 315.605Z"
                  fill="white" />
                <path
                  d="M47.9974 347.375L50.2404 345.46L57.8115 354.327L60.9085 351.683L62.4875 353.533L54.0431 360.742L52.4642 358.893L55.5686 356.242L47.9974 347.375Z"
                  fill="white" />
                <path
                  d="M23.3102 365.409L25.8012 363.83L28.9797 368.845L34.3412 365.447L31.1627 360.432L33.6537 358.853L41.1975 370.756L38.7065 372.335L35.6429 367.501L30.2814 370.899L33.345 375.733L30.8539 377.312L23.3102 365.409Z"
                  fill="white" />
                <path
                  d="M2.64978 378.9L1.63905 376.678L10.1374 372.813L15.9713 385.64L7.47299 389.505L6.4663 387.292L12.28 384.648L10.8731 381.554L5.38827 384.048L4.45031 381.986L9.9351 379.492L8.46347 376.256L2.64978 378.9Z"
                  fill="white" />
              </svg>
              {/* <!-- 1M IMAGE --> */}
              <svg className="w-[140px] md:w-[150px] lg:w-[175px] absolute top-1/2 transform -translate-y-1/2 -left-[70px] md:-left-[75px] lg:-left-[87.5px] z-10"
                width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_12_206)">
                  <circle cx="87.5" cy="83.5" r="54.5" fill="url(#paint0_linear_12_206)" />
                  <circle cx="87.5" cy="83.5" r="50.5" stroke="#EDEDED" strokeWidth="8" />
                </g>
                <path
                  d="M73.5215 92V80.6133H73.4629L69.8691 83.0938V80.4375L73.5117 77.9082H76.4414V92H73.5215ZM94.6445 92H92.0176V82.4883H91.9395L88.1113 91.8633H86.2559L82.4277 82.4883H82.3496V92H79.7227V77.9082H83.1406L87.1445 87.8984H87.2227L91.2266 77.9082H94.6445V92ZM103.57 87.5957V91.8633H101.012V87.5957H97.0273V85.1055H101.012V80.8867H103.57V85.1055H107.555V87.5957H103.57Z"
                  fill="#EDEDED" />
                <defs>
                  <filter id="filter0_d_12_206" x="0" y="0" width="175" height="175"
                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="16.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                      values="0 0 0 0 0.2875 0 0 0 0 0.348834 0 0 0 0 0.383333 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_206" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_206"
                      result="shape" />
                  </filter>
                  <linearGradient id="paint0_linear_12_206" x1="87.5" y1="-93.3222" x2="87.5" y2="243.367"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0077ED" />
                    <stop offset="1" stopColor="#7BF9D3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Image className="h-full w-full object-cover" height="800" width="1200" src="/images/header.webp"
              alt="Let’s travel the world" />
          </div>
          {/* <!-- TEXT --> */}
          <section className="absolute top-[35%] md:top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <div className="h-[120px] md:h-[150px] overflow-hidden">
              <h1
                className="header__main-text transform translate-y-[120px] md:translate-y-[150px] font-medium text-[60px] md:text-[72px] lg:text-[80px] xl:text-[100px] text-white text-center whitespace-nowrap leading-none md:leading-normal mb-5 md:mb-0" style={{ transform: isMounted ? stylesHeader.transformTo0 : '' }}>
                Let’s travel<br className="block md:hidden" /> the world
              </h1>
            </div>
            <div className="h-[68px] md:h-[40px] overflow-hidden">
              <p
                className="header__secondary-text transform translate-y-[68px] md:translate-y-[40px] max-w-10/12 mx-auto font-medium text-[20px] md:text-[22px] lg:text-[26px] text-white text-center" style={{ transform: isMounted ? stylesHeader.transformTo0 : '' }}>
                Explore destinations, places, and
                unforgettable experiences</p>
            </div>
          </section>
          {/* <!-- BOX BOTTOM --> */}
          <div
            className="max-w-full md:w-auto w-full absolute bottom-0 md:bottom-10 left-0 md:left-1/2 transform md:-translate-x-1/2 z-20 max-w-full absolute bottom-0 md:bottom-10 left-0 md:left-1/2 transform md:-translate-x-1/2 z-20">
            <div className="flex items-center py-[16px] md:py-[20px] px-[20px] md:px-[25px] bg-white md:rounded-[15px]">
              <div className="mr-4 md:mr-8 lg:mr-10 xl:mr-16">
                <button type="button"
                  className="flex items-center gap-x-1 md:gap-x-2 text-[14px] md:text-[16px] lg:text-[20px] text-[#1E1E1E] mb-1 md:mb-1.5">
                  <span>Location</span>
                  <svg className="w-[18px] h-[19px] md:w-[22px] md:h-[23px] lg:w-[24px] lg:h-[25px]" width="24"
                    height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10.5L12 15.5L17 10.5" stroke="url(#paint0_linear_7_16)" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_7_16" x1="12" y1="4.88889" x2="12" y2="20.3333"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
                <p className="font-medium text-xs md:text-base text-[#8A8A8A] lg:whitespace-nowrap">Indonesia</p>
              </div>
              <div className="mr-4 md:mr-8 lg:mr-10 xl:mr-16">
                <button type="button"
                  className="flex items-center gap-x-1 md:gap-x-2 text-[14px] md:text-[16px] lg:text-[20px] text-[#1E1E1E] mb-1 md:mb-1.5">
                  <span>Date</span>
                  <svg className="w-[18px] h-[19px] md:w-[22px] md:h-[23px] lg:w-[24px] lg:h-[25px]" width="24"
                    height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10.5L12 15.5L17 10.5" stroke="url(#paint0_linear_7_16)" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_7_16" x1="12" y1="4.88889" x2="12" y2="20.3333"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
                <p className="font-medium text-xs md:text-base text-[#8A8A8A] lg:whitespace-nowrap">14 June, Wed</p>
              </div>
              <div className="mr-4 md:mr-6">
                <button type="button"
                  className="flex items-center gap-x-1 md:gap-x-2 text-[14px] md:text-[16px] lg:text-[20px] text-[#1E1E1E] mb-1 md:mb-1.5">
                  <span>Price</span>
                  <svg className="w-[18px] h-[19px] md:w-[22px] md:h-[23px] lg:w-[24px] lg:h-[25px]" width="24"
                    height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10.5L12 15.5L17 10.5" stroke="url(#paint0_linear_7_16)" strokeWidth="2"
                      strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="paint0_linear_7_16" x1="12" y1="4.88889" x2="12" y2="20.3333"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
                <p className="font-medium text-xs md:text-base text-[#8A8A8A] lg:whitespace-nowrap">$500-2000</p>
              </div>
              <div
                className="relative w-auto md:w-[280px] lg:w-[300px] xl:w-[365px] h-[55px] bg-[#E5F0F5] ml-auto flex items-center rounded-[10px] pl-2 md:pl-0 pr-2">
                <input
                  className="w-full h-full hidden md:block pl-5 md:pr-[36px] lg:pr-[50px] focus:outline-none text-[#1E1E1E] bg-transparent :placeholder-[#8A8A8A] text-sm md:text-base"
                  type="text" name="search" id="search" placeholder="Search destinations..." />
                <button type="button" aria-label="Search Destination">
                  <svg className="h-[40px] w-[40px]" width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="url(#paint0_linear_7_8)" />
                    <path
                      d="M29.71 28.29L26 24.61C27.4401 22.8144 28.1375 20.5353 27.9488 18.2413C27.7601 15.9473 26.6997 13.8128 24.9855 12.2766C23.2714 10.7405 21.0338 9.91951 18.7329 9.98247C16.432 10.0454 14.2427 10.9876 12.6151 12.6151C10.9876 14.2427 10.0454 16.432 9.98247 18.7329C9.91951 21.0338 10.7405 23.2714 12.2766 24.9855C13.8128 26.6997 15.9473 27.7601 18.2413 27.9488C20.5353 28.1375 22.8144 27.4401 24.61 26L28.29 29.68C28.383 29.7737 28.4936 29.8481 28.6154 29.8989C28.7373 29.9497 28.868 29.9758 29 29.9758C29.132 29.9758 29.2627 29.9497 29.3846 29.8989C29.5064 29.8481 29.617 29.7737 29.71 29.68C29.8902 29.4935 29.991 29.2443 29.991 28.985C29.991 28.7257 29.8902 28.4765 29.71 28.29ZM19 26C17.6155 26 16.2621 25.5895 15.111 24.8203C13.9599 24.0511 13.0627 22.9579 12.5328 21.6788C12.003 20.3997 11.8644 18.9922 12.1345 17.6344C12.4046 16.2765 13.0713 15.0292 14.0502 14.0502C15.0292 13.0713 16.2765 12.4046 17.6344 12.1345C18.9922 11.8644 20.3997 12.003 21.6788 12.5328C22.9579 13.0627 24.0511 13.9599 24.8203 15.111C25.5895 16.2621 26 17.6155 26 19C26 20.8565 25.2625 22.637 23.9497 23.9497C22.637 25.2625 20.8565 26 19 26Z"
                      fill="#EDEDED" />
                    <defs>
                      <linearGradient id="paint0_linear_7_8" x1="20" y1="-44.8889" x2="20" y2="78.6667"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id='sponsor'>
        <div className="container-travelers pt-[25px] pb-8 md:pb-10 lg:pb-[55px] px-5 md:px-5 lg:px-0">
          {/* <!-- SPONSOR LIST --> */}
          <div className="flex items-center">
            <div className="w-1/4">
              <Image className="h-auto w-full" src="/images/sponsor-expedia.png" height="100" width="100"
                alt="expedia" />
            </div>
            <div className="w-1/4">
              <Image className="h-auto w-full" src="/images/sponsor-skyscanner.png" height="100" width="100"
                alt="skyscanner" />
            </div>
            <div className="w-1/4">
              <Image className="h-auto w-full" src="/images/sponsor-turkish.png" height="100" width="100"
                alt="turkish" />
            </div>
            <div className="w-1/4">
              <Image className="h-auto w-full" src="/images/sponsor-sunexpress.png" height="100" width="100"
                alt="sunexpress" />
            </div>
          </div>
        </div>
      </section>
      <main id='popular-destination'>
        <div className="container-travelers px-5 md:px-5 lg:px-0">
          <section className="flex items-center justify-between mb-8 md:mb-10 lg:mb-12">
            <div className="max-w-2/3">
              <h2
                className="font-medium text-[32px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-[#1E1E1E]"
              >
                Popular destinations
              </h2>
            </div>
            {/* <!-- BUTTON FOR TRIGGER SLIDE RIGHT - LEFT --> */}
            <div className="flex items-center gap-x-3 md:gap-x-5">
              <button
                type="button"
                className="popular-destination-swiper-button-prev h-8 w-8 md:h-10 md:w-10 rounded-full inline-flex items-center justify-center"
                aria-label="Button Swiper Left"
                style={{ backgroundColor: "rgba(229, 240, 245, 1)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 11H9.40999L12.71 7.71C12.8983 7.5217 13.0041 7.2663 13.0041 7C13.0041 6.7337 12.8983 6.47831 12.71 6.29C12.5217 6.1017 12.2663 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29L6.28999 11.29C6.19895 11.3851 6.12758 11.4973 6.07999 11.62C5.97997 11.8635 5.97997 12.1365 6.07999 12.38C6.12758 12.5028 6.19895 12.6149 6.28999 12.71L11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71C12.8037 17.617 12.8781 17.5064 12.9289 17.3846C12.9796 17.2627 13.0058 17.132 13.0058 17C13.0058 16.868 12.9796 16.7373 12.9289 16.6154C12.8781 16.4936 12.8037 16.383 12.71 16.29L9.40999 13H17C17.2652 13 17.5196 12.8946 17.7071 12.7071C17.8946 12.5196 18 12.2652 18 12C18 11.7348 17.8946 11.4804 17.7071 11.2929C17.5196 11.1054 17.2652 11 17 11Z"
                    fill="#8A8A8A"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="popular-destination-swiper-button-next h-8 w-8 md:h-10 md:w-10 rounded-full inline-flex items-center justify-center"
                aria-label="Button Swiper Right"
                style={{ background: "linear-gradient(180deg,#0077ed -112.22%,#7bf9d3 196.67%)" }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.92 11.62C17.8724 11.4973 17.801 11.3851 17.71 11.29L12.71 6.29C12.6168 6.19676 12.5061 6.1228 12.3842 6.07234C12.2624 6.02188 12.1319 5.99591 12 5.99591C11.7337 5.99591 11.4783 6.1017 11.29 6.29C11.1968 6.38324 11.1228 6.49393 11.0723 6.61575C11.0219 6.73758 10.9959 6.86814 10.9959 7C10.9959 7.2663 11.1017 7.5217 11.29 7.71L14.59 11H7C6.73478 11 6.48043 11.1054 6.29289 11.2929C6.10536 11.4804 6 11.7348 6 12C6 12.2652 6.10536 12.5196 6.29289 12.7071C6.48043 12.8946 6.73478 13 7 13H14.59L11.29 16.29C11.1963 16.383 11.1219 16.4936 11.0711 16.6154C11.0203 16.7373 10.9942 16.868 10.9942 17C10.9942 17.132 11.0203 17.2627 11.0711 17.3846C11.1219 17.5064 11.1963 17.617 11.29 17.71C11.383 17.8037 11.4936 17.8781 11.6154 17.9289C11.7373 17.9797 11.868 18.0058 12 18.0058C12.132 18.0058 12.2627 17.9797 12.3846 17.9289C12.5064 17.8781 12.617 17.8037 12.71 17.71L17.71 12.71C17.801 12.6149 17.8724 12.5028 17.92 12.38C18.02 12.1365 18.02 11.8635 17.92 11.62Z"
                    fill="#EDEDED"
                  />
                </svg>
              </button>
            </div>
          </section>
          {/* <!-- LIST OF DESTINATIONS --> */}
          <div className="w-full overflow-hidden">
            <div className="swiper-container popular-destination-swiper">
              <div className="swiper-wrapper">
                <DestinationCard title="Bali"
                  image="/images/destinations-bali.webp"
                  price={380}
                  location="Indonesia"
                  star={5.0} />
                <DestinationCard title="Santorini"
                  image="/images/destinations-santorini.webp"
                  price={475}
                  location="Greece"
                  star={4.5} />
                <DestinationCard title="Perhentian Island"
                  image="/images/destinations-perhentian.webp"
                  price={410}
                  location="Malaysia"
                  star={4.7} />
                <DestinationCard title="Bali"
                  image="/images/destinations-bali.webp"
                  price={380}
                  location="Indonesia"
                  star={5.0} />
                <DestinationCard title="Santorini"
                  image="/images/destinations-santorini.webp"
                  price={475}
                  location="Greece"
                  star={4.5} />
                <DestinationCard title="Perhentian Island"
                  image="/images/destinations-perhentian.webp"
                  price={410}
                  location="Malaysia"
                  star={4.7} />
                <DestinationCard title="Bali"
                  image="/images/destinations-bali.webp"
                  price={380}
                  location="Indonesia"
                  star={5.0} />
                <DestinationCard title="Santorini"
                  image="/images/destinations-santorini.webp"
                  price={475}
                  location="Greece"
                  star={4.5} />
                <DestinationCard title="Perhentian Island"
                  image="/images/destinations-perhentian.webp"
                  price={410}
                  location="Malaysia"
                  star={4.7} />
                <DestinationCard title="Bali"
                  image="/images/destinations-bali.webp"
                  price={380}
                  location="Indonesia"
                  star={5.0} />
                <DestinationCard title="Santorini"
                  image="/images/destinations-santorini.webp"
                  price={475}
                  location="Greece"
                  star={4.5} />
                <DestinationCard title="Perhentian Island"
                  image="/images/destinations-perhentian.webp"
                  price={410}
                  location="Malaysia"
                  star={4.7} />
                <DestinationCard title="Bali"
                  image="/images/destinations-bali.webp"
                  price={380}
                  location="Indonesia"
                  star={5.0} />
                <DestinationCard title="Santorini"
                  image="/images/destinations-santorini.webp"
                  price={475}
                  location="Greece"
                  star={4.5} />
                <DestinationCard title="Perhentian Island"
                  image="/images/destinations-perhentian.webp"
                  price={410}
                  location="Malaysia"
                  star={4.7} />
              </div>
            </div>
          </div>
        </div >
      </main>
      <section id='escape-paradise' ref={escapeParadise}>
        <div className="container-travelers py-[90px] md:py-[100px] lg:py-[120px] px-5 md:px-5 lg:px-0">
          <div className="flex flex-wrap items-start justify-between">
            {/* <!-- ESCAPE PARADISE LEFT --> */}
            <div className="order-2 md:order-1 md:max-w-[529px] w-full">
              <h2
                className="font-medium text-[32px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-[#1E1E1E] leading-[40px] md:leading-[40px] lg:leading-[48px] xl:leading-[52px] mb-4">
                <div className="inline-block h-[47px] overflow-hidden"><span
                  className={"escape-paradise__main-text inline-block transform translate-y-[50px] " + (isScrollToEscapeParadise ? 'escape-paradise__main-text-animation' : '')}
                  style={{ '--animation-order': 1 }}>Escape to
                  paradise: discover</span></div>
                <div className="inline-block h-[47px] overflow-hidden"><span
                  className={"escape-paradise__main-text inline-block transform translate-y-[50px] " + (isScrollToEscapeParadise ? 'escape-paradise__main-text-animation' : '')}
                  style={{ '--animation-order': 2 }}>unforgettable
                  luxury at our</span></div>
                <div className="inline-block h-[47px] overflow-hidden"><span
                  className={"escape-paradise__main-text inline-block transform translate-y-[50px] " + (isScrollToEscapeParadise ? 'escape-paradise__main-text-animation' : '')}
                  style={{ '--animation-order': 3 }}>exquisite
                  travel hotel</span></div>
              </h2>
              <p className="font-medium text-[19px] md:text-[19px] lg:text-[21.48px] text-[#8A8A8A]">We provide hotels
                for your vacation to stay
                comfortable</p>
              <div
                className="flex items-center gap-x-[22px] md:gap-x-[25px] mt-[25px] md:mt-[29px] lg:mt-[32px] xl:mt-[35px]">
                <div
                  className="flex items-center gap-x-2.5 py-[5px] pl-[7px] pr-[19px] bg-[#E5F0F5] rounded-[10px]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="#1E1E1E" />
                    <path
                      d="M25 27H27V19H21V27H23V21H25V27ZM11 27V12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11H26C26.2652 11 26.5196 11.1054 26.7071 11.2929C26.8946 11.4804 27 11.7348 27 12V17H29V27H30V29H10V27H11ZM15 19V21H17V19H15ZM15 23V25H17V23H15ZM15 15V17H17V15H15Z"
                      fill="#EDEDED" />
                  </svg>
                  <span
                    className="font-medium text-base md:text-[18px] lg:text-[20px] text-[#1E1E1E]">Hotel</span>
                </div>
                <div
                  className="flex items-center gap-x-2.5 py-[5px] pl-[7px] pr-[19px] bg-[#E5F0F5] rounded-[10px]">
                  <svg width="40" height="41" viewBox="0 0 40 41" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect y="0.5" width="40" height="40" rx="10" fill="#1E1E1E" />
                    <mask id="mask0_16_613" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="9"
                      y="13" width="22" height="15">
                      <path d="M10 14.5V26.5M30 26.5V23H10" stroke="white" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M19 16.5V23H30V18C30 17.6022 29.842 17.2206 29.5607 16.9393C29.2794 16.658 28.8978 16.5 28.5 16.5H19Z"
                        fill="white" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round" />
                      <path
                        d="M14.5 20C15.3284 20 16 19.3284 16 18.5C16 17.6716 15.3284 17 14.5 17C13.6716 17 13 17.6716 13 18.5C13 19.3284 13.6716 20 14.5 20Z"
                        fill="white" stroke="white" strokeWidth="2" />
                    </mask>
                    <g mask="url(#mask0_16_613)">
                      <path d="M8 8.5H32V32.5H8V8.5Z" fill="#EDEDED" />
                    </g>
                  </svg>
                  <span className="font-medium text-base md:text-[18px] lg:text-[20px] text-[#1E1E1E]">Sleep
                    Room</span>
                </div>
              </div>
              <div
                className="flex items-center gap-x-[22px] md:gap-x-[25px] mt-[25px] md:mt-[29px] lg:mt-[32px] xl:mt-[55px]">
                <a href="/"
                  className="h-[45px] inline-flex items-center justify-center px-[13px] font-bold text-base text-[#EDEDED] rounded-[10px]"
                  style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>Book
                  a hotel now</a>
                <a href="/" className="h-[45px]" aria-label="Learn More">
                  <svg className="h-full" width="154" height="45" viewBox="0 0 154 45" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M44.2266 26.0469V28H36.9375V16.7266H39.2969V26.0469H44.2266ZM49.0625 21.1328C48.0625 21.1328 47.3438 21.8906 47.2656 22.9375H50.8203C50.7734 21.8672 50.0781 21.1328 49.0625 21.1328ZM50.8516 25.4375H52.9453C52.6953 27.0781 51.1953 28.1797 49.125 28.1797C46.5469 28.1797 45 26.5312 45 23.8516C45 21.1797 46.5625 19.4453 49.0391 19.4453C51.4766 19.4453 53.0156 21.0938 53.0156 23.6406V24.3359H47.2422V24.4766C47.2422 25.6719 48 26.4922 49.1641 26.4922C50 26.4922 50.6406 26.0781 50.8516 25.4375ZM57.4297 26.4844C58.4219 26.4844 59.2422 25.8359 59.2422 24.9297V24.3203L57.4766 24.4297C56.625 24.4922 56.1406 24.875 56.1406 25.4688C56.1406 26.0938 56.6562 26.4844 57.4297 26.4844ZM56.6797 28.1328C55.0859 28.1328 53.875 27.1016 53.875 25.5938C53.875 24.0703 55.0469 23.1875 57.1328 23.0625L59.2422 22.9375V22.3828C59.2422 21.6016 58.6953 21.1484 57.8359 21.1484C56.9844 21.1484 56.4453 21.5703 56.3359 22.1875H54.25C54.3359 20.5625 55.7188 19.4453 57.9375 19.4453C60.0859 19.4453 61.4844 20.5547 61.4844 22.2422V28H59.2812V26.7188H59.2344C58.7656 27.6094 57.7266 28.1328 56.6797 28.1328ZM62.9609 28V19.625H65.1641V21.1328H65.2109C65.5078 20.0703 66.2188 19.4922 67.2031 19.4922C67.4688 19.4922 67.6953 19.5312 67.8516 19.5781V21.5859C67.6641 21.5078 67.3516 21.4531 67.0234 21.4531C65.8984 21.4531 65.2422 22.1406 65.2422 23.3203V28H62.9609ZM68.7891 28V19.625H70.9922V21.1172H71.0391C71.4844 20.0781 72.3672 19.4688 73.6562 19.4688C75.5156 19.4688 76.5625 20.6406 76.5625 22.6016V28H74.2812V23.0781C74.2812 21.9844 73.7656 21.3594 72.7422 21.3594C71.7188 21.3594 71.0703 22.1094 71.0703 23.1953V28H68.7891ZM81.1797 28V19.625H83.3828V21.1406H83.4297C83.7812 20.1328 84.6797 19.4688 85.8203 19.4688C87.0312 19.4688 87.875 20.0938 88.1562 21.1875H88.2031C88.5781 20.1328 89.5781 19.4688 90.8047 19.4688C92.4453 19.4688 93.5469 20.5938 93.5469 22.2812V28H91.2656V22.8516C91.2656 21.8828 90.7812 21.3516 89.8984 21.3516C89.0312 21.3516 88.4609 21.9844 88.4609 22.9141V28H86.2656V22.7812C86.2656 21.8828 85.7578 21.3516 84.9141 21.3516C84.0469 21.3516 83.4609 22.0078 83.4609 22.9453V28H81.1797ZM98.8359 28.1797C96.3047 28.1797 94.6875 26.5547 94.6875 23.8047C94.6875 21.0938 96.3281 19.4453 98.8359 19.4453C101.344 19.4453 102.984 21.0859 102.984 23.8047C102.984 26.5625 101.367 28.1797 98.8359 28.1797ZM98.8359 26.4375C99.9531 26.4375 100.664 25.4922 100.664 23.8125C100.664 22.1484 99.9453 21.1875 98.8359 21.1875C97.7266 21.1875 97 22.1484 97 23.8125C97 25.4922 97.7109 26.4375 98.8359 26.4375ZM104.164 28V19.625H106.367V21.1328H106.414C106.711 20.0703 107.422 19.4922 108.406 19.4922C108.672 19.4922 108.898 19.5312 109.055 19.5781V21.5859C108.867 21.5078 108.555 21.4531 108.227 21.4531C107.102 21.4531 106.445 22.1406 106.445 23.3203V28H104.164ZM113.469 21.1328C112.469 21.1328 111.75 21.8906 111.672 22.9375H115.227C115.18 21.8672 114.484 21.1328 113.469 21.1328ZM115.258 25.4375H117.352C117.102 27.0781 115.602 28.1797 113.531 28.1797C110.953 28.1797 109.406 26.5312 109.406 23.8516C109.406 21.1797 110.969 19.4453 113.445 19.4453C115.883 19.4453 117.422 21.0938 117.422 23.6406V24.3359H111.648V24.4766C111.648 25.6719 112.406 26.4922 113.57 26.4922C114.406 26.4922 115.047 26.0781 115.258 25.4375Z"
                      fill="url(#paint0_linear_12_310)" />
                    <rect x="1" y="1" width="152" height="43" rx="9" stroke="url(#paint1_linear_12_310)"
                      strokeWidth="2" />
                    <defs>
                      <linearGradient id="paint0_linear_12_310" x1="77" y1="-8.32222" x2="77" y2="50.3667"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                      <linearGradient id="paint1_linear_12_310" x1="77" y1="-50.5" x2="77" y2="88.5"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- ESCAPE PARADISE RIGHT --> */}
            <div className="order-1 md:order-2 md:max-w-[400px] w-full relative mb-8 md:mb-0">
              <Image className="w-full object-cover rounded-[20px]" src="/images/escape.webp" height="400"
                width="400" alt="Escape to paradise" />
              {/* <!-- BOX BOTTOM --> */}
              <div
                className="flex items-center gap-x-[15px] absolute right-2 md:right-4 lg:right-6 bottom-6 p-[10px] md:p-[11px] lg:p-[13px] bg-white rounded-[18px]">
                <div className="flex items-center relative">
                  <Image className="escape-paradise__image-slide h-[34px] w-[34px] md:h-[40px] md:w-[40px] lg:h-[42px] lg:w-[42px] rounded-full relative left-0 z-[1]" style={{ left: isScrollToEscapeParadise ? '0px' : '' }}
                    height="42" width="42" src="/images/escape-user-1.png" alt="User 1" />
                  <Image className="escape-paradise__image-slide h-[34px] w-[34px] md:h-[40px] md:w-[40px] lg:h-[42px] lg:w-[42px] rounded-full relative -left-[8px] z-[2]" style={{ left: isScrollToEscapeParadise ? '0px' : '' }}
                    height="42" width="42" src="/images/escape-user-2.png" alt="User 2" />
                  <Image className="escape-paradise__image-slide h-[34px] w-[34px] md:h-[40px] md:w-[40px] lg:h-[42px] lg:w-[42px] rounded-full relative -left-[18px] z-[3]" style={{ left: isScrollToEscapeParadise ? '0px' : '' }}
                    height="42" width="42" src="/images/escape-user-3.png" alt="User 3" />
                  <Image className="escape-paradise__image-slide h-[34px] w-[34px] md:h-[40px] md:w-[40px] lg:h-[42px] lg:w-[42px] rounded-full relative -left-[28px] z-[4]" style={{ left: isScrollToEscapeParadise ? '0px' : '' }}
                    height="42" width="42" src="/images/escape-user-4.png" alt="User 4" />
                  <Image className="escape-paradise__image-slide h-[34px] w-[34px] md:h-[40px] md:w-[40px] lg:h-[42px] lg:w-[42px] rounded-full relative -left-[38px] z-[5]" style={{ left: isScrollToEscapeParadise ? '0px' : '' }}
                    height="42" width="42" src="/images/escape-user-plus.png" alt="User 1" />
                </div>
                <div className="h-[42px] w-px bg-[#E5F0F5]"></div>
                <div className="flex items-center gap-x-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12001 19.64 9.05001L14.81 8.64001L12.92 4.18001C12.58 3.37001 11.42 3.37001 11.08 4.18001L9.19001 8.63001L4.36001 9.04001C3.48001 9.11001 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27Z"
                      fill="#FFB800" />
                  </svg>
                  <span className="font-medium text-[20px] text-[#1E1E1E]">4.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main id='booking'>
        <div className="container-travelers pb-[90px] md:pb-[100px] lg:pb-[120px] px-5 md:px-5 lg:px-0">
          <div className="flex flex-wrap lg:flex-nowrap items-start justify-between">
            {/* <!-- BOOKING TRAVEL LEFT --> */}
            <div className="md:max-w-[203px] w-full flex flex-wrap items-start">
              <article className="md:mb-10 w-1/2 md:w-full">
                <h2
                  className="font-medium text-[32px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-[#1E1E1E] mb-[10px] md:mb-[13px]">
                  Book travel</h2>
                <h3 className="font-medium text-base md:text-base lg:text-lg text-[#8A8A8A]">We provide the best
                  travel services for you</h3>
                <a href="/" className="flex items-center gap-x-[23px] mt-[18px] md:mt-[22px] lg:mt-[28px]">
                  <span className="font-medium text-lg md:text-lg lg:text-2xl bg-clip-text fill-transparent"
                    style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>Details</span>
                  <svg className="h-[32px] md:h-[32px] lg:h-[36px] xl:h-[40px] w-[32px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                    width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="url(#paint0_linear_16_692)" />
                    <path
                      d="M25.92 19.6199C25.8724 19.4972 25.801 19.385 25.71 19.2899L20.71 14.2899C20.6168 14.1967 20.5061 14.1227 20.3842 14.0723C20.2624 14.0218 20.1319 13.9958 20 13.9958C19.7337 13.9958 19.4783 14.1016 19.29 14.2899C19.1968 14.3832 19.1228 14.4939 19.0723 14.6157C19.0219 14.7375 18.9959 14.8681 18.9959 14.9999C18.9959 15.2662 19.1017 15.5216 19.29 15.7099L22.59 18.9999H15C14.7348 18.9999 14.4804 19.1053 14.2929 19.2928C14.1054 19.4804 14 19.7347 14 19.9999C14 20.2652 14.1054 20.5195 14.2929 20.707C14.4804 20.8946 14.7348 20.9999 15 20.9999H22.59L19.29 24.2899C19.1963 24.3829 19.1219 24.4935 19.0711 24.6154C19.0203 24.7372 18.9942 24.8679 18.9942 24.9999C18.9942 25.132 19.0203 25.2627 19.0711 25.3845C19.1219 25.5064 19.1963 25.617 19.29 25.7099C19.383 25.8037 19.4936 25.8781 19.6154 25.9288C19.7373 25.9796 19.868 26.0057 20 26.0057C20.132 26.0057 20.2627 25.9796 20.3846 25.9288C20.5064 25.8781 20.617 25.8037 20.71 25.7099L25.71 20.7099C25.801 20.6148 25.8724 20.5027 25.92 20.3799C26.02 20.1365 26.02 19.8634 25.92 19.6199Z"
                      fill="#EDEDED" />
                    <defs>
                      <linearGradient id="paint0_linear_16_692" x1="20" y1="-44.8889" x2="20" y2="78.6667"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </article>
              <article className="w-1/2 md:w-full">
                <h2
                  className="font-medium text-[32px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-[#1E1E1E] mb-[10px] md:mb-[13px]">
                  Book hotel</h2>
                <h3 className="font-medium text-base md:text-base lg:text-lg text-[#8A8A8A]">We provide hotel
                  services for you to rest</h3>
                <a href="/" className="flex items-center gap-x-[23px] mt-[18px] md:mt-[22px] lg:mt-[28px]">
                  <span className="font-medium text-lg md:text-lg lg:text-2xl bg-clip-text fill-transparent"
                    style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>Details</span>
                  <svg className="h-[32px] md:h-[32px] lg:h-[36px] xl:h-[40px] w-[32px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                    width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="url(#paint0_linear_16_692)" />
                    <path
                      d="M25.92 19.6199C25.8724 19.4972 25.801 19.385 25.71 19.2899L20.71 14.2899C20.6168 14.1967 20.5061 14.1227 20.3842 14.0723C20.2624 14.0218 20.1319 13.9958 20 13.9958C19.7337 13.9958 19.4783 14.1016 19.29 14.2899C19.1968 14.3832 19.1228 14.4939 19.0723 14.6157C19.0219 14.7375 18.9959 14.8681 18.9959 14.9999C18.9959 15.2662 19.1017 15.5216 19.29 15.7099L22.59 18.9999H15C14.7348 18.9999 14.4804 19.1053 14.2929 19.2928C14.1054 19.4804 14 19.7347 14 19.9999C14 20.2652 14.1054 20.5195 14.2929 20.707C14.4804 20.8946 14.7348 20.9999 15 20.9999H22.59L19.29 24.2899C19.1963 24.3829 19.1219 24.4935 19.0711 24.6154C19.0203 24.7372 18.9942 24.8679 18.9942 24.9999C18.9942 25.132 19.0203 25.2627 19.0711 25.3845C19.1219 25.5064 19.1963 25.617 19.29 25.7099C19.383 25.8037 19.4936 25.8781 19.6154 25.9288C19.7373 25.9796 19.868 26.0057 20 26.0057C20.132 26.0057 20.2627 25.9796 20.3846 25.9288C20.5064 25.8781 20.617 25.8037 20.71 25.7099L25.71 20.7099C25.801 20.6148 25.8724 20.5027 25.92 20.3799C26.02 20.1365 26.02 19.8634 25.92 19.6199Z"
                      fill="#EDEDED" />
                    <defs>
                      <linearGradient id="paint0_linear_16_692" x1="20" y1="-44.8889" x2="20" y2="78.6667"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </article>
            </div>
            {/* <!-- BOOKING TRAVEL IMAGE CENTER --> */}
            <div className="max-w-[553px] w-full relative my-12 md:my-0">
              <Image className="mx-auto max-w-[460px] w-full h-auto rounded-[20px]"
                src="/images/book-travel.webp" height="423" width="460" alt="Book Travel" />
              <div className="w-full flex items-center justify-between absolute bottom-5">
                <div>
                  <div className="booking__label w-[140px] md:w-[182px] flex items-center gap-x-2 md:gap-x-2 lg:gap-x-2.5 py-[5px] pl-[7px] pr-[19px] bg-[#E5F0F5] rounded-[10px] mb-[13px]">
                    <svg className="h-[32px] md:h-[32px] lg:h-[36px] xl:h-[40px] w-[32px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                      width="40" height="40" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="10" fill="#1E1E1E" />
                      <path
                        d="M11.414 21.7779L10 23.1919L14.949 25.3129L17.071 30.2629L18.485 28.8489L17.778 25.3129L21.091 21.9999L24.701 29.7039L26.04 28.3649L24.85 18.2419L27.678 15.4129C27.869 15.2284 28.0214 15.0078 28.1262 14.7638C28.231 14.5197 28.2862 14.2573 28.2885 13.9917C28.2908 13.7262 28.2402 13.4628 28.1396 13.217C28.0391 12.9712 27.8906 12.7479 27.7028 12.5602C27.515 12.3724 27.2917 12.2239 27.0459 12.1233C26.8001 12.0227 26.5368 11.9721 26.2712 11.9744C26.0056 11.9767 25.7432 12.0319 25.4992 12.1367C25.2552 12.2416 25.0345 12.3939 24.85 12.5849L21.947 15.4879L11.824 14.2969L10.559 15.5629L18.203 19.2329L14.95 22.4859L11.414 21.7779Z"
                        fill="#EDEDED" />
                    </svg>
                    <span
                      className="font-medium text-[13px] md:text-[16px] lg:text-[20px] text-[#1E1E1E]">Destinations</span>
                  </div>
                  <div className="booking__label w-[140px] md:w-[182px] flex items-center gap-x-2 md:gap-x-2 lg:gap-x-2.5 py-[5px] pl-[7px] pr-[19px] bg-[#E5F0F5] rounded-[10px]">
                    <svg className="h-[32px] md:h-[32px] lg:h-[36px] xl:h-[40px] w-[32px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                      width="40" height="40" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="10" fill="#1E1E1E" />
                      <path
                        d="M15.75 12C15.75 11.8011 15.671 11.6103 15.5303 11.4697C15.3897 11.329 15.1989 11.25 15 11.25C14.8011 11.25 14.6103 11.329 14.4697 11.4697C14.329 11.6103 14.25 11.8011 14.25 12V13.816C13.5205 13.9195 12.8448 14.2588 12.3262 14.7823C11.8077 15.3057 11.4746 15.9845 11.378 16.715L11.291 17.368C11.276 17.478 11.262 17.589 11.249 17.7C11.2409 17.7693 11.2477 17.8395 11.2687 17.906C11.2898 17.9725 11.3248 18.0337 11.3713 18.0857C11.4178 18.1377 11.4748 18.1792 11.5385 18.2075C11.6022 18.2358 11.6713 18.2503 11.741 18.25H28.26C28.3298 18.2503 28.3988 18.2358 28.4625 18.2075C28.5263 18.1792 28.5833 18.1377 28.6298 18.0857C28.6763 18.0337 28.7112 17.9725 28.7323 17.906C28.7533 17.8395 28.7601 17.7693 28.752 17.7C28.738 17.59 28.725 17.478 28.71 17.368L28.623 16.715C28.5264 15.9845 28.1934 15.3057 27.6748 14.7823C27.1562 14.2588 26.4806 13.9195 25.751 13.816V12C25.751 11.8011 25.672 11.6103 25.5313 11.4697C25.3907 11.329 25.1999 11.25 25.001 11.25C24.8021 11.25 24.6113 11.329 24.4707 11.4697C24.33 11.6103 24.251 11.8011 24.251 12V13.668C21.4233 13.4162 18.5787 13.4162 15.751 13.668L15.75 12ZM28.945 20.226C28.9403 20.0978 28.886 19.9764 28.7934 19.8876C28.7008 19.7987 28.5773 19.7494 28.449 19.75H11.551C11.4227 19.7494 11.2992 19.7987 11.2066 19.8876C11.1141 19.9764 11.0597 20.0978 11.055 20.226C10.9954 22.0357 11.1059 23.847 11.385 25.636C11.4877 26.2951 11.8065 26.9015 12.2912 27.3598C12.7759 27.8181 13.3992 28.1024 14.063 28.168L15.256 28.286C18.411 28.596 21.589 28.596 24.744 28.286L25.937 28.168C26.6009 28.1024 27.2241 27.8181 27.7088 27.3598C28.1936 26.9015 28.5123 26.2951 28.615 25.636C28.8937 23.8469 29.0042 22.0357 28.945 20.226Z"
                        fill="#EDEDED" />
                    </svg>
                    <span
                      className="font-medium text-[13px] md:text-[16px] lg:text-[20px] text-[#1E1E1E]">Date</span>
                  </div>
                </div>
                <div>
                  <div className="booking__label w-[140px] md:w-[182px] flex items-center gap-x-2 md:gap-x-2 lg:gap-x-2.5 py-[5px] pl-[7px] pr-[19px] bg-[#E5F0F5] rounded-[10px] mb-[13px]">
                    <svg className="h-[32px] md:h-[32px] lg:h-[36px] xl:h-[40px] w-[32px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                      width="40" height="40" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="10" fill="#1E1E1E" />
                      <g clipPath="url(#clip0_16_859)">
                        <path
                          d="M20 10C22.3869 10 24.6761 10.9482 26.364 12.636C28.0518 14.3239 29 16.6131 29 19C29 22.074 27.324 24.59 25.558 26.395C24.6755 27.2869 23.7128 28.0956 22.682 28.811L22.256 29.101L22.056 29.234L21.679 29.474L21.343 29.679L20.927 29.921C20.6445 30.0818 20.325 30.1663 20 30.1663C19.675 30.1663 19.3555 30.0818 19.073 29.921L18.657 29.679L18.137 29.359L17.945 29.234L17.535 28.961C16.423 28.2083 15.3871 27.3489 14.442 26.395C12.676 24.588 11 22.074 11 19C11 16.6131 11.9482 14.3239 13.636 12.636C15.3239 10.9482 17.6131 10 20 10ZM20 16C19.606 16 19.2159 16.0776 18.8519 16.2284C18.488 16.3791 18.1573 16.6001 17.8787 16.8787C17.6001 17.1573 17.3791 17.488 17.2284 17.8519C17.0776 18.2159 17 18.606 17 19C17 19.394 17.0776 19.7841 17.2284 20.1481C17.3791 20.512 17.6001 20.8427 17.8787 21.1213C18.1573 21.3999 18.488 21.6209 18.8519 21.7716C19.2159 21.9224 19.606 22 20 22C20.7956 22 21.5587 21.6839 22.1213 21.1213C22.6839 20.5587 23 19.7956 23 19C23 18.2044 22.6839 17.4413 22.1213 16.8787C21.5587 16.3161 20.7956 16 20 16Z"
                          fill="#EDEDED" />
                      </g>
                      <defs>
                        <clipPath id="clip0_16_859">
                          <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span
                      className="font-medium text-[13px] md:text-[16px] lg:text-[20px] text-[#1E1E1E]">Location</span>
                  </div>
                  <div className="booking__label w-[140px] md:w-[182px] flex items-center gap-x-2 md:gap-x-2 lg:gap-x-2.5 py-[5px] pl-[7px] pr-[19px] bg-[#E5F0F5] rounded-[10px]"
                  >
                    <svg className="h-[32px] md:h-[32px] lg:h-[36px] xl:h-[40px] w-[32px] md:w-[32px] lg:w-[36px] xl:w-[40px]"
                      width="40" height="40" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="10" fill="#1E1E1E" />
                      <path
                        d="M19.25 30.5V28.7928C15.5248 28.5781 13.2617 26.6591 13.25 23.75H16.625C16.708 24.9847 17.7434 25.9273 19.25 26.0938V21.5L17.9952 21.1719C15.1358 20.5072 13.6058 18.8567 13.6058 16.3869C13.6058 13.4755 15.6913 11.5663 19.25 11.2812V9.5H20.75V11.2812C24.3777 11.5766 26.3281 13.5191 26.375 16.25H23C22.9644 15.1222 22.258 14.2161 20.75 14.0938V18.4062L22.1947 18.7475C25.2317 19.4122 26.75 20.9844 26.75 23.5625C26.75 26.5784 24.6997 28.5256 20.75 28.7806V30.5H19.25ZM19.25 18.125V14.0938C17.9567 14.165 17.0342 14.9595 17.0342 16.0873C17.0342 17.1327 17.8025 17.8161 19.25 18.125ZM20.75 21.7812V26.0938C22.5383 26.0216 23.3928 25.2069 23.3928 23.9483C23.3928 22.7961 22.5383 22.0203 20.75 21.7812Z"
                        fill="#EDEDED" />
                    </svg>
                    <span
                      className="font-medium text-[13px] md:text-[16px] lg:text-[20px] text-[#1E1E1E]">Prices</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- BOOKING TRAVEL RIGHT --> */}
            <div className="md:max-w-[203px] w-full flex flex-wrap items-start">
              <article className="md:mb-10 w-1/2 md:w-full">
                <h2
                  className="font-medium text-[32px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-[#1E1E1E] mb-[10px] md:mb-[13px]">
                  Book car</h2>
                <h3 className="font-medium text-base md:text-base lg:text-lg text-[#8A8A8A]">We provide car service
                  for your trip</h3>
                <a href="/" className="flex items-center gap-x-[23px] mt-[18px] md:mt-[22px] lg:mt-[28px]">
                  <span className="font-medium text-lg md:text-lg lg:text-2xl bg-clip-text fill-transparent"
                    style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>Details</span>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="url(#paint0_linear_16_692)" />
                    <path
                      d="M25.92 19.6199C25.8724 19.4972 25.801 19.385 25.71 19.2899L20.71 14.2899C20.6168 14.1967 20.5061 14.1227 20.3842 14.0723C20.2624 14.0218 20.1319 13.9958 20 13.9958C19.7337 13.9958 19.4783 14.1016 19.29 14.2899C19.1968 14.3832 19.1228 14.4939 19.0723 14.6157C19.0219 14.7375 18.9959 14.8681 18.9959 14.9999C18.9959 15.2662 19.1017 15.5216 19.29 15.7099L22.59 18.9999H15C14.7348 18.9999 14.4804 19.1053 14.2929 19.2928C14.1054 19.4804 14 19.7347 14 19.9999C14 20.2652 14.1054 20.5195 14.2929 20.707C14.4804 20.8946 14.7348 20.9999 15 20.9999H22.59L19.29 24.2899C19.1963 24.3829 19.1219 24.4935 19.0711 24.6154C19.0203 24.7372 18.9942 24.8679 18.9942 24.9999C18.9942 25.132 19.0203 25.2627 19.0711 25.3845C19.1219 25.5064 19.1963 25.617 19.29 25.7099C19.383 25.8037 19.4936 25.8781 19.6154 25.9288C19.7373 25.9796 19.868 26.0057 20 26.0057C20.132 26.0057 20.2627 25.9796 20.3846 25.9288C20.5064 25.8781 20.617 25.8037 20.71 25.7099L25.71 20.7099C25.801 20.6148 25.8724 20.5027 25.92 20.3799C26.02 20.1365 26.02 19.8634 25.92 19.6199Z"
                      fill="#EDEDED" />
                    <defs>
                      <linearGradient id="paint0_linear_16_692" x1="20" y1="-44.8889" x2="20" y2="78.6667"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </article>
              <article className="w-1/2 md:w-full">
                <h2
                  className="font-medium text-[32px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-[#1E1E1E] mb-[10px] md:mb-[13px]">
                  Others</h2>
                <h3 className="font-medium text-base md:text-base lg:text-lg text-[#8A8A8A]">We provide various
                  other services</h3>
                <a href="/" className="flex items-center gap-x-[23px] mt-[18px] md:mt-[22px] lg:mt-[28px]">
                  <span className="font-medium text-lg md:text-lg lg:text-2xl bg-clip-text fill-transparent"
                    style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>Details</span>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="20" fill="url(#paint0_linear_16_692)" />
                    <path
                      d="M25.92 19.6199C25.8724 19.4972 25.801 19.385 25.71 19.2899L20.71 14.2899C20.6168 14.1967 20.5061 14.1227 20.3842 14.0723C20.2624 14.0218 20.1319 13.9958 20 13.9958C19.7337 13.9958 19.4783 14.1016 19.29 14.2899C19.1968 14.3832 19.1228 14.4939 19.0723 14.6157C19.0219 14.7375 18.9959 14.8681 18.9959 14.9999C18.9959 15.2662 19.1017 15.5216 19.29 15.7099L22.59 18.9999H15C14.7348 18.9999 14.4804 19.1053 14.2929 19.2928C14.1054 19.4804 14 19.7347 14 19.9999C14 20.2652 14.1054 20.5195 14.2929 20.707C14.4804 20.8946 14.7348 20.9999 15 20.9999H22.59L19.29 24.2899C19.1963 24.3829 19.1219 24.4935 19.0711 24.6154C19.0203 24.7372 18.9942 24.8679 18.9942 24.9999C18.9942 25.132 19.0203 25.2627 19.0711 25.3845C19.1219 25.5064 19.1963 25.617 19.29 25.7099C19.383 25.8037 19.4936 25.8781 19.6154 25.9288C19.7373 25.9796 19.868 26.0057 20 26.0057C20.132 26.0057 20.2627 25.9796 20.3846 25.9288C20.5064 25.8781 20.617 25.8037 20.71 25.7099L25.71 20.7099C25.801 20.6148 25.8724 20.5027 25.92 20.3799C26.02 20.1365 26.02 19.8634 25.92 19.6199Z"
                      fill="#EDEDED" />
                    <defs>
                      <linearGradient id="paint0_linear_16_692" x1="20" y1="-44.8889" x2="20" y2="78.6667"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0077ED" />
                        <stop offset="1" stopColor="#7BF9D3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </a>
              </article>
            </div>
          </div>
        </div>
      </main>
      <section id='reviews'>
        <div className="container-travelers pb-[90px] md:pb-[100px] lg:pb-[120px] px-5 md:px-5 lg:px-0">
          <div className="flex flex-wrap items-start justify-between">
            {/* <!-- REVIEWS: LEFT --> */}
            <div className="w-full md:max-w-[449px]">
              <div className="relative">
                <div className="border-8 border-[#E5F0F5] rounded-full">
                  <Image className="rounded-full object-cover w-full max-w-[449px]"
                    src="/images/reviews-1.webp" height="449" width="449" alt="Ruhi Bors" />
                </div>
                <Image className="absolute top-10 left-0 z-10" src="/svgs/reviews-emoticon.svg" height="65"
                  width="65" alt="Emoticon" />
                <Image className="absolute bottom-16 right-0 z-10" src="/svgs/reviews-like.svg" height="65"
                  width="65" alt="Like" />
              </div>
            </div>
            {/* <!-- REVIEWS: RIGHT --> */}
            <div className="w-full md:max-w-[460px] mt-8 md:mt-0">
              <h2 className="font-medium text-[36px] md:text-[34px] lg:text-[40px] text-[#1E1E1E] mb-6 md:mb-10">
                Reviews</h2>
              <h3 className="font-medium text-xl md:text-lg lg:text-2xl text-[#8A8A8A] mb-6 md:mb-10">“From the moment
                I discovered (Adventures
                Unlimited,) I knew I had stumbled upon a gem in the travel industry. ”</h3>
              {/* <!-- STARS --> */}
              <div className="flex items-center gap-x-2 mb-6 md:mb-10">
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.1033 1.31663C11.4701 0.573463 12.5299 0.573462 12.8967 1.31663L15.6301 6.85409C15.7756 7.14894 16.0568 7.3534 16.3821 7.40095L22.4962 8.29462C23.3161 8.41446 23.6429 9.4223 23.0493 10.0005L18.6268 14.308C18.3909 14.5378 18.2833 14.8689 18.3389 15.1934L19.3824 21.2776C19.5225 22.0946 18.665 22.7176 17.9314 22.3317L12.4655 19.4573C12.1741 19.304 11.8259 19.304 11.5345 19.4573L6.06863 22.3317C5.335 22.7176 4.47745 22.0946 4.61757 21.2776L5.66109 15.1934C5.71675 14.8689 5.60908 14.5377 5.37321 14.308L0.950678 10.0005C0.357085 9.4223 0.683869 8.41446 1.50378 8.29462L7.61787 7.40095C7.94322 7.3534 8.22441 7.14894 8.36994 6.85409L11.1033 1.31663Z"
                    fill="#FFB800" />
                </svg>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.1033 1.31663C11.4701 0.573463 12.5299 0.573462 12.8967 1.31663L15.6301 6.85409C15.7756 7.14894 16.0568 7.3534 16.3821 7.40095L22.4962 8.29462C23.3161 8.41446 23.6429 9.4223 23.0493 10.0005L18.6268 14.308C18.3909 14.5378 18.2833 14.8689 18.3389 15.1934L19.3824 21.2776C19.5225 22.0946 18.665 22.7176 17.9314 22.3317L12.4655 19.4573C12.1741 19.304 11.8259 19.304 11.5345 19.4573L6.06863 22.3317C5.335 22.7176 4.47745 22.0946 4.61757 21.2776L5.66109 15.1934C5.71675 14.8689 5.60908 14.5377 5.37321 14.308L0.950678 10.0005C0.357085 9.4223 0.683869 8.41446 1.50378 8.29462L7.61787 7.40095C7.94322 7.3534 8.22441 7.14894 8.36994 6.85409L11.1033 1.31663Z"
                    fill="#FFB800" />
                </svg>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.1033 1.31663C11.4701 0.573463 12.5299 0.573462 12.8967 1.31663L15.6301 6.85409C15.7756 7.14894 16.0568 7.3534 16.3821 7.40095L22.4962 8.29462C23.3161 8.41446 23.6429 9.4223 23.0493 10.0005L18.6268 14.308C18.3909 14.5378 18.2833 14.8689 18.3389 15.1934L19.3824 21.2776C19.5225 22.0946 18.665 22.7176 17.9314 22.3317L12.4655 19.4573C12.1741 19.304 11.8259 19.304 11.5345 19.4573L6.06863 22.3317C5.335 22.7176 4.47745 22.0946 4.61757 21.2776L5.66109 15.1934C5.71675 14.8689 5.60908 14.5377 5.37321 14.308L0.950678 10.0005C0.357085 9.4223 0.683869 8.41446 1.50378 8.29462L7.61787 7.40095C7.94322 7.3534 8.22441 7.14894 8.36994 6.85409L11.1033 1.31663Z"
                    fill="#FFB800" />
                </svg>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.1033 1.31663C11.4701 0.573463 12.5299 0.573462 12.8967 1.31663L15.6301 6.85409C15.7756 7.14894 16.0568 7.3534 16.3821 7.40095L22.4962 8.29462C23.3161 8.41446 23.6429 9.4223 23.0493 10.0005L18.6268 14.308C18.3909 14.5378 18.2833 14.8689 18.3389 15.1934L19.3824 21.2776C19.5225 22.0946 18.665 22.7176 17.9314 22.3317L12.4655 19.4573C12.1741 19.304 11.8259 19.304 11.5345 19.4573L6.06863 22.3317C5.335 22.7176 4.47745 22.0946 4.61757 21.2776L5.66109 15.1934C5.71675 14.8689 5.60908 14.5377 5.37321 14.308L0.950678 10.0005C0.357085 9.4223 0.683869 8.41446 1.50378 8.29462L7.61787 7.40095C7.94322 7.3534 8.22441 7.14894 8.36994 6.85409L11.1033 1.31663Z"
                    fill="#FFB800" />
                </svg>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.1033 1.31663C11.4701 0.573463 12.5299 0.573462 12.8967 1.31663L15.6301 6.85409C15.7756 7.14894 16.0568 7.3534 16.3821 7.40095L22.4962 8.29462C23.3161 8.41446 23.6429 9.4223 23.0493 10.0005L18.6268 14.308C18.3909 14.5378 18.2833 14.8689 18.3389 15.1934L19.3824 21.2776C19.5225 22.0946 18.665 22.7176 17.9314 22.3317L12.4655 19.4573C12.1741 19.304 11.8259 19.304 11.5345 19.4573L6.06863 22.3317C5.335 22.7176 4.47745 22.0946 4.61757 21.2776L5.66109 15.1934C5.71675 14.8689 5.60908 14.5377 5.37321 14.308L0.950678 10.0005C0.357085 9.4223 0.683869 8.41446 1.50378 8.29462L7.61787 7.40095C7.94322 7.3534 8.22441 7.14894 8.36994 6.85409L11.1033 1.31663Z"
                    fill="#FFB800" />
                </svg>
              </div>
              {/* <!-- USERS --> */}
              <div className="flex items-center gap-x-5 md:gap-x-6 lg:gap-x-10">
                <div>
                  <div className="mb-3.5 md:mb-5">
                    <Image className="w-[80px] md:w-[90px] lg:h-[100px] w-[72px] md:w-[80px] lg:w-[100px] object-cover rounded-full border-4 border-[#E5F0F5]"
                      src="/images/reviews-1.webp" height="100" width="100" alt="Ruhi Bors" />
                  </div>
                  <h4 className="font-medium text-lg md:text-lg lg:text-2xl text-[#1E1E1E]">Ruhi Bors</h4>
                </div>
                <div>
                  <div className="mb-3.5 md:mb-5">
                    <Image className="w-[80px] md:w-[90px] lg:h-[100px] w-[72px] md:w-[80px] lg:w-[100px] object-cover rounded-full border-4 border-[#E5F0F5]"
                      src="/images/reviews-2.webp" height="100" width="100" alt="Jean Arch" />
                  </div>
                  <h4 className="font-medium text-lg md:text-lg lg:text-2xl text-[#1E1E1E]">Jean Arch</h4>
                </div>
                <div>
                  <div className="mb-3.5 md:mb-5">
                    <Image className="w-[80px] md:w-[90px] lg:h-[100px] w-[72px] md:w-[80px] lg:w-[100px] object-cover rounded-full border-4 border-[#E5F0F5]"
                      src="/images/reviews-3.webp" height="100" width="100" alt="Dimitri Mean" />
                  </div>
                  <h4 className="font-medium text-lg md:text-lg lg:text-2xl text-[#1E1E1E]">Dimitri Mean</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='notification' ref={notificationRef}>
        <div className="container-travelers pb-[90px] md:pb-[100px] lg:pb-[120px] px-5 md:px-5 lg:px-0">
          <div id="notification-background"
            className="flex items-center justify-center bg-cover bg-center h-[380px] md:h-[420px] lg:h-[450px] rounded-[20px]"
            style={{ backgroundImage: "url('/images/notifications.webp')" }}>
            <div className="text-center">
              {/* <!-- TEXT IN HERE --> */}
              <div className="h-[100px] md:h-[55px] overflow-hidden">
                <h2
                  className="notification__main-text transform translate-y-[105px] md:translate-y-[60px] font-medium text-[32px] md:text-[36px] lg:text-[40px] text-white leading-[40px] md:leading-[48px] lg:leading-[52px] mb-[14px] md:mb-[18px]" style={{ transform: isScrollToNotification ? 'translateY(0px)' : '' }}>
                  Get up to date<br className="block md:hidden" /> notifications
                  from us</h2>
              </div>
              <div className="h-[30px] overflow-hidden">
                <p
                  className="notification__secondary-text transform translate-y-[80px] font-medium text-white text-[18px]" style={{ transform: isScrollToNotification ? 'translateY(0px)' : '' }}>
                  Subscribe now for free!</p>
              </div>
              {/* <!-- FORM --> */}
              <form method="POST"
                className="h-[50px] w-[276px] max-w-full relative mt-[34px] md:mt-[48px] lg:mt-[55px] mx-auto">
                <input
                  className="h-full w-full rounded-[10px] bg-white text-base :placeholde-[#8A8A8A] text-[#1E1E1E] focus:outline-none pl-4 pr-[50px]"
                  type="text" name="email" id="email" placeholder="Your email address" />
                <button type="button" aria-label="Subscribe"
                  className="h-[50px] w-[50px] flex items-center justify-center rounded-[10px] absolute right-0 top-0"
                  style={{ background: "linear-gradient(180deg, #0077ED -112.22%, #7BF9D3 196.67%)" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M17.92 11.6199C17.8724 11.4972 17.801 11.385 17.71 11.2899L12.71 6.28994C12.6168 6.1967 12.5061 6.12274 12.3842 6.07228C12.2624 6.02182 12.1319 5.99585 12 5.99585C11.7337 5.99585 11.4783 6.10164 11.29 6.28994C11.1968 6.38318 11.1228 6.49387 11.0723 6.61569C11.0219 6.73751 10.9959 6.86808 10.9959 6.99994C10.9959 7.26624 11.1017 7.52164 11.29 7.70994L14.59 10.9999H7C6.73478 10.9999 6.48043 11.1053 6.29289 11.2928C6.10536 11.4804 6 11.7347 6 11.9999C6 12.2652 6.10536 12.5195 6.29289 12.707C6.48043 12.8946 6.73478 12.9999 7 12.9999H14.59L11.29 16.2899C11.1963 16.3829 11.1219 16.4935 11.0711 16.6154C11.0203 16.7372 10.9942 16.8679 10.9942 16.9999C10.9942 17.132 11.0203 17.2627 11.0711 17.3845C11.1219 17.5064 11.1963 17.617 11.29 17.7099C11.383 17.8037 11.4936 17.8781 11.6154 17.9288C11.7373 17.9796 11.868 18.0057 12 18.0057C12.132 18.0057 12.2627 17.9796 12.3846 17.9288C12.5064 17.8781 12.617 17.8037 12.71 17.7099L17.71 12.7099C17.801 12.6148 17.8724 12.5027 17.92 12.3799C18.02 12.1365 18.02 11.8634 17.92 11.6199Z"
                      fill="#EDEDED" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
