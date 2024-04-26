"use client";

import React from "react";
import { useFormStatus } from "react-dom";
const MealsForm = () => {
 const { pending } = useFormStatus();
 return (
  <button type="submit" disabled={pending}>
   {pending ? "Submiting..." : "Share Meal"}
  </button>
 );
};

export default MealsForm;
