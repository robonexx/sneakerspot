import logo from '../../public/sneakerspot.png';
import './Logo.scss';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='logo_wrapper'>
      <Link href='/'></Link>
      <Image src={logo} className='logo' alt='logo' width={56} height={56} />
    </div>
  );
};

export default Logo;
