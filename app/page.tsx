'use client';

import { Button } from 'antd';
import { AiOutlineGlobal, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { FaHandshake, FaNetworkWired, FaCheckCircle, FaShippingFast } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { contact } from '@/utils/constants/company';

export default function HomePage() {
	return (
		<main className='w-full min-h-screen bg-white text-gray-800'>
			{/* ================= HERO SECTION ================= */}
			<section className='relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-start md:justify-center text-white text-center overflow-hidden'>
				{/* Background Image */}
				<div className='absolute inset-0 z-0'>
					<Image src='/assets/top-globe.jpg' alt='hero sales' fill className='object-cover' priority />
				</div>

				{/* Optional overlay */}
				<div className='absolute inset-0 bg-black/40 -z-10'></div>

				{/* Hero Content */}
				<div className='relative z-10 pt-10 md:pt-10 flex flex-col gap-10'>
					<h1 className='text-2xl md:text-6xl font-bold mb-6'>
						<strong className='text-5xl md:text-7xl'>Connecting Businesses. </strong>
						<br />{' '}
						<span
							className='text-teal-600 mt-2 text-4xl text-center hidden md:block
            '
						>
							Creating Global Opportunities.
						</span>
					</h1>
					<p
						className='
    max-w-2xl md:mx-auto text-lg md:text-xl mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.3)] mx-4'
					>
						We link companies around the world with trusted clients, suppliers, partners, and new markets — your gateway to global expansion.
					</p>
				</div>
			</section>

			{/* ================= ABOUT ================= */}
			<section id='about-us' className='py-20 px-6 max-w-6xl mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>About Us</h2>
				<p className='text-gray-600 max-w-3xl mx-auto text-lg'>
					We specialize in connecting businesses globally — suppliers, clients, distributors, and investors. Whether you’re expanding, sourcing products, or
					opening new sales channels, we make international growth simple and efficient.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16'>
					<div className='flex flex-col items-center'>
						<FaHandshake size={40} className='text-blue-600' />
						<h3 className='text-xl font-semibold mt-4'>International Matchmaking</h3>
						<p className='text-gray-600 mt-2'>We connect you with the right partners, clients, and suppliers.</p>
					</div>

					<div className='flex flex-col items-center'>
						<HiOutlineBriefcase size={40} className='text-blue-600' />
						<h3 className='text-xl font-semibold mt-4'>Global Sales Representation</h3>
						<p className='text-gray-600 mt-2'>We promote your products and open new markets worldwide.</p>
					</div>

					<div className='flex flex-col items-center'>
						<FaNetworkWired size={40} className='text-blue-600' />
						<h3 className='text-xl font-semibold mt-4'>Supplier & Manufacturer Sourcing</h3>
						<p className='text-gray-600 mt-2'>We find reliable suppliers with the best pricing & quality.</p>
					</div>
				</div>
			</section>

			{/* ================= SERVICES ================= */}
			<section id='services' className='py-20 bg-gray-100 px-6'>
				<h2 className='text-center text-3xl font-bold mb-12'>Our Services</h2>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
					{[
						{
							icon: <AiOutlineSearch size={35} className='text-blue-600' />,
							title: 'Global Business Matchmaking',
							desc: 'We identify and connect you with ideal partners worldwide.',
						},
						{
							icon: <FaShippingFast size={35} className='text-blue-600' />,
							title: 'Import / Export Support',
							desc: 'Documentation, logistics, and sourcing assistance.',
						},
						{
							icon: <HiOutlineBriefcase size={35} className='text-blue-600' />,
							title: 'Sales Representation',
							desc: 'We represent your brand and products in global markets.',
						},
						{
							icon: <AiOutlineGlobal size={35} className='text-blue-600' />,
							title: 'Market Expansion',
							desc: 'Enter new markets with confidence and verified contacts.',
						},
						{
							icon: <FaNetworkWired size={35} className='text-blue-600' />,
							title: 'B2B Network Building',
							desc: 'Grow your international network of clients and suppliers.',
						},
						{
							icon: <FaCheckCircle size={35} className='text-blue-600' />,
							title: 'Quality Verification',
							desc: 'We ensure suppliers and partners meet your standards.',
						},
					].map((s, i) => (
						<div key={i} className='bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition'>
							<div className='flex items-center gap-3 mb-4'>
								{s.icon}
								<h3 className='text-xl font-semibold'>{s.title}</h3>
							</div>
							<p className='text-gray-600'>{s.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* ================= CONTACT ================= */}
			<section id='contact' className='py-20 px-6 max-w-4xl mx-auto text-center'>
				<h2 className='text-3xl font-bold mb-6'>Get In Touch</h2>
				<p className='text-gray-600 text-lg mb-10'>Let’s discuss how we can help your business grow internationally.</p>

				<div className='flex flex-col gap-6 text-lg'>
					{/* <p className='flex items-center gap-2 justify-center'>
						<AiOutlinePhone /> <strong>Phone:</strong> +XX XXX XXX XXX
					</p> */}
					<Link href={`mailto:${contact.email.value}`} className='flex items-center gap-2 justify-center'>
						<AiOutlineGlobal /> <strong>Email: {contact.email.value}</strong>
					</Link>

					<Button type='primary' size='large'>
						Contact Us
					</Button>
				</div>
			</section>

			{/* ================= FOOTER ================= */}
		</main>
	);
}
