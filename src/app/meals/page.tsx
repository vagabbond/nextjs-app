import type { Metadata } from "next";

import Link from "next/link";
import React, { Suspense } from "react";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import Loading from "./loading-out";

export const metadata: Metadata = {
 title: "All Meals",
 description: "All meals created by our users.",
};

interface IMeal {
 id: string;
 title: string;
 slug: string;
 image: string;
 summary: string;
 creator: string;
}

const MealsWrapper = () => {
 const meals = getMeals() as IMeal[];
 return <MealsGrid meals={meals} />;
};

const Meals = () => {
 return (
  <>
   <header className={classes.header}>
    <h1>
     Delicious meals, created <span className={classes.highlight}>by you</span>
    </h1>
    <p>Choose your favorite meal and then cook it yourself!</p>
    <p className={classes.cta}>
     <Link href="/meals/share">Share Your Favorite Recipe</Link>
    </p>
   </header>
   <main className={classes.main}>
    <Suspense fallback={<Loading />}>
     <MealsWrapper />
    </Suspense>
   </main>
  </>
 );
};

export default Meals;
