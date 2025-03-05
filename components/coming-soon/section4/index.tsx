"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Button, SectionBackground } from "../ui";
import { section4Data as sectionData } from "./section4.types";
import { memo, Fragment } from "react";
import { motion } from "framer-motion";

const Quote = memo(() => (
  <motion.div 
    className={styles.quote_container}
    initial={{ opacity: 0 }}
    whileInView={{ 
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }}
    viewport={{ once: true }}
  >
    <blockquote className={styles.quote}>
      {sectionData.quote.lines.map((line, index) => (
        <motion.p 
          key={line.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: index * 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
          viewport={{ once: true }}
        >
          {line.hasDecoration && (
            <span className={styles.quote_decoration}>.</span>
          )}
          <span className={styles.quote_text}>{line.text}</span>
        </motion.p>
      ))}
    </blockquote>
  </motion.div>
));

const Images = memo(() => (
  <>
    <motion.div 
      className={styles.rounded_image}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${sectionData.images.rounded})` }}
    />
    <motion.div 
      className={styles.square_image1}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${sectionData.images.square1})` }}
    />
    <motion.div 
      className={styles.square_image2}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${sectionData.images.square2})` }}
    />
    <motion.div 
      className={styles.square_image3}
      initial={{ opacity: 0, scale: 0.9, x: 30 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
          duration: 1,
          delay: 0.6,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      viewport={{ once: true }}
      style={{ backgroundImage: `url(${sectionData.images.square3})` }}
    />
  </>
));

const Subtitles = memo(() => (
  <>
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      <Section4Subtitle1 />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: 0.2,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      <Section4Subtitle2 />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      <Section4Subtitle3 />
    </motion.div>
  </>
));

const Section4Subtitle1 = memo(() => {
  const words = sectionData.subtitles.first.text.split(" ");
  const groups = [
    words[0],
    words.slice(1, 3).join(" "),
    words.slice(3).join(" ")
  ];

  return (
    <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle1)}>
      {groups.map((line, index) => (
        <Fragment key={line}>
          {line}
          {index < groups.length - 1 && <br />}
        </Fragment>
      ))}
    </h3>
  );
});

const Section4Subtitle2 = memo(() => (
  <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle2)}>
    {sectionData.subtitles.second.text}
  </h3>
));

const Section4Subtitle3 = memo(() => (
  <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle3)}>
    {sectionData.subtitles.third.text}
  </h3>
));

const Descriptions = memo(() => (
  <>
    <p className={cn(styles.section4_description, styles.section4_description1)}>
      {sectionData.descriptions.first}
    </p>
    <p className={cn(styles.section4_description, styles.section4_description2)}>
      {sectionData.descriptions.second}
    </p>
    <p className={cn(styles.section4_description, styles.section4_description3)}>
      {sectionData.descriptions.third}
    </p>
  </>
));

const Section4 = () => {
  return (
    <SectionBackground className={styles.section4}>
      <Quote />
      <Images />
      <Subtitles />
      <Descriptions />
      <Button
        className={"absolute bottom-[15.59rem] left-[39.81rem]"}
        text={sectionData.button.text}
      />
    </SectionBackground>
  );
};

Quote.displayName = "Quote";
Images.displayName = "Images";
Subtitles.displayName = "Subtitles";
Section4Subtitle1.displayName = "Section4Subtitle1";
Section4Subtitle2.displayName = "Section4Subtitle2";
Section4Subtitle3.displayName = "Section4Subtitle3";
Descriptions.displayName = "Descriptions";

export default Section4;
