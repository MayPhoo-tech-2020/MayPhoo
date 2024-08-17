//http://localhost:3000/api/create-test-table
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await sql`
      CREATE TABLE Test (
        id SERIAL PRIMARY KEY,
        Name varchar(255)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
