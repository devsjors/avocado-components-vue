<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Subtitle</AMTitle>
    <AMSubtitle class="mb-4" variant="small" as="h4">
      Table of Contents
    </AMSubtitle>
    <ul>
      <li>
        <AMLink href="#theming" label="Theming" />
      </li>
      <li>
        <AMLink href="#usage" label="Usage" />
      </li>
      <li>
        <AMLink href="#api" label="Component API" />
      </li>
    </ul>
    <div class="mt-12" id="theming">
      <div class="mb-8">
        <AMSubtitle class="mb-4" variant="small" as="h4">Theming</AMSubtitle>
        <AMText variant="introduction">Import your fonts</AMText>
        <AMText class="mb-2" variant="body-light">
          Om gebruik te maken van alle tekst- en titelcomponenten is het
          belangrijk om eerst alle fonts te importeren die je wilt gaan
          gebruiken.
        </AMText>
        <highlightjs autodetect :code="importFonts" />
      </div>
      <div class="mb-8">
        <AMText variant="introduction">Theme</AMText>
        <AMText class="mb-2" variant="body-light">
          Vervolgens ga je de fonts toevoegen aan het thema.
        </AMText>
        <highlightjs autodetect :code="defineFonts" />
      </div>
    </div>
    <div class="mt-12" id="usage">
      <div class="mb-8">
        <AMSubtitle class="mb-4" variant="small" as="h4">Usage</AMSubtitle>
        <div>
          <AMText variant="introduction">Variant</AMText>
          <CodeBlock :code="codeVariants">
            <AMSubtitle variant="medium" as="h4">Medium subtitle</AMSubtitle>
            <AMSubtitle variant="small" as="h4">Small subtitle</AMSubtitle>
            <AMSubtitle variant="tiny" as="h4">Tiny subtitle</AMSubtitle>
          </CodeBlock>
        </div>
        <div class="mt-6">
          <AMText variant="introduction">As</AMText>
          <CodeBlock :code="codeAs">
            <AMSubtitle variant="medium" as="h4">Medium subtitle renders h4</AMSubtitle>
            <AMSubtitle variant="medium" as="h5">Medium subtitle renders h5</AMSubtitle>
          </CodeBlock>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import CodeBlock from "../components/CodeBlock";

import AMTitle from "@/components/cores/Title";
import AMSubtitle from "@/components/cores/Subtitle";
import AMText from "@/components/cores/Text";
import AMLink from "@/components/atoms/Link";
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";

export default {
  name: "DocSubtitle",
  components: {
    CodeBlock,
    AMTitle,
    AMSubtitle,
    AMText,
    AMLink,
    AMContainer,
    AMGrid,
  },
  computed: {
    codeDefault() {
      return `<AMContainer>
  ...
</AMContainer>`;
    },
    importFonts() {
      return `/* Example */
  @font-face {
  font-family: 'Fontname';
  src: url('...') format('woff2'),
    url('...') format('woff'),
    url('...') format('truetype');
  font-display: swap;
}`;
    },
    defineFonts() {
      return `const fallback = "serif, sans";
const subtitles = {
  medium: {
    fontFamily: 'Fontname', fallbacks,
    desktop: {
      fontSize: "32px",
      fontWeight: "500",
      lineHeight: "40px",
    },
    mobile: {
      fontSize: "28px",
      fontWeight: "500",
      lineHeight: "36px",
    },
  },
}`;
    },
    codeVariants() {
      return `<AMSubtitle variant="medium" as="h4">Medium subtitle</AMSubtitle>
<AMSubtitle variant="small" as="h4">Small subtitle</AMSubtitle>
<AMSubtitle variant="tiny" as="h4">Tiny subtitle</AMSubtitle>`;
    },
    codeAs() {
      return `<AMSubtitle variant="medium" as="h4">Medium subtitle renders h4</AMSubtitle>
<AMSubtitle variant="medium" as="h5">Medium subtitle renders h5</AMSubtitle>`;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: square !important;
  list-style-position: inside !important;
}
</style>
