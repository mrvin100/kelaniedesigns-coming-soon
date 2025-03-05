import SectionOneTwo from "./section1";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import styles from './styles.module.css'

const ComingSoon = () => {
  return (
    <main className={styles.main}>
      <SectionOneTwo />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
};

export default ComingSoon;
