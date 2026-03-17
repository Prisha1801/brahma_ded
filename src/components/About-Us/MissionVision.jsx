import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { missionHero } from "../common/data/heroData";

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* HERO */}
      <HeroSection {...missionHero} />

      {/* VISION & MISSION SECTION */}
      <section ref={ref} className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">

          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-4">
              Vision
            </h3>
            <p className="text-gray-700 text-[15px] leading-7">
              To create a centre of excellence in the field of Education (D. Ed) by holistically developing future Teachers having the right knowledge, skills and attitudes towards Society and life.
            </p>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-8"
          >
            <h3 className="text-base font-extrabold text-gray-900 uppercase tracking-wide mb-4">
              Mission
            </h3>
            <p className="text-gray-700 text-[15px] leading-7 text-justify">
              To impart quality education through conventional as well as modern teaching- learning processes. To facilitate a creative, academic environment, to mould the youths from rural hilly &amp; remote areas &amp; thereby to bring them into the stream of the Nation. To nurture moral &amp; scientific values, a sense of humanitarianism &amp; nationalism in keeping with the glorious historical heritage of the region. To boost the spirit a courage and adventure among the students and make them environmentally friendly. To bring the rural women into the national mainstream by imparting the best educational facilities. To liberate the learner by offering him a wide spectrum of academic programmes, delivered through a flexible, learner-centred instructional mode.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default MissionVision;