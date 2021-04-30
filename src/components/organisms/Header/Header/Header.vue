<template>
  <component :is="HeaderComponent" :class="menuOpen && 'open'">
    <div class="header-wrapper">
      <slot />
      <p @click="toggleHandler" class="toggle">Hi</p>
    </div>
  </component>
</template>

<script>
import StyledHeader from "./styles/index";

export default {
  name: "AMHeader",
  components: {},
  props: {},
  data() {
    return {
      menuOpen: true,
      headerNavigationPosition: null,
    };
  },
  methods: {
    toggleHandler() {
      this.menuOpen = !this.menuOpen;
    },
  },
  computed: {
    HeaderComponent() {
      const data = {
        headerNavigationPosition: this.headerNavigationPosition,
      };
      return StyledHeader(data);
    },
  },
  created() {
    this.$data.headerNavigationPosition = this.$slots.default.map((slot) =>
      slot.tag.includes("AMHeaderNavigation")
    );
  },
};
</script>
