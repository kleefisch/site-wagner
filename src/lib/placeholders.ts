// Placeholder images for development
// In production, replace these with actual professional photos

export const PLACEHOLDER_IMAGES = {
  // Hero section - Professional lawyer portrait
  lawyerPortrait: "/placeholder-lawyer-portrait.jpg",
  
  // About section - Lawyer in office
  lawyerOffice: "/placeholder-lawyer-office.jpg",
  
  // Open Graph image
  ogImage: "/placeholder-og-image.jpg"
};

// Generate placeholder images using a service like Unsplash or Placeholder.com
export const generatePlaceholderUrl = (
  width: number, 
  height: number, 
  text: string = "Placeholder"
) => {
  return `https://via.placeholder.com/${width}x${height}/1E2A5C/FFFFFF?text=${encodeURIComponent(text)}`;
};

// Professional placeholder URLs for lawyer website
export const LAWYER_PLACEHOLDERS = {
  portrait: generatePlaceholderUrl(400, 500, "Dra. Brennda"),
  office: generatePlaceholderUrl(500, 600, "Escritório"),
  ogImage: generatePlaceholderUrl(1200, 630, "Advocacia Brennda")
};
