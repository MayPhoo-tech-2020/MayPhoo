'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await sql`
      CREATE TABLE CompanyProject(
        id SERIAL PRIMARY KEY,
        Title VARCHAR(255),
        Image VARCHAR(100),
        Description VARCHAR(300),
        Technologies VARCHAR(255),
        Languages VARCHAR(255),
        Contributions VARCHAR(500),
        GitHubLink VARCHAR(500)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
