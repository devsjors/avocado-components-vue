<template>
  <div style="display: flex; flex-direction: column; gap: 40px">
    <div class="flex">
      <div class="flex-column">
        <p>Button / Default</p>
        <div>
          <AMButton variant="primary" label="Button" />
        </div>
        <div>
          <AMButton variant="secondary" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" label="Button" />
        </div>
        <div>
          <AMButton variant="primary" iconStart="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="primary" iconEnd="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="secondary" iconStart="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="secondary" iconEnd="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" />
        </div>
      </div>
      <div class="flex-column">
        <p>Button / Disabled</p>
        <div>
          <AMButton variant="primary" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="secondary" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="ghost" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="primary" iconStart="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="primary" iconEnd="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="secondary" iconStart="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="secondary" iconEnd="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" disabled />
        </div>
        <div>
          <AMButton variant="ghost" iconEnd="mail" label="Button" disabled />
        </div>
      </div>
      <div class="flex-column">
        <p>Button / Loading</p>
        <div>
          <AMButton variant="primary" label="Button" :loading="loading" />
        </div>
        <div>
          <AMButton variant="secondary" label="Button" :loading="loading" />
        </div>
        <div>
          <AMButton variant="ghost" label="Button" :loading="loading" />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex-column">
        <p>Link / Default</p>
        <div>
          <AMLink label="This is a clickable link" href="/" />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconStart="mail" />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconEnd="mail" />
        </div>
      </div>
      <div class="flex-column">
        <p>Link / Disabled</p>
        <div>
          <AMLink label="This is a clickable link" href="/" disabled />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconStart="mail" disabled />
        </div>
        <div>
          <AMLink label="This is a clickable link" href="/" iconEnd="mail" disabled />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="flex-column">
        <p>Input with label</p>
        <div>
          <form @submit.prevent="handleSubmit" novalidate>
            <AMInput @error="pushErrors" ref="example1" label="E-mail" v-model="form.email" type="email" required placeholder="Email" id="example2" icon="mail" />
            <AMInput @error="pushErrors" ref="example2" label="Telefoon" v-model="form.phone" type="tel" required placeholder="Telefoonnummer" id="example3" />
            <AMButton type="submit" variant="primary" label="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";
import AMInput from "@/components/atoms/Input";

export default {
  name: "Home",
  components: {
    AMButton,
    AMLink,
    AMInput,
  },
  data() {
    return {
      loading: true,
      form: {
        email: "",
        phone: "",
      },
      errors: [],
    };
  },
  methods: {
    pushErrors(error) {
      error && this.errors.push(error);
    },
    handleErrors() {
      this.$refs.example1.handleError();
      this.$refs.example2.handleError();
    },
    handleSubmit() {
      this.errors = [];
      this.handleErrors();

      if (!this.errors.length) {
        axios
          .post("/atoms", this.form)
          .then(() => {
            // Write action
          })
          .catch(() => {
            // Write fallback
          });
      }
    },
  },
};
</script>
