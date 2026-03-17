import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { requiredDocumentsHero } from '../common/data/heroData';

const admissionDocs = [
  // { no: "01", document: "Document name here" },
];

const scholarshipDocs = [
  // { no: "01", document: "Document name here" },
];

const DocTable = ({ title, data, delay, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
  >
    <h2 className="text-2xl md:text-3xl font-bold text-blue-500 text-center mb-8">
      {title}
    </h2>
    <div className="overflow-x-auto rounded-lg shadow-md mb-2">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#3a3d4a] text-white">
            <th className="px-5 py-3 text-left font-bold uppercase tracking-wide text-xs w-32">
              No
            </th>
            <th className="px-5 py-3 text-left font-bold uppercase tracking-wide text-xs border-l border-gray-500">
              List of Document
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr className="bg-white">
              <td colSpan={2} className="px-5 py-4 text-gray-400 text-sm text-center">
                No documents listed.
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-5 py-3 text-gray-700">{row.no}</td>
                <td className="px-5 py-3 text-gray-700 border-l border-gray-200">{row.document}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const RequiredDocuments = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div>
      {/* Hero */}
      <HeroSection {...requiredDocumentsHero} />

      {/* Documents Section */}
      <section ref={ref} className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">

          <DocTable
            title="Admission Documents"
            data={admissionDocs}
            delay={0.1}
            isInView={isInView}
          />

          <div className="border-t border-gray-200" />

          <DocTable
            title="Scholarship Documents"
            data={scholarshipDocs}
            delay={0.2}
            isInView={isInView}
          />

        </div>
      </section>
    </div>
  );
};

export default RequiredDocuments;