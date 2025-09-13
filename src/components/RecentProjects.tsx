'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { type Locale } from '@/lib/i18n';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Dictionary {
  recent_projects: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      windows: string;
      doors: string;
      complete: string;
    };
    products_used: string;
    projects_data: Project[];
  };
}

interface RecentProjectsProps {
  locale: Locale;
  dict: Dictionary;
}

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  image: string;
  description: string;
  products: string[];
}

export default function RecentProjects({ locale, dict }: RecentProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState(dict.recent_projects.categories.all);

  const projects: Project[] = dict.recent_projects.projects_data;

  const categories = [
    dict.recent_projects.categories.all,
    dict.recent_projects.categories.windows,
    dict.recent_projects.categories.doors,
    dict.recent_projects.categories.complete
  ];

  const filteredProjects = selectedCategory === dict.recent_projects.categories.all 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const openLightbox = (project: Project) => {
    setSelectedProject(project);
  };

  const closeLightbox = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const nextProject = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setSelectedProject(filteredProjects[nextIndex]);
  }, [selectedProject, filteredProjects]);

  const prevProject = useCallback(() => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[prevIndex]);
  }, [selectedProject, filteredProjects]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedProject) return;
      
      switch (event.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowRight':
          nextProject();
          break;
        case 'ArrowLeft':
          prevProject();
          break;
      }
    };

    if (selectedProject) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject, closeLightbox, nextProject, prevProject]);

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {dict.recent_projects.title}
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              {dict.recent_projects.subtitle}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category} ({selectedCategory === category ? filteredProjects.length : projects.filter(p => category === dict.recent_projects.categories.all || p.category === category).length})
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                onClick={() => openLightbox(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title} project`}
              >
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4 cursor-pointer"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-title"
        >
          <div 
            className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Close project details"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            {/* Navigation Buttons - Always show when project is selected for testing */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 z-20 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Previous project"
              disabled={filteredProjects.length <= 1}
            >
              <ChevronLeft className={`h-6 w-6 ${filteredProjects.length <= 1 ? 'text-gray-300' : 'text-gray-700'}`} />
            </button>
            
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 z-20 cursor-pointer disabled:cursor-not-allowed"
              aria-label="Next project"
              disabled={filteredProjects.length <= 1}
            >
              <ChevronRight className={`h-6 w-6 ${filteredProjects.length <= 1 ? 'text-gray-300' : 'text-gray-700'}`} />
            </button>

            {/* Project Content */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} - ${selectedProject.description}`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover rounded-t-lg"
                priority
              />
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 id="project-title" className="text-2xl font-bold text-gray-900 mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-500">{selectedProject.location}</p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {selectedProject.category}
                </span>
              </div>
              
              <p className="text-gray-600 mb-6">
                {selectedProject.description}
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{dict.recent_projects.products_used}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedProject.products.map((product, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
