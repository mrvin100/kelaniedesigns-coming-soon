export interface SectionOneTwoData {
  section1: {
    logo: {
      src: string;
      alt: string;
    };
    video: {
      src: string;
      poster: string;
    };
    title: {
      left: {
        text: string[];
        bar: {
          src: string;
          alt: string;
        };
      };
      right: {
        text: string;
      };
    };
    verticalText: {
      text: string;
      barWidth: string;
    };
  };
  section2: {
    title: {
      text: string[];
      bar: {
        width: string;
      };
    };
    description: string;
    images: {
      square1: string;
      rounded: string;
      square2: string;
    };
  };
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
        text: ["THE", "FUTURE", "OF"],
        bar: {
          src: "/heading_bar.svg",
          alt: "heading bar",
        },
      },
      right: {
        text: "BOLD ELEGANCE",
      },
    },
    verticalText: {
      text: "DISCOVER",
      barWidth: "26.6rem",
    },
  },
  section2: {
    title: {
      text: ["A VISION", "OF ART"],
      bar: {
        width: "17.9375rem",
      },
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
