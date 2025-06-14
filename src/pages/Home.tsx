import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";

const Home = ({ hideFooter = false }: { hideFooter?: boolean }) => {
  return (
    <PageLayout hideFooter={hideFooter}>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="w-full md:w-1/2 space-y-6 md:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h6 className="text-lg md:text-xl text-primary mb-2">Hello, I'm</h6>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold">Rithiha S K</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl text-primary">Frontend Developer</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground"
            >
              <p>
                Frontend Developer specializing in building responsive, high-performance web applications
                using React and modern UI technologies. Passionate about clean code, intuitive user experiences, 
                and scalable design systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button className="rounded-full px-8" size="lg">
                  View My Work
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="rounded-full px-8" size="lg">
                  Contact Me
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-4"
            >
              <p className="text-muted-foreground">Chennai, India</p>
              <p className="text-muted-foreground">29.rithi@gmail.com</p>
            </motion.div>
          </div>

          {/* Right profile image */}
          <motion.div
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative">
              {/* Decorative diamond shape */}
              <div className="absolute -inset-4 border-4 border-primary/20 rounded-full transform rotate-45 aspect-square" />
              <div className="relative rounded-full overflow-hidden border-4 border-primary/30 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-600 to-purple-900">
                <img
                  src="/Media (1).jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* This is where you would put your profile image */}
                <div className="w-full h-full flex items-center justify-center text-white text-xl">
                  Profile Image
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div
          onClick={() => {
            window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>

      </section>
    </PageLayout>
  );
};

export default Home;
