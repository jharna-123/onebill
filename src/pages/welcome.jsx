import imge from "../assets/image.png"
import img2 from "../assets/best-accounting-software.webp"
import logo from "../assets/onebill.png"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignInButton, SignUp, UserButton } from "@clerk/clerk-react"; 
import {motion, useScroll} from "motion/react" 
import { use } from "react";


export default function Welcome() {
  const {scrollYProgress} = useScroll();
  const stripe = "https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,b_white,c_pad,dpr_2.0,f_auto,h_96,q_auto:best/v1/production/0hiu8hhbwq3u94n8u4o77p0ibgvm"
  const razorpay ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSY1R9Pu5OlFSaoyagDUXklR3BCrbv1nDOUg&s"
  const navigate = useNavigate();
  function handleSignup(){
    navigate("/signup")

  }
  return (
    <div>
      <motion.div className ="h-2 bg-purple-400 origin-left w-full fixed rounded"
      style ={{scaleX:scrollYProgress}}>
      </motion.div>

      <header className= "h-20">
          <div className="flex justify-between gap-4 items-center text-black">
              <motion.div animate ={{x:10, rotate:360}} transition = {{duration:2, delay:1}}>
                <img src={logo} alt="Logo" className="h-20 w-20 rounded-full" />
              </motion.div>
              <div className="flex-1 text-center bg-amber-500">
                
               
              </div>
              <motion.div whileHover={{scale:1.2}} whileTap={{backgroundColor:"pink"}} >
              <SignInButton className="border-2 border-#0a090c rounded-2xl p-2 m-2 w-20 h-12" mode = "modal" forceRedirectUrl = "/homepage" >SignIn</SignInButton>
              {/* <button className="border-2 border-#0a090c rounded-2xl p-2 m-2 w-20 h-12"onClick={handleSignup}>SignUp</button> */}
              </motion.div>
          </div>
      </header>
      

      <main>
        
        <div className="flex flex-1 bg-amber-50 justify-end h-120 color-white">
          
          <img src ={img2}  className="flex-1  object-cover"></img>
          {/* <img src ={imge}  className="flex-1  object-cover"></img> */}
          
        </div>
        
        <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-violet-50">
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
      </section>


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
      
     
      <section className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
        <p className="text-gray-600 mb-12">Choose a plan that fits your business needs.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Starter',
              price: 'Free',
              features: ['Up to 5 invoices/month', 'Basic analytics', 'Email support'],
              cta: 'Get Started',
            },
            {
              title: 'Pro',
              price: '$19/mo',
              features: ['Unlimited invoices', 'Advanced reports', 'Priority support'],
              cta: 'Start Free Trial',
            },
            {
              title: 'Enterprise',
              price: 'Custom',
              features: ['All Pro features', 'Dedicated manager', 'Custom integrations'],
              cta: 'Contact Us',
            },
          ].map((plan, i) => (
            <motion.div
              whileHover={{ scale: 1.5 }}
              key={i}
              className="rounded-2xl shadow-lg border p-6 flex flex-col justify-between bg-purple-50"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="text-left space-y-2 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition">
                {plan.cta}
              </button>
              </motion.div>
              ))}
          </div>
        </div>
      </section>

      
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        <div className="h-1 bg-gray-700"></div>
        <div>
          <div className="flex  justify-evenly gap-8">
              {
                [
                  {
                    heading: "Social Media",
                    items: ["Instagram", "Facebook", "Youtube", "X"],
                  },
                  {
                    heading: "Industries",
                    items: ["Retail", "Education", "Finance", "Health"],
                  },
                  {
                    heading: "Legal Links",
                    items: ["Privacy policy", "Terms of service", "Refund policy"],
                  },
                ].map((section) => (
                                  <div key={section.heading}>
                                      <ul className="flex flex-col gap-2">
                                        <p><b>{section.heading}</b></p>
                                        {section.items.map((item) => (
                                          <li key={item}>
                                            <a href="#">{item}</a>
                                          </li>
                                    ))}
                                      </ul>
                                  </div>
               ))
              }
    </div>
        </div>
      

        <div>
          <ul className="flex flex-col gap-2 ">
              <p><b>Office</b></p>
              <a>Bengaluru, India</a>
          </ul>
          </div>
            <div>
              <button className="px-3 py-2 bg-violet-500 text-white rounded-full text-lg hover:bg-violet-600 transition mt-8">Contact Us</button>
            </div>
      

          <div className="p-8">
            &copy; {new Date().getFullYear()} BillingPro. All rights reserved.
          </div>
      </footer>
      
      <div>
        </div>
    </div>
  );
}