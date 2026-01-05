// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import PageLayout from "@/components/PageLayout";
// import { FaReact, FaAngular, FaVuejs, FaBootstrap, FaDocker, FaAws, FaGithub } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiKubernetes } from "react-icons/si";


// const Skills = ({ hideFooter = false }: { hideFooter?: boolean }) => {
//   const [activeCategory, setActiveCategory] = useState("fullstack");

//   // Skill category buttons
//   const categories = [
//     { id: "fullstack", label: "Full-Stack" },
//     { id: "ai", label: "Generative AI" },
//     { id: "devops", label: "DevOps & Other" },
//   ];

//   // Skills by category
//   const skillsByCategory = {
//     fullstack: [
//       { name: "React", icon: <FaReact /> },
//       { name: "Angular", icon: <FaAngular /> },
//       { name: "Next.js", icon: <SiNextdotjs /> },
//       { name: "Vue.js", icon: <FaVuejs /> },
//       { name: "Tailwind CSS", icon: <SiTailwindcss /> },
//       { name: "Bootstrap", icon: <FaBootstrap /> },
//       { name: "Express.js", icon: <SiExpress /> },
//       { name: "MongoDB", icon: <SiMongodb /> },
//     ],
//     ai: [
//       { name: "TensorFlow", icon: <SiTensorflow /> },
//       { name: "PyTorch", icon: <SiPytorch /> },
//       { name: "OpenAI API", icon: <SiOpenai /> },
//       { name: "Hugging Face", icon: <SiHuggingface /> },
//     ],
//     devops: [
//       { name: "Docker", icon: <FaDocker /> },
//       { name: "Kubernetes", icon: <SiKubernetes /> },
//       { name: "AWS", icon: <FaAws /> },
//       { name: "GitHub Actions", icon: <FaGithub /> },
//     ],
//   };


//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//     },
//   };

//   return (
//     <PageLayout hideFooter={hideFooter}>
//       <section className="section-padding">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <motion.h1
//               className="section-title heading-underline-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               Skills & Expertise
//             </motion.h1>
//             <motion.p
//               className="section-subtitle"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               My technical toolkit includes a versatile range of languages, frameworks, and
//               technologies that I've mastered throughout my journey as a software developer.
//             </motion.p>
//           </div>

//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {categories.map((category) => (
//               <motion.button
//                 key={category.id}
//                 onClick={() => setActiveCategory(category.id)}
//                 className={`px-6 py-3 rounded-full transition-all ${activeCategory === category.id
//                   ? "bg-primary text-primary-foreground shadow-md"
//                   : "bg-card hover:bg-secondary"
//                   }`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {category.id === "fullstack" && <span></span>}
//                 {category.id === "ai" && <span>🤖 </span>}
//                 {category.id === "devops" && <span>⚙️ </span>}
//                 {category.label}
//               </motion.button>
//             ))}
//           </div>

//           {/* Progress bar controls */}
//           <div className="flex justify-center items-center space-x-4 mb-16">
//             <motion.button
//               className="size-10 rounded-full bg-secondary flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
//                 <path d="M9 12h6" />
//               </svg>
//             </motion.button>

//             <motion.button
//               className="size-8 rounded-full border border-secondary flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M10 9l-6 6 6 6" />
//                 <path d="M20 4v7a4 4 0 0 1-4 4H4" />
//               </svg>
//             </motion.button>

//             <div className="text-sm text-muted-foreground">1.0x</div>

//             <motion.button
//               className="size-8 rounded-full border border-secondary flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="18"
//                 height="18"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <path d="M14 9l6 6-6 6" />
//                 <path d="M4 4v7a4 4 0 0 0 4 4h12" />
//               </svg>
//             </motion.button>
//           </div>

//           {/* Skills marquee row */}
//           <div className="overflow-x-hidden w-full mb-12">
//             <motion.div
//               className="flex gap-6 items-center"
//               style={{ width: 'max-content' }}
//               animate={{ x: [0, -1000] }}
//               transition={{
//                 x: {
//                   repeat: Infinity,
//                   repeatType: "loop",
//                   duration: 18,
//                   ease: "linear"
//                 }
//               }}
//             >
//               {skillsByCategory[activeCategory as keyof typeof skillsByCategory]?.map((skill, index) => (
//                 <div
//                   key={`${activeCategory}-marquee-${index}`}
//                   className="flex flex-col items-center bg-card rounded-lg px-6 py-3 shadow-sm border border-border min-w-[120px] mx-2"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center mb-2 text-2xl">
//                     {skill.icon}
//                   </div>
//                   <span className="text-xs font-medium text-center whitespace-nowrap">{skill.name}</span>
//                 </div>
//               ))}
//               {/* Duplicate for seamless loop */}
//               {skillsByCategory[activeCategory as keyof typeof skillsByCategory]?.map((skill, index) => (
//                 <div
//                   key={`${activeCategory}-marquee-dup-${index}`}
//                   className="flex flex-col items-center bg-card rounded-lg px-6 py-3 shadow-sm border border-border min-w-[120px] mx-2"
//                 >
//                   <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center mb-2 text-2xl">
//                     {skill.icon}
//                   </div>
//                   <span className="text-xs font-medium text-center whitespace-nowrap">{skill.name}</span>
//                 </div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Tools & Platforms section */}
//           <div className="mt-24">
//             <div className="grid md:grid-cols-2 gap-8">
//               {/* Tools & Platforms Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.3 }}
//                 className="bg-gradient-to-br from-[#1e1e2f] to-[#2b2b3c] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105"
//               >
//                 <h3 className="text-2xl font-semibold text-purple-400 mb-6">
//                   Tools & Platforms
//                 </h3>

//                 <div className="grid grid-cols-3 gap-3">
//                   <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?auto=format%252Ccompress" alt="MongoDB Logo" className="w-6 h-6 mr-2" />
//                       MongoDB
//                     </div>
//                   </a>

//                   <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="w-6 h-6 mr-2" />
//                       AWS
//                     </div>
//                   </a>

//                   <a href="https://cloud.google.com" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://cloud.google.com/images/social-icon-google-cloud-1200-630.png" alt="GCP Logo" className="w-6 h-6 mr-2" />
//                       GCP
//                     </div>
//                   </a>

//                   <a href="https://swagger.io" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" alt="Swagger Logo" className="w-6 h-6 mr-2" />
//                       Swagger
//                     </div>
//                   </a>

//                   <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" className="w-6 h-6 mr-2" />
//                       Vite
//                     </div>
//                   </a>

//                   {/* <a href="https://jestjs.io" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://jestjs.io/img/jest.png" alt="Jest Logo" className="w-6 h-6 mr-2" />
//                       Jest
//                     </div>
//                   </a> */}

//                   {/* <a href="https://prometheus.io" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://prometheus.io/assets/prometheus_logo.svg" alt="Prometheus Logo" className="w-6 h-6 mr-2" />
//                       Prometheus
//                     </div>
//                   </a> */}
//                   {/* 
//                   <a href="https://grafana.com" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://grafana.com/static/img/grafana_logo.svg" alt="Grafana Logo" className="w-6 h-6 mr-2" />
//                       Grafana
//                     </div>
//                   </a> */}

//                   <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
//                     <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
//                       <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman Logo" className="w-6 h-6 mr-2" />
//                       Postman
//                     </div>
//                   </a>
//                 </div>

//                 <div className="mt-6 text-sm text-gray-400 flex items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="18"
//                     height="18"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="mr-2"
//                   >
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
//                     <line x1="12" y1="17" x2="12.01" y2="17"></line>
//                   </svg>
//                   Click on a tool to visit its official website!
//                 </div>
//               </motion.div>

//               {/* Areas of Expertise Card */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.4 }}
//                 className="bg-gradient-to-br from-[#1e1e2f] to-[#2b2b3c] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105"
//               >
//                 <h3 className="text-2xl font-semibold text-purple-400 mb-6">
//                   Areas of Expertise
//                 </h3>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {[
//                     {
//                       title: "Full-Stack Development",
//                       description: "MERN & MEAN Stack",
//                       icon: "💻",
//                     },
//                     {
//                       title: "Generative AI & ML",
//                       description: "LLMs & Neural Networks",
//                       icon: "🤖",
//                     },
//                     {
//                       title: "Cloud Solutions",
//                       description: "AWS & GCP Infrastructure",
//                       icon: "☁️",
//                     },
//                     {
//                       title: "API Architecture",
//                       description: "RESTful & Microservices",
//                       icon: "🔌",
//                     },
//                     {
//                       title: "DevOps & CI/CD",
//                       description: "Automation & Pipelines",
//                       icon: "⚙️",
//                     },
//                     {
//                       title: "UI/UX Design",
//                       description: "Modern Interfaces",
//                       icon: "🎨",
//                     },
//                   ].map((area, index) => (
//                     <div
//                       key={index}
//                       className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
//                     >
//                       <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-xl shadow-md">
//                         {area.icon}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-white">{area.title}</h4>
//                         <p className="text-sm text-gray-400">{area.description}</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// };

// export default Skills;
// components/Skills.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { FaReact, FaAngular, FaVuejs, FaBootstrap, FaDocker, FaAws, FaGithub, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb, SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiKubernetes } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import OrbitingCircles from "@/pages/OrbitingCircles";

const Skills = ({ hideFooter = false }: { hideFooter?: boolean }) => {
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const categories = [
    { id: "fullstack", label: "Full-Stack" },
    // { id: "ai", label: "Generative AI" },
    // { id: "devops", label: "DevOps & Other" },
  ];

  const skillsByCategory = {
    fullstack: [
      { name: "React", icon: <FaReact /> },
      { name: "Angular", icon: <FaAngular /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
    // ai: [
    //   { name: "TensorFlow", icon: <SiTensorflow /> },
    //   { name: "PyTorch", icon: <SiPytorch /> },
    //   { name: "OpenAI API", icon: <SiOpenai /> },
    //   { name: "Hugging Face", icon: <SiHuggingface /> },
    // ],
    devops: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Kubernetes", icon: <SiKubernetes /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "GitHub Actions", icon: <FaGithub /> },
    ],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <PageLayout hideFooter={hideFooter}>
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 relative">
            <div className="flex items-center justify-center">
              <motion.h1
                className="section-title heading-underline-center text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Skills & Expertise
              </motion.h1>
              {/* Small Orbiting Circles as a decorative globe */}
              <div className="relative w-[60px] h-[60px] ml-3">
                <div className="absolute inset-0 flex items-center justify-center">
                  <OrbitingCircles iconSize={14} radius={25} speed={1}>
                    <BiLogoTypescript className="text-blue-400" />
                    <FaReact className="text-cyan-400" />
                    <SiNextdotjs className="text-white" />
                    <RiJavascriptFill className="text-yellow-400" />
                  </OrbitingCircles>
                  <OrbitingCircles iconSize={10} radius={15} speed={1.5} reverse>
                    <FaNode className="text-green-400" />
                    <SiTailwindcss className="text-teal-400" />
                    <DiMongodb className="text-green-400" />
                    <SiExpress className="text-white" />
                  </OrbitingCircles>
                </div>
              </div>
            </div>
            <motion.p
              className="section-subtitle mt-4 text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My technical toolkit includes a versatile range of languages, frameworks, and
              technologies that I've pursued throughout my journey as a software developer.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all ${activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card hover:bg-secondary"
                  }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.id === "fullstack" && <span></span>}
                {category.id === "ai" && <span>🤖 </span>}
                {category.id === "devops" && <span>⚙️ </span>}
                {category.label}
              </motion.button>
            ))}
          </div>

          <div className="overflow-x-hidden w-full mb-12">
            <motion.div
              className="flex gap-6 items-center"
              style={{ width: "max-content" }}
              animate={{ x: [0, -1000] }}
              transition={{
                x: { repeat: Infinity, repeatType: "loop", duration: 18, ease: "linear" },
              }}
            >
              {skillsByCategory[activeCategory as keyof typeof skillsByCategory]?.map((skill, index) => (
                <div
                  key={`${activeCategory}-marquee-${index}`}
                  className="flex flex-col items-center bg-card rounded-lg px-6 py-3 shadow-sm border border-border min-w-[120px] mx-2"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center mb-2 text-2xl">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium text-center whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
              {skillsByCategory[activeCategory as keyof typeof skillsByCategory]?.map((skill, index) => (
                <div
                  key={`${activeCategory}-marquee-dup-${index}`}
                  className="flex flex-col items-center bg-card rounded-lg px-6 py-3 shadow-sm border border-border min-w-[120px] mx-2"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center mb-2 text-2xl">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-medium text-center whitespace-nowrap">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-24">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  className="bg-gradient-to-br from-[#1e1e2f] to-[#2b2b3c] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105"
>
  <h3 className="text-2xl font-semibold text-purple-400 mb-6">Tools & Platforms</h3>
  <div className="grid grid-cols-3 gap-3">
    {/* VS Code */}
    <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
        <img src="/public/vscodelogo.jpg" alt="VS Code" className="w-6 h-6 mr-2" />
        VS Code
      </div>
    </a>

    {/* Vite */}
    <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
        <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" className="w-6 h-6 mr-2" />
        Vite
      </div>
    </a>

    {/* Postman */}
    <a href="https://www.postman.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
        <img src="https://voyager.postman.com/logo/postman-logo-icon-orange.svg" alt="Postman Logo" className="w-6 h-6 mr-2" />
        Postman
      </div>
    </a>
    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="/public/react.png"
      alt="React Logo"
      className="w-6 h-6 mr-2"
    />
    React
  </div>
</a>

    {/* Bootstrap */}
    <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
        <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow@2x.png" alt="Bootstrap Logo" className="w-6 h-6 mr-2" />
        Bootstrap
      </div>
    </a>

    {/* Tailwind CSS */}
    <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
        <img src="https://tailwindcss.com/favicons/favicon-32x32.png" alt="Tailwind Logo" className="w-6 h-6 mr-2" />
        Tailwind CSS
      </div>
    </a>

    {/* GitHub */}
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
        <img src="https://github.githubassets.com/favicons/favicon.png" alt="GitHub Logo" className="w-6 h-6 mr-2" />
        GitHub
      </div>
    </a>
    
    {/* java */}
    <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="/public/java.png"
      alt="Java Logo"
      className="w-6 h-6 mr-2"
    />
    Java
  </div>
</a>
{/* springboot */}
<a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="/public/springbootlogo1.jpg"
      alt="Springboot Logo"
      className="w-6 h-6 mr-2"
    />
    Springboot
  </div>
</a>
  {/* mangodb */}
    <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="data:image/png;base64,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"
      alt="MongoDB Logo"
      className="w-6 h-6 mr-2"
    />
    MongoDB
  </div>
</a>

<a href="https://expressjs.com" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="data:image/png;base64,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"
      alt="Express.js Logo"
      className="w-6 h-6 mr-2"
    />
    Express.js
  </div>
</a>

<a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="https://nodejs.org/static/images/logo.svg"
      alt="Node.js Logo"
      className="w-6 h-6 mr-2"
    />
    Node.js
  </div>
</a>

<a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
      alt="AWS Logo"
      className="w-6 h-6 mr-2"
    />
    AWS
  </div>
</a>
<a href="https://www.pega.com/" target="_blank" rel="noopener noreferrer">
  <div className="bg-white/5 backdrop-blur-md rounded-lg p-3 flex items-center justify-center text-center transition-all duration-300 font-medium text-white text-sm hover:bg-white/10 hover:scale-105">
    <img
      src="/public/pegalogo.png"
      alt="Pega Logo"
      className="w-6 h-6 mr-2"
    />
    Pega
  </div>
</a>

  </div>
  <div className="mt-6 text-sm text-gray-400 flex items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
    Click on a tool to visit its official website!
  </div>
</motion.div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#1e1e2f] to-[#2b2b3c] backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/10 transition-transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-6">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                   { title: "Component Architecture", description: "Reusable & Scalable UI", icon: "🧩" },
    { title: "State Management", description: "Hooks, Context API, Redux", icon: "🗂️" },
    { title: "Routing & Navigation", description: "React Router & Dynamic Routes", icon: "🧭" },
    { title: "API Integration", description: "Axios, Fetch, React Query", icon: "🔗" },
    { title: "Performance Optimization", description: "Memoization & Lazy Loading", icon: "🚀" },
  { title: "Testing & Debugging", description: "Jest & React Testing Library", icon: "🧪" },
                  ].map((area, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 text-white flex items-center justify-center text-xl shadow-md">
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{area.title}</h4>
                        <p className="text-sm text-gray-400">{area.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Skills;