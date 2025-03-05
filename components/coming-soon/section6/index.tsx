"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Logo, Button, Input, SectionBackground } from "../ui";
import Image from "next/image";
import Link from "next/link";

const section6 = () => {
  return (
    <SectionBackground className={styles.section6}>
      <SquareImage1 />
      <SquareImage2 />
      <SquareImage3 />
      <Section6Subtitle1 />
      <Section6Description1 />
      <Section6Subtitle2 />
      <Section6Description2 />
      <Input className={styles.subscription_input} placeholder="EMAIL ADRESS" variant="newsletter" />
      <Button
        className={"absolute left-[50%] translate-x-[-50%] bottom-[23.5rem]"}
        variant="rounded"
      />
      <Footer />
    </SectionBackground>
  );
};

export default section6;

const SquareImage1 = () => {
  return <div className={styles.square_image1}></div>;
};
const SquareImage2 = () => {
  return <div className={styles.square_image2}></div>;
};
const SquareImage3 = () => {
  return <div className={styles.square_image3}></div>;
};

const Section6Subtitle1 = () => {
  return (
    <h3 className={cn(styles.section6_subtitle, styles.section6_subtitle1)}>
      . Kelanie Designs is just getting started.
    </h3>
  );
};

const Section6Description1 = () => {
  return (
    <p
      className={cn(styles.section6_description, styles.section6_description1)}
    >
      We&apos;re not just making jewelry; we&apos;re baking up a future where art,
      technology, and material innovation rise together like a perfectly puffed
      croissant - creating something entirely new, deliciously unexpected, and
      utterly irresistible.
    </p>
  );
};

const Section6Subtitle2 = () => {
  return (
    <h3 className={cn(styles.section6_subtitle, styles.section6_subtitle2)}>
      So go ahead - be bold. be curious. be Kelanie.
    </h3>
  );
};

  const Section6Description2 = () => {
  return (
    <p
      className={cn(styles.section6_description, styles.section6_description2)}
    >
      Add yourself to our newsletter to be part of our mission.
    </p>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo className="h-[3.34294rem] w-[9.97188rem]" />
      <FooterSocials />
      <FooterCopyright />
    </footer>
  );
};

const FooterSocials = () => {
  return (
    <div className={styles.footer_socials}>
      <FooterSocialIcon src={"/footer_social_icon1.svg"} />
      <FooterSocialIcon src={"/footer_social_icon2.svg"} />
      <FooterSocialIcon src={"/footer_social_icon3.svg"} />
      <FooterSocialIcon src={"/footer_social_icon4.svg"} />
    </div>
  );
};

const FooterSocialIcon = ({ src, href }: { src: string; href?: string }) => {
  return (
    <Link href={href ?? "#"}>
      <Image
        src={src}
        alt="footer social icon"
        width={100}
        height={100}
        className={"w-[2.28956rem] h-[2.25713rem]"}
      />
    </Link>
  );
};

const FooterCopyright = () => {
  return (
    <p className={styles.footer_copyright}>
      ©2025 Gaslighter Wine Company. All Rights Reserved | Imprint | Privacy
      policy
    </p>
  );
};
