import SectionOneTwo from "./section1";
import Section3 from "./section3";
import Section5 from "./section5";
import Section6 from "./section6";
import Section8 from "./section8";
import styles from './styles.module.css'

const ComingSoon = () => {
  return (
    <main className={styles.main}>
      <SectionOneTwo />
      <Section3 />
      <Section5 />
      <Section6 />
      <Section8 />
    </main>
  );
};

export default ComingSoon;
