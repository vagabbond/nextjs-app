import { FC } from "react";

import MealItem from "./meals-item";
import classes from "./meals-grid.module.css";

interface IMeal {
 id: string;
 title: string;
 slug: string;
 image: string;
 summary: string;
 creator: string;
}
interface IMealsGridProps {
 meals: IMeal[];
}

const MealsGrid: FC<IMealsGridProps> = ({ meals }) => {
 return (
  <ul className={classes.meals}>
   {meals.map((meal) => (
    <li key={meal.id}>
     <MealItem {...meal} />
    </li>
   ))}
  </ul>
 );
};

export default MealsGrid;
