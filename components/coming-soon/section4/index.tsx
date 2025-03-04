"use client";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
import { Button, SectionBackground } from "../ui";
import { section4Data as sectionData } from "./section4.types";
import { memo, Fragment } from "react";

const Quote = memo(() => (
  <div className={styles.quote_container}>
    <blockquote className={styles.quote}>
      {sectionData.quote.lines.map((line) => (
        <p key={line.text}>
          {line.hasDecoration && (
            <span className={styles.quote_decoration}>.</span>
          )}
          <span className={styles.quote_text}>{line.text}</span>
        </p>
      ))}
    </blockquote>
  </div>
));

const Images = memo(() => (
  <>
    <div className={styles.rounded_image} style={{ backgroundImage: `url(${sectionData.images.rounded})` }} />
    <div className={styles.square_image1} style={{ backgroundImage: `url(${sectionData.images.square1})` }} />
    <div className={styles.square_image2} style={{ backgroundImage: `url(${sectionData.images.square2})` }} />
    <div className={styles.square_image3} style={{ backgroundImage: `url(${sectionData.images.square3})` }} />
  </>
));

const Subtitles = memo(() => (
  <>
    <Section4Subtitle1 />
    <Section4Subtitle2 />
    <Section4Subtitle3 />
  </>
));

const Section4Subtitle1 = memo(() => {
  const words = sectionData.subtitles.first.text.split(" ");
  const groups = [
    words[0],
    words.slice(1, 3).join(" "),
    words.slice(3).join(" ")
  ];

  return (
    <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle1)}>
      {groups.map((line, index) => (
        <Fragment key={line}>
          {line}
          {index < groups.length - 1 && <br />}
        </Fragment>
      ))}
    </h3>
  );
});

const Section4Subtitle2 = memo(() => (
  <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle2)}>
    {sectionData.subtitles.second.text}
  </h3>
));

const Section4Subtitle3 = memo(() => (
  <h3 className={cn(styles.section4_subtitle, styles.section4_subtitle3)}>
    {sectionData.subtitles.third.text}
  </h3>
));

const Descriptions = memo(() => (
  <>
    <p className={cn(styles.section4_description, styles.section4_description1)}>
      {sectionData.descriptions.first}
    </p>
    <p className={cn(styles.section4_description, styles.section4_description2)}>
      {sectionData.descriptions.second}
    </p>
    <p className={cn(styles.section4_description, styles.section4_description3)}>
      {sectionData.descriptions.third}
    </p>
  </>
));

const Section4 = () => {
  return (
    <SectionBackground className={styles.section4}>
      <Quote />
      <Images />
      <Subtitles />
      <Descriptions />
      <Button
        className={"absolute bottom-[15.59rem] left-[39.81rem]"}
        text={sectionData.button.text}
      />
    </SectionBackground>
  );
};

Quote.displayName = "Quote";
Images.displayName = "Images";
Subtitles.displayName = "Subtitles";
Section4Subtitle1.displayName = "Section4Subtitle1";
Section4Subtitle2.displayName = "Section4Subtitle2";
Section4Subtitle3.displayName = "Section4Subtitle3";
Descriptions.displayName = "Descriptions";

export default Section4;
