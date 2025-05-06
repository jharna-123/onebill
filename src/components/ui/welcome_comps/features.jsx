
// const images = require.context("../../../assets/images", true)
// const imageList = images.keys().map(image => images(image))
// const images = import.meta.glob("../../../assets/images/*.png", { eager: true });
import imag1 from "../../../assets/images/img1.jpg"
import imag2 from "../../../assets/images/img2.jpg"
import imag3 from "../../../assets/images/img3.jpg"
import imag4 from "../../../assets/images/img4.jpg"
import imag5 from "../../../assets/images/img5.jpg"
import profile from "../../../assets/profileimg.png"
import profile2 from "../../../assets/profileimg2.png"
import profile3 from "../../../assets/profileimg3.png"
import profile4 from "../../../assets/profileimg4.png"

const FeaturesSection = () => {
  return (
    <>
    <div>
      <h1 className="font-prim font-bold  text-6xl flex justify-center pt-15 m-4"> Features </h1>
      <p className="font-prim flex justify-center">Real-time reporting features allow businesses to monitor financial data instantly.</p>
    </div>

    <div className=" grid grid-cols-12  grid-flow-row-dense h-200 gap-x-10 gap-y-6 p-40 bg-gradient-to-b from-[#d9d9d900] to-[#3a3a3a19] ">

      <div className="transition-all group duration-300 min-h-[100px] col-span-3  rounded-[20px] relative  hover:scale-110 origin-top-left  ">
        <img src= {imag1} alt="" className=" w-full h-full absolute  object-cover rounded-[20px] " />
        <div className="absolute inset-0 bg-dark group-hover:bg-black/0  rounded-[20px]"></div>
        <div className=' font-prim font-light text-center  p-10  h-full w-full inset-0 absolute flex flex-col  justify-center leading-tight  opacity-0 transition  ease-in-out text-white hover:opacity-100  hover:scale-110  hover:z-20'>
         <span className="text-2xl font-bold "> Management</span>Advanced billing software integrates seamlessly with accounting, CRM, and ERP platforms, allowing centralized data management.         </div>
      </div>

      <div className=" group transition-all duration-300 min-h-[100px] col-span-6 outline-1 rounded-[20px] z-10 relative  hover:scale-110 origin-top overflow-hidden ">
        <img src= {imag2} alt="" className="w-full h-full object-cover rounded-[20px] " />
        <div className="absolute inset-0 bg-dark group-hover:bg-black/0 rounded-[20px]"></div>
        <div className=' font-prim  font-light text-center  p-10  h-full w-full inset-0  flex flex-col  justify-center leading-tight absolute drop-shadow-2xl opacity-0 transition  ease-in-out hover:opacity-100 hover:scale-110 hover:z-10'>
          <span className="text-2xl font-bold"> Analytics</span>Real-time reporting features allow businesses to monitor financial data instantly. Users can track sales, payments, outstanding balances, and revenue trends through intuitive dashboards. 
        </div>
      </div>

      <div className=" group transition-all duration-300 min-h-[100px] col-span-3 outline-1 row-span-2 rounded-[20px] relative  hover:scale-110 origin-right overflow-hidden">
        <img src= {imag3} alt=""  className="w-full h-full object-cover rounded-[20px]"/>
        <div className="absolute inset-0 bg-dark group-hover:bg-black/0 rounded-[20px]"></div>
        <div className=' font-prim leading-tight text-center  p-10  h-full w-full inset-0 flex flex-col  justify-center  font-light absolute   drop-shadow-2xl text-wrap  opacity-0 transition  ease-in-out  hover:opacity-100  hover:scale-110'>
          <span className="text-2xl font-bold "> Privacy</span>Billing software often includes a customer management module to store client information, payment history, and communication logs. 
        </div>
      </div>
      
      <div className="group transition-all duration-300 col-span-6 min-h-[100px]  relative rounded-[20px]  hover:scale-110 overflow-hidden origin-bottom-left hover:z-10 ">
        <img src= {imag4} alt="" className="w-full h-full object-cover rounded-[20px]   " />
        <div className="absolute inset-0 bg-dark group-hover:bg-black/0 rounded-[20px]"></div>
        <div className=' font-prim leading-tight text-center  p-10   absolute inset-0 h-full w-full flex flex-col  justify-center font-light   opacity-0 transition  ease-in-out  hover:opacity-100  hover:scale-110'>
          <span className="text-2xl font-bold "> Multiple Payments</span> Modern billing systems accept a wide variety of payment methods, including credit/debit cards, UPI, bank transfers, and digital wallets. 
        </div>
      </div>

      <div className=" group transition-all duration-300 min-h-[100px] col-span-3  rounded-[20px] relative  hover:scale-110 origin-bottom overflow-hidden hover:z-10">
        <img src= {imag5} alt="" className="w-full h-full object-cover rounded-[20px] " />
        <div className="absolute inset-0 bg-dark group-hover:bg-black/0 rounded-[20px]"></div>
        <div className=' font-prim font-light text-center leading-tight absolute flex flex-col  justify-center inset-0 h-full w-full  drop-shadow-2xl p-10  opacity-0 transition  ease-in-out hover:opacity-100  hover:scale-110'>
         <span className="text-2xl font-bold "> Invoices</span>Billing software streamlines the invoicing process by automatically generating and sending invoices to customers. 
        </div>
      </div>
    </div>

    {/* Testimonials */}







    <div className="w-full  overflow-hidden bg-gradient-to-t from-black  to-[#2e3e57]" >
      <div className="text-center font-prim font-bold text-6xl  m-40">What Our Customers Say About Us</div>
      <div className="flex justify-center flex-wrap w-full h-full ">
        <div className="">
        <div className="relative flex flex-col w-[400px] h-[350px] m-10 items-center bg-black/50 inset-shadow-sm inset-shadow-indigo-500">
          <img
            src={profile}
            className="transform -translate-20 "
            alt="Profile"
          />
        <p className="absolute  top-55 text-right transform -translate-y-20 w-full h-full p-4  "><h3 className="text-right mr-6 font-extrabold">Rishita Deshwal<br></br><span className="text-sm font-light">@ceo flicker</span></h3><br/> "This billing software has completely transformed the way we manage our invoices. It's fast, reliable, and incredibly easy to use — we save hours every week!"</p>
      </div>
      <div className="relative flex flex-col w-[400px] h-[350px] m-30 items-center inset-shadow-sm bg-black/50 inset-shadow-indigo-500">
          {/* <div className="relative flex size-[200px] rounded-t-full bg-amber-50  overflow-x-visible pt-24"> */}
          <img
            src={profile3}
            className="transform -translate-y-25 size-[300px] "
            alt="Profile"
          />
        <p className="absolute  top-55 text-right transform -translate-y-20 w-full h-full p-4  "><h3 className="text-right mr-6 font-extrabold">— Liam K<br/><span className="text-sm font-light">Restaurant Manager</span></h3><br/>"From seamless invoice generation to real-time payment tracking, this tool covers it all. It’s like having an accountant on autopilot."</p>
      </div>

        </div>
        <div>
        <div className="relative flex flex-col w-[400px] h-[350px] m-10 items-center inset-shadow-sm bg-black/50 inset-shadow-indigo-500">
        <img
            src={profile4}
            className="transform -translate-y-25 "
            alt="Profile"
          />
          
        <p className="absolute  top-55 text-right transform -translate-y-20 w-full h-full p-4  "><h3 className="text-right mr-6 font-extrabold">— Sarah N.<br/><span className="text-sm font-light">Creative Agency Founder

              </span></h3><br/> "We switched from spreadsheets to this billing software, and it was the best decision we made. Clean UI, quick setup, and excellent support."</p>
      </div>
      <div className="relative flex flex-col w-[400px] h-[350px] m-30 items-center inset-shadow-sm bg-black/50 inset-shadow-indigo-500">
          {/* <div className="relative flex size-[200px] rounded-t-full bg-amber-50  overflow-x-visible pt-24"> */}
          <img
            src={profile2}
            className="transform -translate-y-25 size-[300px] "
            alt="Profile"
          />
        <p className="absolute  top-55 text-right transform -translate-y-20 w-full h-full p-4  "><h3 className="text-right mr-6 font-extrabold">— Mark D.<br/><span className="text-sm font-light">Freelance Consultant</span></h3><br/> "What stood out the most was the accuracy and simplicity. Our clients love the professional invoices, and we love how easy it is to manage them."

</p>
      </div>

        </div>
        
      
      

      </div>
      
      
    </div>

   
  </>
    
  );
};

export default FeaturesSection;
