import React from "react";
import {
  AboutSection,
  HeroSection,
 /* ServicesPage,*/
 /* InterestsSection,*/
  Page,
  /*ProjectsSection,*/
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Marketing Technology" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
      {/* <InterestsSection sectionId="details" heading="Details" />*/}
     {/* <ProjectsSection sectionId="features" heading="Built-in Features" />*/}
      </Page>
    </>
  );
}
