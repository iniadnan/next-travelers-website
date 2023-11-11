import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="container-travelers px-5 md:px-5 lg:px-0">
                {/* <!-- FOOTER LIST --> */}
                <div
                    className="flex items-start flex-wrap md:flex-wrap lg:flex-nowrap gap-y-8 gap-x-10 md:gap-x-20 lg:gap-x-14 xl:gap-x-20 pb-10 md:pb-[48px] lg:pb-[55px]"
                >
                    <div>
                        <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-[#1E1E1E]">
                            Help center
                        </h2>
                        <div className="mt-5">
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >FAQ</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Privacy policy</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Cookies policy</Link>
                            </p>
                            <p>
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Terms of use</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-[#1E1E1E]">
                            Company
                        </h2>
                        <div className="mt-5">
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >FAQ</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >About Us</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Career</Link>
                            </p>
                            <p>
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Blog</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-[#1E1E1E]">
                            Destinations
                        </h2>
                        <div className="mt-5">
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Country</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >City</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-[#1E1E1E]">
                            Become our partner
                        </h2>
                        <div className="mt-5">
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Partner Hub</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Advertise on Travelers</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="#"
                                    className="font-medium text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Affiliate</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Partner connectivity</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-medium text-lg md:text-xl lg:text-2xl text-[#1E1E1E]">
                            Download the app
                        </h2>
                        <div className="mt-5">
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >iOS app</Link>
                            </p>
                            <p className="mb-3.5 md:mb-5">
                                <Link
                                    href="/"
                                    className="font-medium text-base md:text-lg text-[#8A8A8A] hover:text-[#1E1E1E]"
                                >Android application</Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- FOOTER COPYRIGHT --> */}
                <div className="pt-[20px] md:pt-[25px] pb-[35px] border-t border-[#E5F0F5]">
                    <p className="font-medium text-base text-[#1E1E1E] text-center">
                        Copyright © 2023 Travelers. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}