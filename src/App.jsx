
import { motion } from "motion/react";

// NAVBAR
function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-start text-white">
      <a href="#" className="font-bold text-sm tracking-widest">
        KHOA.K
      </a>

      <div className="flex flex-col text-right text-[10px] md:text-xs text-gray-400 gap-1">
        <a href="#about" className="hover:text-white transition">
          About me
        </a>
        <a href="#projects" className="hover:text-white transition">
          Projects
        </a>
        <a href="#contact" className="hover:text-white transition">
          Contact
        </a>
      </div>
    </nav>
  );
}

// HERO SECTION
function Hero() {
  return (
    <section className="hero relative min-h-[720px] h-screen overflow-hidden rounded-t-[30px] border border-white/20 m-2 bg-black">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#151515] to-[#bcbcbc]" />

      {/* NAVBAR */}
      <Navbar />

      {/* PORTRAIT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="absolute bottom-0 left-0 w-[48%] h-[78%] z-10"
      >
        <img
          src="/profile.jpg"
          alt="Nguyen Dang Khoa"
          className="w-full h-full object-cover object-top"
          style={{
            filter: "grayscale(100%) contrast(1.15)",
          }}
        />

        {/* Image blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]/80" />

        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/20" />
      </motion.div>

      {/* MAIN TEXT */}
      <div className="absolute z-20 left-[43%] top-[25%] right-[5%]">

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
        >
          <p className="uppercase text-gray-400 tracking-[5px] text-[10px] md:text-xs mb-6">
            Hello, I'm
          </p>

          <h1 className="hero-title text-white uppercase">
            NGUYEN
            <br />
            DANG
            <br />
            KHOA<span className="text-gray-400">.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-white/70 text-[9px] md:text-xs mt-6 max-w-[280px] leading-relaxed"
        >
          Frontend Developer & Creative Thinker.
          Building digital experiences through design and technology.
        </motion.p>

      </div>

      {/* SCROLL BUTTON */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1 }}
        className="absolute z-30 right-[7%] top-[25%] w-12 h-28 md:w-14 md:h-32 border border-white rounded-full flex justify-center items-center text-white"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-2xl"
        >
          ↓
        </motion.span>
      </motion.a>

      {/* BOTTOM TEXT */}
      <div className="absolute bottom-6 left-7 z-20 text-[9px] tracking-[4px] uppercase text-black/70">
        Scroll to explore
      </div>

      <div className="absolute bottom-6 right-7 z-20 text-[9px] text-black/70">
        © 2026 KHOA
      </div>

    </section>
  );
}

// ABOUT SECTION
function About() {
  return (
    <section
      id="about"
      className="bg-white text-black min-h-screen px-7 md:px-20 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <p className="text-xs tracking-[5px] text-gray-400">
          01 / ABOUT ME
        </p>

        <h2 className="text-5xl md:text-8xl font-bold mt-10 tracking-tighter leading-tight">
          BEYOND
          <br />
          THE CODE.
        </h2>

        <p className="max-w-xl text-gray-500 mt-10 leading-8">
          I'm Nguyen Dang Khoa, an Information Technology student
          passionate about web development, technology and creative
          digital experiences.

          I enjoy learning new technologies and building useful
          products through programming and design.
        </p>
      </motion.div>
    </section>
  );
}

// SKILLS SECTION
const skills = [
  "HTML & CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];

function Skills() {
  return (
    <section id="skills" className="bg-white text-black px-7 md:px-20 py-28">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[5px] text-gray-400">
          02 / MY SKILLS
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-8 mb-14 tracking-tighter">
          WHAT I DO.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="border border-gray-200 rounded-xl p-7 md:p-10 hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-xs text-gray-400">
                0{index + 1}
              </span>

              <h3 className="text-lg md:text-2xl font-bold mt-6">
                {skill}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// PROJECTS SECTION
const projects = [
  {
    number: "01",
    name: "AI NEWS WEBSITE",
    description: "A modern news platform integrated with AI.",
    tech: "React / Node.js / MongoDB",
  },
  {
    number: "02",
    name: "PERSONAL PORTFOLIO",
    description: "A minimalist portfolio website with motion effects.",
    tech: "React / Tailwind CSS / Motion",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#eeeeee] text-black px-7 md:px-20 py-28"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[5px] text-gray-400">
          03 / SELECTED WORK
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mt-8 mb-14 tracking-tighter">
          MY PROJECTS.
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200"
            >
              <p className="text-xs text-gray-400">
                PROJECT / {project.number}
              </p>

              <h3 className="text-3xl md:text-4xl font-black mt-12 tracking-tight">
                {project.name}
              </h3>

              <p className="text-gray-500 mt-5">
                {project.description}
              </p>

              <p className="text-xs font-semibold mt-10">
                {project.tech}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// CONTACT SECTION
function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-7 md:px-20 py-32"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-xs tracking-[5px] text-gray-400">
          04 / GET IN TOUCH
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black mt-10 tracking-tighter"
        >
          LET'S WORK
          <br />
          TOGETHER.
        </motion.h2>

        <a
          href="mailto:your-email@example.com"
          className="inline-block border border-white rounded-full px-8 py-4 mt-12 hover:bg-white hover:text-black transition"
        >
          Get in touch ↗
        </a>

        <div className="border-t border-gray-700 mt-28 pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 NGUYEN DANG KHOA</p>
          <p>DESIGNED WITH PASSION.</p>
        </div>

      </div>
    </section>
  );
}

// MAIN APP
function App() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
