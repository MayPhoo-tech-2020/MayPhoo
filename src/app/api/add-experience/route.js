//http://localhost:3000/api/add-experience
/*
{
  "company_name": "Lithan",
  "company_logo": "lithan.jpeg",
  "job_title": "Lithan, On-Campus Mentor (Software Engineering)",
  "location": "Jul 2021 – Nov 2023 | Myitkyina, Kachin State",
  "qualification_title": "I have gained extensive experience in various areas:",
  "qualification_description": "• Supported the learners for e-learning, assignment and additional practice sessions onsite in the Campus.\n• Trained and led the learners for the implementation of projects that use some backend development tools such as Spring Boot, Node, Express, NestJS and frontend development tools such as React, Angular and Bootstrap.\n• Analyzed the learners’ engagement and performance, and gave feedback and grading of assignments."
}

*/
'use server';

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the incoming JSON data from the request body
    const { company_name, company_logo, job_title, location, qualification_title, qualification_description} = await request.json();

    // Validate required fields
    if (!company_name) throw new Error('Company Name required');
    if (!company_logo) throw new Error('Company Logo required');
    if (!job_title) throw new Error('Job Titlebrequired');
    if (!location) throw new Error('Location required');
    if (!qualification_title) throw new Error('Qualification Title required');
    if (!qualification_description) throw new Error('Qualification Description required');
   
   
    // Insert the new record into the database
    await sql`
      INSERT INTO Experience (Company_name, Company_logo, Job_title, Location, Qualification_title, Qualification_description) 
      VALUES (${company_name}, ${company_logo}, ${job_title}, ${location}, ${qualification_title}, ${qualification_description});
    `;

    // Retrieve all records from the database to confirm the insertion
   // const data = await sql`SELECT * Experience;`;

    // Convert the data to a JSON string before sending it back in the response
   return new NextResponse({ status: 200 });

  } catch (error) {
    // Handle errors and respond with an error message
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
