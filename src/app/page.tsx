'use client';

import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import { AboutSection, ContactSection, ExperienceSection, SkillsSection } from '@/components/OtherSections';
import ProjectModal from '@/components/ProjectModal';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import { projectData } from '@/data/projectData';
import { useState } from 'react';

interface SelectedProject {
    name: string;
    images: string[];
}

export default function Home() {
    const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);

    const openProjectModal = (projectKey: string, projectName: string) => {
        setSelectedProject({
            name: projectName,
            images: projectData[projectKey].images
        });
    };

    const closeProjectModal = () => {
        setSelectedProject(null);
    };

    return (
        <main className="min-h-screen">
            <Navigation />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection onProjectClick={openProjectModal} />
            <SkillsSection />
            <ExperienceSection />
            <ContactSection />

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject.name}
                    images={selectedProject.images}
                    onClose={closeProjectModal}
                />
            )}
        </main>
    );
}