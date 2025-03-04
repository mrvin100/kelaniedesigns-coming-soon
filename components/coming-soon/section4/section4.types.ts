interface QuoteLine {
  text: string;
  hasDecoration: boolean;
}

interface Subtitle {
  text: string;
}

interface Images {
  rounded: string;
  square1: string;
  square2: string;
  square3: string;
}

interface Descriptions {
  first: string;
  second: string;
  third: string;
}

export interface Section4Data {
  quote: {
    lines: QuoteLine[];
  };
  subtitles: {
    first: Subtitle;
    second: Subtitle;
    third: Subtitle;
  };
  descriptions: Descriptions;
  images: Images;
  button: {
    text: string;
  };
}

export const section4Data: Section4Data = {
  quote: {
    lines: [
      { text: "For the Visionaries,", hasDecoration: true },
      { text: "the Creators,", hasDecoration: true },
      { text: "THE BOLD.", hasDecoration: false }
    ]
  },
  subtitles: {
    first: {
      text: "Creativity has no boundaries."
    },
    second: {
      text: "Aesthetic meets . function."
    },
    third: {
      text: "Material . innovations is the future."
    }
  },
  descriptions: {
    first: "A single technique can be applied across multiple disciplines.",
    second: "We don't just make things look beautiful—they are engineered for comfort, usability, and storytelling.",
    third: "We blend culinary, beauty, craftsmanship and innovative techniques into design-forward creations."
  },
  images: {
    rounded: "/section4_rounded_image1.png",
    square1: "/section4_square_image1.png",
    square2: "/section4_square_image2.png",
    square3: "/section4_square_image3.png"
  },
  button: {
    text: "READ MORE"
  }
}; 