import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { hostelHero } from '../common/data/heroData';

const Hostel = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...hostelHero} />

            <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
                >
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-red-500 underline underline-offset-4 mb-6">
                        Hostel Facility :
                    </h2>

                    {/* Intro paragraph */}
                    <p className="text-gray-700 text-[15px] leading-7 mb-8">
                        Well-furnished, ventilated hostels are provided separately for girls and boys within the campus. Trained staff ensures the safety, health, and hygiene of students. Each student is provided with a separate bed and cupboard to ensure a comfortable stay.
                    </p>

                    {/* Girls Hostel */}
                    <div className="mb-10">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Girls Hostel</h3>
                        <ul className="list-disc list-inside text-gray-700 text-[15px] mb-4">
                            <li>Capacity - 400 Girls</li>
                        </ul>
                        <div className="rounded-xl overflow-hidden w-full max-w-lg shadow-sm">
                            <img
                                src="/facilities/Secure Hostels.webp"
                                alt="Girls Hostel"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </motion.div>
            </section>
        </div>
    );
};

export default Hostel;