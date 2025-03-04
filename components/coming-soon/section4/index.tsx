"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Button, SectionBackground } from "../ui";

const Section4 = () => {
  return (
    <SectionBackground className={styles.section4}>
      <Quote />
      <RoundedImage1 />
      <SquareImage1 />
      <SquareImage2 />
      <SquareImage3 />
      <Section4Subtitle1 />
      <Section4Description1 />
      <Section4Subtitle2 />
      <Section4Description2 />
      <Section4Subtitle3 />
      <Section4Description3 />
      <Button
        className={"absolute bottom-[15.59rem] left-[39.81rem]"}
        text="READ MORE"
      />
    </SectionBackground>
  );
};
export default Section4;

const Quote = () => {
  return (
    <div className={styles.quote_container}>
      <blockquote className={styles.quote}>
        <p>
          <span className={styles.quote_decoration}>.</span>
          <span className={styles.quote_text}>For the Visionaries,</span>
        </p>
        <p>
          <span className={styles.quote_decoration}>.</span>
          <span className={styles.quote_text}>the Creators,</span>
        </p>
        <p>
          <span className={styles.quote_text}>THE BOLD.</span>
        </p>
      </blockquote>
    </div>
  );
};

const RoundedImage1 = () => {
  return <div className={styles.rounded_image}></div>;
};

const SquareImage1 = () => {
  return <div className={styles.square_image1}></div>;
};

const SquareImage2 = () => {
  return <div className={styles.square_image2}></div>;
};

const SquareImage3 = () => {
  return <div className={styles.square_image3}></div>;
};

const Section4Subtitle1 = () => {
  return (
    <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle1)}>
      Creativity <br /> has no <br />
      boundaries.
    </h3>
  );
};

const Section4Subtitle2 = () => {
  return (
    <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle2)}>
      Aesthetic meets . function.
    </h3>
  );
};

const Section4Subtitle3 = () => {
  return (
    <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle3)}>
      Material . innovations is the future.{" "}
    </h3>
  );
};

const Section4Description1 = () => {
  return (
    <p className={cn(styles.section4_description, styles.section4_description1)}>
      A single technique can be applied across multiple disciplines.
    </p>
  );
};

const Section4Description2 = () => {
  return (
    <p className={cn(styles.section4_description, styles.section4_description2)}>
      We don&apos;t just make things look beautiful—they are engineered for
      comfort, usability, and storytelling.
    </p>
  );
};

const Section4Description3 = () => {
  return (
    <p className={cn(styles.section4_description, styles.section4_description3)}>
      We blend culinary, beauty, craftsmanship and innovative techniques into
      design-forward creations.
    </p>
  );
}; 