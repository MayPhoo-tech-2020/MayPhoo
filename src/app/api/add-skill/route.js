//http://localhost:3000/api/add-skill
/*
{
  "category": "Programming Languages",
  "title": "Java",
  "img_name": "java.png"
}

*/
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the incoming JSON data from the request body
    const { category,title,img_name } = await request.json();

    // Validate required fields
    if (!category) throw new Error('Category required');
    if (!title) throw new Error('Title required');
    if (!img_name) throw new Error('Image name required');
   
    // Insert the new record into the database
    await sql`
      INSERT INTO Skill (Category, Title, Img_name) 
      VALUES (${category},${title},${img_name});
    `;

    // Retrieve all records from the database to confirm the insertion
   // const data = await sql`SELECT * Skill;`;

    // Convert the data to a JSON string before sending it back in the response
   return new NextResponse({ status: 200 });

  } catch (error) {
    // Handle errors and respond with an error message
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
