"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { Button, HeadingBar, Logo, Input, SectionBackground } from "../ui";
import { cn } from "@/lib/utils";

const SectionOneTwo = () => {
  return (
    <SectionBackground className={styles.section_one_two}>
      <Section1 />
      <Section2 />
    </SectionBackground>
  );
};
export default SectionOneTwo;

const Section1 = () => {
  return (
    <section className={cn("", styles.section1)}>
      <Logo className={styles.header_logo} />
      <Button className={"absolute right-[3.8rem] top-[3.8rem]"} />
      <HeaderVideo />
      <LeftTitle />
      <RightTitle />
      <VerticalText />
      <Section2Description />
    </section>
  );
};
const HeaderVideo = () => {
  return (
    <div className={styles.header_video}>
      <video
        className="w-full h-full object-cover"
        loop
        muted={true}
        poster="/header_video_poster.jpg"
        autoPlay
      >
        <source src={"/header_video.mp4"} type="video/mp4" />
        Your browser does not support the video tag
      </video>
    </div>
  );
};

const LeftTitle = () => {
  return (
    <h1 className={cn(styles.section1_title, styles.left_title)}>
      THE
      <Image
        className={styles.left_title_bar}
        src={"/heading_bar.svg"}
        width={100}
        height={100}
        alt="heaing bar"
      />
      FUTURE <span>OF</span>
    </h1>
  );
};

const RightTitle = () => {
  return (
    <h1 className={cn(styles.section1_title, styles.right_title)}>
      BOLD ELEGANCE
    </h1>
  );
};
const VerticalText = () => {
  return (
    <div className={styles.vertical_text_container}>
      <span className={styles.vertical_text}>DISCOVER</span>
      <HeadingBar className={styles.vertical_text_bar} svgWidth="26.6rem" />
    </div>
  );
};

const Section2 = () => {
  return (
    <section className={cn("", styles.section2)}>
      <SquareImage1 />
      <RoundedImage1 />
      <SquareImage2 />
      <Section2Title />
      <Button
        className={"absolute right-[25.69rem] bottom-[11.88rem]"}
        variant="rounded"
      />
      <Input className={styles.subscription_input} placeholder="EMAIL ADRESS" variant="newsletter" />
    </section>
  );
};

const SquareImage1 = () => {
  return <div className={styles.square_image1}></div>;
};

const RoundedImage1 = () => {
  return <div className={styles.rounded_image}></div>;
};

const SquareImage2 = () => {
  return <div className={styles.square_image2}></div>;
};

const Section2Title = () => {
  return (
    <div className={styles.section2_title_container}>
      <HeadingBar
        className="absolute -top-4 left-[31%] -translate-x-[50%] inline-block"
        svgWidth="17.9375rem"
      />
      <h2 className={cn(styles.section1_title, styles.section2_title)}>
        A VISION <br /> OF ART
      </h2>
    </div>
  );
};

const Section2Description = () => {
  return (
    <p className={styles.section2_description}>
      Kelanie aims to be a unique blend of artistry – inspired by a rich mix of
      cultural influences, seamlessly paired with Italian sophistication. We are
      creating high-quality, one-of-a-kind jewelry, all lifestyle vision, a
      creative force. Be part and add yourself to our newsletter.
    </p>
  );
};
