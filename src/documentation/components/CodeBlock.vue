<template>
  <div>
    <div class="relative px-6 pt-12 pb-20 ring-2 ring-inset ring-base-grey-300">
      <slot />
      <AMButton @click="toggleHandle" class="absolute bottom-0 right-0 ring-2 ring-inset ring-base-grey-300" variant="ghost" label="Show code" />
    </div>
    <highlightjs :class="showCode ? 'block' : 'hidden'" autodetect :code="code" />
  </div>
</template>

<script>
import AMButton from "@/components/atoms/Button";

export default {
  name: "CodeBlock",
  components: {
    AMButton,
  },
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showCode: false,
    };
  },
  methods: {
    toggleHandle() {
      this.showCode = !this.showCode;
    },
  },
};
</script>
