import Logo from './Logo';
import Themetoggle from './ThemeToggle';
import { Button } from './Button';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900 sm:py-3 sm:px-8'>
			<div className='flex grow-0 basis-1/3 md:hidden'>
				{/**
				 * TODO: Create the Burger Menu
				 */}
				Menu Btn
			</div>
			<div className='flex grow-0 basis-1/3 justify-center md:justify-start'>
				<Link href={'/'}>
					<a className='my-auto flex w-[140px] md:ml-0'>
						<Logo />
					</a>
				</Link>
				<div className='hidden md:ml-2 md:flex gap-2'>
					<Link href={'/#'} passHref>
						<Button as='a' variant='ghost' className='hidden md:inline-flex'>
							Companies
						</Button>
					</Link>
					<Link href={'/#'} passHref>
						<Button as='a' variant='ghost' className='hidden md:inline-flex'>
							Jobs
						</Button>
					</Link>
				</div>
			</div>
			<div className='relative flex grow-0 basis-1/3 justify-end gap-2'>
				<Link href={'/#'} passHref>
					<Button as='a' variant='outline' className='hidden md:inline-flex'>
						For Employers
					</Button>
				</Link>
				<Button className='hidden md:inline-flex'>Sign In</Button>
				<Themetoggle />
			</div>
		</header>
	);
};

export default Header;
