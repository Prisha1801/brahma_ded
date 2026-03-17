import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { medicalFacilityHero } from '../common/data/heroData';

const MedicalFacility = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...medicalFacilityHero} />

            <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500 underline underline-offset-4 mb-6">
                        Medical Facility :
                    </h2>


                </motion.div>
            </section>
        </div>
    );
};

export default MedicalFacility;