import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your project cards here */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-2">Project Title</h3>
            <p className="text-lg">Brief description of the project.</p>
          </div>
          {/* Repeat for other projects */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
