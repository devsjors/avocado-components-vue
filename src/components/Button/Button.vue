<template>
  <component :is="ButtonComponent" :href="href">
    <IconBase v-if="iconStart" :name="iconStart" />
    {{ label }}
    <IconBase v-if="iconEnd" :name="iconEnd" />
  </component>
</template>

<script>
import { StyledButton, StyledAnchor } from "./styles";
import IconBase from "../../icons/IconBase.vue";

export default {
  name: "AMButton",
  components: {
    StyledButton,
    StyledAnchor,
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
    iconStart: {
      type: String,
      required: false,
    },
    iconEnd: {
      type: String,
      required: false,
    },
  },
  computed: {
    ButtonComponent() {
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
