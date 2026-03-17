import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { eligibilityCriteriaHero } from '../common/data/heroData';

const EligibilityCriteria = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div>
      {/* Hero */}
      <HeroSection {...eligibilityCriteriaHero} />

      {/* Eligibility Criteria Section */}
      <section ref={ref} className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-8 mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Eligibility Criteria For 1st Standard
            </h2>
          
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              For 2nd and Onwards Require Documents
            </h2>
          
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EligibilityCriteria;
