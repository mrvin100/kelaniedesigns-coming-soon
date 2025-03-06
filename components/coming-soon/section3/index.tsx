"use client";
import { cn } from "@/lib/utils";
import { Button } from "../ui";
import styles from "./styles.module.css";
import { section3Data as sectionData } from "./section3.types";
import { memo } from "react";
  
const Section3Description = memo(() => (
  <p className={styles.section3_description}>
    {sectionData.description}
  </p>
));

const Section3Title = memo(() => (
  <h2 className={cn(styles.section3_title_container, styles.section3_title)}>
    {sectionData.title.firstLine} <br /> 
    {sectionData.title.secondLine}
    <br /> 
    {sectionData.title.thirdLine}
  </h2>
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
    </section>
  );
};

Section3Description.displayName = "Section3Description";
Section3Title.displayName = "Section3Title";

export default Section3;
