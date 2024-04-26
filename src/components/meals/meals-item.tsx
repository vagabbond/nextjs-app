import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import classes from "./meals-item.module.css";

interface IMealItemProps {
 title: string;
 slug: string;
 image: string;
 summary: string;
 creator: string;
}

const MealItem: FC<IMealItemProps> = ({
 title,
 slug,
 image,
 summary,
 creator,
}) => {
 return (
  <article className={classes.meal}>
   <header>
    <div className={classes.image}>
     <Image src={image} alt={title} fill />
    </div>
    <div className={classes.headerText}>
     <h2>{title}</h2>
     <p>by {creator}</p>
    </div>
   </header>
   <div className={classes.content}>
    <p className={classes.summary}>{summary}</p>
    <div className={classes.actions}>
     <Link href={`/meals/${slug}`}>View Details</Link>
    </div>
   </div>
  </article>
 );
};

export default MealItem;
