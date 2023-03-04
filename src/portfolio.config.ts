export interface PortfolioConfig {
  name: string;
  description: string;
  image?: string;
  links?: string;
}

export const portfolioConfig: PortfolioConfig[] = [
  {
    name: "Snowcrash",
    description: "Web3 meets Hollywood and Brands",
    image: "/portfolio/sc.webp",
    links: "https://snowcrash.com",
  },
  {
    name: "Gamestop NFT",
    description: "Power to the Players",
    image: "/portfolio/gs.webp",
    links: "https://nft.gamestop.com",
  },

  {
    name: "Nota",
    description: "Banking built for Law Firms",
    image: "/portfolio/nota.webp",
    links: "https://www.trustnota.com/",
  },
  {
    name: "Minecraft",
    description: "Build. Explore. Create.",
    image: "/portfolio/mc.webp",
    links: "https://minecraft.net",
  },
  {
    name: "Boeing",
    description: "If it ain't Boeing, I ain't going",
    image: "/portfolio/boeing.webp",
    links: "https://jobs.boeing.com/",
  },
  {
    name: "Ceremoney",
    description: "Premier NFT dApp",
    image: "/portfolio/cm.webp",
    links: "https://ceremoney.xyz",
  },
];
