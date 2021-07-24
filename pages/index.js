import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import SignatureBuilder from '../components/SignatureBuilder/SignatureBuilder';

export default function Home() {
	return (
		<Layout>
			<Hero />
			<SignatureBuilder />
		</Layout>
	)
}
