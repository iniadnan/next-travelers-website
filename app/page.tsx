import Image from 'next/image'
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
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
      <section id="notification">
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
