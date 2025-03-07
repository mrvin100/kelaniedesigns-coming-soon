import { ComingSoonPageData } from "@/types/coming-soon";
import { useQuery } from "@tanstack/react-query";

import { sectionOneTwoData } from "@/components/coming-soon/section1/section1.types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const QUERY_KEY = ["coming-soon-page"];
const USE_DEFAULT_DATA = !API_URL;

export const defaultData: ComingSoonPageData = {
  sectionOneTwo: sectionOneTwoData,  
};

interface StrapiComingSoonResponse {
  data: {
    id: number;
    attributes: {
      sectionOneTwo: {
        logo: { data: { attributes: { url: string, alt: string } } };
        video: { data: { attributes: { url: string, poster: string } } };
        title: { 
          left: string,
          right: string
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
  };
}

function transformComingSoonData(response: StrapiComingSoonResponse): ComingSoonPageData {
  const { data } = response;
  
  return {
    sectionOneTwo: {
      section1: {
        logo: {
          src: `${API_URL}${data.attributes.sectionOneTwo.logo.data.attributes.url}`,
          alt: data.attributes.sectionOneTwo.logo.data.attributes.alt,
        },
        video: {
          src: `${API_URL}${data.attributes.sectionOneTwo.video.data.attributes.url}`,
          poster: `${API_URL}${data.attributes.sectionOneTwo.video.data.attributes.poster}`,
        },
        title: {
          left: { text: data.attributes.sectionOneTwo.title.left },
          right: { text: data.attributes.sectionOneTwo.title.right },
        },
        verticalText: { text: data.attributes.sectionOneTwo.verticalText },
      },
      section2: {
        title: { text: data.attributes.sectionOneTwo.section2.title },
        description: data.attributes.sectionOneTwo.section2.description,
        images: {
          square1: `${API_URL}${data.attributes.sectionOneTwo.section2.images.square1.data.attributes.url}`,
          rounded: `${API_URL}${data.attributes.sectionOneTwo.section2.images.rounded.data.attributes.url}`,
          square2: `${API_URL}${data.attributes.sectionOneTwo.section2.images.square2.data.attributes.url}`,
        }
      }
    }
  };
}

export function useComingSoonData() {
  return useQuery<ComingSoonPageData, Error>({
    queryKey: QUERY_KEY,
    queryFn: fetchComingSoonData,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export async function fetchComingSoonData(): Promise<ComingSoonPageData> {
  if (USE_DEFAULT_DATA) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(defaultData), 1000);
    });
  }

  try {
    const response = await fetch(`${API_URL}/api/coming-soon-page?populate=deep`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return transformComingSoonData(data);
  } catch (error) {
    console.error('Error fetching coming soon data:', error);
    return defaultData; // Fallback to default data
  }
} 