<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Grid</AMTitle>
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
      <!-- <div class="mb-8">
        <AMSubtitle class="mb-4" variant="small" as="h4">Theming</AMSubtitle>
        <AMText variant="introduction"></AMText>
        <AMText class="mb-2" variant="body-light">
          <pre class="inline">AMContainer</pre>
        </AMText>
        <AMText class="mb-4 text-feedback-error" variant="body-bold"></AMText>
        <highlightjs autodetect :code="codeThemeTailwind" />
      </div> -->
      <AMSubtitle class="mb-4" variant="small" as="h4">Theming</AMSubtitle>
      <AMText class="mb-2" variant="body-light">
        Dit component heeft geen configuratie nodig vanuit het Thema.
      </AMText>
    </div>
    <div class="mt-12" id="usage">
      <AMSubtitle class="mb-4" variant="small" as="h4">Usage</AMSubtitle>
      <div>
        <AMText variant="introduction">Default</AMText>
        <CodeBlock :code="codeDefault">
          <AMGrid container spacing="0.25">
            <AMGrid :key="'key' + index" v-for="index in 12" item :sm="1">
              <div class="flex items-center justify-center h-8 bg-base-grey-300">
                {{ index }}
              </div>
            </AMGrid>
          </AMGrid>
        </CodeBlock>
      </div>

      <div class="mt-12">
        <AMText variant="introduction">Grid - Container</AMText>
        <AMText variant="body-bold">Default</AMText>
        <CodeBlock :code="codeContainerDefault">
          <div class="bg-base-grey-300">
            <AMGrid spacing="1" container>
              <AMGrid class="flex items-center justify-center h-12" item>
                <p>container</p>
              </AMGrid>
            </AMGrid>
          </div>
        </CodeBlock>
      </div>

      <div class="mt-6">
        <AMText variant="body-bold">Spacing</AMText>
        <CodeBlock :code="codeContainer">
          <div class="bg-base-grey-300">
            <AMGrid spacing="1" container>
              <AMGrid sm="12" class="flex items-center justify-center h-12" item>
                <p>container</p>
              </AMGrid>
              <AMGrid item sm="6">
                <div class="flex items-center justify-center h-12 bg-base-grey-400">
                  content
                </div>
              </AMGrid>
              <AMGrid item sm="6">
                <div class="flex items-center justify-center h-12 bg-base-grey-400">
                  content
                </div>
              </AMGrid>
            </AMGrid>
          </div>
        </CodeBlock>
      </div>

      <div class="mt-12">
        <AMText variant="introduction">Grid - Item</AMText>
        <CodeBlock :code="codeUsage">
          <AMGrid class="bg-base-grey-300" spacing="0.25" container>
            <AMGrid sm="12" class="flex items-center justify-center h-12" item>
              <p>container</p>
            </AMGrid>
            <AMGrid class="mb-2" item sm="8">
              <div class="flex items-center justify-center h-12 bg-base-grey-400">
                content
              </div>
            </AMGrid>
            <AMGrid class="mb-2" item sm="4">
              <div class="flex items-center justify-center h-12 bg-base-grey-400">
                content
              </div>
            </AMGrid>
            <AMGrid class="mb-2" item sm="6">
              <div class="flex items-center justify-center h-12 bg-base-grey-400">
                content
              </div>
            </AMGrid>
            <AMGrid class="mb-2" item sm="6">
              <div class="flex items-center justify-center h-12 bg-base-grey-400">
                content
              </div>
            </AMGrid>
            <AMGrid item sm="4">
              <div class="flex items-center justify-center h-12 bg-base-grey-400">
                content
              </div>
            </AMGrid>
            <AMGrid class="ml-auto" item sm="6">
              <div class="flex items-center justify-center h-12 bg-base-grey-400">
                content
              </div>
            </AMGrid>
          </AMGrid>
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
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";

export default {
  name: "DocGrid",
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
      return `<AMGrid container>
  <AMGrid item sm="1">...</AMGrid>
  ...
  <AMGrid item sm="1">...</AMGrid>
</AMGrid>`;
    },
    codeUsage() {
      return `<AMGrid container>
  <AMGrid item sm="8">...</AMGrid>
  <AMGrid item sm="4">...</AMGrid>
  <AMGrid item sm="6">...</AMGrid>
  <AMGrid item sm="6">...</AMGrid>
  <AMGrid item sm="4">...</AMGrid>
  <AMGrid item sm="6" class="ml-auto">...</AMGrid>
</AMGrid>`;
    },
    codeContainer() {
      return `<AMGrid container spacing="1">
  <AMGrid item sm="6">...</AMGrid>
  <AMGrid item sm="6">...</AMGrid>
</AMGrid>`;
    },
    codeContainerDefault() {
      return `<AMGrid container>
  ...
</AMGrid>`;
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
