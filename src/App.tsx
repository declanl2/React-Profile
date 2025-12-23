import { SiGithub, SiGo, SiGooglecloud, SiKubernetes, SiNodedotjs, SiReact, SiTypescript } from '@icons-pack/react-simple-icons';
import { Linkedin, Mail, ExternalLink, Network } from 'lucide-react';

function App() {
  const skills = [
    { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
    { name: 'Go', icon: <SiGo className="w-4 h-4" /> },
    { name: 'React', icon: <SiReact className="w-4 h-4" /> },
    { name: 'Node.js', icon: <SiNodedotjs className="w-4 h-4" /> },
    { name: 'GCP', icon: <SiGooglecloud className="w-4 h-4" /> },
    { name: 'Kubernetes', icon: <SiKubernetes className="w-4 h-4" /> },
    { name: 'System Design', icon: <Network className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-base-200 font-sans">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#connect">Connect</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Declan Lawson</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#connect">Connect</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#connect" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>

      {/* Hero Section */}
      <div id="about" className="hero min-h-[60vh] bg-gradient-to-b from-base-100 to-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="avatar mb-8">
              <div className="w-32 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl">
                <img src={`https://ui-avatars.com/api/?name=Declan+Lawson&background=4f46e5&color=fff&size=256`} alt="Declan Lawson" />
              </div>
            </div>
            <h1 className="text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Declan Lawson
            </h1>
            <p className="text-2xl font-medium text-base-content/70 mb-8">
              Senior Software Engineer
            </p>
            <p className="text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Specialising in building scalable distributed systems and high-performance web applications. 
              I turn complex problems into elegant, maintainable code.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="badge badge-outline badge-lg p-6 gap-2 hover:bg-primary hover:text-primary-content transition-colors cursor-default">
                {skill.icon}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Links / Socials Section */}
      <div id="connect" className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-black text-center mb-16">Let's Connect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* GitHub Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all group">
            <div className="card-body p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-neutral text-neutral-content rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <SiGithub size={24} />
                </div>
                <ExternalLink className="text-base-content/20 group-hover:text-primary transition-colors" size={20} />
              </div>
              <h2 className="card-title text-2xl font-bold mb-2">GitHub</h2>
              <p className="text-base-content/60 mb-6">Open source projects, technical experiments, and code samples.</p>
              <div className="card-actions">
                <a href="https://github.com/declanl2" target="_blank" rel="noopener noreferrer" className="btn btn-block btn-neutral normal-case">
                  @declanl2
                </a>
              </div>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all group">
            <div className="card-body p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={24} />
                </div>
                <ExternalLink className="text-base-content/20 group-hover:text-primary transition-colors" size={20} />
              </div>
              <h2 className="card-title text-2xl font-bold mb-2 text-blue-700">LinkedIn</h2>
              <p className="text-base-content/60 mb-6">Professional networking, career history, and industry connections.</p>
              <div className="card-actions">
                <a href="https://www.linkedin.com/in/declanlawson/" target="_blank" rel="noopener noreferrer" className="btn btn-block btn-primary normal-case">
                  /in/declanlawson
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="card bg-base-100 shadow-xl border border-base-300 hover:border-primary/50 transition-all group">
            <div className="card-body p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-primary text-primary-content rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <ExternalLink className="text-base-content/20 group-hover:text-primary transition-colors" size={20} />
              </div>
              <h2 className="card-title text-2xl font-bold mb-2">Email</h2>
              <p className="text-base-content/60 mb-6">Reach out for collaborations, opportunities, or just to say hi.</p>
              <div className="card-actions">
                <a href="mailto:hi@declanlawson.dev" className="btn btn-block btn-secondary normal-case">
                  hi@declanlawson.dev
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="footer footer-center p-12 bg-base-300 text-base-content mt-20">
        <aside>
          <div className="font-black text-2xl mb-4">DL</div>
          <p className="max-w-md opacity-70">
            Building the future of software, one commit at a time.
            <br />
            Designed with DaisyUI and React.
          </p>
          <p className="mt-8 opacity-50 text-xs uppercase tracking-widest font-bold">
            © {new Date().getFullYear()} Declan Lawson
          </p>
        </aside>
      </footer>
    </div>
  );
}

export default App;