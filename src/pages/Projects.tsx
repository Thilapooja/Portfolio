import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";

// Project type definition
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  technologies: string[];
}

const Projects = ({ hideFooter = false }: { hideFooter?: boolean }) => {
  // Projects data
  const projects: Project[] = [
     {

      id: "project1",

      title: "  Inventory Management System",

      description: "A full-featured game library platform allowing users to browse, search, and manage a collection of games in a modern website with authentication.",

      image: "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2022/06/22143950/Inventory-with-Hardware-Slide-In.png",

      categories: ["all", "web"],

      technologies: ["React", "Node.js", "MongoDB", "Express", "Authentication"],

    },
    {
      id: "project2",
      title: "Nike Clone Website",
      description: "A modern, responsive clone of the Nike e-commerce website with sleek UI, product listings, and interactive shopping features.",
      image: "https://s3-alpha.figma.com/hub/file/5123384695/d14d77e8-ad7c-4e9a-861c-1aa2c424f8e8-cover.png",
      categories: ["all", "web"],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
    },
  ];

  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Filtering logic
  const filteredProjects = projects.filter((project) =>
    project.categories.includes(filter)
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageLayout hideFooter={hideFooter}>
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h1
              className="section-title heading-underline-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              My Projects
            </motion.h1>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Browse through my recent projects showcasing my skills and experience in web
              development, mobile applications, and AI integration.
            </motion.p>
          </div>

          {/* Filter buttons */}
          <motion.div
            className="flex justify-center gap-4 mb-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {["all", "web"].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all ${filter === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-card hover:bg-secondary"
                  }`}
                onClick={() => setFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} Projects
              </button>
            ))}
          </motion.div>

          {/* Projects grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-md"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform:
                        hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-secondary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-primary hover:underline font-medium flex items-center group">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
