export default function AmityvilleMedicalCareWebsite() {
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

  const locations = [
    {
      city: 'Amityville',
      address: '100 West Oak Street, Amityville, NY 11701',
    },
    {
      city: 'Bethpage',
      address: '8 Seitz Drive, Bethpage, NY 11714',
    },
    {
      city: 'Ronkonkoma',
      address: '299 Ronkonkoma Ave, Lake Ronkonkoma, NY 11779',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf7fc] text-slate-900">
      {/* Top Bar */}
      <div className="border-b border-[#eadff0] bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-3 text-sm md:flex-row">
          <div className="flex flex-wrap items-center gap-6 text-slate-600">
            <span>631-264-1800</span>
            <span>amcbethpage@gmail.com</span>
            <span>Mon – Fri | 9AM – 5PM</span>
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
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A1B8D] to-[#D6A64F] text-2xl font-bold text-white shadow-lg">
              A
            </div>

            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#5B0E6E]">
                Amityville Medical Care
              </h1>
              <p className="text-sm text-slate-500">
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
            <a href="#locations" className="font-medium text-slate-700 hover:text-[#7A1B8D]">
              Locations
            </a>
            <a href="#contact" className="font-medium text-slate-700 hover:text-[#7A1B8D]">
              Contact
            </a>
          </nav>

          <button className="rounded-full bg-[#7A1B8D] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
            Book Appointment
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#5B0E6E] via-[#7A1B8D] to-[#A035B5] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_white,_transparent_40%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center lg:py-32">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur">
              Compassionate Healthcare Across Long Island
            </div>

            <h2 className="text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
              Compassionate Care.
              <br />
              Better Health.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-purple-100">
              Personalized family medicine and cardiology care focused on prevention, wellness, chronic disease management, and long-term health.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-8 py-4 font-semibold text-[#5B0E6E] shadow-xl transition hover:scale-105">
                Book Online
              </button>

              <button className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#5B0E6E]">
                Call 631-264-1800
              </button>
            </div>
          </div>

          <div>
            <div className="rounded-[2.5rem] border border-white/20 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[2rem] bg-white p-10 text-slate-900">
                <h3 className="text-3xl font-bold text-[#5B0E6E]">
                  Why Patients Choose Us
                </h3>

                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-3xl bg-[#faf7fc] p-6">
                    <p className="text-lg font-semibold">In-House Diagnostics</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Ultrasounds, NCV studies, echocardiograms, and laboratory services.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#faf7fc] p-6">
                    <p className="text-lg font-semibold">Same-Day Visits</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Fast urgent care and acute appointments available.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#faf7fc] p-6">
                    <p className="text-lg font-semibold">Preventive Wellness</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Annual physicals, vaccinations, screenings, and wellness visits.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#faf7fc] p-6">
                    <p className="text-lg font-semibold">Cardiology Specialists</p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
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
          <div className="max-w-3xl">
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
            {locations.map((location) => (
              <div
                key={location.city}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-10 backdrop-blur"
              >
                <h4 className="text-3xl font-bold">{location.city}</h4>

                <p className="mt-6 leading-8 text-purple-100">
                  {location.address}
                </p>

                <button className="mt-8 rounded-full bg-white px-6 py-3 font-semibold text-[#5B0E6E] transition hover:scale-105">
                  View Location
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-[3rem] bg-white p-14 text-center shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A1B8D]">
              Schedule Your Visit
            </p>

            <h3 className="mt-4 text-5xl font-bold tracking-tight text-[#5B0E6E]">
              Book Your Appointment Online
            </h3>

            <div className="mx-auto mt-10 grid max-w-3xl gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]"
              />

              <select className="rounded-2xl border border-[#eadff0] px-5 py-4 outline-none focus:border-[#7A1B8D]">
                <option>Select Provider</option>
                {providers.map((provider) => (
                  <option key={provider.name}>{provider.name}</option>
                ))}
              </select>
            </div>

            <button className="mt-10 rounded-full bg-[#7A1B8D] px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:scale-105">
              Request Appointment
            </button>
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
