import CountUp from 'react-countup';

const stats = [
  { label: "Invoices Sent", value: 120000 },
  { label: "Active Users", value: 8500 },
  { label: "Payments Processed", value: 3500000 },
  { label: "Countries Served", value: 42 }
];

const StatsSection = () => {
    
  return (
    <section className="bg-fuchsia-100 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted Worldwide</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={stat.value} duration={2.5} separator="," />
                {stat.label === "Countries Served" && "+"}
              </h3>
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
