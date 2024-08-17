// http://localhost:3000/api/add-test?name=mayphoo
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  try {
    if (!name) throw new Error('Name required');

    // Insert the new record into the database
    await sql`INSERT INTO Test (Name) VALUES (${name});`;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Retrieve all records from the database
 // const data = await sql`SELECT * FROM Test;`;
  //return NextResponse.json({ data }, { status: 200 });
}
