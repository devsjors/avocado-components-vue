<template>
  <component :is="HeaderComponent" :class="menuOpen && 'open'">
    <AMContainer class="header-wrapper">
      <slot />
      <div @click="toggleHandler" class="toggle" :class="menuOpen ? 'menu-open' : 'menu-close'">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </AMContainer>
  </component>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import StyledHeader from "./styles/index";

export default {
  name: "AMHeader",
  components: {
    AMContainer,
  },
  props: {},
  data() {
    return {
      menuOpen: false,
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
