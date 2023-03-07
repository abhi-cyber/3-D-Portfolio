import Tilt from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../style"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"



const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Projects
        </p>
        <h2 className={styles.sectionHeadText}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          varients={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[16px] max-w-3xl leading-[30px]"
        >
          Followinfg projects showcase my skills and experience with different fields including 3-D, UI Design, Backend, Google Cloud, etc.
          Below projects are attached with a link to the projects github repositories.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "")