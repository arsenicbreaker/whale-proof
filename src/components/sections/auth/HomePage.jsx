import React from "react";
import { PageLayout } from "../../layout";
import HeroSection from "../home/HeroSection";
import PartnerSection from "../home/PartnerSection";
import AboutSection from "../home/AboutSection";
import FeaturesSection from "../home/FeaturesSection";
import TokenomicsSection from "../home/TokenomicsSection";
import RoadmapSection from "../home/RoadmapSection";
import BlogPage from "../BlogPage";

export const HomePage = () => {
  return (
    <PageLayout
      bodyClass="index_ico"
      title="WhaleProof - The Financial Literacy Protocol for Retail Traders"
      showFooter={true}
    >
      {/* Hero Section */}
      <HeroSection />

      {/* Partner Section */}
      <PartnerSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Tokenomics Section */}
      <TokenomicsSection />

      {/* Roadmap Section */}
      <RoadmapSection />

    </PageLayout>
  );
};
