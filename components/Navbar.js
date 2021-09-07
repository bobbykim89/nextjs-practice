import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image
          src='/logo.png'
          width={125}
          height={77}
          alt='this component does not have alt'
        />
      </div>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
      <Link href='/ninjas'>Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;
