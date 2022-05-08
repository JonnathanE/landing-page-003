import Head from 'next/head';
import FeaturedJobs from '../components/FeaturedJobs';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import TopCompanies from '../components/TopCompanies';

export default function Home() {
	return (
		<>
			<Head>
				<title>Jobs Page</title>
				<meta
					name='description'
					content='It is an example page that was followed to practice Next.js'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Hero />
			<main className='mx-auto max-w-screen-xl px-6 sm:px-8'>
				<div className='mt-16 space-y-20'>
					<FeaturedJobs />
					<TopCompanies />
				</div>
			</main>
			<Footer />
		</>
	);
}
