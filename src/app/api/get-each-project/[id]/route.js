//http://localhost:3000/api/get-each-project/1
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export const fetchCache = 'force-no-store';

export async function GET(request, { params }) {
  const { id } = params; // Get the ID from the URL path parameters

  console.log(`Starting to fetch project with ID: ${id}...`);

  if (!id) {
    return NextResponse.json({ error: 'Project ID is required' }, { status: 400 });
  }

  try {
    // Introduce a short delay (adjust as needed for testing)
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Fetch the specific project from the database
    const { rows: data } = await sql`SELECT * FROM Project WHERE id = ${id};`;

    if (data.length === 0) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    // Return the response with no caching
    return NextResponse.json({ data: data[0] }, {
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
    console.error('Error fetching project:', error);

    // Return a 500 error response
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}
