import './projects.scss'

const Projects = () => {
  return (
    <div className="projects">
        <h1>
            Projects
        </h1>

        <div className="line"></div>

        <div className="list">
          <div className="project">           
              
              <img src='./portfolio.PNG' />
            
              <h4>Portfolio</h4>

              <div className="line"></div>

              <div className="desc"></div>

              <div className="techStack"></div>

            

          </div>

          <div className="project">           
              
            <img src='./portfolio.PNG' />
              
            <h4 className='title'>Portfolio</h4>

            <div className="line"></div>

            <p>
              A digital showcase of my professional journey, highlighting my skills and projects. gfddgfdf dg dgd fggd ffdgfdg dgdfgdgd dfggdgdfgd dgxcvx vcxvcxv dffgd d vcbcb cv cbcbcb  cvb cvbcbcv fdgdggfd
            </p>

            <div className="techStack">
              <img src='/html5.svg' alt='' />
              <img src='/css.svg' alt='' />
            </div>

            <div className="links">
              <img src='/github.svg' alt='' />
              <img src='/link.svg' alt='' />
            </div>
          </div>
          <div className="project">           
              
            <img src='./portfolio.PNG' />
              
            <h4 className='title'>Portfolio</h4>

            <div className="line"></div>

            <p>
              A digital showcase of my professional journey, highlighting my skills and projects. gfddgfdf dg dgd fggd ffdgfdg dgdfgdgd dfggdgdfgd dgxcvx vcxvcxv dffgd d vcbcb cv cbcbcb  cvb cvbcbcv fdgdggfd
            </p>

            <div className="techStack">
              <img src='/html.svg' alt='' />
              <img src='/css.svg' alt='' />
            </div>

            <div className="links">
              <img src='/github.svg' alt='' />
              <img src='/link.svg' alt='' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects