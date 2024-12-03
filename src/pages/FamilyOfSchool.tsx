const FamilyOfSchool = () => {
  const members = [
    {
      name: "Mr. John Doe",
      role: "Principal",
      description: "Leading the school with vision and dedication.",
    },
    {
      name: "Ms. Jane Smith",
      role: "Head of Science Department",
      description: "Inspiring the next generation of scientists.",
    },
    {
      name: "Mr. Aliyev Khushnud",
      role: "Sports Coordinator",
      description: "Coaching champions in every sport.",
    },
    {
      name: "Ms. Sara Lee",
      role: "Art Teacher",
      description: "Encouraging creativity and expression.",
    },
  ];

  return (
    <div className="bg-secondary py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-highlight text-center mb-8">
          Meet Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-lg font-bold text-highlight">
                {member.name}
              </h2>
              <h3 className="text-accent font-medium">{member.role}</h3>
              <p className="mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FamilyOfSchool;
