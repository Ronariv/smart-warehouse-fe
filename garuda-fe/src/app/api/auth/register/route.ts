import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';

// const { User } = require("../../../../../models")

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    // Do we still need this
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log("ini 1")

    const existingUser = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email]
    );

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 409 }
      );
    }

    console.log("ini 2")
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // const newUser = await User.create({
    //   name,
    //   email,
    //   password,
    // });
    
    console.log(name)
    const result = await pool.query(
      `INSERT INTO users (name, email, password) 
       VALUES ($1, $2, $3) 
       RETURNING id, name, email`,
      [name, email, hashedPassword]
    );

    const newUser = result.rows[0];

    console.log("ini 3")
    return NextResponse.json(
      {
        message: 'User created successfully',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          createdAt: newUser.created_at
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}