<template>
  <component :is="LinkComponent" :href="href">
    <IconBase v-if="iconStart" :name="iconStart" />
    <span>{{ label }}</span>
    <IconBase v-if="iconEnd" :name="iconEnd" />
  </component>
</template>

<script>
import { StyledLink } from "./styles";
import IconBase from "../../icons/IconBase.vue";

export default {
  name: "AMLink",
  components: {
    IconBase,
  },
  props: {
    label: {
      type: String,
      default: "Label",
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    disabled: {
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
  computed: {
    LinkComponent() {
      const data = {
        start: this.iconStart,
        end: this.iconEnd,
        disabled: this.disabled,
      };
      return StyledLink(data);
    },
  },
};
</script>
