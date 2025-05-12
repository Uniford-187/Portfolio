
import { createContext, useContext, useState, ReactNode } from "react";

// Define the Resource type
export type ResourceType = "All" | "Reports" | "PDFs" | "Videos" | "Innovations" | "Policy Docs" | "Case Studies" | "Whitepapers";

export interface Resource {
  id: string;
  type: ResourceType | Exclude<ResourceType, "All">;
  title: string;
  publishedDate: Date;
  tags: string[];
  thumbnail: string;
  likes: number;
  description: string;
  fileUrl?: string;
  externalLink?: string;
}

interface ResourceContextType {
  resources: Resource[];
  filteredResources: Resource[];
  currentType: ResourceType;
  searchQuery: string;
  dateRange: [Date | null, Date | null];
  currentPage: number;
  resourcesPerPage: number;
  selectedResource: Resource | null;
  setCurrentType: (type: ResourceType) => void;
  setSearchQuery: (query: string) => void;
  setDateRange: (range: [Date | null, Date | null]) => void;
  setCurrentPage: (page: number) => void;
  setSelectedResource: (resource: Resource | null) => void;
}

const ResourceContext = createContext<ResourceContextType | undefined>(undefined);

// Sample resources data
const sampleResources: Resource[] = [
  {
    id: "1",
    type: "PDFs",
    title: "Student Grant Policy 2024",
    publishedDate: new Date("2024-04-15"),
    tags: ["Policy", "Grants"],
    thumbnail: "/placeholder.svg",
    likes: 125,
    description: "A comprehensive guide to student grants and funding opportunities for the year 2024.",
    fileUrl: "/sample.pdf",
  },
  {
    id: "2",
    type: "Videos",
    title: "Innovation Talks by Youth 2025",
    publishedDate: new Date("2025-01-10"),
    tags: ["Talks", "Uniford"],
    thumbnail: "/placeholder.svg",
    likes: 87,
    description: "Watch inspiring talks from young innovators presenting their ideas and solutions.",
    externalLink: "https://www.youtube.com/watch?v=example",
  },
  {
    id: "3",
    type: "Innovations",
    title: "Waterless Toilet Innovation",
    publishedDate: new Date("2025-03-20"),
    tags: ["Innovation", "Eco"],
    thumbnail: "/placeholder.svg",
    likes: 230,
    description: "A revolutionary waterless toilet design that can help solve sanitation issues in water-scarce regions.",
    fileUrl: "/innovation.pdf",
  },
  {
    id: "4",
    type: "Reports",
    title: "Uniford 2024 Annual Impact Report",
    publishedDate: new Date("2024-12-05"),
    tags: ["Impact", "Annual"],
    thumbnail: "/placeholder.svg",
    likes: 156,
    description: "The annual impact report detailing Uniford Foundation's initiatives and their social impact throughout 2024.",
    fileUrl: "/annual-report.pdf",
  },
  {
    id: "5",
    type: "Policy Docs",
    title: "Digital Literacy Framework",
    publishedDate: new Date("2024-08-22"),
    tags: ["Digital", "Education"],
    thumbnail: "/placeholder.svg",
    likes: 92,
    description: "A framework for implementing digital literacy programs in underserved communities.",
    fileUrl: "/framework.pdf",
  },
  {
    id: "6",
    type: "Case Studies",
    title: "Rural Education Transformation",
    publishedDate: new Date("2024-11-15"),
    tags: ["Education", "Rural"],
    thumbnail: "/placeholder.svg",
    likes: 104,
    description: "A case study on how technology transformed education in rural areas of developing nations.",
    fileUrl: "/case-study.pdf",
  },
  {
    id: "7",
    type: "Whitepapers",
    title: "Future of Remote Learning",
    publishedDate: new Date("2024-07-18"),
    tags: ["Education", "Technology"],
    thumbnail: "/placeholder.svg",
    likes: 78,
    description: "An in-depth analysis of remote learning trends and future prospects in a post-pandemic world.",
    fileUrl: "/whitepaper.pdf",
  },
  {
    id: "8",
    type: "Videos",
    title: "Community Building Workshop",
    publishedDate: new Date("2024-09-30"),
    tags: ["Community", "Workshop"],
    thumbnail: "/placeholder.svg",
    likes: 112,
    description: "A recorded workshop on effective strategies for building and nurturing communities.",
    externalLink: "https://www.youtube.com/watch?v=example2",
  },
];

export const ResourceProvider = ({ children }: { children: ReactNode }) => {
  const [currentType, setCurrentType] = useState<ResourceType>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const resourcesPerPage = 6;

  // Filter resources based on currentType, searchQuery, and dateRange
  const filteredResources = sampleResources.filter(resource => {
    // Filter by type
    if (currentType !== "All" && resource.type !== currentType) return false;
    
    // Filter by search query
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Filter by date range
    const [startDate, endDate] = dateRange;
    if (startDate && resource.publishedDate < startDate) return false;
    if (endDate && resource.publishedDate > endDate) return false;
    
    return true;
  });

  const value = {
    resources: sampleResources,
    filteredResources,
    currentType,
    searchQuery,
    dateRange,
    currentPage,
    resourcesPerPage,
    selectedResource,
    setCurrentType,
    setSearchQuery,
    setDateRange,
    setCurrentPage,
    setSelectedResource,
  };

  return <ResourceContext.Provider value={value}>{children}</ResourceContext.Provider>;
};

export const useResources = () => {
  const context = useContext(ResourceContext);
  if (context === undefined) {
    throw new Error("useResources must be used within a ResourceProvider");
  }
  return context;
};
