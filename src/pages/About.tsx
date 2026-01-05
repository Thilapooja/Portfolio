
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import PageLayout from "@/components/PageLayout";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// const About = ({ hideFooter = false }: { hideFooter?: boolean }) => {
//   const [activeTab, setActiveTab] = useState("fullstack");
//   const [summary, setSummary] = useState("");
//   const generateSummary = () => {
//     const developer = {
//       name: "Thila Pooja K",
//       phone: "6380577896",
//       email: "rithiha.s.k@gmail.com",
//       experience: "2+ years",
//       role: "Full Stack Developer"
//     };

//     const result = `${developer.name} is a ${developer.role} with ${developer.experience} of experience. You can reach her at ${developer.email} or call ${developer.phone}.`;
//     setSummary(result);
//   };


//   return (
//     <PageLayout hideFooter={hideFooter}>
//       <section className="section-padding">
//         <div className="container mx-auto max-w-5xl">
//           <div className="text-center mb-16">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//             >
//               <h1 className="section-title heading-underline-center">About Me</h1>
//             </motion.div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             {/* Left side - Image */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-card rounded-lg p-5 shadow-md"
//             >
//               <div className="bg-gradient-to-r from-purple-500 to-purple-900 p-1 rounded-lg">
//                 <div className="aspect-square rounded-lg bg-muted overflow-hidden">
//                   {/* Placeholder for your image */}
//                   <div className="w-full h-full flex items-center justify-center text-xl">Your Image</div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Right side - Information */}
//             <div className="space-y-6">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//               >
//                 <h2 className="text-2xl font-semibold">Who I Am</h2>
//                 <div className="h-1 w-16 bg-primary rounded-full mt-2 mb-4"></div>
//                 <p className="text-muted-foreground">
//                   I'm a passionate software developer with expertise in creating
//                   modern applications using cutting-edge technologies. With a
//                   strong foundation in full-stack development, I enjoy solving
//                   complex problems and delivering scalable solutions.
//                 </p>
//               </motion.div>

//               <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: 0.5 }}
//       className="space-y-4 relative max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl"
//       style={{ backdropFilter: "blur(10px)" }}
//     >
//       <style jsx>{`
//         .tab-container {
//           position: relative;
//           overflow: hidden;
//         }

//         .tab-button {
//           position: relative;
//           z-index: 10;
//           transition: color 0.3s ease;
//         }

//         .tab-button.active {
//           color: #00ffcc;
//           font-weight: 600;
//         }

//         .tab-button::before {
//           content: '';
//           position: absolute;
//           bottom: -2px;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(90deg, #00ffcc, #ff00ff);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease;
//         }

//         .tab-button.active::before {
//           transform: scaleX(1);
//         }

//         .tab-button:hover::after {
//           content: '';
//           position: absolute;
//           top: -10px;
//           left: -10px;
//           right: -10px;
//           bottom: -10px;
//           background: radial-gradient(circle, rgba(0, 255, 204, 0.2) 0%, transparent 70%);
//           z-index: -1;
//           animation: pulse 1.5s infinite;
//         }

//         @keyframes pulse {
//           0% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.2); opacity: 0.2; }
//           100% { transform: scale(1); opacity: 0.5; }
//         }

//         .tab-content {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 8px;
//           padding: 1.5rem;
//           box-shadow: inset 0 0 10px rgba(0, 255, 204, 0.1);
//         }

//         .content-text {
//           background: linear-gradient(45deg, #e0e0e0, #a0a0a0);
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }

//         .tab-slider {
//           position: absolute;
//           bottom: 0;
//           height: 4px;
//           background: linear-gradient(90deg, #00ffcc, #ff00ff);
//           transition: transform 0.5s ease;
//           z-index: 5;
//         }
//       `}</style>

//       <div className="tab-container flex flex-wrap gap-3 border-b border-gray-700 relative">
//         <div
//           className="tab-slider"
//           style={{
//             width: `${100 / 3}%`,
//             transform: `translateX(${
//               activeTab === "fullstack" ? 0 : activeTab === "specialized" ? 100 : 200
//             }%)`,
//           }}
//         ></div>
//         <button
//           onClick={() => setActiveTab("fullstack")}
//           className={`tab-button px-4 py-2 transition-colors ${
//             activeTab === "fullstack"
//               ? "active text-primary"
//               : "text-gray-300 hover:text-cyan-400"
//           }`}
//         >
//           Full Stack
//         </button>
//         <button
//           onClick={() => setActiveTab("specialized")}
//           className={`tab-button px-4 py-2 transition-colors ${
//             activeTab === "specialized"
//               ? "active text-primary"
//               : "text-gray-300 hover:text-cyan-400"
//           }`}
//         >
//           Specialized
//         </button>
//         <button
//           onClick={() => setActiveTab("scalable")}
//           className={`tab-button px-4 py-2 transition-colors ${
//             activeTab === "scalable"
//               ? "active text-primary"
//               : "text-gray-300 hover:text-cyan-400"
//           }`}
//         >
//           Scalable
//         </button>
//       </div>

//       <div className="tab-content py-4">
//         {activeTab === "fullstack" && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="animate-fade-in"
//           >
//             <p className="content-text text-lg">
//               Crafting seamless end-to-end web applications with React, Angular, and Node.js, I excel in both front-end and back-end development for a cohesive stack.
//             </p>
//           </motion.div>
//         )}
//         {activeTab === "specialized" && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="animate-fade-in"
//           >
//             <p className="content-text text-lg">
//               Passionate about AI, mobile apps, and cloud solutions, I embrace cutting-edge technologies to deliver innovative and impactful projects.
//             </p>
//           </motion.div>
//         )}
//         {activeTab === "scalable" && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.4 }}
//             className="animate-fade-in"
//           >
//             <p className="content-text text-lg">
//               Designing scalable microservices and cloud architectures with AWS, Docker, and Kubernetes, I build high-performance systems that grow with your vision.
//             </p>
//           </motion.div>
//           </div>
//           </motion.div>



//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="flex flex-wrap gap-4"
//               >
//                 <Link to="/contact">
//                   <Button className="rounded-full px-6">Get In Touch</Button>
//                 </Link>
//                 <a
//                   href="/Rithiha_S_K_Resume.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Button variant="outline" className="rounded-full px-6">
//                     View Resume (PDF)
//                   </Button>
//                 </a>

//               </motion.div>
//             </div>
//           </div>

//           {/* Code snippet feature */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7 }}
//             className="mt-24 bg-card p-6 rounded-xl shadow-lg"
//           >
//             <h3 className="text-2xl font-semibold mb-4">Try it yourself!</h3>
//             <p className="text-muted-foreground mb-6">
//               Type your developer object below and generate a summary.
//             </p>

//             <div className="bg-secondary/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
//               <div className="flex gap-1.5 mb-3">
//                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
//                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
//                 <span className="ml-2 text-muted-foreground">developer.js</span>
//               </div>
//               <pre className="text-left">
//                 <code>{`const developer = {
//   name: "Thila Pooja K",
//   phone: "6380577896",
//   email: "rithiha.s.k@gmail.com",
//   experience: "2+ years",
//   role: "Full Stack Developer"
// };

// generateSummary(developer);`}</code>
//               </pre>
//             </div>

//             <div className="mt-6">
//               <Button className="w-full sm:w-auto" onClick={generateSummary}>
//                 Generate Summary
//               </Button>
//             </div>

//             {summary && (
//               <div className="mt-4 p-4 rounded-md bg-muted text-sm text-muted-foreground border border-border">
//                 {summary}
//               </div>
//             )}
//           </motion.div>

//         </div>
//       </section>
//     </PageLayout>
//   );
// };

// export default About;
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./SkillsTabs.module.css"; 

const About = ({ hideFooter = false }: { hideFooter?: boolean }) => {
  const [activeTab, setActiveTab] = useState("fullstack");
  const [summary, setSummary] = useState("");

  const generateSummary = () => {
    const developer = {
      name: "Thila Pooja K",
      phone: "6380577896",
      email: "thilapooja18@gmail.com",
      experience: "Fresher",
      role: "Software Developer",
    };

    const result = `${developer.name} is a ${developer.role} with ${developer.experience} of experience. You can reach her at ${developer.email} or call ${developer.phone}.`;
    setSummary(result);
  };

  return (
    <PageLayout hideFooter={hideFooter}>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="section-title heading-underline-center">About Me</h1>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-lg p-5 shadow-md"
            >
              <div className="bg-gradient-to-r from-purple-500 to-purple-900 p-1 rounded-lg">
                <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-xl">
                    <img
                      src="/Graduation_pic.jpeg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    /></div>
                </div>
              </div>
            </motion.div>

            {/* Right side - Information */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold">Who I Am</h2>
                <div className="h-1 w-16 bg-primary rounded-full mt-2 mb-4"></div>
                <p className="text-muted-foreground">
                  I'm a passionate software developer with expertise in creating
                  modern applications using cutting-edge technologies. With a
                  strong foundation in frontend development, I enjoy solving
                  complex problems and delivering scalable solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`space-y-4 relative max-w-3xl mx-auto p-6 rounded-xl bg-gradient-to-br from-gray-900 to/production/enterprise/gray-800 shadow-2xl ${styles.tabContainer}`}
                style={{ backdropFilter: "blur(10px)" }}
              >
                <div className={`flex flex-wrap gap-3 border-b border-gray-700 relative ${styles.tabContainer}`}>
                  <div
                    className={styles.tabSlider}
                    style={{
                      width: `${100 / 3}%`,
                      transform: `translateX(${activeTab === "fullstack" ? 0 : activeTab === "specialized" ? 100 : 200
                        }%)`,
                    }}
                  ></div>
                  <button
                    onClick={() => setActiveTab("fullstack")}
                    className={`${styles.tabButton} px-4 py-2 transition-colors ${activeTab === "fullstack"
                      ? `${styles.active} text-primary`
                      : "text-gray-300 hover:text-cyan-400"
                      }`}
                  >
                    Development
                  </button>
                  <button
                    onClick={() => setActiveTab("specialized")}
                    className={`${styles.tabButton} px-4 py-2 transition-colors ${activeTab === "specialized"
                      ? `${styles.active} text-primary`
                      : "text-gray-300 hover:text-cyan-400"
                      }`}
                  >
                    Specialized
                  </button>
                  <button
                    onClick={() => setActiveTab("scalable")}
                    className={`${styles.tabButton} px-4 py-2 transition-colors ${activeTab === "scalable"
                      ? `${styles.active} text-primary`
                      : "text-gray-300 hover:text-cyan-400"
                      }`}
                  >
                    Scalable
                  </button>
                </div>

                <div className={`py-4 ${styles.tabContent}`}>
                  {activeTab === "fullstack" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="animate-fade-in"
                    >
                      <p className={`text-lg ${styles.contentText}`}>
                       Crafting seamless and responsive web interfaces with React, I focus on delivering intuitive, high-performance user experiences through clean and scalable front-end development.
                      </p>
                    </motion.div>
                  )}
                  {activeTab === "specialized" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="animate-fade-in"
                    >
                      <p className={`text-lg ${styles.contentText}`}>
                        Specialized in crafting scalable, high-performance web interfaces with React.
                      </p>
                    </motion.div>
                  )}
                  {activeTab === "scalable" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="animate-fade-in"
                    >
                      <p className={`text-lg ${styles.contentText}`}>
                       Delivering tailored frontend solutions built for scalability and user experience.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button className="rounded-full px-6">Get In Touch</Button>
                </Link>
                <a
                  href="/Thila_Pooja_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="rounded-full px-6">
                    View Resume (PDF)
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Code snippet feature */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-24 bg-card p-6 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">Try it yourself!</h3>
            <p className="text-muted-foreground mb-6">
              Type your developer object below and generate a summary.
            </p>

            <div className="bg-secondary/40 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-2 text-muted-foreground">developer.js</span>
              </div>
              <pre className="text-left">
                <code>{`const developer = {
  name: "Thila Pooja K",
  phone: "6380577896",
  email: "thilapooja18@gmail.com",
  experience: "Fresher",
  role: "Software Developer"
};

generateSummary(developer);`}</code>
              </pre>
            </div>

            <div className="mt-6">
              <Button className="w-full sm:w-auto" onClick={generateSummary}>
                Generate Summary
              </Button>
            </div>

            {summary && (
              <div className="mt-4 p-4 rounded-md bg-muted text-sm text-muted-foreground border border-border">
                {summary}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;