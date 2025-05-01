



export default function Footer() {

    return(
        <footer className="text-center py-6 text-sm text-gray-500">
            <div className="h-1 bg-gray-700"></div>
            
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
        
      

        <div>
          <ul className="flex flex-col  gap-2 ">
              <p><b>Office</b></p>
              <a>Bengaluru, India</a>
          </ul>
          </div>
            <div className="">
              <button className="px-3 py-2 bg-violet-500 text-white rounded-full text-lg hover:bg-violet-600 transition mt-8">Contact Us</button>
              
            </div>
      

          <div className="p-8">
            &copy; {new Date().getFullYear()} BillingPro. All rights reserved.
          </div>
      </footer>
    )
}