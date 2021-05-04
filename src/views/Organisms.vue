<template>
  <div>
    <p>Organisms</p>
  </div>
</template>

<script>
import axios from "axios";

/* eslint-disable vue/no-unused-components */
import AMHeader from "@/components/organisms/Header/Header";
import AMHeaderName from "@/components/organisms/Header/HeaderName";
import AMHeaderNavigation from "@/components/organisms/Header/HeaderNavigation";
import AMHeaderMenu from "@/components/organisms/Header/HeaderMenu";
import AMHeaderMenuItem from "@/components/organisms/Header/HeaderMenuItem";

import AMButton from "@/components/atoms/Button";
import AMInput from "@/components/atoms/Input";

export default {
  name: "Home",
  components: {
    AMHeader,
    AMHeaderName,
    AMHeaderNavigation,
    AMHeaderMenu,
    AMHeaderMenuItem,
    AMButton,
    AMInput,
  },
  data() {
    return {
      form: {
        search: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      axios
        .post("/atoms", this.form)
        .then(() => {
          console.log("success", this.form);

          // Write action
        })
        .catch(() => {
          // Write fallback
        });
    },
  },
};
</script>
