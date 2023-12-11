import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { languages } from "./types/languages";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function runtime(minutes: number) {
  // seconds
  const seconds = minutes * 60;
  let secondsLeft = seconds;

  // hours
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  // mins
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  return `${hours ? hours + "h" : ""} ${mins}min`;
}

export function fullLang(iso: string) {
  const fullLang = languages.find((lang) => lang.iso_639_1 === iso);

  if (fullLang) {
    return fullLang.english_name;
  }

  return iso;
}

export function fullDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    dateStyle: "long",
  });
}

export function getYear(date: string) {
  return new Date(date).getFullYear();
}

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function formatContent(string: string) {
  return string
    .split("\n")
    .filter((section) => section !== "")
    .map((section) => `<p>${section}</p>`)
    .join("");
}
