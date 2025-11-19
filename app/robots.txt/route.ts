// app/robots.txt.ts
import { domainUrl } from '@/utils/constants';
import { NextResponse } from 'next/server';

export async function GET() {
	const robots = `
User-agent: *
Allow: /
Sitemap: ${domainUrl}/sitemap.xml
  `;

	return new NextResponse(robots, {
		headers: { 'Content-Type': 'text/plain' },
	});
}
