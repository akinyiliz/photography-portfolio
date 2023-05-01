import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Photography Portfolio</title>
			</Head>
			<Hero
				heading="Creative Photography"
				message="Capturing moments, preserving memories - one shot at a time."
			/>
		</div>
	);
}
