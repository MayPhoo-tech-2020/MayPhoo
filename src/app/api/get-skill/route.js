import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const fetchCache = 'force-no-store';

export async function GET(request) {
  console.log('Starting to fetch skills...');

  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const { rows: data } = await sql`SELECT * FROM Skill ORDER BY id ASC;`;

    console.log('Fetched skills:', data);

    return NextResponse.json({ data }, {
      status: 200,
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store'
      }
    });
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}
