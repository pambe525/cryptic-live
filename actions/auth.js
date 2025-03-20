'use server'

import { revalidatePath } from "next/cache";

export async function loginUser(formData) {
  console.log("SERVER ACTION");
  return { error: "This email already exists" };
}

export async function registerUser(currentState, formData) {
  const email = formData.get("email");
  const password1 = formData.get("password1");
  const password2 = formData.get("password2");
  const screenName = formData.get("screenName");
  return {
    email: "", password1: "", password2: "", screenName: "",
    error: "This email already exists"
  };
}
