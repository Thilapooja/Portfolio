// // components/OrbitingCircles.tsx
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { ReactNode } from "react";

// interface OrbitingCirclesProps {
//     children: ReactNode[];
//     radius?: number;
//     iconSize?: number;
//     speed?: number;
//     reverse?: boolean;
// }
// const OrbitingCircles = ({ children, iconSize = 40, radius = 150, reverse = false, speed = 1 }) => {
//     const [rotation, setRotation] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRotation(prev => (prev + speed * (reverse ? -1 : 1)) % 360);
//         }, 50);

//         return () => clearInterval(interval);
//     }, [reverse, speed]);

//     return (
//         <div className="absolute inset-0 flex items-center justify-center z-30 p-4">
//             <div
//                 className="relative w-full h-full"
//                 style={{
//                     transform: `rotate(${rotation}deg)`,
//                     transition: 'transform 0.05s linear',
//                     border: '1px solid rgba(255,255,255,0.1)'
//                 }}
//             >
//                 {Array.isArray(children) && children.map((child, index) => {
//                     const angle = (index * (360 / children.length)) * (Math.PI / 180);
//                     const x = Math.cos(angle) * radius;
//                     const y = Math.sin(angle) * radius;

//                     return (
//                         <div
//                             key={index}
//                             className="absolute rounded-full bg-black/50"
//                             style={{
//                                 left: `calc(50% + ${x}px)`,
//                                 top: `calc(50% + ${y}px)`,
//                                 transform: 'translate(-50%, -50%)',
//                                 width: iconSize,
//                                 height: iconSize,
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 justifyContent: 'center',
//                                 border: '1px solid rgba(255,255,255,0.2)'
//                             }}
//                         >
//                             {child}
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// // const OrbitingCircles = ({
// //     children,
// //     radius = 100,
// //     iconSize = 24,
// //     speed = 1,
// //     reverse = false,
// // }: OrbitingCirclesProps) => {
// //     return (
// //         <div className="relative w-full h-full">
// //             {children.map((child, index) => {
// //                 const initialAngle = (index / children.length) * 360;
// //                 return (
// //                     <motion.div
// //                         key={index}
// //                         className="absolute left-1/2 top-1/2"
// //                         animate={{
// //                             rotate: reverse ? [initialAngle, initialAngle - 360] : [initialAngle, initialAngle + 360],
// //                         }}
// //                         transition={{
// //                             repeat: Infinity,
// //                             duration: 10 / speed,
// //                             ease: "linear",
// //                         }}
// //                         style={{
// //                             transformOrigin: "center",
// //                         }}
// //                     >
// //                         <div
// //                             style={{
// //                                 transform: `rotate(${initialAngle}deg) translateX(${radius}px)`,
// //                                 position: "absolute",
// //                                 left: "50%",
// //                                 top: "50%",
// //                             }}
// //                         >
// //                             <div
// //                                 style={{
// //                                     width: `${iconSize}px`,
// //                                     height: `${iconSize}px`,
// //                                     transform: `translate(-50%, -50%)`,
// //                                     display: "flex",
// //                                     alignItems: "center",
// //                                     justifyContent: "center",
// //                                 }}
// //                             >
// //                                 {child}
// //                             </div>
// //                         </div>
// //                     </motion.div>
// //                 );
// //             })}

// //         </div>
// //     );
// // };

// export default OrbitingCircles;
// components/OrbitingCircles.tsx
import { useState, useEffect } from "react";
import { ReactNode } from "react";

interface OrbitingCirclesProps {
    children: ReactNode[];
    radius?: number;
    iconSize?: number;
    speed?: number;
    reverse?: boolean;
}

const OrbitingCircles = ({
    children,
    radius = 150,
    iconSize = 40,
    speed = 1,
    reverse = false,
}: OrbitingCirclesProps) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prev) => (prev + speed * (reverse ? -1 : 1)) % 360);
        }, 50); // 20 FPS

        return () => clearInterval(interval);
    }, [speed, reverse]);

    return (
        <div className="absolute inset-0 flex items-center justify-center z-30 p-4">
            <div
                className="relative w-full h-full"
                style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.05s linear",
                }}
            >
                {Array.isArray(children) &&
                    children.map((child, index) => {
                        const angle = (index * (360 / children.length)) * (Math.PI / 180);
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                            <div
                                key={index}
                                className="absolute rounded-full bg-black/50"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: "translate(-50%, -50%)",
                                    width: `${iconSize}px`,
                                    height: `${iconSize}px`,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                }}
                            >
                                {child}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default OrbitingCircles;
