'use client';

import { Button, Divider, Drawer } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiNavigation } from 'react-icons/bi';
import { FaArrowRight, FaBars } from 'react-icons/fa';
import { FaArrowDown19 } from 'react-icons/fa6';

const navlinks = [
	{ id: 'Services', href: '#services', text: 'Our Services' },
	{ id: 'about', href: '#about-us', text: 'About GL' },
	{ id: 'contact', href: '#contact', text: 'Contact' },
];

const linkMap = (
	<ul className='flex flex-col md:flex-row gap-6 text-lg'>
		{navlinks.map((item) => (
			<li key={item.id}>
				<a href={item.href} className='hover:text-teal-600 duration-200'>
					{item.text}
				</a>
			</li>
		))}
	</ul>
);

function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className='w-full fixed top-0 left-0 z-50 bg-white shadow-sm'>
			<div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
				<Link href='/' className='flex items-center gap-2'>
					<Image src='/assets/global-network.png' width={32} height={32} alt='Global Linking icon' />
					<p className='text-2xl font-serif font-semibold text-zinc-800'>Global Linking</p>
				</Link>

				<div className='hidden md:block'>{linkMap}</div>

				<div className='flex gap-4 items-center'>
					<Button size='large' type='primary' className='hidden! md:block'>
						Get Started
					</Button>
					<Button size='large' className='hidden! md:block'>
						Book a Consultation
					</Button>

					<FaBars size={28} className='md:hidden hover:cursor-pointer' onClick={() => setOpen(true)} />
				</div>

				<Drawer
					open={open}
					onClose={() => setOpen(false)}
					title={
						<Link href='/' className='flex justify-center items-center gap-2'>
							<Image src='/assets/global-network.png' width={32} height={32} alt='Global Linking icon' />
							<p className='text-2xl font-serif font-semibold text-zinc-800'>Global Linking</p>
						</Link>
					}
				>
					<div className='block md:hidden'>
						<h1 className='text-xl flex items-center gap-2 mb-4'>
							Navigation <BiNavigation className='text-teal-500 rotate-180' />
						</h1>
						{linkMap}
					</div>

					<Divider />

					<div className='flex flex-col gap-4 w-full'>
						<Button size='large' type='primary'>
							Get Started
						</Button>
						<Button size='large'>Book a Consultation</Button>
					</div>
				</Drawer>
			</div>
		</nav>
	);
}

export default Navbar;
