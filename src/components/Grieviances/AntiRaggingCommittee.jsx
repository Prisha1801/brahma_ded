import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { antiRaggingCommitteeHero } from '../common/data/heroData';


const members = [
  {
    srNo: "1",
    name: "Prof. V.P. Nikhade",
    profession: "Principal",
    email: "ppl0778@gmail.com",
  },
];

const AntiRaggingCommittee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div>
      {/* Hero */}
      <HeroSection {...antiRaggingCommitteeHero} />

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
              Anti – Ragging Committee
            </h2>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-[#3a3d4a] text-white">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase w-20">
                      Sr. No
                    </th>

                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                      Name of the Committee Member
                    </th>

                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                      Profession / Designation
                    </th>

                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase">
                      Email
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {members.map((member, i) => (
                    <tr key={i} className="bg-gray-100 border-t">
                      <td className="px-4 py-3 text-center">
                        {member.srNo}
                      </td>

                      <td className="px-4 py-3">
                        {member.name}
                      </td>

                      <td className="px-4 py-3">
                        {member.profession}
                      </td>

                      <td className="px-4 py-3">
                        {member.email}
                      </td>
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

export default AntiRaggingCommittee;