import Header from '../components/Header';
import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='system'>
			<Header />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
