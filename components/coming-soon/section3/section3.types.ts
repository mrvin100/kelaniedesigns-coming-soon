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

export const section3Data: Section3Data = {
  title: {
    firstLine: "SOMETHING",
    secondLine: "BOLD IS",
    thirdLine: "COMING UP"
  },
  description: "We create for those who believe in self-expression. Our designs are statements, not just accessories. Embrace fluidity. Every Kelanie piece carries craft, innovation, and soul.",
  button: {
    text: "READ MORE"
  },
  images: {
    firstImage: "/section3_image1.svg",
    secondImage: "/section3_image2.svg",
    thirdImage: "/section3_image3.png",
    fourthImage: "/section3_image4.png",
    fifthImage: "/section3_image5.png",
    sixthImage: "/section3_image6.png"
  }
}; 