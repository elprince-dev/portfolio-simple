import './header.scss'

const Header = () => {

    const links = ["Home", "About", "Projects", "Contact"]
  return (
    <div className="container">
        <div className="name">
            <h3>El Prince</h3>
        </div>
        <div className="navbar">
            {links.map(link =>(
                <a key={link} className='link'>{link}</a>
            ))}
        </div>
    </div>
  )
}

export default Header