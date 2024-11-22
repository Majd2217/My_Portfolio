"use client"

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-green-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-700">Leadership</h2>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold">President, Penn State Soccer Club</h3>
            <p className="text-gray-600 mt-1">State College, Pennsylvania | Aug 2024 - Present</p>
          </div>
          <div className="px-6 pb-6">
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Organized and led club meetings and events, including game viewings and discussions, enhancing the club's community engagement.</li>
              <li>Coordinated with members to plan social activities and guest speaker sessions, expanding the club's reach and influence on campus.</li>
            </ul>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Event Planning", "Leadership", "Community Engagement", "Team Management"].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership