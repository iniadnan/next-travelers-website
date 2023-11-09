import Image from 'next/image'

export default function DestinationCard(props: { title: string, image: string, price: number, location: string, star: number }) {

    const { title, image, price, location, star } = props

    return (
        <article className="swiper-slide w-[85%] md:w-auto cursor-pointer group">
            {/* <!-- HEADER --> */}
            <div className="relative mb-[26px] w-full rounded-[20px] overflow-hidden">
                <Image className="h-[380px] md:h-[420px] lg:h-[475px] w-full group-hover:scale-110 transition duration-300 ease-in-out object-cover rounded-[20px]" height="475" width="300"
                    src={image} alt={title} />
                {/* <!-- BOX LABEL --> */}
                <div className="absolute right-4 bottom-4 flex items-center justify-end gap-x-[13px] z-10">
                    <div className="bg-white rounded-[15px] py-[12px] md:py-[14px] lg:py-[18px] px-[14px] md:px-[15px] flex items-center gap-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_12_221)">
                                <path
                                    d="M12 2C14.3869 2 16.6761 2.94821 18.364 4.63604C20.0518 6.32387 21 8.61305 21 11C21 14.074 19.324 16.59 17.558 18.395C16.6755 19.2869 15.7128 20.0956 14.682 20.811L14.256 21.101L14.056 21.234L13.679 21.474L13.343 21.679L12.927 21.921C12.6445 22.0818 12.325 22.1663 12 22.1663C11.675 22.1663 11.3555 22.0818 11.073 21.921L10.657 21.679L10.137 21.359L9.945 21.234L9.535 20.961C8.42298 20.2083 7.38707 19.3489 6.442 18.395C4.676 16.588 3 14.074 3 11C3 8.61305 3.94821 6.32387 5.63604 4.63604C7.32387 2.94821 9.61305 2 12 2ZM12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8Z"
                                    fill="#FF4242" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12_221">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#1E1E1E]">{ location }</span>
                    </div>
                    <div className="bg-white rounded-[15px] py-[12px] md:py-[14px] lg:py-[18px] px-[14px] md:px-[15px] flex items-center gap-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 17.27L16.15 19.78C16.91 20.24 17.84 19.56 17.64 18.7L16.54 13.98L20.21 10.8C20.88 10.22 20.52 9.12001 19.64 9.05001L14.81 8.64001L12.92 4.18001C12.58 3.37001 11.42 3.37001 11.08 4.18001L9.19001 8.63001L4.36001 9.04001C3.48001 9.11001 3.12001 10.21 3.79001 10.79L7.46001 13.97L6.36001 18.69C6.16001 19.55 7.09001 20.23 7.85001 19.77L12 17.27Z"
                                fill="#FFB800" />
                        </svg>
                        <span className="font-medium text-[16px] md:text-[18px] lg:text-[20px] text-[#1E1E1E]">{ star }</span>
                    </div>
                </div>
            </div>
            {/* <!-- FOOTER --> */}
            <div className="flex items-center justify-between">
                <h3 className="text-2xl text-[#1E1E1E]">{ title }</h3>
                <p className="font-bold text-2xl text-[#1E1E1E]">${ price }</p>
            </div>
        </article>
    )
}