"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am currently pursuing a BSc in Information Technology, focusing on 
      <span className="bold"> Web Development</span> and <span className="bold">Project Management</span>. 
      Throughout my studies, I have developed expertise in web development using <span className="italic">React </span> 
      and <span className="italic">Next.js</span> . 
      I have worked on projects related to <span className="italic">web development</span>, <span className="italic">system development</span>,
      applying my skills to address real-world challenges.
      I am passionate about leveraging technology to solve complex problems and am committed to continuously enhancing my web development skills through freelance work. 
      After graduation, I aim to pursue a career in <span className="bold">Project management</span> . 
      {" "}
      </p>

      <p>
        <span className="bold">In my free time</span>, I enjoy reading, watching movies, and practicing yoga . 
        I am also enthusiastic{" "}
        <span className="font-medium">about learning new things </span> and am currently exploring {" "}
        <span className="font-medium">psychology and counselling</span>. 
      </p>
    </motion.section>
  );
}
