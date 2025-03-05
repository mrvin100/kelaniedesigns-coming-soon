"use client";

import styles from "./styles.module.css";
import { Button, Logo, Input, SectionBackground } from "../ui";
import { cn } from "@/lib/utils";
import { sectionOneTwoData as sectionData } from "./section1.types";
import { memo } from "react";
import { motion } from "framer-motion";

const HeaderVideo = memo(() => (
  <div className={styles.header_video}>
    <video
      className="w-full h-full object-cover"
      loop
      muted={true}
      poster={sectionData.section1.video.poster}
      autoPlay
    >
      <source src={sectionData.section1.video.src} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  </div>
));

const LeftTitle = memo(() => {
  const words = sectionData.section1.title.left.text.split(" ");
  const firstWord = words[0];
  const middleWords = words.slice(1, -1).join(" ");
  const lastWord = words[words.length - 1];

  return (
    <motion.h1
      className={cn(styles.section1_title, styles.left_title)}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
      >
        {firstWord}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
      >
        {middleWords}{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0.4,
            },
          }}
        >
          {lastWord}
        </motion.span>
      </motion.div>
    </motion.h1>
  );
});

const RightTitle = memo(() => (
  <motion.h1
    className={cn(styles.section1_title, styles.right_title)}
    initial={{
      opacity: 0,
      x: 30,
      filter: "blur(3px)",
    }}
    animate={{
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        delay: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.8 },
        filter: { duration: 0.8 },
      },
    }}
  >
    {sectionData.section1.title.right.text}
  </motion.h1>
));

const VerticalText = memo(() => (
  <motion.div
    className={styles.vertical_text_container}
    initial={{
      opacity: 0,
      y: 10,
    }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    }}
  >
    <motion.span
      className={styles.vertical_text}
      animate={{
        x: [0, 6, 0],
      }}
      transition={{
        duration: 1.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {sectionData.section1.verticalText.text}
    </motion.span>
  </motion.div>
));

const Section2Title = memo(() => {
  const words = sectionData.section2.title.text.split(" ");
  const firstTwoWords = words.slice(0, 2).join(" ");
  const restOfWords = words.slice(2).join(" ");

  return (
    <div className={styles.section2_title_container}>
      <h2 className={cn(styles.section1_title, styles.section2_title)}>
        {firstTwoWords} <br /> {restOfWords}
      </h2>
    </div>
  );
});

const Section2Description = memo(() => (
  <p className={styles.section2_description}>
    {sectionData.section2.description}
  </p>
));

const Section2Images = memo(() => (
  <>
    <div
      className={styles.square_image1}
      style={{ backgroundImage: `url(${sectionData.section2.images.square1})` }}
    />
    <div
      className={styles.rounded_image}
      style={{ backgroundImage: `url(${sectionData.section2.images.rounded})` }}
    />
    <div
      className={styles.square_image2}
      style={{ backgroundImage: `url(${sectionData.section2.images.square2})` }}
    />
  </>
));

const Section1 = () => {
  return (
    <section className={cn("", styles.section1)}>
      <Logo
        src={sectionData.section1.logo.src}
        alt={sectionData.section1.logo.alt}
        className={styles.header_logo}
      />
      <Button
        className="absolute right-[3.8rem] top-[3.8rem]"
        variant="circle"
      />
      <HeaderVideo />
      <LeftTitle />
      <RightTitle />
      <VerticalText />
      <Section2Description />
    </section>
  );
};

const Section2 = () => {
  return (
    <section className={cn("", styles.section2)}>
      <Section2Images />
      <Section2Title />
      <Button
        className={"absolute right-[25.69rem] bottom-[11.88rem]"}
        variant="rounded"
      />
      <Input
        className={styles.subscription_input}
        placeholder="EMAIL ADRESS"
        variant="newsletter"
      />
    </section>
  );
};

const SectionOneTwo = () => {
  return (
    <SectionBackground className={styles.section_one_two}>
      <Section1 />
      <Section2 />
    </SectionBackground>
  );
};

HeaderVideo.displayName = "HeaderVideo";
LeftTitle.displayName = "LeftTitle";
RightTitle.displayName = "RightTitle";
VerticalText.displayName = "VerticalText";
Section2Title.displayName = "Section2Title";
Section2Description.displayName = "Section2Description";
Section2Images.displayName = "Section2Images";
export default SectionOneTwo;
