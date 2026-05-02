export interface SubProgram {
  title: string;
  slug: string;
  category: string;
}

import { StaticImageData } from "next/image";
import constructionImg from "../../public/images/programs/construction.png";
import fireSafetyImg from "../../public/images/programs/fire-safety.png";
import marineImg from "../../public/images/programs/marine.png";
import transportImg from "../../public/images/programs/transport.png";
import securityImg from "../../public/images/programs/security.png";
import { jobMarketInsightsMap } from "./jobMarketInsights";

export interface ProgramCategory {
  title: string;
  slug: string;
  icon: string;
  image: string | StaticImageData;
  subs: SubProgram[];
}

export const generateSlug = (str: string) => str.toLowerCase().replace(/ & | /g, "-").replace(/[^a-z0-9-]/g, "");

const rawData = [
  { title: "Business Programmes", slug: "business", icon: "💼", image: "/images/external/1552664730-d307ca884978.jpg", subs: ["MBA Essentials", "Corporate Strategy & Leadership", "Business Ethics", "Organizational Behavior", "Entrepreneurship Fundamentals"] },
  { title: "Information Technology Programmes", slug: "information-technology", icon: "💻", image: "/images/external/1550751827-4bd374c3f58b.jpg", subs: ["Data Science", "Artificial Intelligence", "Cyber Security", "Digital Marketing", "Software Development", "Web and App Development"] },
  { title: "Design Programmes", slug: "design", icon: "🎨", image: "/images/external/1561070791-2526d30994b5.jpg", subs: ["Graphic Design", "Interior Design", "UI/UX & Digital Design", "Animation & Motion Graphics", "Fashion & Textile Design"] },
  { title: "Education Programmes", slug: "education", icon: "🎓", image: "/images/external/1509062522246-3755977927d7.jpg", subs: ["Montessori Teaching Methods", "Early Years Education", "Inclusive Education & SEN", "Educational Leadership", "Digital Teaching & Online Learning"] },
  { title: "Technical Programmes", slug: "technical", icon: "🔧", image: "/images/external/1581092580497-e0d23cbdf1dc.jpg", subs: ["Mobile Phone Technician", "AC/Fridge Technician", "Electrical Technician", "Plumbing & Heating", "Automotive Technician"] },
  { title: "Engineering Programmes", slug: "engineering", icon: "⚙️", image: "/images/external/1581092160562-40aa08e78837.jpg", subs: ["Mechanical Engineering", "Electrical & Electronic", "Civil Engineering", "Project Management for Engineers", "Automation & Control"] },
  { title: "Construction Programmes", slug: "construction", icon: "🏗️", image: constructionImg, subs: ["Construction Project Management", "Health & Safety in Construction", "Quantity Surveying", "BIM Awareness", "Civil Engineering Site Practices"] },
  { title: "Energy Programmes", slug: "energy", icon: "⚡", image: "/images/external/1466611653911-95081537e5b7.jpg", subs: ["Renewable Energy Systems", "Solar & Wind Technology", "Oil & Gas Operations", "Sustainable Energy", "Smart Grids & Digital Energy"] },
  { title: "Finance Programmes", slug: "finance", icon: "📈", image: "/images/external/1554224155-8d04cb21cd6c.jpg", subs: ["Accounting & Bookkeeping", "Financial Management", "Corporate Finance", "Risk Management", "FinTech & Digital Finance"] },
  { title: "Healthcare & Medical Programmes", slug: "healthcare-medical", icon: "🏥", image: "/images/external/1516549655169-df83a0774514.jpg", subs: ["Medical Lab Technology", "Nursing & Dialysis", "Radiology & Imaging", "Hospital Administration", "Healthcare Safety"] },
  { title: "Fire & Safety Programmes", slug: "fire-safety", icon: "🧯", image: fireSafetyImg, subs: ["Fire Safety Management", "Risk Assessment", "Fire Prevention Systems", "Emergency Planning", "Fire Safety Engineering"] },
  { title: "Human Resources Programmes", slug: "human-resources", icon: "👥", image: "/images/external/1522071820081-009f0129c71c.jpg", subs: ["Human Resource Management", "Talent Acquisition", "Learning & Development", "Performance Management", "Employee Relations"] },
  { title: "Hospitality Programmes", slug: "hospitality", icon: "🏨", image: "/images/external/1566073771259-6a8506099945.jpg", subs: ["Hospitality Management", "Hotel Operations", "Food & Beverage", "Culinary Arts", "Event Management"] },
  { title: "Science Programmes", slug: "science", icon: "🔬", image: "/images/external/1532094349884-543bc11b234d.jpg", subs: ["Laboratory Techniques", "Research Methods", "Analytical Chemistry", "Microbiology & Biotechnology", "Data Analysis for Scientists"] },
  { title: "Media Programmes", slug: "media", icon: "🎥", image: "/images/external/1478720568477-152d9b164e26.jpg", subs: ["Digital Media Production", "Journalism & News Reporting", "Content Creation & Strategy", "Broadcasting & Television", "Social Media Management"] },
  { title: "Marine Programmes", slug: "marine", icon: "⚓", image: marineImg, subs: ["Maritime Operations", "Marine Engineering", "Port & Harbour Management", "Maritime Safety & Survival", "Maritime Logistics"] },
  { title: "International Programmes", slug: "international", icon: "🌍", image: "/images/external/1521295121783-8a321d551ad2.jpg", subs: ["International Business", "Cross-Cultural Management", "Global Commerce", "International Relations", "Global Supply Chain"] },
  { title: "Beauty & Wellness Programmes", slug: "beauty-wellness", icon: "✨", image: "/images/external/1560066984-138dadb4c035.jpg", subs: ["Beauty Therapy", "Advanced Beauty Therapy & Aesthetics", "Makeup Artistry & Special Effects", "Hairdressing & Barbering Techniques", "Spa & Wellness Therapy"] },
  { title: "Property Programmes", slug: "property-real-estate", icon: "🏢", image: "/images/external/1486406146926-c627a92ad1ab.jpg", subs: ["Property Management", "Real Estate Valuation", "Agency & Sales", "Investment & Finance", "Facilities Management"] },
  { title: "Transport Programmes", slug: "transport-logistics", icon: "🚛", image: transportImg, subs: ["Transport Management", "Airline Management", "Aviation Management", "Logistics & Supply Chain", "Road Transport & Fleet"] },
  { title: "Tourism Programmes", slug: "travel-tourism", icon: "✈️", image: "/images/external/1436491865332-7a61a109cc05.jpg", subs: ["Tourism Management", "Travel Agency Operations", "Tour Operations & Guiding", "Destination Management", "Sustainable Tourism Practices"] },
  { title: "Telecommunications Programmes", slug: "telecommunications", icon: "📡", image: "/images/external/1544465544-1b71aee9dfa3.jpg", subs: ["Telecommunications Fundamentals", "5G & Next-Generation Networks", "Fibre Optic Technology", "Wireless Communications", "Network Management"] },
  { title: "Sport Programmes", slug: "sport", icon: "🏅", image: "/images/external/1517836357463-d25dfeac3438.jpg", subs: ["Sports Coaching", "Fitness Instruction", "Gym Management", "Sports Nutrition", "Sports Psychology"] },
  { title: "Social Care Programmes", slug: "social-care", icon: "🤝", image: "/images/external/1576765608535-5f04d1e3f289.jpg", subs: ["Safeguarding Adults", "Dementia Care", "Mental Health Awareness", "Elderly Care", "Social Care Leadership"] },
  { title: "Security Programmes", slug: "security", icon: "🛡️", image: securityImg, subs: ["Security Management", "Asset Protection", "Risk Assessment", "Cybersecurity", "Close Protection"] },
];

export const programData: ProgramCategory[] = rawData.map(cat => ({
  title: cat.title,
  slug: cat.slug,
  icon: cat.icon,
  image: cat.image,
  subs: cat.subs.map(sub => ({
    title: sub,
    slug: generateSlug(sub),
    category: cat.title
  }))
}));

// Helper to find a specific program strictly by slug
export function getSubProgramBySlug(slug: string): SubProgram | undefined {
  for (const cat of programData) {
    const found = cat.subs.find(s => s.slug === slug);
    if (found) return found;
  }
  return undefined;
}

// Generate dynamic detailed content based on category and title (Mocking our missing CMS)
export function getProgramContent(program: SubProgram) {
  const parentCategory = programData.find(cat => cat.title === program.category);
  const categorySlug = parentCategory ? parentCategory.slug : '';
  
  const insight = jobMarketInsightsMap[categorySlug] || {
      salaryRange: "£30,000 - £80,000+",
      growthRate: "Steady Growth",
      topEmployers: ["Leading UK Companies", "Global Enterprises", "SMEs"],
      description: `The demand for specialized expertise in ${program.title} is reaching an all-time high as the ${program.category} sector rapidly transforms. Securing certification in this sub-discipline marks a competitive edge that talent recruiters actively prioritize.`
  };

  return {
    overview: `Our rigorous ${program.title} curriculum provides a definitive path to commanding ${program.category.toLowerCase()} principles in the modern industry landscape. You will gain profound insights designed and validated by senior experts.`,
    curriculum: [
      "Foundational Principles & Core Concepts",
      "Advanced Strategies & Applied Methodologies",
      "Industry Case Studies & Scenario Planning",
      "Final Practicum Project & Assessment",
    ],
    jobMarket: {
      salaryRange: insight.salaryRange,
      growthRate: insight.growthRate,
      topEmployers: insight.topEmployers,
      description: insight.description
    }
  };
}
