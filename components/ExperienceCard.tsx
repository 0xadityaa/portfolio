/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[400px] h-[580px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        className="w-28 h-28 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src="https://i.postimg.cc/YvpMqrPS/download.jpg"
        alt="App Logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Fullstack Dev</h4>
        <p className="font-bold text-2xl mt-1">Collage Capstone Project</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/q9nCHv1/flutter.png"
            alt="Flutter logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/y5FXBm6/firebase.png"
            alt="Firebase logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://i.ibb.co/xLsf0wc/API.png"
            alt="Firebase logo"
          />
        </div>
        <p className="uppercase py-2 text-gray-300">March 2021 - April 2022</p>
        <ul className="list-disc space-y-2 ml-5 text-md">
          <li>Designed the UI for the app</li>
          <li>Created Backend Architecture</li>
          <li>Developed the app using Flutter</li>
          <li>Created Documentation for the app</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
