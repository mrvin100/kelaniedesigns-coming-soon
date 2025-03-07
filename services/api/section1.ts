import { SectionOneTwoData } from "@/types/coming-soon";
import { QueryClient, useQuery } from "@tanstack/react-query";
// Import des données par défaut
import { sectionOneTwoData as defaultData } from "@/components/coming-soon/section1/section1.types";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;
const QUERY_KEY = ["section1"];
const USE_DEFAULT_DATA = !API_URL; // ou process.env.NEXT_PUBLIC_USE_DEFAULT_DATA === 'true'

interface StrapiResponse {
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

// Fonction de préchargement pour le SSR
export async function prefetchSection1Data(queryClient: QueryClient) {
  await queryClient.prefetchQuery({
    queryKey: QUERY_KEY,
    queryFn: fetchSection1Data
  });
}

export function useSection1Data() {
  return useQuery<SectionOneTwoData, Error>({
    queryKey: QUERY_KEY,
    queryFn: fetchSection1Data,
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export async function fetchSection1Data(): Promise<SectionOneTwoData> {
  // Utiliser les données par défaut si pas d'API
  if (USE_DEFAULT_DATA) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(defaultData);
      }, 1000); // Simuler un délai réseau
    });
  }

  try {
    const response = await fetch(`${API_URL}/api/section1?populate=deep`);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return transformSection1Data(data);
  } catch (error) {
    console.error('Error fetching section1 data:', error);
    // Fallback aux données par défaut en cas d'erreur
    return defaultData;
  }
}

function transformSection1Data(response: StrapiResponse): SectionOneTwoData {
  const { data } = response;
  return {
    section1: {
      logo: {
        src: `${API_URL}${data.attributes.logo.data.attributes.url}`,
        alt: data.attributes.logo.data.attributes.alt,
      },
      video: {
        src: `${API_URL}${data.attributes.video.data.attributes.url}`,
        poster: `${API_URL}${data.attributes.video.data.attributes.poster}`,
      },
      title: {
        left: { text: data.attributes.title.left },
        right: { text: data.attributes.title.right },
      },
      verticalText: {
        text: data.attributes.verticalText,
      },
    },
    section2: {
      title: { text: data.attributes.section2.title },
      description: data.attributes.section2.description,
      images: {
        square1: `${API_URL}${data.attributes.section2.images.square1.data.attributes.url}`,
        rounded: `${API_URL}${data.attributes.section2.images.rounded.data.attributes.url}`,
        square2: `${API_URL}${data.attributes.section2.images.square2.data.attributes.url}`,
      },
    },
  };
} 