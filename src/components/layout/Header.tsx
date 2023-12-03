import Link from 'next/link';

const Header = () => (
    <>
        <header className="py-4 px-5 bg-gray-800">
            <Link href={"/"} className='text-xl font-medium text-white'>
                NextJS Movie
            </Link>    
        </header>
    </>
    );

export default Header;