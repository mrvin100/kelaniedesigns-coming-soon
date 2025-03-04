"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { HeadingBar } from "../ui";

const Section5 = () => {
  return (
    <section className={cn(styles.section5)}>
      <Section5Title />
      <Section5Description />
      <Section5Cards />
    </section>
  );
};

export default Section5;

const Section5Title = () => {
  return (
    <h2 className={styles.section5_title}>
      A Family-Driven Creative Hub{" "}
      <HeadingBar
        svgWidth="8.3125rem"
        className="absolute right-[2rem] top-[6.94rem]"
      />
    </h2>
  );
};

const Section5Description = () => {
  return (
    <p className={styles.section6_description}>
      Kelanie Designs is a design ecosystem built entirely in-house,where
      creative freedom, innovation, and uncompromised quality go hand in hand
      like chocolate and caramel.{" "}
    </p>
  );
};

const Section5Cards = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-x-[4.19rem] gap-y-[6rem] justify-center pt-[35rem] mx-auto border ",
        styles.section5_cards,
        "[&>*:last-child]:col-span-3 [&>*:last-child]:mx-auto"
      )}
    >
      <Section5Card
        title="Kelly (STéphanie Janette aka kelanie)"
        image="/section5_card_bg1.jpg"
      />
      <Section5Card title="Linda" image="/section5_card_bg2.jpg" />
      <Section5Card title="LUCIA" image="/section5_card_bg3.jpg" />
      <Section5Card title="samuel" image="/section5_card_bg4.jpg" />
      <Section5Card title="JUDE" image="/section5_card_bg5.jpg" />
      <Section5Card title="LUCA" image="/section5_card_bg6.jpg" />
      <Section5Card title="BATU AND HAPPY" image="/section5_card_bg7.jpg" />
    </div>
  );
};

interface Section5CardProps {
  title?: string;
  image?: string;
}
const Section5Card = ({ title, image }: Section5CardProps) => {
  return (
    <div
      className={cn(
        `bg-gray-300 bg-center bg-cover bg-no-repeat`,
        styles.section5_card
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className={styles.section5_card_title}>{title}</h3>
    </div>
  );
};
