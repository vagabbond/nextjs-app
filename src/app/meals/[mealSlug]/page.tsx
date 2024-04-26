import React, { FC } from "react";

import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

export const generateMetadata = (data: IMealProps) => {
 const meal = getMeal(data.params.mealSlug) as IMeal;
 if (!meal) {
  notFound();
 }

 return {
  title: meal.title,
  description: meal.summary,
 };
};

interface IMealProps {
 params: {
  mealSlug: string;
 };
}

interface IMeal {
 id: string;
 title: string;
 slug: string;
 image: string;
 summary: string;
 creator: string;
 creator_email: string;
 instructions: string;
}

const Meal: FC<IMealProps> = ({ params }) => {
 const meal = getMeal(params.mealSlug) as IMeal;
 return meal ? (
  <>
   <header className={classes.header}>
    <div className={classes.image}>
     <Image src={meal.image} alt={meal.title} fill />
    </div>
    <div className={classes.headerText}>
     <h1>{meal.title}</h1>
     <p className={classes.creator}>
      by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
     </p>
     <p className={classes.summary}>{meal.summary}</p>
    </div>
   </header>
   <main>
    <p
     className={classes.instructions}
     dangerouslySetInnerHTML={{
      __html: meal.instructions.replace(/\n/g, "<br>"),
     }}
    ></p>
   </main>
  </>
 ) : (
  notFound()
 );
};

export default Meal;
