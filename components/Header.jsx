import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import Logo from './Logo';
import { ThemeToggle, ThemeSelect } from './ThemeToggle';
import { Button, IconButton } from './Button';
import Link from 'next/link';

const Header = () => {
	const [showAuth, setShowAuth] = useState(false);
	return (
		<>
			<header className='sticky inset-x-0 top-0 z-20 flex items-center justify-between bg-white py-2 px-2 shadow-lg dark:bg-slate-900/75 sm:py-3 sm:px-8'>
				<MenuPopOver
					className='grow-0 basis-1/3'
					display='md:hidden'
					setShowAuth={setShowAuth}
				/>
				<div className='flex shrink-0 grow-0 basis-1/3 justify-center md:justify-start'>
					<Link href='/#'>
						<a className='my-auto flex w-[140px] md:ml-0'>
							<Logo />
						</a>
					</Link>
					<div className='hidden gap-2 md:ml-2 md:flex'>
						<Link href='/#' passHref>
							<Button variant='ghost' as='a'>
								Companies
							</Button>
						</Link>
						<Link href='/#' passHref>
							<Button variant='ghost' as='a'>
								jobs
							</Button>
						</Link>
					</div>
				</div>
				<div className='relative flex basis-1/3 justify-end gap-2'>
					<Link href='/#' passHref>
						<Button as='a' variant='outline' className='hidden md:inline-flex'>
							For Employers
						</Button>
					</Link>
					<Button
						variant='solid'
						className='hidden md:inline-flex'
						onClick={() => setShowAuth(true)}
					>
						Sign In
					</Button>
					<ThemeToggle />
				</div>
			</header>

			{/**
			 * TODO: Create component for sign in
			 */}

			{showAuth && (
				<Transition appear show={showAuth} as={Fragment}>
					<Dialog
						as='div'
						className='fixed inset-0 z-10 overflow-y-auto'
						onClose={setShowAuth}
					>
						<div className='min-h-screen px-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0'
								enterTo='opacity-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100'
								leaveTo='opacity-0'
							>
								<Dialog.Overlay className='fixed inset-0' />
							</Transition.Child>

							{/* This element is to trick the browser into centering the modal contents. */}
							<span
								className='inline-block h-screen align-middle'
								aria-hidden='true'
							>
								&#8203;
							</span>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<div className='inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl'>
									<Dialog.Title
										as='h3'
										className='text-lg font-medium leading-6 text-gray-900'
									>
										Sign In
									</Dialog.Title>
									<div className='mt-2'>
										<p className='text-sm text-gray-500'>You are logged in</p>
									</div>

									<div className='mt-4'>
										<button
											type='button'
											className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
											onClick={() => setShowAuth(false)}
										>
											Sing out
										</button>
									</div>
								</div>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition>
			)}
		</>
	);
};

const MenuPopOver = ({ className, display, setShowAuth }) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className={clsx(className, display)}>
			<IconButton
				variant='ghost'
				aria-label='Navigation Menu'
				onClick={() => setIsOpen(!isOpen)}
			>
				<svg className='h-6 w-6' fill='none' stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth={2}
						d='M4 6h16M4 12h16M4 18h16'
					/>
				</svg>
			</IconButton>
			<Dialog
				as='div'
				className={clsx('fixed inset-0 z-50 ', display)}
				open={isOpen}
				onClose={() => setIsOpen(false)}
			>
				<Dialog.Overlay className='fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80' />

				<div className='fixed top-0 bottom-0 left-0 w-full max-w-xs rounded-r-xl bg-white p-6 shadow-lg dark:bg-gray-800 '>
					<a className='mx-auto mt-4 flex w-[140px]'>
						<Logo />
					</a>
					<ul className='mt-8 space-y-3'>
						<li className='group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50'>
							<span className='absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100' />
							<Link href='/#' passHref>
								<a className='w-full font-medium transition-all group-hover:pl-3'>
									Companies
								</a>
							</Link>
						</li>
						<li className='group relative flex h-9 items-center overflow-hidden rounded-md hover:bg-slate-200/50'>
							<span className='absolute h-full w-2 bg-indigo-700 opacity-0 transition-all group-hover:opacity-100' />
							<Link href='/#' passHref>
								<a className='w-full font-medium transition-all group-hover:pl-3'>
									Jobs
								</a>
							</Link>
						</li>
					</ul>

					<div className='mt-6 border-t border-gray-200 pt-6 dark:border-gray-200/10'>
						<ThemeSelect />
					</div>
					<ul className='mt-8 space-y-3 border-t border-gray-200 dark:border-gray-200/10'>
						<li>
							<Button
								variant='solid'
								fullWidth
								onClick={() => setShowAuth(true)}
							>
								Sign In
							</Button>
						</li>
						<li>
							<Link href='/#' passHref>
								<Button as='a' variant='outline' fullWidth>
									For Employers
								</Button>
							</Link>
						</li>
					</ul>

					<IconButton
						variant='ghost'
						aria-label='Close Navigation Menu'
						className='absolute top-5 right-5'
						onClick={() => setIsOpen(false)}
					>
						<svg
							viewBox='0 0 10 10'
							className='h-2.5 w-2.5 overflow-visible'
							aria-hidden='true'
						>
							<path
								d='M0 0L10 10M10 0L0 10'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
							/>
						</svg>
					</IconButton>
				</div>
			</Dialog>
		</div>
	);
};

export default Header;
