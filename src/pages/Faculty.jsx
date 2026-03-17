import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../components/common/components/HeroSection';
import { facultyHero } from '../components/common/data/heroData';

const teachingStaff = [

];

const nonTeachingStaff = [

];

const Faculty = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div>
      {/* Hero */}
      <HeroSection {...facultyHero} />

      {/* Faculty Section */}
      <section ref={ref} className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Teaching Staff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Teaching Staff
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#3a3d4a] text-white">
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs w-20">
                      Sr. No
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Profession / Designation
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Department
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teachingStaff.map((staff, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-gray-700 text-center">{staff.srNo}</td>
                      <td className="px-4 py-3 text-gray-700">{staff.name}</td>
                      <td className="px-4 py-3 text-gray-700">{staff.profession}</td>
                      <td className="px-4 py-3 text-gray-700">{staff.associatedWith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Non-Teaching Staff */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Non-Teaching Staff
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#3a3d4a] text-white">
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs w-20">
                      Sr. No
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Profession / Designation
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Department
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nonTeachingStaff.map((staff, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-gray-700 text-center">{staff.srNo}</td>
                      <td className="px-4 py-3 text-gray-700">{staff.name}</td>
                      <td className="px-4 py-3 text-gray-700">{staff.profession}</td>
                      <td className="px-4 py-3 text-gray-700">{staff.associatedWith}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Faculty;
