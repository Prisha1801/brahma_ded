import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { presidentDeskHero } from '../common/data/heroData';
import ChairmanImage from '/posters/president.png';

const ChairmanDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...presidentDeskHero} />

            {/* PRESIDENT SECTION */}
            <motion.section
                ref={ref}
                className="bg-gray-50 py-16"
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45 }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="bg-white rounded-2xl shadow-md p-8 lg:p-12"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT SIDE - IMAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.15 }}
                                className="text-center"
                            >
                                <img
                                    src={ChairmanImage}
                                    alt="Chairman"
                                    className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Mr. Rajaram D. Pangavhane (Patil)
                                    </h4>
                                    <p className="text-gray-600 mt-2">Founder President</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Nashik Gramin Shikshan Prasarak Mandal
                                    </p>
                                </div>
                            </motion.div>

                            {/* RIGHT SIDE - MESSAGE */}
                            <motion.div
                                initial={{ opacity: 0, y: 18 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.45, delay: 0.2 }}
                            >
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b2c4d] mb-6">
                                    From The President's Desk
                                </h2>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Brahma valley college of education (D.Ed.) aiming at imparting quality education in a safe, natural environment that promotes discipline, motivation and learning. Our motto is a constant reminder that education is the most important instrument for the all-round development, transmission of culture and values from generation to generation. Brahma valley college of education believes in creating not only a successful person but also a fully cultured complete individual. Towards this vision, we provide a nurturing atmosphere and a system designed to develop a student teacher’s personality.
                                </p>

                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default ChairmanDesk;
