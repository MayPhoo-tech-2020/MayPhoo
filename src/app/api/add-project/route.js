'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the incoming JSON data from the request body
    const { title, description, technologies, languages, contributions } = await request.json();

    // Validate required fields
    if (!title) throw new Error('Title required');
    if (!description) throw new Error('Description required');
    if (!technologies) throw new Error('Technologies required');
    if (!languages) throw new Error('Languages required');
    if (!contributions) throw new Error('Contributions required');

    // Insert the new record into the database
    await sql`
      INSERT INTO Project (Title, Description, Technologies, Languages, Contributions) 
      VALUES (${title}, ${description}, ${technologies}, ${languages}, ${contributions});
    `;

    // Retrieve all records from the database to confirm the insertion
   // const data = await sql`SELECT * FROM Project;`;

    // Convert the data to a JSON string before sending it back in the response
   return new NextResponse({ status: 200 });

  } catch (error) {
    // Handle errors and respond with an error message
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
