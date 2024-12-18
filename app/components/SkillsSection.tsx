import { IconType } from 'react-icons';
import { 
  FaC, 
  FaReact, 
  FaDocker, 
  FaFigma, 
  FaGithub,
  FaNode,
  FaBootstrap,
} from 'react-icons/fa6';
import { 
  SiTypescript, 
  SiPython, 
  SiCplusplus, 
  SiR,
  SiNextdotjs,
  SiTailwindcss,
  SiPostman,
  SiMysql 
} from 'react-icons/si';

interface SkillItemProps {
    icon: IconType;
    text: string;
  }
  
  const SkillItem: React.FC<SkillItemProps> = ({ icon: Icon, text }) => (
    <li className="flex items-center space-x-2 mb-3 hover:text-gray-800 transition-colors">
      <Icon className="text-xl" />
      <span>{text}</span>
    </li>
  );
  
  const SkillsSection: React.FC = () => (
    <section
      id="skills"
      className="flex flex-col items-center justify-center bg-gray-100 text-black py-16 md:py-32 px-4 md:px-6"
    >
      <div className="max-w-5xl w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          [Skills]
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Languages</h2>
            <ul className="space-y-2 text-gray-600">
              <SkillItem icon={FaC} text="C" />
              <SkillItem icon={SiTypescript} text="TypeScript" />
              <SkillItem icon={SiPython} text="Python" />
              <SkillItem icon={SiCplusplus} text="C++" />
              <SkillItem icon={SiR} text="R" />
            </ul>
          </div>
          {/* Frameworks */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frameworks</h2>
            <ul className="space-y-2 text-gray-600">
              <SkillItem icon={FaReact} text="React" />
              <SkillItem icon={FaNode} text="Node.js" />
              <SkillItem icon={SiNextdotjs} text="Next.js" />
              <SkillItem icon={FaBootstrap} text="Bootstrap" />
              <SkillItem icon={SiTailwindcss} text="Tailwind CSS" />
            </ul>
          </div>
          {/* Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools</h2>
            <ul className="space-y-2 text-gray-600">
              <SkillItem icon={FaGithub} text="Git & GitHub" />
              <SkillItem icon={FaDocker} text="Docker" />
              <SkillItem icon={SiPostman} text="Postman" />
              <SkillItem icon={FaFigma} text="Figma" />
              <SkillItem icon={SiMysql} text="mySQL" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

export default SkillsSection;