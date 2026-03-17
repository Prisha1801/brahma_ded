import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { studentGrievancesHero } from '../common/data/heroData';

const members = [
  { srNo: "01", name: "Prof. C.K.Patil", profession: "CEO", associatedWith: "NGSPM" },
];

const StudentGrievances = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div>
      {/* Hero */}
      <HeroSection {...studentGrievancesHero} />

      {/* Table Section */}
      <section ref={ref} className="bg-gray-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md p-8"
          >
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-6">
              Student Grievance Redressal Committee
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#3a3d4a] text-white">
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs w-20">
                      Sr. No
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Name of the Committee Member
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Profession / Designation
                    </th>
                    <th className="px-4 py-3 text-left font-semibold uppercase tracking-wide text-xs">
                      Associated With
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-4 py-3 text-gray-700 text-center">{member.srNo}</td>
                      <td className="px-4 py-3 text-gray-700">{member.name}</td>
                      <td className="px-4 py-3 text-gray-700">{member.profession}</td>
                      <td className="px-4 py-3 text-gray-700">{member.associatedWith}</td>
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

export default StudentGrievances;