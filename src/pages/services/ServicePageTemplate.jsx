import React from "react";

const ServicePageTemplate = ({
  icon,
  title,
  intro,
  image,
  description,
  features = [],
  otherServices = [],
  currentService = "",
  contactInfo = {
    email: "vinmugondora@gmail.com",
    phone1: "+263777530322",
    phone2: "+263776477958",
  },
  cta,
  heroBg = "https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?auto=format&fit=crop&w=1200&q=80",
  children,
}) => (
  <div className="bg-white min-h-screen">
    {/* Hero Section */}
    <section
      className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 py-12 px-4 rounded-3xl overflow-hidden mb-8"
      style={{
        backgroundImage: `linear-gradient(rgba(31,41,55,0.55),rgba(59,130,246,0.35)), url('${heroBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay for extra contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-blue-700/40 to-indigo-900/30 pointer-events-none" />
      {/* Left: Icon, Title, Intro */}
      <div className="flex-1 w-full relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 shadow-lg">
            {icon}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">{title}</h1>
        <p className="text-white/90 text-lg mb-4 drop-shadow-md">{intro}</p>
        {cta && <div className="mb-4">{cta}</div>}
      </div>
      {/* Right: Image */}
      <div className="flex-1 w-full flex items-center justify-center relative z-10">
        <img src={image} alt={title} className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-orange-100 bg-white/80" />
      </div>
    </section>

    {/* Main Content */}
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-12">
      {/* Left: Description & Features */}
      <div className="flex-1 w-full">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Description</h2>
          <p className="text-gray-700 mb-4">{description}</p>
        </div>
        {features.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Features</h3>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-500 mt-1">{f.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{f.title}</div>
                    <div className="text-gray-600 text-sm">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        {children}
      </div>
      {/* Right: Sidebar */}
      <aside className="w-full md:w-80 flex-shrink-0">
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <h4 className="text-lg font-bold text-blue-900 mb-4">Other Services</h4>
          <ul className="space-y-2">
            {otherServices.map((s) => (
              <li key={s.title}>
                <a
                  href={s.link}
                  className={`block px-3 py-2 rounded-md font-medium text-sm transition ${
                    s.title === currentService
                      ? "bg-orange-100 text-orange-600 font-bold"
                      : "text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {contactInfo && (
          <div className="bg-orange-50 rounded-2xl shadow p-6">
            <h4 className="text-lg font-bold text-orange-600 mb-2">Contact Info</h4>
            <div className="mb-2 text-sm text-gray-700">Email: <a href={`mailto:${contactInfo.email}`} className="text-blue-700 underline">{contactInfo.email}</a></div>
            <div className="mb-2 text-sm text-gray-700">Phone 1: <a href={`tel:${contactInfo.phone1}`} className="text-blue-700 underline">{contactInfo.phone1}</a></div>
            <div className="mb-2 text-sm text-gray-700">Phone 2: <a href={`tel:${contactInfo.phone2}`} className="text-blue-700 underline">{contactInfo.phone2}</a></div>
          </div>
        )}
      </aside>
    </section>
  </div>
);

export default ServicePageTemplate; 