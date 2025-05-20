import NavBar from '@/components/nav-bar';
import SkillsSection from '@/components/skills-section';
import ProjectSection from '@/components/projects-section';
import ExperienceSection from '@/components/experiencia-section';
import PersonalSectionInfo from '@/components/personal-info-section';
import EducationSection from '@/components/education-section';
import Footer from '@/components/footer';
import ShootingStars from '@/components/shooting-stars';
import Particles from '@/components/particles';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      <Particles />
      <ShootingStars />
      <NavBar />
      <PersonalSectionInfo />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  );
}
