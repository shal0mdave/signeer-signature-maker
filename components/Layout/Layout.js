import Head from 'next/head'
import Nav from '../Nav/Nav'

const Layout = (props) => {

	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<meta name="author" content="Shalom Effiom" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
				<meta name="theme-color" content="#FEC89A" />
				<meta name="title" content="Welcome to Signeer - A Simple Signature Maker For Humans" />
				<meta name="description" content="Add a human touch to your digital signatures with ease." />
				<meta name="keywords" content="signature, signer, text, image" />

				<link rel="icon" href="/favicon.ico" />
				<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet" />

				<title>Welcome to Signeer - A Simple Signature Maker For Humans</title>
			</Head>

			<div>
				<Nav />
				{props.children}
			</div>
		</>
	)
}

export default Layout