<template>
  <div>
    <div :style="sidebarWidth" class="fixed left-0 px-4 py-8 top-24 bg-base-grey-200">
      <AMText @click.native="handlePreview($event)" variant="introduction">Cores</AMText>
      <AMText @click.native="handlePreview($event)" variant="body-light">Container</AMText>
      <AMText @click.native="handlePreview($event)" variant="body-light">Grid</AMText>
      <AMText @click.native="handlePreview($event)" variant="body-light">Title</AMText>
      <AMText @click.native="handlePreview($event)" variant="body-light">Subtitle</AMText>
      <AMText @click.native="handlePreview($event)" variant="body-light">Text</AMText>
    </div>

    <AMContainer>
      <!-- <AMTitle as="h1" variant="huge">Components</AMTitle>
      <AMText variant="introduction">Cores</AMText>
      <AMText variant="body-light">Container</AMText>
      <AMText variant="body-light">Grid</AMText>
      <AMText variant="body-light">Title</AMText>
      <AMText variant="body-light">Subtitle</AMText>
      <AMText variant="body-light">Text</AMText>

      <AMText variant="introduction">Atoms</AMText>
      <AMText variant="body-light">Button</AMText>
      <AMText variant="body-light">Checkbox</AMText>
      <AMText variant="body-light">Input</AMText>
      <AMText variant="body-light">Link</AMText>
      <AMText variant="body-light">Radio</AMText>

      <AMText variant="introduction">Organisms</AMText>
      <AMText variant="body-light">Header</AMText>
      <AMText variant="body-light">Form</AMText> -->

      <component :is="previewComponent">Hallo</component>
    </AMContainer>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import AMContainer from "@/components/cores/Container";
import AMTitle from "@/components/cores/Title";
import AMText from "@/components/cores/Text";

import DocContainer from "@/documentation/cores/Container";

export default {
  name: "Components",
  components: {
    AMContainer,
    AMTitle,
    AMText,
    DocContainer,
  },
  data() {
    return {
      previewComponent: null,
    };
  },
  computed: {
    sidebarWidth() {
      const containerWidth = document.querySelector(".grid-container")
        .offsetWidth;
      const width = (window.innerWidth - containerWidth) / 2 - 20;
      return `width: ${width}px`;
    },
  },
  methods: {
    handlePreview(event) {
      const component = event.target.textContent;
      this.previewComponent = "Doc" + component;
    },
  },
};
</script>
