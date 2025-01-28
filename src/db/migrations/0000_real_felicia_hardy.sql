CREATE TABLE "auther" (
	"id" serial PRIMARY KEY NOT NULL,
	"auther_name" varchar(25) NOT NULL,
	"email" varchar(25) NOT NULL,
	"bio" text
);
--> statement-breakpoint
CREATE TABLE "books" (
	"id" serial PRIMARY KEY NOT NULL,
	"auther_id" integer NOT NULL,
	"books_name" varchar(25) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "books" ADD CONSTRAINT "books_auther_id_auther_id_fk" FOREIGN KEY ("auther_id") REFERENCES "public"."auther"("id") ON DELETE no action ON UPDATE no action;