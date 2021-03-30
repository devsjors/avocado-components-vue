<template>
  <component :href="href" :is="StyledProps">Button</component>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import { StyledButton, StyledAnchor } from "./styles";
import styled, { css } from "vue-styled-components";

export default {
  name: "AMButton",
  components: {
    StyledButton,
    StyledAnchor,
  },
  props: {
    label: {
      type: String,
      default: "Button",
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
      required: true,
    },
    href: {},
    iconStart: {},
    iconEnd: {},
  },
  data() {
    return {};
  },
  computed: {
    StyledProps() {
      const data = {
        variant: this.variant,
        start: this.iconStart,
        end: this.iconEnd,
      };
      return this.href ? StyledAnchor(data) : StyledButton(data);
    },
  },
};
</script>
