import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

interface IMeal {
 title: string;
 summary: string;
 instructions: string;
 image: File | string;
 creator: string;
 creator_email: string;
 slug?: string;
}

export const getMeals = () => {
 return db.prepare("SELECT * FROM meals").all();
};

export const getMeal = (slug: string) => {
 return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
};

export const createMeal = async (userMeal: IMeal) => {
 userMeal.slug = slugify(userMeal.title, { lower: true });
 userMeal.instructions = xss(userMeal.instructions);

 if (typeof userMeal.image !== "string") {
  const exstension = userMeal.image.name.split(".").pop();
  const filename = `${userMeal.slug}.${exstension}`;
  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await userMeal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImage), (error) => {
   if (error) {
    throw new Error("Error writing image to disk");
   }
  });
  stream.end();
  userMeal.image = `/images/${filename}`;
 }

 db
  .prepare(
   `INSERT INTO meals (title, summary, instructions, image, creator, creator_email, slug)
        VALUES (@title, @summary, @instructions, @image, @creator, @creator_email, @slug)`
  )
  .run(userMeal);
};
