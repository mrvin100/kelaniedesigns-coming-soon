interface Logo {
  src: string;
  alt: string;
}

interface Video {
  src: string;
  poster: string;
}

interface Title {
  text: string;
}

interface Images {
  square1: string;
  rounded: string;
  square2: string;
}

interface Section1 {
  logo: Logo;
  video: Video;
  title: {
    left: Title;
    right: Title;
  };
  verticalText: Title;
}

interface Section2 {
  title: Title;
  description: string;
  images: Images;
}

export interface SectionOneTwoData {
  section1: Section1;
  section2: Section2;
}

export const sectionOneTwoData: SectionOneTwoData = {
  section1: {
    logo: {
      src: "/header_logo_kelanie.svg",
      alt: "kelanie logo",
    },
    video: {
      src: "/header_video.mp4",
      poster: "/header_video_poster.jpg",
    },
    title: {
      left: {
        text: "THE FUTURE OF",
      },
      right: {
        text: "BOLD ELEGANCE",
      },
    },
    verticalText: {
      text: "DISCOVER",
    },
  },
  section2: {
    title: {
      text: "A VISION OF ART",
    },
    description:
      "Kelanie aims to be a unique blend of artistry – inspired by a rich mix of cultural influences, seamlessly paired with Italian sophistication. We are creating high-quality, one-of-a-kind jewelry, all lifestyle vision, a creative force. Be part and add yourself to our newsletter.",
    images: {
      square1: "/section2_square_image1.png",
      rounded: "/section2_rounded_image1.png",
      square2: "/section2_square_image2.png",
    },
  },
};
