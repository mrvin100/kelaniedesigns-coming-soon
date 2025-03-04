"use client";
import { cn } from "@/lib/utils";
import { Button, HeadingBar } from "../ui";
import styles from "./styles.module.css";

const Section3 = () => {
  return (
    <section className={styles.section3}>
      <Button className={"absolute left-[24.81rem] bottom-[4.31rem]"} text="READ MORE" />
      <Section3Description />
      <Section3Title />
    </section>
  );
};

export default Section3;

const Section3Description = () => {
  return (
    <p className={styles.section3_description}>
      We create for those who believe in self-expression. Our designs are
      statements, not just accessories.Embrace fluidity. Every Kelanie piece
      carries craft,innovation, and soul.
    </p>
  );
};

const Section3Title = () => {
  return (
    <h2 className={cn(styles.section3_title_container, styles.section3_title)}>
      SOMETHING <br /> BOLD IS
      <HeadingBar className={styles.section3_heading_bar} svgWidth="10rem" />
      <br /> COMING UP
    </h2>
  );
};
