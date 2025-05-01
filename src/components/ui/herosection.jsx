import React from 'react'
import img2 from "../../assets/best-accounting-software.webp"
import ImgHero from "../../assets/kelly-sikkema-xoU52jUVUXA-unsplash.jpg"


const Herosection = () => {
  return (
    <div >

        <div className=' relative h-[900px] flex mt-10  '>
          <img src ={ImgHero}  className="h-[900px] w-full "></img>
          <div className="absolute inset-0 bg-black/65"></div>
          <div className='absolute top-2/6 left-2/6 transform -translate-x-1/6 -translate-0.5 font-prim font-bold drop-shadow-2xl text-9xl text-white'>
           One Place For All<br></br>
            Your <span className='text-[#C2FFC6]'> ACCOUNTS</span>
          </div>
          <div className='flex absolute gap-20 left-6/13 top-4/6 transform -translate-x-1/2 -translate-0.5 m-10'>
               <button className='font-prim rounded-2xl h-auto w-40 outline-1 bg-background/10 backdrop-blur-md  m-4 p-4 text-white'>Read more</button>    
               <button className='rounded-2xl h-auto w-40 outline-1 bg-[#C2FFC6] m-4 p-4 font-prim'>Get Started</button> 
          </div>
        </div>

        
        {/* <div className="flex flex-1 bg-amber-50  h-120 ">
                  <img src ={img2}  className="flex-1  object-cover"></img> */}
                  {/* <img src ={imge}  className="flex-1  object-cover"></img>
                  
                </div> */}
        
                
                {/* <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-violet-50">
                <h1 className="text-5xl md:text-6xl font-bold text-pink-400 mb-6 font-[cursive] text-center">Built for Speed.Engineered for Growth.</h1>
                <h1 className="text-5xl md:text-6xl font-bold text-violet-400 mb-6 font-[cursive]">
                  Simplify Your Billing Experience
                </h1>
                <p className="text-lg text-gray-600 max-w-xl mb-8">
                  Powerful, easy-to-use billing software to help you focus on what matters—growing your business.
                </p>
                <button className="px-6 py-3 bg-violet-500 text-white rounded-full text-lg hover:bg-violet-600 transition">
                  Get Started Free
                </button>
                <section id="features" className="py-20 px-8 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-violet-500">Easy Invoicing</h3>
                        <p>Create and send beautiful invoices in seconds.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-violet-500">Real-Time Reports</h3>
                        <p>Get clear insights into your revenue and expenses instantly.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-violet-500">Cloud Sync</h3>
                        <p>Access your billing data anywhere, anytime.</p>
                    </div>
                    </div>
                </section>
              </section> */}
        
    </div>
  )
}

export default Herosection