import './projects.scss'
import data from '@@/utilities/projectList'

const Projects = () => {
  return (
    <div className="projects">
        <h1>
            Projects
        </h1>

        <div className="line"></div>

        <div className="list">
          {data.map(project =>(
            <div className="project" key={project.name}>
              <img src={project.imgURL} alt= {project.name}/>
              <h4>{project.name}</h4>
              <div className="line"></div>
              <p>{project.description}</p>
              <div className="techStack">
                {project.techStack.map(tech => (
                  <img key={tech} src={`/${tech}.svg`} alt='' />
                ))}
              </div>
              <div className="links">
                <a href={project.github} target='_blank'><img src='/github.svg' alt='github'  /></a>
                <a href={project.demo} target='_blank'><img src='/link.svg' alt='link' href={project.demo} /></a>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects