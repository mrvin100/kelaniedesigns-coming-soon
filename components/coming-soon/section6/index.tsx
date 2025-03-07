"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Logo, Button, Input, SectionBackground } from "../ui";
import Image from "next/image";
import Link from "next/link";
import { section6Data as sectionData } from "./section6.types";
import { memo } from "react";
import { motion } from "motion/react";
// import { Section6Data } from "@/types/coming-soon";

const Images = memo(() => (
  <>
    <motion.div
      className={styles.square_image1}
      initial={{ y: 100, opacity: 0, rotateZ: -5 }}
      whileInView={{ 
        y: 0, 
        opacity: 1,
        rotateZ: 0,
        transition: { 
          duration: 1.2,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      style={{ backgroundImage: `url(${sectionData.images.square1})` }}
    />
    <motion.div
      className={styles.square_image2}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ 
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.3,
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      style={{ backgroundImage: `url(${sectionData.images.square2})` }}
    />
    <motion.div
      className={styles.square_image3}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.5,
          duration: 0.8,
          ease: "easeOut"
        }
      }}
      style={{ backgroundImage: `url(${sectionData.images.square3})` }}
    />
  </>
));

const Section6Subtitle1 = memo(() => {
  const words = sectionData.subtitles.first.text.split(" ");
  const firstLine = words.slice(0, 3).join(" ");
  const secondLine = words.slice(3, 6).join(" ");
  const lastLine = words[words.length - 1];

  return (
    <motion.h3 
      className={cn(styles.section6_subtitle, styles.section6_subtitle1)}
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ 
        x: 0, 
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
    >
      <span className={styles.first_line}>{firstLine}</span>
      <span className={styles.line_container}>
        {secondLine}
        <span className={styles.red_line} />
      </span>
      <span className={styles.last_line}>{lastLine}</span>
    </motion.h3>
  );
});

const Section6Subtitle2 = memo(() => {
  const { textArray } = sectionData.subtitles.second;
  
  return (
    <h3 className={cn(styles.section6_subtitle, styles.section6_subtitle2)}>
      {textArray.map((line, index) => (
        <motion.span
          key={line}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.2,
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }
          }}
        >
          {line}
          <br />
        </motion.span>
      ))}
    </h3>
  );
});

const Section6Description1 = memo(() => (
  <p className={cn(styles.section6_description, styles.section6_description1)}>
    {sectionData.descriptions.first.text}
  </p>
));

const Section6Description2 = memo(() => (
  <p className={cn(styles.section6_description, styles.section6_description2)}>
    {sectionData.descriptions.second.text}
  </p>
));

const FooterSocialIcon = memo(({ src, href }: { src: string; href: string }) => (
  <motion.div
    initial={{ opacity: 0.6 }}
    whileHover={{ 
      scale: 1.15,
      opacity: 1,
      rotate: [0, -10, 10, 0],
      transition: {
        rotate: {
          duration: 0.6,
          ease: "easeInOut",
          repeat: 0
        },
        scale: {
          type: "spring",
          stiffness: 400,
          damping: 17
        }
      }
    }}
    whileTap={{ 
      scale: 0.9,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }}
  >
    <Link href={href} target="_blank">
      <Image
        src={src}
        alt="footer social icon"
        width={100}
        height={100}
        className="w-[2.28956rem] h-[2.25713rem]"
      />
    </Link>
  </motion.div>
));

const FooterSocials = memo(() => (
  <div className={styles.footer_socials}>
    {sectionData.footer.socials.map((social) => (
      <FooterSocialIcon key={social.src} {...social} />
    ))}
  </div>
));

const FooterCopyright = memo(() => (
  <p className={styles.footer_copyright}>{sectionData.footer.copyright}</p>
));

const Footer = memo(() => (
  <motion.footer 
    className={styles.footer}
    initial={{ opacity: 0 }}
    whileInView={{
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }}
    viewport={{ once: true }}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1]
        }
      }}
      viewport={{ once: true }}
    >
      <Logo className="h-[3.34294rem] w-[9.97188rem]" />
    </motion.div>
    <FooterSocials />
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { 
          duration: 0.6,
          delay: 0.4,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true }}
    >
      <FooterCopyright />
    </motion.div>
  </motion.footer>
));

const Section6 = () => {
  return (
    <SectionBackground className={styles.section6}>
      <Images />
      <Section6Subtitle1 />
      <Section6Description1 />
      <Section6Subtitle2 />
      <Section6Description2 />
      <Input
        className={styles.subscription_input}
        placeholder={sectionData.input.placeholder}
        variant="newsletter"
      />
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
        <Button
          className="absolute left-[43%] translate-x-[-50%] bottom-[23.5rem]"
          variant="rounded"
        />
      </motion.div>
      <Footer />
    </SectionBackground>
  );
};

Images.displayName = "Images";
Section6Subtitle1.displayName = "Section6Subtitle1";
Section6Subtitle2.displayName = "Section6Subtitle2";
Section6Description1.displayName = "Section6Description1";
Section6Description2.displayName = "Section6Description2";
FooterSocialIcon.displayName = "FooterSocialIcon";
FooterSocials.displayName = "FooterSocials";
FooterCopyright.displayName = "FooterCopyright";
Footer.displayName = "Footer";

export default Section6;
