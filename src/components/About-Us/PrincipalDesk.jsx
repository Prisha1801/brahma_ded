import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { principalDeskHero } from '../common/data/heroData';

const PrincipalDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            {/* HERO SECTION */}
            <HeroSection {...principalDeskHero} />

            {/* PRINCIPAL Desk */}
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
                                    src="/images/person.jpeg"
                                    alt="Principal"
                                    className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
                                />

                                <div className="mt-6">
                                    <h4 className="text-xl font-semibold text-[#0b2c4d]">
                                        Prof. Deepali N. Chaware
                                    </h4>
                                    <p className="text-gray-600 mt-2">Principal</p>
                                    <p className="text-gray-500 text-sm mt-1">
                                        Brahma Valley College of D.ed
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
                                    From The Principal's Desk
                                </h2>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    I firmly believe that, technical education has great potential to change the quality of people.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    With the emergence of vast domestic market and relatively low - cost worker with advanced technical skills and knowledge, India is on the verge of becoming a super power.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify mb-4">
                                    Globalisation led by rapid and breath-taking advances in information and communication technologies, has resulted in the creation of knowledge economy, economy that creates, disseminates and uses knowledge to enhance growth and development . proud.
                                </p>

                                <p className="text-gray-600 leading-8 text-justify">
                                    I therefore strongly advice eligible students to pursue technical education as their careers. Recognizing the trends, relevance and opportunities, the management of Brahma Valley College of Technical Education, Nashik has established this Institute with an objective to provide quality education. I welcome you to the 'Brahma Valley College of Technical Education' Campus. Brahma, the God of creation, who created this world! During our endeavour we take every effort to transorm our students, with all necessary knowledge and skills, into competent technocrats for the competetive world of tomorrow. Staying at Brahma Valley College of Technical Education is a uniquely rewarding experience. We always place students above everything.
                                </p>

                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
};

export default PrincipalDesk;