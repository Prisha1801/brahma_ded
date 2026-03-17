import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { sportsFacilityHero } from '../common/data/heroData';

const Sports = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...sportsFacilityHero} />

            <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500 underline underline-offset-4 mb-6">
                        Sports Facility :
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-700 text-[15px] leading-7 text-justify mb-8">
                        Students are encouraged to participate in various sports events throughout the year. Our campus features a 400-meter running track along with well-developed indoor and outdoor sports facilities. The Annual Sports Week fosters competitive spirit and camaraderie through activities such as Chess, Carrom, Badminton, Cricket, Football, Kho-Kho, Volleyball, Dodgeball, and various athletic events.
                    </p>

                    {/* Image */}
                    <div className="rounded-xl overflow-hidden w-full max-w-lg shadow-sm">
                        <img
                            src="/images/sports1.jpg"
                            alt="Sports Facility"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                </motion.div>
            </section>
        </div>
    );
};

export default Sports;