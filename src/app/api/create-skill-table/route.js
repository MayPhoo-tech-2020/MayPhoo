//http://localhost:3000/api/create-skill-table
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await sql`
      CREATE TABLE Skill (
        id SERIAL PRIMARY KEY,
        Category varchar(255),
        Title varchar(300),
        Img_Name varchar (255)
      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
