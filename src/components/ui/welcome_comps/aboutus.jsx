import React from 'react'
import img3 from "../../../assets/ashraf-ali-JLW-T4LiJCw-unsplash.jpg"

const Aboutus = () => {
  return (
    <div className=''>
        {/* Heading for about us */}
        <div className="flex flex-col mt-6 mb-20">
            <h1 className="shrink-0 w-[335] h-[76] font-sans text-center text-[#2f2f2f] text-[64px] leading-normal font-bold">About Us</h1>
            <p className='shrink-0 font-sans text-center text-[24px] leading-normal'>Powerful, easy-to-use billing software to help you growing your business.</p>
        </div>
        
        {/* parent div for content and image */}
        <div className="grid grid-cols-2  h-[720px] bg-gradient-to-b from-[#d9d9d900] to-[#3a3a3a19]">
            {/* Content of about us */}
            <div className='flex flex-col gap-14 p-8 relative'>
                <br></br>
                <h2 className='shrink-0 w-[645px] font-sans h-[116px] text-[#2f2f2f] text-[48px] leading-tight font-bold absolute top-20 left-40'>We are specialist in managing your business</h2>
                <p className='shrink-0 w-[579px] h-[174px] text-[#000] text-justify leading-normal font-[24px] absolute top-60 left-40'>Built with modern businesses in mind, our solution integrates seamlessly with accounting systems, CRMs, ERPs, and e-commerce platforms. Whether you're a freelancer, a small business, or an enterprise, our tools help you stay compliant, reduce manual errors, and improve cash flow management.

Security and data integrity are at the core of our platform. All transactions are encrypted, and your data is stored securely to meet the highest industry standards. Our customizable dashboards, automated reminders, and flexible payment gateway options ensure that you maintain full control over your billing process without any technical hassle.</p>
                <button className='shrink-0 rounded-[20px] border-1 w-[154px] h-[53px] border-black bg-[#ffffff1f] absolute top-125 left-40'>Read more</button>
            </div>
            
            {/* image */}
            <div className="relative">
                <img className='rounded-[25px] size-[525px] object-cover absolute top-20 left-40' src={img3}></img>
            </div>
        </div>
    </div>
  )
}

export default Aboutus;