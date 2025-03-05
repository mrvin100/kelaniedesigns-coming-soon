
interface Description {
  text: string;
}

interface Images {
  square1: string;
  square2: string;
  square3: string;
}

interface Social {
  src: string;
  href: string;
}

interface Footer {
  logo: {
    src: string;
    alt: string;
  };
  socials: Social[];
  copyright: string;
}

export interface Section6Data {
  subtitles: {
    first: {text: string};
    second: {textArray: string[]};
  };
  descriptions: {
    first: Description;
    second: Description;
  };
  images: Images;
  input: {
    placeholder: string;
  };
  footer: Footer;
}

export const section6Data: Section6Data = {
  subtitles: {
    first: {
      text: ". Kelanie Designs is just getting started."
    },
    second: {
      textArray: ["So go a head - ","be bold. be curious."," be Kelanie."]
    }
  },
  descriptions: {
    first: {
      text: "We're not just making jewelry; we're baking up a future where art, technology, and material innovation rise together like a perfectly puffed croissant - creating something entirely new, deliciously unexpected, and utterly irresistible."
    },
    second: {
      text: "Add yourself to our newsletter to be part of our mission."
    }
  },
  images: {
    square1: "/section6_square_image1.png",
    square2: "/section6_square_image2.png",
    square3: "/section6_square_image3.png"
  },
  input: {
    placeholder: "EMAIL ADRESS"
  },
  footer: {
    logo: {
      src: "/header_logo_kelanie.svg",
      alt: "kelanie logo"
    },
    socials: [
      { src: "/footer_social_icon1.svg", href: "#" },
      { src: "/footer_social_icon2.svg", href: "#" },
      { src: "/footer_social_icon3.svg", href: "#" },
      { src: "/footer_social_icon4.svg", href: "#" }
    ],
    copyright: "©2025 Gaslighter Wine Company. All Rights Reserved | Imprint | Privacy policy"
  }
};