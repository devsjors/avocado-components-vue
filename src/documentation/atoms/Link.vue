<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Link</AMTitle>
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
        <AMText variant="introduction">Theme</AMText>
        <AMText class="mb-2" variant="body-light">
          Om gebruik te kunnen maken van de
          <pre class="inline">AMLink</pre>
          is het belangrijk om in het Theme de stijling toe te passen.
        </AMText>
        <highlightjs autodetect :code="codeTheme" />
      </div>
    </div>
    <div class="mt-12" id="usage">
      <AMSubtitle class="mb-4" variant="small" as="h4">Usage</AMSubtitle>
      <div>
        <AMText variant="introduction">Default</AMText>
        <CodeBlock :code="codeDefault">
          <AMLink href="#" label="I am a default link" />
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">iconStart</AMText>
        <CodeBlock :code="codeIconStart">
          <AMLink href="#" label="I am a link with an icon at the start" iconStart="mail" />
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">iconEnd</AMText>
        <CodeBlock :code="codeIconEnd">
          <AMLink href="#" label="I am a link with an icon at the start" iconEnd="mail" />
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">Disabled</AMText>
        <CodeBlock :code="codeDisabled">
          <AMLink href="#" label="I am a disabled link" disabled />
        </CodeBlock>
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

export default {
  name: "DocLink",
  components: {
    CodeBlock,
    AMTitle,
    AMSubtitle,
    AMText,
    AMLink,
  },
  computed: {
    codeTheme() {
      return `// theme / Atoms / Link

import cores from "...";
import twConfig from "...";

const { typography } = cores;
const { colors } = twConfig.theme;

// Example
const link = {
  textColor: colors.base.grey["900"],
  typography: typography.text["body-bold"],
  disabled: {
    textColor: colors.base.grey["300"],
  },
};`;
    },
    codeDefault() {
      return `<AMLink href="#" label="I am a default link" />`;
    },
    codeIconStart() {
      return `<AMLink href="#" label="I am a link with an icon at the start" iconStart="mail" />`;
    },
    codeIconEnd() {
      return `<AMLink href="#" label="I am a link with an icon at the start" iconEnd="mail" />`;
    },
    codeDisabled() {
      return `<AMLink href="#" label="I am a disabled link" disabled />`;
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
