
import FeaturesSection from "../components/ui/welcome_comps/features";
import StatsSection from "../components/ui/statsSection";
import Pricingplan from "../components/ui/pricingplan";
import Herosection from "../components/ui/herosection";
import Footer from "../components/ui/footer"
import Aboutus from "../components/ui/welcome_comps/aboutus"


export default function Welcome() {
  const stripe = "https://res.cloudinary.com/secretsaas/image/upload/ar_1.0,b_white,c_pad,dpr_2.0,f_auto,h_96,q_auto:best/v1/production/0hiu8hhbwq3u94n8u4o77p0ibgvm"
  const razorpay ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSY1R9Pu5OlFSaoyagDUXklR3BCrbv1nDOUg&s"
  
  
  return (
    <div> 
      <main> 
      <Herosection/>
      <Aboutus/>
      {/* <StatsSection/>
      <Pricingplan/> */}
      <FeaturesSection/>
      <Footer/>
      </main>
    
    </div>
  );
}