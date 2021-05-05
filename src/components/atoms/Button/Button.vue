<template>
  <component :is="ButtonComponent" :href="href" @click="clickHandle()" :class="loading && 'loading'">
    <IconBase v-if="iconStart" :name="iconStart" />
    <span>{{ label }}</span>
    <span class="spinner" />
    <IconBase v-if="iconEnd" :name="iconEnd" />
  </component>
</template>

<script>
import { StyledButton, StyledAnchor } from "./styles/index";
import IconBase from "../../../icons/IconBase";

export default {
  name: "AMButton",
  components: {
    IconBase,
  },
  props: {
    label: {
      type: String,
      default: "Label",
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
      required: true,
    },
    href: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconStart: {
      type: String,
      required: false,
    },
    iconEnd: {
      type: String,
      required: false,
    },
  },
  methods: {
    clickHandle() {
      this.$emit("click");
    },
  },
  computed: {
    ButtonComponent() {
      const data = {
        variant: this.variant,
        start: this.iconStart,
        end: this.iconEnd,
        disabled: this.disabled,
        all: this.__theme.atoms.button,
      };
      return this.href ? StyledAnchor(data) : StyledButton(data);
    },
  },
};
</script>
