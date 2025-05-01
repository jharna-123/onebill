import React from 'react'
import {motion, useScroll} from "motion/react"


const Pricingplan = () => {
  return (
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
  )
}

export default Pricingplan