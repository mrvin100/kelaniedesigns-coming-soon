"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { TeamMember, section5Data } from "./section5.types";
import { memo } from "react";
import { motion } from "motion/react";

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
        "grid grid-cols-3 gap-x-[4.19rem] gap-y-[6rem] justify-center mx-auto",
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

const Section5Title = memo(() => (
  <motion.h2 
    className={styles.section5_title}
    initial={{ 
      opacity: 0,
    }}
    whileInView={{ 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }}
  >
    {section5Data.title}
  </motion.h2>
));

const Section5 = () => {
  return (
    <section className={cn(styles.section5)}>
      <div className={styles.section5_content}>
        <Section5Title />
        <motion.p 
          className={styles.section5_description}
          initial={{ opacity: 0 }}
          whileInView={{ 
            opacity: 1,
            transition: {
              delay: 0.3,
              duration: 0.5,
              ease: "easeOut"
            }
          }}
        >
          {section5Data.description}
        </motion.p>
      </div>
      <Section5Cards />
    </section>
  );
};

Section5Card.displayName = "Section5Card";
Section5Cards.displayName = "Section5Cards";
Section5Title.displayName = "Section5Title";

export default Section5;
