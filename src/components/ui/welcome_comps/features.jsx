
// const images = require.context("../../../assets/images", true)
// const imageList = images.keys().map(image => images(image))
// const images = import.meta.glob("../../../assets/images/*.png", { eager: true });
import imag1 from "../../../assets/images/img1.jpg"
import imag2 from "../../../assets/images/img2.jpg"
import imag3 from "../../../assets/images/img3.jpg"
import imag4 from "../../../assets/images/img4.jpg"
import imag5 from "../../../assets/images/img5.jpg"

const FeaturesSection = () => {
  return (
    <>
    <div>
      <h1 className="font-prim font-bold  text-6xl flex justify-center pt-15 m-4"> Features </h1>
      <p className="font-prim flex justify-center">Real-time reporting features allow businesses to monitor financial data instantly.</p>
    </div>
    <div className=" group grid grid-cols-12 grid-flow-row-dense h-200 gap-x-10 gap-y-6 p-40 bg-gradient-to-b from-[#d9d9d900] to-[#3a3a3a19] ">
      <div className=" group/image transition-all duration-300 min-h-[100px] col-span-3 outline-1 rounded-[20px] relative group-hover:scale-90 hover:scale-110 overflow-hidden  ">
        <img src= {imag1} alt="" className="w-full h-full absolute z-0 object-cover rounded-[20px] bg-black/65  " />
        <div className="absolute inset-0 bg-black/65 rounded-[20px]"></div>
        <div className=' font-prim absolute top-1/6 left-2/6 transform -translate-x-1/6 -translate-0.5 drop-shadow-2xl   opacity-0 transition  ease-in-out text-white hover:opacity-100 hover:-translate-y-1 hover:scale-110 overflow-y-auto z-20'>
        Advanced billing software integrates seamlessly with accounting, CRM, and ERP platforms, allowing centralized data management. Its scalable architecture supports growing business needs—whether adding new users, expanding locations, or handling more transactions. APIs and plugin support also allow customization, making it a flexible solution for any industry size.        </div>
      </div>
      <div className=" group/image transition-all duration-300 min-h-[100px] col-span-6 outline-1 rounded-[20px] z-10 relative group-hover:scale-90 hover:scale-110 overflow-hidden ">
        <img src= {imag2} alt="" className="w-full h-full object-cover rounded-[20px] " />
        <div className="absolute inset-0 bg-black/65 rounded-[20px]"></div>
        <div className=' font-prim absolute top-1/6 left-2/6 transform -translate-x-1/6 -translate-0.5 drop-shadow-2xl opacity-0 transition  ease-in-out text-white hover:opacity-100 hover:-translate-y-1 hover:scale-110'>
        Real-time reporting features allow businesses to monitor financial data instantly. Users can track sales, payments, outstanding balances, and revenue trends through intuitive dashboards. These insights support informed decisions, help identify issues early, and ensure financial transparency across departments without needing complex spreadsheets or manual reconciliations.

</div>
      </div>
      <div className="group/image transition-all duration-300 min-h-[100px] col-span-3 outline-1 row-span-2 rounded-[20px] relative group-hover:scale-90 hover:scale-110 overflow-hidden ">
        <img src= {imag3} alt=""  className="w-full h-full object-cover rounded-[20px]"/>
        <div className="absolute inset-0 bg-black/65 rounded-[20px]"></div>
        <div className=' font-prim absolute top-1/6 left-2/6 transform -translate-x-1/6 -translate-0.5 drop-shadow-2xl text-wrap  opacity-0 transition  ease-in-out text-white hover:opacity-100 hover:-translate-y-1 hover:scale-110'>
        Billing software often includes a customer management module to store client information, payment history, and communication logs. This helps build strong customer relationships and supports personalized billing, targeted promotions, and follow-up automation. It also enables tracking of account status, credit limits, and discounts, ensuring accurate billing every time.

</div>
      </div>
      
        <div className="group/image transition-all duration-300 col-span-6 min-h-[100px]  relative rounded-2xl group-hover:scale-90 hover:scale-110 overflow-hidden ">
        <img src= {imag4} alt="" className="w-full h-full object-cover rounded-[20px]   " />
        <div className="absolute inset-0 bg-black/65 rounded-[20px]"></div>
        <div className=' font-prim absolute top-1/6 left-2/6 transform -translate-x-1/6 -translate-0.5 drop-shadow-2xl opacity-0 transition  ease-in-out text-white hover:opacity-100 hover:-translate-y-1 hover:scale-110'>
          Modern billing systems accept a wide variety of payment methods, including credit/debit cards, UPI, bank transfers, and digital wallets. Integration with payment gateways ensures secure transactions, faster settlements, and improved cash flow. Multi-currency support also benefits businesses with international customers, enhancing convenience and reducing payment friction.
         </div>
      </div>
      <div className=" group/image transition-all duration-300 min-h-[100px] col-span-3 outline-1 rounded-[20px] relative group-hover:scale-90 hover:scale-110 overflow-hidden ">
        <img src= {imag5} alt="" className="w-full h-full object-cover rounded-[20px] " />
        <div className="absolute inset-0 bg-black/65 rounded-[20px]"></div>
        <div className=' font-prim absolute top-1/6 left-2/6 transform -translate-x-1/6 -translate-0.5 drop-shadow-2xl   opacity-0 transition  ease-in-out text-white hover:opacity-100 hover:-translate-y-1 hover:scale-110'>
        Billing software streamlines the invoicing process by automatically generating and sending invoices to customers. This reduces manual errors and saves time. Custom templates, recurring billing, and tax calculations are built-in, ensuring professional, consistent documents that improve brand image and enhance customer experience with minimal user input.
        </div>
      </div>
    
      

    </div>

   
  </>
    
  );
};

export default FeaturesSection;
