<template>
  <div>
    <div :style="sidebarWidth" class="fixed left-0 px-4 py-8 top-24 bg-base-grey-200">
      <div>
        <AMText variant="introduction">Cores</AMText>
        <AMLink href="" label="Container" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Grid" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Title" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Subtitle" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Text" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
      </div>
      <div class="mt-10">
        <AMText variant="introduction">Atoms</AMText>
        <AMLink href="" label="Button" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Link" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Input" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Checkbox" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
        <AMLink href="" label="Radio" style="display: block" class="mt-1" @click.native="handlePreview($event)" />
      </div>
    </div>

    <AMContainer>
      <component :is="previewComponent" />
    </AMContainer>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import AMContainer from "@/components/cores/Container";
import AMTitle from "@/components/cores/Title";
import AMText from "@/components/cores/Text";
import AMLink from "@/components/atoms/Link";

// Cores
import DocContainer from "@/documentation/cores/Container";
import DocGrid from "@/documentation/cores/Grid";
import DocTitle from "@/documentation/cores/Title";
import DocSubtitle from "@/documentation/cores/Subtitle";
import DocText from "@/documentation/cores/Text";

// Atoms
import DocButton from "@/documentation/atoms/Button";
import DocCheckbox from "@/documentation/atoms/Checkbox";
import DocInput from "@/documentation/atoms/Input";
import DocLink from "@/documentation/atoms/Link";
import DocRadio from "@/documentation/atoms/Radio";

export default {
  name: "Components",
  components: {
    AMContainer,
    AMTitle,
    AMText,
    AMLink,
    DocContainer,
    DocGrid,
    DocTitle,
    DocSubtitle,
    DocText,
    DocButton,
    DocCheckbox,
    DocInput,
    DocLink,
    DocRadio,
  },
  data() {
    return {
      previewComponent: "DocGrid",
    };
  },
  computed: {
    sidebarWidth() {
      const containerWidth =
        document.querySelector(".grid-container").offsetWidth;
      const width = (window.innerWidth - containerWidth) / 2 - 20;
      return `width: ${width}px`;
    },
  },
  methods: {
    handlePreview(event) {
      event.preventDefault();
      const component = event.target.textContent;
      this.previewComponent = "Doc" + component;
    },
  },
};
</script>
