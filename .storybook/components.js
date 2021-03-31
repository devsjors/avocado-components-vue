import Vue from "vue";

import AMButton from "../src/components/Button/Button.vue";
import AMLink from "../src/components/Link/Link.vue";

const Button = Vue.component("AMButton", AMButton);
const Link = Vue.component("AMLink", AMLink);

export default {
  components: {
    Button,
    Link,
  },
}