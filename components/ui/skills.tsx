"use client"
const Skills = () => {
    const skills = [
      'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express', 
      'MongoDB', 'SQL', 'HTML5', 'CSS3', 'Tailwind CSS', 
      'Git', 'RESTful APIs', 'GraphQL', 'AWS', 'Docker',
      'Team Leadership', 'Event Planning', 'Soccer Strategy', 'Community Building'
    ]
  
    return (
      <section id="skills" className="bg-blue-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 py-2 px-4 rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Skills
  
  
  