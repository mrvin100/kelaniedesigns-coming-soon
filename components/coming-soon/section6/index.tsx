"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import HeadingBar from "../ui/heading-bar";

const Section6 = () => {
  return (
    <section className={cn(styles.section6)}>
      <Section6Title />
      <Section6Description />
      <Section6Cards />
    </section>
  );
};

export default Section6;

const Section6Title = () => {
  return (
    <h2 className={styles.section6_title}>
      A Family-Driven Creative Hub{" "}
      <HeadingBar
        svgWidth="8.3125rem"
        className="absolute right-[2rem] top-[6.94rem]"
      />
    </h2>
  );
};

const Section6Description = () => {
  return (
    <p className={styles.section6_description}>
      Kelanie Designs is a design ecosystem built entirely in-house,where
      creative freedom, innovation, and uncompromised quality go hand in hand
      like chocolate and caramel.{" "}
    </p>
  );
};

const Section6Cards = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-x-[4.19rem] gap-y-[6rem] justify-center pt-[35rem] mx-auto border ",
        styles.section6_cards,
        "[&>*:last-child]:col-span-3 [&>*:last-child]:mx-auto"
      )}
    >
      <Section6Card
        title="Kelly (STéphanie Janette aka kelanie)"
        image="/section6_card_bg1.jpg"
      />
      <Section6Card title="Linda" image="/section6_card_bg2.jpg" />
      <Section6Card title="LUCIA" image="/section6_card_bg3.jpg" />
      <Section6Card title="samuel" image="/section6_card_bg4.jpg" />
      <Section6Card title="JUDE" image="/section6_card_bg5.jpg" />
      <Section6Card title="LUCA" image="/section6_card_bg6.jpg" />
      <Section6Card title="BATU AND HAPPY" image="/section6_card_bg7.jpg" />
    </div>
  );
};

interface Section6CardProps {
  title?: string;
  image?: string;
}
const Section6Card = ({ title, image }: Section6CardProps) => {
  return (
    <div
      className={cn(
        `bg-gray-300 bg-center bg-cover bg-no-repeat`,
        styles.section6_card
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className={styles.section6_card_title}>{title}</h3>
    </div>
  );
};
