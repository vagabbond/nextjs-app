"use server";

import { redirect } from "next/navigation";
import { createMeal } from "./meals";
import { revalidatePath } from "next/cache";

const isInvalideText = (text: string) => {
 return !text || text.trim() === "";
};
interface State {
 message: string | null;
}

export const handleSubmit = async (_: State, formData: FormData) => {
 const meal = {
  title: formData.get("title") as string,
  summary: formData.get("summary") as string,
  instructions: formData.get("instructions") as string,
  image: formData.get("image") as File,
  creator: formData.get("name") as string,
  creator_email: formData.get("email") as string,
 };

 if (
  isInvalideText(meal.title) ||
  isInvalideText(meal.summary) ||
  isInvalideText(meal.instructions) ||
  isInvalideText(meal.creator) ||
  isInvalideText(meal.creator_email) ||
  !meal.creator_email.includes("@") ||
  !meal.image ||
  meal.image.size === 0
 ) {
  return {
   message: "Invalid input. Please try again.",
  };
 }

 await createMeal(meal);
 revalidatePath("/meals");
 redirect("/meals");
};
