
import { Link } from "react-router-dom";
// import Footer from "./Footer";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground shadow-inner">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="text-muted-foreground">
              A showcase of my work and skills as a software developer.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
              <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/Thilapooja" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/thila-pooja/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Thila Pooja K. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
