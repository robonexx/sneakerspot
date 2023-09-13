import logo from '/sneakerspot.png';
import './Logo.scss';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className='logo_wrapper'>
      <a href='/'></a>
      <Image src={logo} className='logo' alt='logo' />
    </div>
  );
};

export default Logo;
