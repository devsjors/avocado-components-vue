<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Text</AMTitle>
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
            <AMText variant="introduction">Text - introduction</AMText>
            <AMText variant="highlighted">Text - highlighted</AMText>
            <AMText variant="body-light">Text - body-light</AMText>
            <AMText variant="body-regular">Text - body-regular</AMText>
            <AMText variant="body-bold">Text - body-bold</AMText>
            <AMText variant="button">Text - button</AMText>
            <AMText variant="caption">Text - caption</AMText>
            <AMText variant="mini">Text - mini</AMText>
          </CodeBlock>
        </div>
        <div class="mt-6">
          <AMText variant="introduction">As</AMText>
          <CodeBlock :code="codeAs">
            <AMText variant="introduction">Text - introduction</AMText>
            <AMText variant="introduction" as="span">Text - introduction</AMText>
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
  name: "DocText",
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
const text = {
  introduction: {
    fontFamily: 'Fontname', fallbacks,
    desktop: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
    },
    mobile: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "30px",
    },
  },
}`;
    },
    codeVariants() {
      return `<AMText variant="introduction">Text - introduction</AMText>
<AMText variant="highlighted">Text - highlighted</AMText>
<AMText variant="body-light">Text - body-light</AMText>
<AMText variant="body-regular">Text - body-regular</AMText>
<AMText variant="body-bold">Text - body-bold</AMText>
<AMText variant="button">Text - button</AMText>
<AMText variant="caption">Text - caption</AMText>
<AMText variant="mini">Text - mini</AMText>`;
    },
    codeAs() {
      return `<AMText variant="introduction">Text - introduction</AMText>
<AMText variant="introduction" as="span">Text - introduction</AMText>`;
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
