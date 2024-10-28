import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import driveEaseImg from "@/public/driveEase.png";
import GardeningImg from "@/public/Gardening.png";
import englishImg from "@/public/english.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BSc IT Undergraduate",
    location: "University of Sri Jayewardenepura, Sri Lanka",
    description:
      "As an undergraduate, I am gaining practical experience in web development and project management through hands-on projects and coursework, allowing me to apply my skills in real-world scenarios",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  
  
] as const;

export const projectsData = [
  {
    title: "DriveEase",
    description:
      "I worked on a group project done using Java, where we colabartively build a Car Rental System named 'DriveEase'.",
    tags: ["Java", "OOP", "Database Intergration"],
    imageUrl: driveEaseImg,
  },
  {
    title: "Gardening Website",
    description:
      "Created a website delivering necessary facts about gardening which would help gardners.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "JavaScript"],
    imageUrl: GardeningImg,
  },
  {
    title: "English Learning System",
    description:
      "This is an ongoing group project where we create a system which helps to improve one's English knowledge.",
    tags: ["Java", "OOP", "Database Intergration"],
    imageUrl: englishImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "Data Visualization",
  "SQL",
  "OOP",
  "Problem-solving",
  "Collaboration",
  "Adaptability",
  "Project Management",
  "Communication",
  "Resource management",
  "Leadership",

  
] as const;
