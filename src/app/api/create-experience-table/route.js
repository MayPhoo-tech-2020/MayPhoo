//http://localhost:3000/api/create-experience-table
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const result = await sql`
      CREATE TABLE Experience (
        id SERIAL PRIMARY KEY,
        Company_Name varchar(100),
        Company_Logo varchar(100),
        Job_Title varchar (100),
        Location varchar(100),
        Qualification_Title varchar(100),
        Qualification_Description varchar(700)

      );
    `;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
