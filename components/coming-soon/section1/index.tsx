"use client";

import styles from "./styles.module.css";
import { Button, Logo, Input, SectionBackground } from "../ui";
import { cn } from "@/lib/utils";
import { sectionOneTwoData as sectionData } from "./section1.types";
import { memo } from "react";

// Section 1 Components
const HeaderVideo = memo(() => (
  <div className={styles.header_video}>
    <video
      className="w-full h-full object-cover"
      loop
      muted={true}
      poster={sectionData.section1.video.poster}
      autoPlay
    >
      <source src={sectionData.section1.video.src} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  </div>
));

const LeftTitle = memo(() => (
  <h1 className={cn(styles.section1_title, styles.left_title)}>
    <span>{sectionData.section1.title.left.text[0]}</span>
    <div>
      {sectionData.section1.title.left.text[1]}{" "}
      <span>{sectionData.section1.title.left.text[sectionData.section1.title.left.text.length - 1]}</span>
    </div>
  </h1>
));

const RightTitle = memo(() => (
  <h1 className={cn(styles.section1_title, styles.right_title)}>
    {sectionData.section1.title.right.text}
  </h1>
));

const VerticalText = memo(() => (
  <div className={styles.vertical_text_container}>
    <span className={styles.vertical_text}>{sectionData.section1.verticalText.text}</span>
  </div>
));

// Section 2 Components
const Section2Title = memo(() => (
  <div className={styles.section2_title_container}>
    <h2 className={cn(styles.section1_title, styles.section2_title)}>
      {sectionData.section2.title.text[0]} <br /> {sectionData.section2.title.text[1]}
    </h2>
  </div>
));

const Section2Description = memo(() => (
  <p className={styles.section2_description}>
    {sectionData.section2.description}
  </p>
));

const Section2Images = memo(() => (
  <>
    <div className={styles.square_image1} style={{ backgroundImage: `url(${sectionData.section2.images.square1})` }} />
    <div className={styles.rounded_image} style={{ backgroundImage: `url(${sectionData.section2.images.rounded})` }} />
    <div className={styles.square_image2} style={{ backgroundImage: `url(${sectionData.section2.images.square2})` }} />
  </>
));

// Main Components
const Section1 = () => {
  return (
    <section className={cn("", styles.section1)}>
      <Logo 
        src={sectionData.section1.logo.src}
        alt={sectionData.section1.logo.alt}
        className={styles.header_logo} 
      />
      <Button className={"absolute right-[3.8rem] top-[3.8rem]"} />
      <HeaderVideo />
      <LeftTitle />
      <RightTitle />
      <VerticalText />
      <Section2Description />
    </section>
  );
};

const Section2 = () => {
  return (
    <section className={cn("", styles.section2)}>
      <Section2Images />
      <Section2Title />
      <Button
        className={"absolute right-[25.69rem] bottom-[11.88rem]"}
        variant="rounded"
      />
      <Input className={styles.subscription_input} placeholder="EMAIL ADRESS" variant="newsletter" />
    </section>
  );
};

const SectionOneTwo = () => {
  return (
    <SectionBackground className={styles.section_one_two}>
      <Section1 />
      <Section2 />
    </SectionBackground>
  );
};

// Add display names for debugging
HeaderVideo.displayName = "HeaderVideo";
LeftTitle.displayName = "LeftTitle";
RightTitle.displayName = "RightTitle";
VerticalText.displayName = "VerticalText";
Section2Title.displayName = "Section2Title";
Section2Description.displayName = "Section2Description";
Section2Images.displayName = "Section2Images";

export default SectionOneTwo;
