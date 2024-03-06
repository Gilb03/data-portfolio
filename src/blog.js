import React from "react";
import {
  HeroSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Audio Engineer" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
      <ProjectsSection sectionId="features" heading="Built-in Features" />
      </Page>
    </>
  );
}
