<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Container</AMTitle>
    <AMSubtitle class="mb-4" variant="small" as="h4">Table of Contents</AMSubtitle>
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
        <AMText variant="introduction">tailwind.config.js</AMText>
        <AMText class="mb-2" variant="body-light">
          Om gebruik te kunnen maken van de
          <pre class="inline">AMContainer</pre>
          is het belangrijk om in de
          <pre class="inline">tailwind.config.js</pre>
          de verschillende schermformaten/breakpoints te definiëren zodat je
          deze kunt gebruiken om de container aan te passen per breakpoint.
          Wanneer je gebruikt wilt maken van
          <pre class="inline">custom spacings</pre>
          die niet gedefinieerd zijn door Tailwind zelf is het belangrijk om ook
          deze toe te voegen in de
          <pre class="inline">tailwind.config.js</pre>
        </AMText>
        <AMText class="mb-4 text-feedback-error" variant="body-bold">
          !important: Zorg ervoor dat je geen cijfers gebruikt wanneer je de
          breakpoints definieerd.
        </AMText>
        <highlightjs autodetect :code="codeThemeTailwind" />
      </div>
      <div>
        <AMText variant="introduction">Theme</AMText>
        <AMText class="mb-2" variant="body-light">
          Nadat je in de
          <pre class="inline">tailwind.config.js</pre>
          de verschillende breakpoints hebt gedefinieerd is het belangrijk om
          deze mee te geven in het Thema.
        </AMText>
        <AMText class="mb-2" variant="body-light">
          Belangrijk is om altijd een
          <pre class="inline">default</pre>
          mee te geven. Deze zorgt ervoor voor de ruimtes op mobiel en een
          maximale breedte. Vervolgens kun je per breakpoint aangeven wat de
          ruimtes moeten zijn.
        </AMText>
        <AMText class="mb-4 text-feedback-error" variant="body-bold">
          !important: Zorg ervoor dat je de
          <pre class="inline">tailwind.config.js</pre>
          importeert zodat je deze waardes kunt gebruiken om het thema mee op te
          bouwen.
        </AMText>
        <highlightjs autodetect :code="codeTheme" />
      </div>
    </div>
    <div class="mt-12" id="usage">
      <AMSubtitle class="mb-4" variant="small" as="h4">Usage</AMSubtitle>
      <CodeBlock :code="codeDefault">
        <AMContainer style="padding-left: 0; padding-right: 0" class="bg-base-grey-300">
          <p>Container</p>
          <AMGrid container spacing="4" class="mt-12">
            <AMGrid item>
              <div class="bg-base-grey-400">Content</div>
            </AMGrid>
            <AMGrid item>
              <div class="bg-base-grey-400">Content</div>
            </AMGrid>
          </AMGrid>
        </AMContainer>
      </CodeBlock>
    </div>
    <div class="mt-12" id="api">
      <AMSubtitle class="mb-4" variant="small" as="h4">Component API</AMSubtitle>
      <AMText variant="introduction">maxWidth</AMText>
      <CodeBlock :code="codeMaxWidth">
        <AMContainer maxWidth="md" style="padding-left: 0; padding-right: 0" class="bg-base-grey-300">
          <p>Container</p>
          <AMGrid container spacing="4" class="mt-12">
            <AMGrid item>
              <div class="bg-base-grey-400">Content</div>
            </AMGrid>
            <AMGrid item>
              <div class="bg-base-grey-400">Content</div>
            </AMGrid>
          </AMGrid>
        </AMContainer>
      </CodeBlock>
    </div>
  </div>
</template>

<script>
import CodeBlock from "../components/CodeBlock";

import AMTitle from "@/components/cores/Title";
import AMSubtitle from "@/components/cores/Subtitle";
import AMText from "@/components/cores/Text";
import AMLink from "@/components/atoms/Link";
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";

export default {
  name: "DocContainer",
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
    codeMaxWidth() {
      return `<AMContainer maxWidth="md">
  ...
</AMContainer>`;
    },
    codeThemeTailwind() {
      return `// tailwind.config.js
screens: {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
},

// optional
spacing: {
  '13': '3.25rem',
  '15': '3.75rem',
  '128': '32rem',
  '144': '36rem',
},
`;
    },
    codeTheme() {
      return `// theme / Cores / Container

import twConfig from "...";
const { screens, spacing } = twConfig.theme;

const container = {
  default: {
    maxWidth: screens["xl"],
    padding: spacing["4"],
  },
  sm: {
    breakpoint: screens["sm"],
    padding: spacing["12"],
  },
  lg: {
    breakpoint: screens["lg"],
    padding: spacing["8"],
  },
  xxl: {
    breakpoint: screens["xxl"],
    padding: spacing["0"],
  },
};`;
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
