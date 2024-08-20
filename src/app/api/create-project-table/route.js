//http://localhost:3000/api/create-project-table
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await sql`
      CREATE TABLE Project (
        id SERIAL PRIMARY KEY,
        Title varchar(255),
        Image varchar(100),
        Description varchar(300),
        Technologies varchar (255),
        Languages varchar(255),
        Contributions varchar(500),
         varchar(255)

      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
