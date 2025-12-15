import { drizzle } from "drizzle-orm/mysql2";
import { newsletterEditions } from "../drizzle/schema.ts";

const db = drizzle(process.env.DATABASE_URL);

async function checkNewsletters() {
  const result = await db.select().from(newsletterEditions);
  console.log('Newsletter count:', result.length);
  console.log('\nNewsletters:');
  result.forEach(n => {
    console.log(`- ID: ${n.id}, Title: ${n.title}, Status: ${n.status}, Created: ${n.createdAt}`);
  });
  process.exit(0);
}

checkNewsletters();
