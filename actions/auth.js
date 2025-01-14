'use server'

import { revalidatePath } from "next/cache";

export async function loginUser(formData) {
  console.log("SERVER ACTION");
  return { error: "This email already exists" };
}

