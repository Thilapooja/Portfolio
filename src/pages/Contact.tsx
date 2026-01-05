
// import { useState } from "react";
// import { motion } from "framer-motion";
// import PageLayout from "@/components/PageLayout";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { Textarea } from "@/components/ui/textarea";

// const Contact = ({ hideFooter = false }: { hideFooter?: boolean }) => {
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon!",
//       });

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       });

//       setIsSubmitting(false);
//     }, 1500);
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
//               transition={{ delay: 0.1 }}
//             >
//               Get In Touch
//             </motion.h1>
//             <motion.p
//               className="section-subtitle"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               Have a project in mind or want to collaborate? Feel free to reach out and let's create
//               something amazing together.
//             </motion.p>
//           </div>

//           <div className="grid lg:grid-cols-3 gap-10">
//             {/* Contact Information */}
//             <motion.div
//               className="col-span-1 space-y-8"
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.3 }}
//             >
//               <h2 className="text-2xl font-semibold heading-underline">Contact Information</h2>

//               <div className="space-y-6">
//                 {[
//                   {
//                     title: "Call Me",
//                     info: "+91 8072812186",
//                     icon: (
//                       <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                           />
//                         </svg>
//                       </div>
//                     ),
//                     copyButton: true,
//                   },
//                   {
//                     title: "Email Me",
//                     info: "29.rithi@gmail.com",
//                     icon: (
//                       <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                           />
//                         </svg>
//                       </div>
//                     ),
//                     copyButton: true,
//                   },
//                   {
//                     title: "Location",
//                     info: "Chennai, India",
//                     icon: (
//                       <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           className="h-6 w-6"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                           />
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                           />
//                         </svg>
//                       </div>
//                     ),
//                   },
//                 ].map((contact, index) => (
//                   <div key={index} className="bg-card border border-border rounded-xl p-6 flex items-start">
//                     {contact.icon}
//                     <div className="ml-4">
//                       <h3 className="font-medium">{contact.title}</h3>
//                       <div className="flex items-center mt-1">
//                         <span className="text-muted-foreground">{contact.info}</span>
//                         {contact.copyButton && (
//                           <button
//                             className="ml-2 text-primary hover:text-primary/80"
//                             onClick={() => {
//                               navigator.clipboard.writeText(contact.info);
//                               toast({
//                                 description: "Copied to clipboard!",
//                               });
//                             }}
//                           >
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-4 w-4"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
//                               />
//                             </svg>
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-card border border-border rounded-xl p-6">
//                 <h3 className="text-lg font-semibold mb-4">Let's Work Together</h3>
//                 <p className="text-muted-foreground mb-4">
//                   I'm currently available for freelance work and full-time positions in the
//                   software development field.
//                 </p>
//                 <div className="flex gap-3">
//                   <a href="#" className="text-primary hover:text-primary/80">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-primary hover:text-primary/80">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-primary hover:text-primary/80">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.191C19.039 2.67 17.775 2 16.375 2c-2.689 0-4.854 2.177-4.854 4.859 0 .385.043.758.126 1.115C7.629 7.8 4.25 5.88 2.013 2.885c-.426.729-.667 1.579-.667 2.485 0 1.686.862 3.174 2.17 4.041a4.854 4.854 0 01-2.198-.605v.06c0 2.356 1.673 4.313 3.903 4.756a4.701 4.701 0 01-2.197.084c.627 1.928 2.437 3.313 4.585 3.353-1.681 1.315-3.797 2.104-6.108 2.104-.397 0-.789-.023-1.175-.068C2.179 21.148 4.828 22 7.636 22c9.176 0 14.188-7.588 14.188-14.177 0-.217-.004-.431-.013-.645a10.093 10.093 0 002.474-2.578l-.041-.021z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               className="lg:col-span-2"
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <div className="bg-card border border-border rounded-xl p-8">
//                 <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="block text-sm font-medium">
//                         Your Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         placeholder="John Doe"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="block text-sm font-medium">
//                         Your Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="john@example.com"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         className="w-full"
//                       />
//                     </div>
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="block text-sm font-medium">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       placeholder="How can I help you?"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label htmlFor="message" className="block text-sm font-medium">
//                       Your Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       placeholder="Enter your message here..."
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       className="w-full h-32"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full md:w-auto px-8"
//                   >
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </form>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </PageLayout>
//   );
// };

// export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";

const Contact = ({ hideFooter = false }: { hideFooter?: boolean }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration from environment variables
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Prepare template parameters matching the EmailJS template placeholders
    const templateParams = {
      name: formData.name,       // Matches {{name}}
      email: formData.email,     // Matches {{email}}
      subject: formData.subject, // Matches {{subject}}
      message: formData.message, // Matches {{message}}
    };

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
              Get In Touch
            </motion.h1>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Have a project in mind or want to collaborate? Feel free to reach
              out and let's create something amazing together.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <motion.div
              className="col-span-1 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold heading-underline">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Call Me",
                    info: "+91 6380577896",
                    icon: (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                    ),
                    copyButton: true,
                  },
                  {
                    title: "Email Me",
                    info: "thilapooja18@gmail.com",
                    icon: (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    ),
                    copyButton: true,
                  },
                  {
                    title: "Location",
                    info: "Chennai, India",
                    icon: (
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    ),
                  },
                ].map((contact, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 flex items-start"
                  >
                    {contact.icon}
                    <div className="ml-4">
                      <h3 className="font-medium">{contact.title}</h3>
                      <div className="flex items-center mt-1">
                        <span className="text-muted-foreground">
                          {contact.info}
                        </span>
                        {contact.copyButton && (
                          <button
                            className="ml-2 text-primary hover:text-primary/80"
                            onClick={() => {
                              navigator.clipboard.writeText(contact.info);
                              toast({
                                description: "Copied to clipboard!",
                              });
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground mb-4">
                  I'm currently available for full-time
                  positions in the software development field.
                </p>
                <div className="flex gap-3">
                  <a href="https://github.com/Thilapooja" className="text-primary hover:text-primary/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/thila-pooja/" className="text-primary hover:text-primary/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" className="text-primary hover:text-primary/80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.191C19.039 2.67 17.775 2 16.375 2c-2.689 0-4.854 2.177-4.854 4.859 0 .385.043.758.126 1.115C7.629 7.8 4.25 5.88 2.013 2.885c-.426.729-.667 1.579-.667 2.485 0 1.686.862 3.174 2.17 4.041a4.854 4.854 0 01-2.198-.605v.06c0 2.356 1.673 4.313 3.903 4.756a4.701 4.701 0 01-2.197.084c.627 1.928 2.437 3.313 4.585 3.353-1.681 1.315-3.797 2.104-6.108 2.104-.397 0-.789-.023-1.175-.068C2.179 21.148 4.828 22 7.636 22c9.176 0 14.188-7.588 14.188-14.177 0-.217-.004-.431-.013-.645a10.093 10.093 0 002.474-2.578l-.041-.021z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;