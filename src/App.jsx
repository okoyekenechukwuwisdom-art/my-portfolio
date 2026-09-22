const profile = {
  name: 'Kenechukwu',
  title: 'Frontend Developer • UI/UX Designer • Tech Consultant',
  bio: 'I design and build clean, conversion-focused digital experiences for startups, founders, and brands that want to look premium and grow faster online.',
};

const profileImage = '/profileImage.jpg';

const stats = [
  { value: '1+', label: 'Years of design & development experience' },
  { value: '28', label: 'Projects designed and launched' },
  { value: '14', label: 'Brands supported across Africa' },
  { value: '99%', label: 'Client satisfaction rate' },
];

const services = [
  {
    title: 'Frontend Development',
    description: 'Responsive, high-performance websites and web apps built with scalable UI architecture and clean code.',
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered interfaces and intuitive product flows that create trust, clarity, and better conversion.',
  },
  {
    title: 'Brand & Product Strategy',
    description: 'Creative direction and digital positioning to shape a brand experience that feels memorable and credible.',
  },
];

const projects = [
  {
    name: 'FinEdge',
    type: 'Finance Landing Page',
    detail: 'Designed and developed a premium fintech landing page that improved clarity, trust, and lead generation.',
    accent: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'ZenCare',
    type: 'Healthcare Booking App',
    detail: 'Built a patient-first care experience with streamlined booking flows and clear information architecture.',
    accent: 'from-violet-500 to-fuchsia-600',
  },
  {
    name: 'BrandPilot',
    type: 'Marketing Dashboard',
    detail: 'Created a data-rich dashboard for campaign reporting, customer insights, and team performance tracking.',
    accent: 'from-amber-400 to-orange-500',
  },
];

const timeline = [
  {
    year: '2026',
    title: 'Founder & Lead Product Designer',
    place: 'KENECHUKWU TECH-HUB',
    description: 'Leading end-to-end design and frontend execution for startup brands, digital products, and growth-focused business websites.',
  },
  {
    year: '2026',
    title: 'Senior Frontend Developer',
    place: 'Digital Growth Studio',
    description: 'Built responsive web interfaces and scalable frontend systems for businesses looking to improve brand visibility and user engagement.',
  },
  {
    year: '2026',
    title: 'UI/UX Designer & Developer',
    place: 'Creative Solutions Lab',
    description: 'Designed and developed visual experiences for campaigns, business websites, and product prototypes used to attract clients.',
  },
];

const contactMethods = [
  { label: 'Email', value: 'okoyekenechukwu678@gmail.com' },
  { label: 'Phone', value: '+234 9058963432' },
  { label: 'Location', value: 'Anambra, Nigeria' },
];

const socialLinks = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/kenechukwu-tech-hub' },
  { label: 'GitHub', url: 'https://github.com/okoyekenechukwuwisdom-art' },
  { label: 'Instagram', url: 'https://instagram.com/kenechukwu.techhub' },
  { label: 'WhatsApp', url: 'https://wa.me/2349058963432?text=Hello%20Kenechukwu%2C%20I%20want%20to%20work%20with%20you.' },
  { label: 'X / Twitter', url: 'https://x.com/kene4190' },
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-500 font-black text-slate-950">
                K
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300 sm:text-sm">KENECHUKWU</p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-xs">TECH-HUB</p>
              </div>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-cyan-400/50 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 md:hidden"
            >
              Let’s Talk
            </a>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cyan-400/50 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400/20 md:inline-flex"
          >
            Let’s Talk
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.18),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-200 sm:text-xs">
                Available for select projects
              </span>

              <h1 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                Hi, I’m {profile.name}. I build digital experiences people trust.
              </h1>

              <p className="mt-6 max-w-xl text-base text-slate-300 sm:text-lg">
                {profile.bio}
              </p>

              <div className="mt-6 text-xs uppercase tracking-[0.22em] text-slate-400 sm:text-sm">{profile.title}</div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] sm:px-6"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10 sm:px-6"
                >
                  Book a Call
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="text-2xl font-black text-white">{item.value}</div>
                    <div className="mt-2 text-sm text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-52 w-52 rounded-full bg-cyan-500/20 blur-3xl sm:h-64 sm:w-64" />
              <div className="relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-2 shadow-[0_30px_80px_rgba(34,211,238,0.15)] backdrop-blur-xl sm:p-3">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                  <img
                    src={profileImage}
                    alt={profile.name}
                    className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[540px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-300">
                    Available for work
                  </div>

                  <div className="absolute right-5 top-5 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-md">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Experience</div>
                    <div className="mt-1 text-2xl font-black text-white">6+</div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300">Profile</p>
                        <h2 className="mt-2 text-2xl font-bold text-white">{profile.name}</h2>
                      </div>
                      <div className="rounded-full bg-cyan-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                        UI / UX
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-lg font-black text-white">12</div>
                        <div className="mt-1 text-xs text-slate-400">Launches</div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="text-lg font-black text-white">3x</div>
                        <div className="mt-1 text-xs text-slate-400">Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">About me</p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Helping modern businesses look better, feel clearer, and convert faster.</h2>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-slate-300">
                I specialize in turning ideas into elegant and effective digital experiences. My work blends strategy,
                visual design, and frontend engineering to create interfaces that are not only beautiful but also useful,
                fast, and built to grow a business.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['UI systems', 'Brand direction', 'Web strategy', 'Frontend engineering'].map((item) => (
                <div key={item} className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 p-5 text-center text-lg font-semibold text-cyan-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-slate-900/70 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-300">Services</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Digital craftsmanship that supports growth at every stage.</h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 text-lg font-black text-slate-950">
                    {service.title.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-slate-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Selected work</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Recent projects built for clarity, trust, and conversion.</h2>
            </div>
            <a href="#contact" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
              Start a project →
            </a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-900/70">
                <div className={`h-48 bg-gradient-to-br ${project.accent}`} />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{project.type}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{project.name}</h3>
                  <p className="mt-4 text-slate-300">{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-slate-900/50 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">Experience</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Experience shaped by product thinking and execution.</h2>
            </div>

            <div className="mt-10 space-y-6">
              {timeline.map((entry) => (
                <div key={entry.year} className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 md:grid-cols-[120px_1fr]">
                  <div className="text-2xl font-black text-cyan-300">{entry.year}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{entry.title}</h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.24em] text-slate-400">{entry.place}</p>
                    <p className="mt-3 max-w-2xl text-slate-300">{entry.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 shadow-2xl shadow-cyan-500/10 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">Let’s build</p>
                <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Need a standout digital presence that actually converts?</h2>
                <p className="mt-4 max-w-xl text-slate-300">
                  I help founders and businesses transform ideas into polished websites, stronger brands, and smoother user experiences.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 sm:p-6">
                <div className="space-y-4">
                  {contactMethods.map((item) => (
                    <div key={item.label} className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400 sm:text-xs">{item.label}</p>
                      <p className="mt-2 break-words text-base font-semibold text-white sm:text-lg">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-cyan-200 transition hover:bg-cyan-500/20 sm:text-xs"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 sm:flex-row lg:px-8">
          <p>© 2026 KENECHUKWU TECH-HUB</p>
          <p>Designed for bold brands and ambitious ideas.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
