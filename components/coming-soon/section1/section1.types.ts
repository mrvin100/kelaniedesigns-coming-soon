export interface Section1Data {
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
}

export const section1Data: Section1Data = {
  logo: {
    src: "/header_logo_kelanie.svg",
    alt: "kelanie logo"
  },
  video: {
    src: "/header_video.mp4",
    poster: "/header_video_poster.jpg"
  },
  title: {
    left: {
      text: ["THE", "FUTURE", "OF"],
      bar: {
        src: "/heading_bar.svg",
        alt: "heading bar"
      }
    },
    right: {
      text: "BOLD ELEGANCE"
    }
  },
  verticalText: {
    text: "DISCOVER",
    barWidth: "26.6rem"
  }
}; 