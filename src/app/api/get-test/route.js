// http://localhost:3000/api/get-test
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const fetchCache = 'force-no-store';

export async function GET(request) {
  console.log('Starting to fetch test...');

  try {
    // Introduce a short delay (adjust as needed for testing)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Fetch pets from the database
    const { rows: data } = await sql`SELECT * FROM Test ORDER BY id ASC; `;

    // Log the fetched data
    console.log('Fetched test:', data);

    // Return the response with no caching
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
    // Log the error
    console.error('Error fetching test:', error);

    // Return a 500 error response
    return NextResponse.json({ error: 'Failed to fetch test' }, { status: 500 });
  }
}
