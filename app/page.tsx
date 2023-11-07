import Image from 'next/image'
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
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
                        <stop stop-color="#0077ED" />
                        <stop offset="1" stop-color="#7BF9D3" />
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
                        <stop stop-color="#0077ED" />
                        <stop offset="1" stop-color="#7BF9D3" />
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
                        <stop stop-color="#0077ED" />
                        <stop offset="1" stop-color="#7BF9D3" />
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
                        <stop stop-color="#0077ED" />
                        <stop offset="1" stop-color="#7BF9D3" />
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
      <section id='notification'>
        <div className="container-travelers pb-[90px] md:pb-[100px] lg:pb-[120px] px-5 md:px-5 lg:px-0">
          <div id="notification-background"
            className="flex items-center justify-center bg-cover bg-center h-[380px] md:h-[420px] lg:h-[450px] rounded-[20px]"
            style={{ backgroundImage: "url('/images/notifications.webp')" }}>
            <div className="text-center">
              {/* <!-- TEXT IN HERE --> */}
              <div className="h-[100px] md:h-[55px] overflow-hidden">
                <h2
                  className="notification__main-text transform translate-y-[105px] md:translate-y-[60px] font-medium text-[32px] md:text-[36px] lg:text-[40px] text-white leading-[40px] md:leading-[48px] lg:leading-[52px] mb-[14px] md:mb-[18px]">
                  Get up to date<br className="block md:hidden" /> notifications
                  from us</h2>
              </div>
              <div className="h-[30px] overflow-hidden">
                <p
                  className="notification__secondary-text transform translate-y-[80px] font-medium text-white text-[18px]">
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
