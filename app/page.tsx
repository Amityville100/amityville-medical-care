"use client";
import { motion } from "framer-motion"
import { useState } from "react";
export default function AmityvilleMedicalCareWebsite() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  provider: "",
  location: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        provider: "",
        location: "",
        message: "",
      });
    } else {
      setSuccess(false);
    }
  } catch (error) {
    alert("Error submitting form.");
  }

  setLoading(false);
};
  const providers = [
    {
      name: 'Dr. Sameer Sayeed MD',
      specialty: 'Cardiology',
    },
    {
      name: 'Dr. Majeed Sayeed MD',
      specialty: 'Cardiology',
    },
    {
      name: 'Dr. Seeme Raza MD',
      specialty: 'Internal Medicine',
    },
    {
      name: 'Dr. Subechha Gyawali MD',
      specialty: 'Internal Medicine',
    },
    {
      name: 'Nafisa Syed AGNP',
      specialty: 'Nurse Practitioner',
    },
    {
      name: 'Parneet Kaur AGNP',
      specialty: 'Nurse Practitioner',
    },
  ];

  const services = [
    'Annual Physical Examinations',
    'Preventative Visits',
    'Urgent Visits & Acute Care',
    'Wellness Visits',
    'Cardiology Care',
    'In-House Ultrasounds',
    'Vaccinations',
    'Medical Weight Management',
  ];

  const officeLocations: { city: string; address: string; mapLink: string }[] = [
    {
      city: 'Amityville',
      address: '100 West Oak Street, Amityville, NY 11701',
      mapLink: 'https://maps.app.goo.gl/A17NKbpNHZEGoERr6',
    },
    {
      city: 'Bethpage',
      address: '8 Seitz Drive, Bethpage, NY 11714',
      mapLink: 'https://maps.app.goo.gl/UfTjHzgSmuCPFPet9',
    },
    {
      city: 'Ronkonkoma',
      address: '299 Ronkonkoma Ave, Lake Ronkonkoma, NY 11779',
      mapLink: 'https://maps.app.goo.gl/wWDBA1hnB3hH8K2P8',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7fc] text-slate-900">
      {/* Top Bar */}
      <div className="border-b border-[#eadff0] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 text-sm md:flex-row">
          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <span>631-264-1800 | 516-243-9777</span>
            <span>amcbethpage@gmail.com</span>
            <span>Mon – Sat | 9AM – 5PM</span>
          </div>

          <div className="font-semibold text-[#7A1B8D]">
            Accepting All Insurances
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[#eadff0] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/amc logo.jpeg"
                alt="Amityville Medical Care"
                className="h-20 w-auto object-contain"
              />

             <p className="text-sm text-slate-500 hidden md:block">
              Family Medicine & Cardiology
             </p>
           </div>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            <a href="#services" className="font-medium text-slate-700 hover:text-[#7A1B8D]">
              Services
            </a>
            <a href="#providers" className="font-medium text-slate-700 hover:text-[#7A1B8D]">
              Providers
            </a>
            <a href="#contact" className="font-medium text-slate-700 hover:text-[#7A1B8D]">
              Contact
            </a>
          </nav>

          <a
            href="#appointment"
            className="rounded-full bg-[#7A1B8D] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
          >
            Book Appointment
         </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[920px]"
        style={{
        backgroundImage: "url('/hero bg.png')",
       }}
       >
        <div
  className="absolute inset-0 animate-[heroZoom_06s_ease-in-out_infinite]"
  style={{
    backgroundImage: "url('/hero bg.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
/>
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-10 inline-flex rounded-full border border-[#d9c8ef] bg-[#f3ebff]/80 px-6 py-3 text-base font-medium text-[#6A1B9A] backdrop-blur-md">
              Compassionate Healthcare Across Long Island
            </div>

             <h1 className="max-w-xl font-serif text-[72px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#1F003B]">
              Comprehensive Care
              <br />
              For Every <span className="text-[#7A1B8D]">Heart & Family</span>.
            </h1>

            <p className="mt-10 max-w-xl text-[22px] leading-[2.2rem] text-[#4A4A4A]">
              Personalized family medicine and cardiology care focused on prevention, wellness, chronic disease management, and long-term health.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-6">
              <a
               href="#appointment"
               className="rounded-full bg-[#5E0B87] px-12 py-5 text-xl font-semibold text-white shadow-[0_10px_40px_rgba(91,14,110,0.35)] transition hover:scale-105"
              >
                Book Online
            </a>

              <button className="rounded-full border border-[#d9c8ef] bg-white/40 px-12 py-5 text-xl font-semibold text-[#5B0E6E] backdrop-blur-md transition hover:bg-white">
                Call: 631-264-1800 | 516-243-9777
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-[2.5rem] border border-white/20 bg-[#6F1AB6]/20 p-8 shadow-[0_8px_40px_rgba(91,14,110,0.35)] backdrop-blur-xl">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-white backdrop-blur-md">
                <h3 className="text-3xl font-semibold tracking-tight text-white">
                  Why Patients Choose Us
                </h3>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <p className="text-2xl font-semibold text-white">In-House Diagnostics</p>
                    <p className="mt-3 text-sm leading-7 text-purple-100">
                      Ultrasounds, NCV studies, echocardiograms, and laboratory services.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <p className="text-2xl font-semibold text-white">Same-Day Visits</p>
                    <p className="mt-3 text-sm leading-7 text-purple-100">
                      Fast urgent care and same-day appointments available.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <p className="text-2xl font-semibold text-white">Preventive Wellness</p>
                    <p className="mt-3 text-sm leading-7 text-purple-100">
                      Annual physicals, vaccinations, screenings, and wellness visits.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
                    <p className="text-2xl font-semibold text-white">Cardiology Specialists</p>
                    <p className="mt-3 text-sm leading-7 text-purple-100">
                      Comprehensive cardiovascular evaluations and ongoing care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl pl-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1B8D]">
              Our Services
            </p>

            <h3 className="mt-4 text-5xl font-bold tracking-tight text-[#5B0E6E]">
              Comprehensive Healthcare Services
            </h3>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-[2rem] border border-[#eadff0] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-[#7A1B8D] to-[#D6A64F]" />

                <h4 className="text-xl font-semibold text-[#5B0E6E]">
                  {service}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Personalized and evidence-based healthcare tailored to every patient.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Providers */}
      <section id="providers" className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1B8D]">
              Meet Our Providers
            </p>

            <h3 className="mt-4 text-5xl font-bold tracking-tight text-[#5B0E6E]">
              Experienced & Compassionate Medical Team
            </h3>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providers.map((provider) => (
              <div
                key={provider.name}
                className="rounded-[2rem] border border-[#eadff0] bg-[#faf7fc] p-10 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#D6A64F] hover:shadow-xl"
              >
                <div className="mx-auto mb-8 h-20 w-20 rounded-full bg-gradient-to-br from-[#7A1B8D] to-[#D6A64F] opacity-90" />

                <h4 className="text-2xl font-bold text-[#5B0E6E]">
                  {provider.name}
                </h4>

                <p className="mt-3 text-lg text-[#7A1B8D]">
                  {provider.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="bg-gradient-to-br from-[#5B0E6E] to-[#7A1B8D] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-200">
              Our Locations
            </p>

            <h3 className="mt-4 text-5xl font-bold tracking-tight">
              Convenient Long Island Locations
            </h3>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {officeLocations.map((location) => (
              <div
                key={location.city}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur">
                <h4 className="text-3xl font-bold">{location.city}</h4>

                <p className="mt-6 leading-8 text-purple-100">
                  {location.address}
                </p>

                <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-[#5B0E6E] transition hover:scale-105">View Location</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id= "appointment" className="py-24 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] bg-white p-14 text-center shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1B8D]">
              Schedule Your Visit
            </p>

            <h3 className="mt-4 text-5xl font-bold tracking-tight text-[#5B0E6E]">
              Book Your Appointment Online
            </h3>
            <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2"
            >
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
              />
              <select
                value={formData.provider}
                onChange={(e) =>
                  setFormData({ ...formData, provider: e.target.value }) 
                  }
                  className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
                  >
                <option>Select Provider</option>
                {providers.map((provider) => (
                  <option key={provider.name}>{provider.name}</option>
                ))}
              </select>
              <select
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                  }
                  className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
                  >
                <option>Select Location</option>

                {officeLocations.map((location) => (
                <option key={location.city}>
                {location.city}
              </option>
               ))}
              </select>
              <textarea
                placeholder="Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                  }
                rows={5}
                  className="md:col-span-2 rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
                />

            <button 
              type="submit"
              className="mt-10 rounded-full bg-[#7A1B8D] px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105"
              >
              {loading ? "Submitting..." : "Request Appointment"}
            </button>
             {success && (
              <div className="md:col-span-2 mt-8 rounded-3xl border border-green-200 bg-green-50 p-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-green-500">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-10 w-10 text-green-500"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                   strokeWidth={3}
                 >
                   <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                 />
              </svg>
           </div>

          <h3 className="mt-6 text-3xl font-bold text-green-700">
             Thank You!
          </h3>

          <p className="mt-3 text-lg text-green-700">
            Your request has been sent successfully.
          </p>
      </div>
      )}
            </form>
            </div>
            </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-[#eadff0] bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-4">
          <div>
            <h4 className="text-3xl font-bold text-[#5B0E6E]">
              Amityville Medical Care
            </h4>

            <p className="mt-5 leading-8 text-slate-600">
              Luxury family medicine and cardiology care serving Long Island communities.
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-[#5B0E6E]">
              Services
            </h5>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>Family Medicine</li>
              <li>Cardiology</li>
              <li>Urgent Visits</li>
              <li>Preventive Care</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-[#5B0E6E]">
              Contact
            </h5>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li>631-264-1800</li>
              <li>amcbethpage@gmail.com</li>
              <li>Mon – Fri | 9AM – 5PM</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-[#5B0E6E]">
              Insurance
            </h5>

            <p className="mt-5 leading-8 text-slate-600">
              Accepting all insurance plans including Medicare and commercial insurance providers.
            </p>
          </div>
        </div>
      </footer>
    </div>
      );
    }