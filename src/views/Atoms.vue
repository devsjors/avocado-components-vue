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
            <AMInput @error="pushErrors" ref="example1" label="E-mail" v-model="form.email" type="email" required placeholder="Email" id="example1" icon="mail" />
            <AMInput @error="pushErrors" ref="example2" label="Telefoon" v-model="form.phone" type="tel" required placeholder="Telefoonnummer" id="example2" />
            <div>
              <AMCheckbox v-model="form.fruits" name="fruits" value="appel" id="example3">
                <AMText as="label" variant="body-light" for="example3">Appel</AMText>
              </AMCheckbox>
              <AMCheckbox v-model="form.fruits" label="Banaan" name="fruits" id="example4" />
              <AMCheckbox v-model="form.fruits" label="Peer" name="fruits" id="example5" />
            </div>
            <AMCheckbox @error="pushErrors" ref="example3" v-model="form.toc" label="Algemene voorwaarden" required id="example6" />
            <AMButton type="submit" variant="primary" label="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AMText from "@/components/cores/Text";

import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";
import AMInput from "@/components/atoms/Input";
import AMCheckbox from "@/components/atoms/Checkbox";

export default {
  name: "Home",
  components: {
    AMText,
    AMButton,
    AMLink,
    AMInput,
    AMCheckbox,
  },
  data() {
    return {
      loading: true,
      form: {
        email: "",
        phone: "",
        fruits: [],
        toc: false,
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
      this.$refs.example3.handleError();
    },
    handleSubmit() {
      this.errors = [];
      this.handleErrors();

      console.log(this.form);

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
