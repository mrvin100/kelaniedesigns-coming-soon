import SectionOneTwo from "./section1";
import Section3 from "./section3";
import Section5 from "./section5";
import styles from './styles.module.css'

const ComingSoon = () => {
  return (
    <main className={styles.main}>
      <SectionOneTwo />
      <Section3 />
      <Section5 />
    </main>
  );
};

export default ComingSoon;
