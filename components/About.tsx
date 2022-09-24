/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{duration: 1.5}}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        src="https://i.ibb.co/5xHzKKs/meta-human.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-25 h-25 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl lg:text-4xl font-semibold">
          Here is a <span className="underline decoration-[#F7AB0A]">
            little
          </span>
          {' '} background
        </h4>
        <p className="text-xs md:text-sm xl:text-xl">
          Hey, I am Aditya a budding fullstack blockchain developer with
          a strong foundation of JavaScript paired with React, Next and
          Node with addition to Flutter for developing user-friendly frontend along
          with Web3 and Ethers powered by understanding of public blockchains,
          like Bitcoin, Ethereum 2.0, Chainlink ecosystem, Polygon, and
          Polcadot. Along with their practical implementations for building
          blockchain solutions like NFTs, NFT Marketplaces, DAOs, DeFi and DeFi
          protocols.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
