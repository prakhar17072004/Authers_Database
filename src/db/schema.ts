import { pgTable, serial, text, varchar, integer } from 'drizzle-orm/pg-core';

// Define the "authers" table
export const authers = pgTable('auther', {
    id: serial('id').primaryKey(), // Primary key for authors
    auther_name: varchar('auther_name', { length: 25 }).notNull(), // Name of the author
    email: varchar('email', { length: 25 }).notNull(), // Email of the author
    bio: text('bio'), // Bio of the author
});

// Define the "books" table
export const books = pgTable('books', {
    id: serial('id').primaryKey(), // Primary key for books
    auther_id: integer('auther_id') // Foreign key referencing `authers.id`
        .notNull()
        .references(() => authers.id),
    books_name: varchar('books_name', { length: 25 }).notNull(), // Name of the book
});
