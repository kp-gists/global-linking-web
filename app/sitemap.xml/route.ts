// app/sitemap.xml/route.ts
import { domainUrl } from '@/utils/constants';
import { NextResponse } from 'next/server';

export async function GET() {
	const pages = [
		'', // homepage
		// 'about',
		// 'services',
		// 'contact',
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
		.map((page) => {
			return `
  <url>
    <loc>${domainUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
		})
		.join('')}
</urlset>`;

	return new NextResponse(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
		},
	});
}
