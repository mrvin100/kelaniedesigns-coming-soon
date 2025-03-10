"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import styles from "./styles.module.css";
// import { Section3Data } from "@/types/coming-soon";
import { section3Data as sectionData } from "./section3.types";
import { memo } from "react";
import Image from "next/image";

const Section3Description = memo(() => (
  <p className={styles.section3_description}>{sectionData.description}</p>
));

const Section3Title = memo(() => (
  <h2 className={cn(styles.section3_title_container, styles.section3_title)}>
    {sectionData.title.firstLine} <br />
    {sectionData.title.secondLine}
    <br />
    {sectionData.title.thirdLine}
  </h2>
));

const Section3Images = memo(() => (
  <div className={styles.section3_images}>
    <Image
      width={214}
      height={261}
      src={sectionData.images.firstImage}
      alt="Section 3 Image 1"
      className={cn(styles.section3_image_1)}
    />
    <Image
      width={184}
      height={174}
      src={sectionData.images.secondImage}
      alt="Section 3 Image 2"
      className={cn(styles.section3_image_2)}
    />
    <Image
      width={146}
      height={54}
      src={sectionData.images.thirdImage}
      alt="Section 3 Image 3"
      className={cn(styles.section3_image_3)}
    />
    <Image
      width={91}
      height={88}
      src={sectionData.images.fourthImage}
      alt="Section 3 Image 4"
      className={cn(styles.section3_image_4)}
    />
    <Image
      width={100}
      height={100}
      src={sectionData.images.fifthImage}
      alt="Section 3 Image 5"
      className={cn(styles.section3_image_5)}
    />
    <Image
      width={100}
      height={100}
      src={sectionData.images.sixthImage}
      alt="Section 3 Image 6"
      className={cn(styles.section3_image_6)}
    />
  </div>
));

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <Button
        className={"absolute left-[24.81rem] bottom-[4.31rem]"}
        text={sectionData.button.text}
      />
      <Section3Description />
      <Section3Title />
      <Section3Images />
    </section>
  );
};

Section3Description.displayName = "Section3Description";
Section3Title.displayName = "Section3Title";
Section3Images.displayName = "Section3Images";

export default Section3;
