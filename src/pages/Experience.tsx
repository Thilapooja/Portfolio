import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = ({ hideFooter = false }: { hideFooter?: boolean }) => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <PageLayout hideFooter={hideFooter}>
      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <motion.h1
              className="section-title heading-underline-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Experience & Certifications
            </motion.h1>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              My professional journey, educational background, certifications, and publications.
            </motion.p>
          </div>

          <Tabs defaultValue="experience" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-xl grid-cols-3 bg-secondary/50">
                <TabsTrigger value="experience" className="data-[state=active]:bg-primary data-[state=active]:text-white">Experience</TabsTrigger>
                <TabsTrigger value="certifications" className="data-[state=active]:bg-primary data-[state=active]:text-white">Certifications</TabsTrigger>
                <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-white">Education</TabsTrigger>
                {/* Publications tab removed, grid-cols-3 fixes spacing */}
              </TabsList>
            </div>

            <TabsContent value="experience" className="animate-fade-in">
              <div className="space-y-10 relative">
                {/* Timeline line */}
                <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-primary/30" />

                {/* Experience 1 */}
                <motion.div
                  className="relative pl-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute left-0 w-14 h-14 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-blue-500" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
                      <div className="text-primary font-medium">@ Amdox Technologies</div>
                    </div>
                    <div className="px-4 py-1 bg-primary/10 rounded-full text-primary text-sm">
                      2025 - Present
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Leading development of web and mobile applications for enterprise clients.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Developed high-performing cloud-hosted applications using the Java Full stack and AWS</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Created secure RESTful APIs and microservices for seamless integration across platforms</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Implemented unit and integration testing practices for code quality and functionality</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Ensured product consistency with UI/UX design using Figma</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Worked on practical Java projects involving software development and application design.</span>
                    </li>
                  </ul>
                </motion.div>

                {/* Experience 2 */}
                <motion.div
                  className="relative pl-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="absolute left-0 w-14 h-14 rounded-full bg-card border-4 border-primary flex items-center justify-center z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-400" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">Web Developer Intern</h3>
                      <div className="text-primary font-medium">@ Infotact Solutions</div>
                    </div>
                    <div className="px-4 py-1 bg-primary/10 rounded-full text-primary text-sm">
                      2025
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Worked on web development projects in MERN Stack
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Built full-stack web applications using the MERN stack</span>  
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                       <span>Skilled in creating RESTful APIs and connecting MongoDB databases</span> 
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                       <span>Implemented responsive UI components using React</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                       <span>Learned best practices in code structure, testing, and deployment</span>
                    </li>   
                    <li className="flex items-start">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg> */}
                      {/* <span>Published research findings in peer-reviewed journals and conferences</span>s */}
                    </li>
                  </ul>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="certifications" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Java Full Stack Developer",
                    issuer: "Beesant Technologies",
                    date: "2025",
                    description: "Certified in developing end-to-end web applications using Java, Spring Boot, REST APIs, databases, and modern frontend technologies.",
                    icon: "⚛️",
                  },
                  {
                    title: "Pega Certified Senior System Architect (CSSA)",
                    issuer: "Pega Systems",
                    date: "2024",
                    description: "Certified expert in designing, developing, and optimizing complex Pega applications with advanced architecture skills.",
                    icon: "📊",
                  },
                  {
                    title: "Pega Certified System Architect (CSA)",
                    issuer: "Pega Systems",
                    date: "2023",
                    description: "Certified in building and configuring Pega applications using low-code development best practices.",
                    icon: "☁️",
                  },
                  {
                    title: "Java Foundations",
                    issuer: "Oracle",
                    date: "2023",
                    description: "Certified in core Java fundamentals, including object-oriented programming, basic data structures, and application development.",
                    icon: "🧠",
                  },
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    className="bg-card p-6 rounded-xl border border-border shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="mr-4 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{cert.title}</h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>{cert.issuer}</span>
                          <span className="mx-2">•</span>
                          <span>{cert.date}</span>
                        </div>
                        <p className="mt-2 text-muted-foreground text-sm">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* <div className="mt-8 flex justify-center">
                <Button variant="outline">View All Certifications</Button>
              </div> */}
            </TabsContent>

            <TabsContent value="education" className="animate-fade-in">
              <div className="space-y-8">
                {[
                  {
                    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
                    institution: "Sri Krishna College of Engineering and Technology",
                    date: "2020 - 2024",
                    description: [
                      "Specialized in frontend development with a focus on UI/UX and responsive design",
                      "Proficient in React, JavaScript, and modern web technologies",
                      "Participated in tech conferences and hackathons to apply skills in real-world challenges"
                    ],
                    achievements: [
                      "First Class with Distinction",
                      "Active member of the Electronics and Communication Club",
                      "Participated in multiple hackathons and coding competitions",
                      "Completed industry-relevant certifications during the course"
                    ],
                    keyCourses: [
                      "Data Structures and Algorithms",
                      "Web Development Technologies",
                      "Database Management Systems",
                      "Software Engineering",
                      "Artificial Intelligence",
                      "Cloud Computing"
                    ],
                    skills: [
                      "Frontend Development",
                      "Backend Integration",
                      "Database Design",
                      "Problem Solving",
                      "Team Collaboration",
                      "Project Management"
                    ]
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="bg-card p-8 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-semibold text-2xl text-primary">{edu.degree}</h3>
                        <p className="text-lg text-muted-foreground mt-1">{edu.institution}</p>
                      </div>
                      <div className="px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
                        {edu.date}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">Key Achievements</h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-primary">Key Courses</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.keyCourses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary/50 rounded-full text-sm text-muted-foreground"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 rounded-full text-sm text-primary"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-semibold text-lg mb-3 text-primary">Description</h4>
                      <ul className="space-y-2">
                        {edu.description.map((desc, i) => (
                          <li key={i} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-muted-foreground">{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* <TabsContent value="publications" className="animate-fade-in">
              <div className="space-y-8">
                {[
                  {
                    title: "Efficient Deep Learning Approaches for Natural Language Processing in Low-Resource Settings",
                    journal: "IEEE Transactions on Neural Networks and Learning Systems",
                    date: "2023",
                    abstract: "This paper proposes novel techniques for improving NLP model performance in scenarios with limited training data.",
                    link: "#",
                  },
                  {
                    title: "A Comparative Study of Cloud-Native Architecture Patterns for Microservices",
                    journal: "Journal of Systems and Software",
                    date: "2022",
                    abstract: "An analysis of various architectural patterns for building resilient and scalable microservices on cloud platforms.",
                    link: "#",
                  },
                ].map((pub, index) => (
                  <motion.div
                    key={index}
                    className="bg-card p-6 rounded-xl border border-border shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <h3 className="font-semibold text-xl">{pub.title}</h3>
                    <div className="flex items-center mt-2 text-muted-foreground">
                      <span className="font-medium">{pub.journal}</span>
                      <span className="mx-2">•</span>
                      <span>{pub.date}</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">{pub.abstract}</p>
                    <div className="mt-4">
                      <a
                        href={pub.link}
                        className="text-primary hover:underline flex items-center"
                      >
                        Read full paper
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
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
                  </motion.div>
                ))}
              </div>
            </TabsContent> */}
          </Tabs>

          <div className="mt-12 flex justify-center gap-4">
            {/* <Button variant="outline" className="rounded-full px-6">
              Download Resume (PDF)
            </Button> */}
            <a
              href="/Thila_Pooja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full px-6">
                Download Resume (PDF)
              </Button>
            </a>
            <a
              href="/Thila_Pooja_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="rounded-full px-6">
                View Resume (PDF)
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Experience;
