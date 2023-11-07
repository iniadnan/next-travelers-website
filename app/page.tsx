import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
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
