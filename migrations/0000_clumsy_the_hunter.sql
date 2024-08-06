CREATE TABLE IF NOT EXISTS "todoItems" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar NOT NULL,
	"overview" text DEFAULT '',
	"added_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"completed" boolean DEFAULT false NOT NULL
);
