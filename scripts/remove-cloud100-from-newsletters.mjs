import { getDb } from '../server/db.js';

async function removeCloud100References() {
  const db = await getDb();
  if (!db) {
    console.error('Database not available');
    return;
  }

  try {
    // Get all newsletters with Cloud 100 references
    const [newsletters] = await db.execute(
      'SELECT id, title, content FROM newsletter_editions WHERE content LIKE "%Cloud 100%" OR content LIKE "%Cloud100%"'
    );

    console.log(`Found ${newsletters.length} newsletters with Cloud 100 references`);

    for (const newsletter of newsletters) {
      console.log(`\nUpdating newsletter: ${newsletter.title}`);
      
      // Replace Cloud 100 references with Queen Ventures
      let updatedContent = newsletter.content
        .replace(/Cloud 100/g, 'Queen Ventures')
        .replace(/Cloud100/g, 'QueenVentures')
        .replace(/cloud 100/g, 'Queen Ventures')
        .replace(/cloud100/g, 'queenventures');
      
      // Update the newsletter
      await db.execute(
        'UPDATE newsletter_editions SET content = ? WHERE id = ?',
        [updatedContent, newsletter.id]
      );
      
      console.log(`✓ Updated newsletter ID ${newsletter.id}`);
    }

    console.log(`\n✓ Successfully updated ${newsletters.length} newsletters`);
  } catch (error) {
    console.error('Error updating newsletters:', error);
  }
}

removeCloud100References();
