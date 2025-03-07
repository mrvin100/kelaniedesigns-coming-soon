// Types communs
interface Title {
  text: string;
}

interface Logo {
  src: string;
  alt: string;
}

interface Video {
  src: string;
  poster: string;
}

// interface Image {
//   src: string;
//   alt?: string;
// }

// Section 1 & 2
export interface SectionOneTwoData {
  section1: Section1Data;
  section2: Section2Data;
}

export interface Section1Data {
  logo: Logo;
  video: Video;
  title: {
    left: Title;
    right: Title;
  };
  verticalText: Title;
}

export interface Section2Data {
  title: Title;
  description: string;
  images: {
    square1: string;
    rounded: string;
    square2: string;
  };
}

// Section 3
export interface Section3Data {
  title: {
    firstLine: string;
    secondLine: string;
    thirdLine: string;
  };
  description: string;
  button: {
    text: string;
  };
  images: {
    firstImage: string;
    secondImage: string;
    thirdImage: string;
    fourthImage: string;
    fifthImage: string;
    sixthImage: string;
  };
}

// Section 6
export interface Section6Data {
  title: {
    firstLine: string;
    secondLine: string;
  };
  subtitles: {
    first: Title;
    second: Title;
  };
  descriptions: {
    first: string;
    second: string;
  };
  images: {
    square1: string;
    square2: string;
    square3: string;
  };
  footer: {
    logo: Logo;
    socials: Array<{
      src: string;
      href: string;
    }>;
    copyright: string;
  };
}

// Query Config
export interface QueryConfig {
  staleTime?: number;
  cacheTime?: number;
  retry?: number | boolean;
  refetchOnWindowFocus?: boolean;
} 