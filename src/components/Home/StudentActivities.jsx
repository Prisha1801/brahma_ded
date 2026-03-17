const activities = [
  { image: "/activity/g1.jpg", title: "Activity 1" },
  { image: "/activity/g2.jpg", title: "Activity 2" },
  { image: "/activity/g3.jpg", title: "Activity 3" },
  { image: "/activity/g4.jpg", title: "Activity 4" },
];

const StudentActivities = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Students Activities
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StudentActivities;