<template>
  <div class="mt-8 mb-20">
    <AMTitle class="mb-4" variant="epic" as="h2">Button</AMTitle>
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
        <AMText variant="introduction">tailwind.config.js</AMText>
        <AMText class="mb-2" variant="body-light">
          Alle variablen die je nodig hebt om de
          <pre class="inline">AMButton</pre>
          mee op te bouwen definieer je in de
          <pre class="inline">tailwind.config.js</pre>
        </AMText>
        <AMText class="mb-4 text-feedback-error" variant="body-bold">
          !important: Zorg ervoor de typografie in
          <pre class="inline">cores</pre>
          hebt gedefinieerd zodat je deze kunt gebruiken tijdens het bepalen van
          het thema van de
          <pre class="inline">AMButton</pre>
        </AMText>
        <highlightjs autodetect :code="codeTailwind" />
      </div>
      <div class="mb-8">
        <AMText variant="introduction">Theme</AMText>
        <AMText class="mb-4" variant="body-light">
          Nadat je alles in de
          <pre class="inline">tailwind.config.js</pre>
          hebt gedefinieerd kun je de varianten aanmaken in het thema. Het is
          mogelijk om oneindig veel varianten te maken maar het wordt aangeraden
          om de hoeveelheid beperkt te houden aangezien dit voor meer
          consistentie zorgt.
        </AMText>
        <AMText class="mb-2" variant="body-light">
          Importeer eerst alle styling die je nodig hebt en maak vervolgens het
          button object aan. Definieer vervolgens de defaultstyling voor elke
          button en maak vervolgens de verschillende varianten aan. Het is ook
          mogelijk om elke variant de default styling eventueel aan te passen.
        </AMText>
        <highlightjs autodetect :code="codeTheme" />
      </div>
    </div>
    <div class="mt-12" id="usage">
      <AMSubtitle class="mb-4" variant="small" as="h4">Usage</AMSubtitle>
      <div>
        <AMText variant="introduction">Variants</AMText>
        <AMText class="mb-2" variant="body-light">
          De varianten die gedefiniëerd zijn in het thema kun je gebruiken door
          <pre class="inline">variant="name"</pre>
          te gebruiken op het component. Deze property is dan ook
          <pre class="inline">required</pre>
          evenals de
          <pre class="inline">label</pre>
          property.
        </AMText>
        <CodeBlock :code="codeVariants">
          <div class="flex justify-around w-full">
            <AMButton variant="primary" label="I am a primary button" />
            <AMButton variant="secondary" label="I am a secondary button" />
            <AMButton variant="ghost" label="I am a ghost button" />
          </div>
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">Types</AMText>
        <AMText class="mb-2" variant="body-light">
          Er zijn drie verschillende type buttons. Zo heb je de normale button,
          een anchor waarmee je naar een andere pagina kan navigeren en de
          submit button om een formulier te kunnen submitten. Wanneer je aan de
          button
          <pre class="inline">href="..."</pre>
          toevoegd wordt de button automatisch een anchor. Wanneer je
          <pre class="inline">type="submit"</pre>
          toevoegd kun je met de button een formulier submitten.
        </AMText>
        <CodeBlock :code="codeTypes">
          <div class="flex justify-around w-full">
            <AMButton variant="primary" label="I am a regular button" />
            <AMButton href="#" variant="primary" label="I am an anchor" />
            <AMButton type="submit" variant="primary" label="I am a submit button" />
          </div>
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">Icons</AMText>
        <AMText class="mb-2" variant="body-light">
          Mocht je aan de button een icoon aan het begin of aan het eind willen
          toevoegen kan dit met
          <pre class="inline">iconStart="..."</pre>
          of
          <pre class="inline">iconEnd="..."</pre>
          . Alle iconen van de iconenset zijn beschikbaar, de naam die je invult
          is het icoon dat in de button zal staan.
        </AMText>
        <CodeBlock :code="codeIcons">
          <div class="flex justify-around w-full">
            <AMButton variant="primary" iconStart="mail" label="I have a iconStart" />
            <AMButton variant="primary" iconEnd="mail" label="I have a iconEnd" />
          </div>
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">Loading</AMText>
        <AMText class="mb-2" variant="body-light">
          Wanneer de gebruiker bijvoorbeeld een formulier submit is het mogelijk
          om een loading state toe te voegen aan de button. Dit kun je doen door
          een
          <pre class="inline">loading="..."</pre>
          mee te geven. Deze waarde dient een
          <pre class="inline">Boolean</pre>
          te zijn zodat deze loading state ook weer kan worden uitgezet als het
          formulier succesvol gesubmit is.
        </AMText>
        <CodeBlock :code="codeLoading">
          <div class="flex justify-around w-full">
            <AMButton variant="primary" loading label="Button" />
          </div>
        </CodeBlock>
      </div>
      <div class="mt-6">
        <AMText variant="introduction">Disabled</AMText>
        <AMText class="mb-2" variant="body-light">
          Mocht je een button willen disabelen omdat de gebruiker eerst een
          aantal velden van het formulier moet hebben ingevuld kun je dat doen
          met de property
          <pre class="inline">disabled="..."</pre>
          . Deze waarde dienst een
          <pre class="inline">Boolean</pre>
          te zijn.
        </AMText>
        <CodeBlock :code="codeDisabled">
          <div class="flex justify-around w-full">
            <AMButton variant="primary" disabled label="I am a disabled primary button" />
            <AMButton variant="secondary" disabled label="I am a disabled secondary button" />
            <AMButton variant="ghost" disabled label="I am a disabled ghost button" />
          </div>
        </CodeBlock>
      </div>
    </div>
    <div class="mt-12" id="api">
      <div class="mb-8">
        <AMSubtitle class="mb-4" variant="small" as="h4">Component API</AMSubtitle>
        <table class="w-full">
          <tr>
            <th>
              <AMText class="py-2 text-left" variant="body-bold">Property</AMText>
            </th>
            <th>
              <AMText class="py-2 text-left" variant="body-bold">Type</AMText>
            </th>
            <th>
              <AMText class="py-2 text-left" variant="body-bold">Required</AMText>
            </th>
            <th>
              <AMText class="py-2 text-left" variant="body-bold">Default</AMText>
            </th>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">variant</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">String</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">true</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular"></AMText>
            </td>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">label</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">String</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">true</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular"></AMText>
            </td>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">href</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">String</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular"></AMText>
            </td>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">iconStart</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">String</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular"></AMText>
            </td>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">iconEnd</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">String</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular"></AMText>
            </td>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">Loading</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">Boolean</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
          </tr>
          <tr>
            <td>
              <AMText class="py-2" variant="body-regular">Disabled</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">Boolean</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
            <td>
              <AMText class="py-2" variant="body-regular">false</AMText>
            </td>
          </tr>
        </table>
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
import AMButton from "@/components/atoms/Button";

export default {
  name: "DocButton",
  components: {
    CodeBlock,
    AMTitle,
    AMSubtitle,
    AMText,
    AMLink,
    AMContainer,
    AMGrid,
    AMButton,
  },
  computed: {
    codeTailwind() {
      return `// tailwind.config.js

theme: {
  // Recommended
  colors: {
    black: "#FFFFFF",
    white: "#000000",
    red: "#FF0000",
    yellow: "#FFFF00",
  },
  // Recommended
  spacing: {
    "1": "8px",
    "2": "12px",
    "3": "16px",
    "4": "24px",
    "5": "32px",
    "6": "48px",
  },
  // Optional
  borderRadius: {
    "2": "12px",
  },
}`;
    },
    codeTheme() {
      return `// theme / Atoms / Button

import cores from "...";
import twConfig from "...";

const { typography } = cores;
const { colors, spacing, borderRadius } = twConfig.theme;

const button = {
  // This styling counts for every button
  default: {
    padding: spacing["3"] spacing["5"],
    typography: typography.text.button,
    textTransform: "uppercase",
    borderRadius: spacing["2"],
  },
  // Define all variants you would like to use
  primary: {
    // Default state
    default: {
      // Overwrite the default styling for every button
      color: colors.base.white,
      backgroundColor: "tomato",
    },
    // Hover and focus state
    hover: {
      color: colors.base.white,
      backgroundColor: "red",
    },
    // Disabled state
    disabled: {
      color: colors.base.white,
      backgroundColor: colors.base.grey["300"],
    },
  },
  secondary: {...},
  ghost: {...},
};`;
    },
    codeVariants() {
      return `<AMButton variant="primary" label="I am a primary button" />
<AMButton variant="secondary" label="I am a secondary button" />
<AMButton variant="ghost" label="I am a ghost button" />`;
    },
    codeTypes() {
      return `// Regular button
<AMButton
  variant="primary"
  label="I am a regular button"
/>

// Anchor
<AMButton
  variant="primary"
  label="I am an anchor"
  href="#"
/>

// Submit button
<AMButton
  variant="primary"
  label="I am a submit button"
  type="submit"
/>`;
    },
    codeIcons() {
      return `// iconStart
<AMButton
  variant="primary"
  label="I have a iconStart"
  iconStart="mail"
/>

// iconEnd
<AMButton
  variant="primary"
  label="I have a iconEnd"
  iconEnd="mail"
/>`;
    },
    codeLoading() {
      return `<AMButton
variant="primary"
label="I am a loading primary button"
loading
/>`;
    },
    codeDisabled() {
      return `// Primary disabled
<AMButton
  variant="primary"
  label="I am a disabled primary button"
  disabled
/>

// Secondary disabled
<AMButton
  variant="secondary"
  label="I am a disabled secondary button"
  disabled
/>

// Ghost disabled
<AMButton
  variant="ghost"
  label="I am a disabled ghost button"
  disabled
/>`;
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
