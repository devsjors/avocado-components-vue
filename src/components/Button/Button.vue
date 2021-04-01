<template>
  <component :is="ButtonComponent" :href="href" @click="clickHandle()">
    <IconBase v-if="iconStart && !loading" :name="iconStart" />
    <span v-if="!loading">{{ label }}</span>
    <span v-if="loading" class="loading" />
    <IconBase v-if="iconEnd && !loading" :name="iconEnd" />
  </component>
</template>

<script>
import { StyledButton, StyledAnchor } from "./styles/index";
import IconBase from "../../icons/IconBase.vue";

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
      };
      return this.href ? StyledAnchor(data) : StyledButton(data);
    },
  },
};
</script>
