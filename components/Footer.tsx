import React from 'react';

function Footer() {
	return (
		<footer className='bg-gray-900 text-gray-300 py-8 text-center text-sm'>
			<p>
				© {new Date().getFullYear()} <strong>Global Linking</strong>. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
