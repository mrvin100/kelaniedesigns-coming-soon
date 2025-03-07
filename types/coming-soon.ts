// Base Components Types
export interface BaseProps {
  className?: string;
}

export interface TitleProps extends BaseProps {
  text: string;
}

export interface VideoProps extends BaseProps {
  src: string;
  poster: string;
}

export interface LogoProps extends BaseProps {
  src: string;
  alt: string;
}

export interface ImageProps extends BaseProps {
  src: string;
  alt?: string;
}

// Section 1 & 2 Component Types
export interface Section2Props {
  data: Section2Data;
}

export interface Section2TitleProps {
  title: { text: string };
}

export interface Section2DescriptionProps {
  description: string;
}

export interface Section2ImagesProps {
  images: {
    square1: string;
    rounded: string;
    square2: string;
  };
}

// Data Structure Types
export interface SectionOneTwoData {
  section1: Section1Data;
  section2: Section2Data;
}

export interface Section1Data {
  logo: LogoProps;
  video: VideoProps;
  title: {
    left: TitleProps;
    right: TitleProps;
  };
  verticalText: TitleProps;
}

export interface Section2Data {
  title: TitleProps;
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
    first: TitleProps;
    second: TitleProps;
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
    logo: LogoProps;
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

// API Types
export interface StrapiResponse {
  data: {
    id: number;
    attributes: {
      logo: { 
        data: { 
          attributes: { 
            url: string;
            alt: string;
          } 
        }
      };
      video: {
        data: { 
          attributes: { 
            url: string;
            poster: string;
          } 
        }
      };
      title: {
        left: string;
        right: string;
      };
      verticalText: string;
      section2: {
        title: string;
        description: string;
        images: {
          square1: { data: { attributes: { url: string } } };
          rounded: { data: { attributes: { url: string } } };
          square2: { data: { attributes: { url: string } } };
        };
      };
    };
  };
} 