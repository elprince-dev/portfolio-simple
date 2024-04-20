import './intro.scss'

const Intro = () => {
  return (
    <div className='intro' id = 'Home'>
        <div className="name">
            <h1>Mohammad El Prince</h1>
        </div>

        <div className="line"></div>

        <div className="text">
            <p>
              Hi there! This is Mohammad, a passionate developer with experience in leadership and engineering and constant drive to learning. Let&apos;s connect and share experiences and ideas!
            </p>
        </div>
        

        <div className="social">
        <a href='https://github.com/mohamedmhussein'><img  src="./github.svg" alt='' className='github' /></a>
        <a href='https://www.linkedin.com/in/mohamedhusseinofficial/'><img  src="./linkedin.svg" alt='' className='linkedin' /></a>
        </div>
    </div>
  )
}

export default Intro