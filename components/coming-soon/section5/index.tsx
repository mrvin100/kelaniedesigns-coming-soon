"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { TeamMember, section5Data } from "./section5.types";
import { HeadingBar } from "../ui";
import { memo } from "react";

interface Section5CardProps extends TeamMember {
  className?: string;
}

const Section5Card = memo(({ name, image, className }: Section5CardProps) => {
  return (
    <div
      className={cn(
        `bg-gray-300 bg-center bg-cover bg-no-repeat cursor-pointer`,
        styles.section5_card,
        className
      )}
      style={{ backgroundImage: `url(${image})` }}
    >
      <h3 className={styles.section5_card_title}>{name}</h3>
    </div>
  );
});

const Section5Cards = memo(() => {
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-x-[4.19rem] gap-y-[6rem] justify-center pt-[35rem] mx-auto",
        styles.section5_cards,
        "[&>*:last-child]:col-span-3 [&>*:last-child]:mx-auto"
      )}
    >
      {section5Data.teamMembers.map((member) => (
        <Section5Card key={member.id} {...member} />
      ))}
    </div>
  );
});

const Section5Title = memo(() => {
  return (
    <h2 className={styles.section5_title}>
      {section5Data.title}{" "}
      <HeadingBar
        svgWidth="8.3125rem"
        className="absolute right-[2rem] top-[6.94rem]"
      />
    </h2>
  );
});

const Section5Description = memo(() => {
  return (
    <p className={styles.section5_description}>
      {section5Data.description}
    </p>
  );
});

const Section5 = () => {
  return (
    <section className={cn(styles.section5)}>
      <Section5Title />
      <Section5Description />
      <Section5Cards />
    </section>
  );
};

Section5Card.displayName = "Section5Card";
Section5Cards.displayName = "Section5Cards";
Section5Title.displayName = "Section5Title";
Section5Description.displayName = "Section5Description";

export default Section5;
