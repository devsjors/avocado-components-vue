<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Input</AMTitle>
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
        <!-- <AMSubtitle class="mb-4" variant="small" as="h4">Theming</AMSubtitle>
        <AMText variant="introduction"></AMText>
        <AMText class="mb-2" variant="body-light">
          <pre class="inline">AMContainer</pre>
        </AMText>
        <AMText class="mb-4 text-feedback-error" variant="body-bold"></AMText>
        <highlightjs autodetect :code="codeThemeTailwind" /> -->
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
  name: "DocInput",
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
  },
};
</script>

<style scoped>
ul {
  list-style: square !important;
  list-style-position: inside !important;
}
</style>
