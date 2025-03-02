import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className='list-group border-0 shadow-lg'>
      <li className='list-group-item active'>Quick Links</li>
      <li className='list-group-item '><Link to='/' className='text-decoration-none'> <i className='fa fa-home'></i> Dashboard</Link></li>
      <li className='list-group-item '><Link to='/basic' className='text-decoration-none'><i className='fa fa-user'></i> Basic</Link></li>
      <li className='list-group-item '><Link to='/contact' className='text-decoration-none'><i className='fa fa-headset'></i> Contact</Link></li>
      <li className='list-group-item '><Link to='/education' className='text-decoration-none'><i className='fa fa-book'></i> Education</Link></li>
      <li className='list-group-item '><Link to='/skill' className='text-decoration-none'><i className='fa fa-desktop'></i> Skill</Link></li>
      <li className='list-group-item '><Link to='/project' className='text-decoration-none'> <i className='fa fa-suitcase'></i> Project</Link></li>
      <li className='list-group-item '><Link to='/experience' className='text-decoration-none'><i className='fa fa-file'></i> Experience</Link></li>
    </ul>
  )
}

export default Navigation
