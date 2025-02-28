"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import Button from "../ui/button";
const Section5 = () => {
  return (
    <section
      className={cn(
        "relative bg-gradient-to-r from-[#313131] to-[#121212]",
        styles.section5
      )}
    >
      <Quote />
      <RoundedImage1 />
      <SquareImage1 />
      <SquareImage2 />
      <SquareImage3 />
      <Section5Subtitle1 />
      <Section5Description1 />
      <Section5Subtitle2 />
      <Section5Description2 />
      <Section5Subtitle3 />
      <Section5Description3 />
      <Button className={styles.section5_btn} text="READ MORE" />
    </section>
  );
};
export default Section5;

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

const Section5Subtitle1 = () => {
  return (
    <h3 className={cn(styles.section5_subtitle, styles.section5_subtitle1)}>
      Creativity
      <br /> has no <br />
      noundaries.
    </h3>
  );
};
const Section5Subtitle2 = () => {
  return (
    <h3 className={cn(styles.section5_subtitle, styles.section5_subtitle2)}>
      Aesthetic meets . funciton.
    </h3>
  );
};
const Section5Subtitle3 = () => {
  return (
    <h3 className={cn(styles.section5_subtitle, styles.section5_subtitle3)}>
      Material . innovations is the future.{" "}
    </h3>
  );
};

const Section5Description1 = () => {
  return (
    <p
      className={cn(styles.section5_description, styles.section5_description1)}
    >
      A single technique can be applied across multiple disciplines.
    </p>
  );
};
const Section5Description2 = () => {
  return (
    <p
      className={cn(styles.section5_description, styles.section5_description2)}
    >
      We don’t just make things look beautiful—they are engineered for comfort,
      usability, and storytelling.
    </p>
  );
};
const Section5Description3 = () => {
  return (
    <p
      className={cn(styles.section5_description, styles.section5_description3)}
    >
      We blend culinary, beauty, craftsmanship and innovative techniques into
      design-forward creations.
    </p>
  );
};
