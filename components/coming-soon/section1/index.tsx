"use client";

import styles from "./styles.module.css";
import { Button, Logo, Input, SectionBackground } from "../ui";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { memo, Suspense } from "react";
import { motion } from "framer-motion";
import { fetchSection1Data, useSection1Data } from "@/services/api/section1";
import {
  TitleProps,
  VideoProps,
  LogoProps,
  Section2Props,
  Section2TitleProps,
  Section2DescriptionProps,
  Section2ImagesProps
} from "@/types/coming-soon";

const HeaderVideo = memo<VideoProps>(({ src, poster }) => (
  <motion.div
    className={styles.header_video}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }}
  >
    <video
      className="w-full h-full object-cover"
      loop
      muted={true}
      poster={poster}
      autoPlay
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag
    </video>
  </motion.div>
));

const LeftTitle = memo<TitleProps>(({ text }) => {
  if (typeof text !== 'string') {
    console.error('LeftTitle: text prop must be a string');
    return null;
  }

  const words = text.split(" ");
  const firstWord = words[0];
  const middleWords = words.slice(1, -1).join(" ");
  const lastWord = words[words.length - 1];

  return (
    <motion.h1
      className={cn(styles.section1_title, styles.left_title)}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
      >
        {firstWord}
      </motion.span>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
      >
        {middleWords}{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.6,
              delay: 0.4,
            },
          }}
        >
          {lastWord}
        </motion.span>
      </motion.div>
    </motion.h1>
  );
});

const RightTitle = memo<TitleProps>(({ text }) => {
  if (typeof text !== 'string') {
    console.error('RightTitle: text prop must be a string');
    return null;
  }

  return (
    <motion.h1
      className={cn(styles.section1_title, styles.right_title)}
      initial={{
        opacity: 0,
        x: 30,
        filter: "blur(3px)",
      }}
      animate={{
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: {
          duration: 1,
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1],
          opacity: { duration: 0.8 },
          filter: { duration: 0.8 },
        },
      }}
    >
      {text}
    </motion.h1>
  );
});

const VerticalText = memo<TitleProps>(({ text }) => (
  <motion.div
    className={styles.vertical_text_container}
    initial={{
      opacity: 0,
      y: 10,
    }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: "easeOut",
      },
    }}
  >
    <motion.span
      className={styles.vertical_text}
      animate={{
        x: [0, 6, 0],
      }}
      transition={{
        duration: 1.8,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.span>
  </motion.div>
));

const Section2Title = memo<Section2TitleProps>(({ title }) => {
  const words = title.text.split(" ");
  const firstTwoWords = words.slice(0, 2).join(" ");
  const restOfWords = words.slice(2).join(" ");

  return (
    <motion.div
      className={styles.section2_title_container}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={cn(styles.section1_title, styles.section2_title)}
        initial={{ y: 30 }}
        whileInView={{
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          },
        }}
        viewport={{ once: true }}
      >
        {firstTwoWords} <br /> {restOfWords}
      </motion.h2>
    </motion.div>
  );
});

const Section2Description = memo<Section2DescriptionProps>(({ description }) => (
  <motion.p
    className={styles.section2_description}
    initial={{ opacity: 0, x: 30 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut",
      },
    }}
    viewport={{ once: true }}
  >
    {description}
  </motion.p>
));

const Section2Images = memo<Section2ImagesProps>(({ images }) => (
  <>
    <motion.div
      className={styles.square_image1}
      style={{ backgroundImage: `url(${images.square1})` }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
    />
    <motion.div
      className={styles.rounded_image}
      style={{ backgroundImage: `url(${images.rounded})` }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
      viewport={{ once: true }}
    />
    <motion.div
      className={styles.square_image2}
      style={{ backgroundImage: `url(${images.square2})` }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: 0.4,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
    />
  </>
));

const LogoWrapper = memo<LogoProps>(({ src, alt }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    }}
  >
    <Logo src={src} alt={alt} className={styles.header_logo} />
  </motion.div>
));

const Section1Content = () => {
  const { data: sectionData, isError } = useSection1Data();

  if (isError) {
    return <div>Error loading content</div>;
  }
  if (!sectionData) return null;

  return (
    <motion.section
      className={cn("", styles.section1)}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
    >
      <LogoWrapper
        src={sectionData.section1.logo.src}
        alt={sectionData.section1.logo.alt}
      />
      <Button
        className="absolute right-[3.8rem] top-[3.8rem]"
        variant="circle"
      />
      <HeaderVideo
        src={sectionData.section1.video.src}
        poster={sectionData.section1.video.poster}
      />
      <LeftTitle text={sectionData.section1.title.left.text} />
      <RightTitle text={sectionData.section1.title.right.text} />
      <VerticalText text={sectionData.section1.verticalText.text} />
    </motion.section>
  );
};

const Section1 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Section1Content />
    </Suspense>
  );
};

const Section2 = ({ data }: Section2Props) => {
  return (
    <motion.section
      className={cn("", styles.section2)}
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.8 },
      }}
      viewport={{ once: true }}
    >
      <Section2Images images={data.images} />
      <Section2Title title={data.title} />
      <Section2Description description={data.description} />
      <Button
        className={"absolute right-[25.69rem] bottom-[11.88rem]"}
        variant="rounded"
      />
      <Input
        className={styles.subscription_input}
        placeholder="EMAIL ADRESS"
        variant="newsletter"
      />
    </motion.section>
  );
};

const SectionOneTwo = () => {
  const {
    data: sectionData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["section1"],
    queryFn: fetchSection1Data,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) return <>Loading...</>;
  if (error) return <div>Error loading content</div>;
  if (!sectionData) return null;

  return (
    <SectionBackground className={styles.section_one_two}>
      <Section1 />
      <Section2 data={sectionData.section2} />
    </SectionBackground>
  );
};

HeaderVideo.displayName = "HeaderVideo";
LeftTitle.displayName = "LeftTitle";
RightTitle.displayName = "RightTitle";
VerticalText.displayName = "VerticalText";
Section2Title.displayName = "Section2Title";
Section2Description.displayName = "Section2Description";
Section2Images.displayName = "Section2Images";
LogoWrapper.displayName = "LogoWrapper";
export default SectionOneTwo;
