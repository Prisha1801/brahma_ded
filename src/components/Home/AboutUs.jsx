import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        About Us
                    </h2>
                    <div className="w-16 h-1 bg-red-600 mx-auto" />
                </motion.div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="overflow-hidden rounded-sm shadow-md"
                        style={{ lineHeight: 0 }}
                    >
                        <img
                            src="/images/about.jpg"
                            alt="About Us"
                            className="w-full h-[380px] object-cover object-center block"
                        />
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-gray-700 text-[15px] leading-8 text-justify">
                            Brahma Valley College of Education (D.Ed.) aims to impart quality education in
                            a safe, natural environment that promotes discipline, motivation and learning.
                            Our motto is a constant reminder that education is the most important
                            instrument for the all-round development, transmission of culture and values
                            from generation to generation. Brahma Valley College of Education believes in
                            creating not only a successful person but also a fully cultured, complete
                            individual. Towards this vision, we provide a nurturing atmosphere and a
                            system designed to develop a student teacher's personality.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;