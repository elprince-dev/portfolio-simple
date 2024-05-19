import './about.scss'

const About = () => {

  const skills = ['html', 'css', 'javascript', 'react','nextjs', 'python', 'flask', 'git', 'sqlite', 'scss']
  return (
    <div className="about" id="About">
        <h1>About</h1>
        <div className="line"></div>
        <p>
        Full Stack Software Engineer with experience in JavaScript and Python based programming. With a background in mechanical engineering and operations, I have a can-do attitude and bring strong skills in problem-solving, communication and collaboration. As a lifelong learner, I continuously work on growing my technical knowledge. I enjoy tackling challenges head-on and crafting creative solutions to real-world problems. My belief in the power of teamwork guides me in achieving exceptional results.
        </p>
        <div className="techStack">
          <h4>Tech Stack <br /></h4>
          <div className='skills'>
            {skills.map(tech => (
                    <img key={tech} src={`/${tech}.svg`} alt='' />
                  ))}
          </div>
          
        </div>
    </div>
  )
}

export default About