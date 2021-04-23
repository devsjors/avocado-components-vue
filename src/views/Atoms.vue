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
            <AMInput @error="pushErrors" :validate="trigger" v-model="form.email" type="email" required placeholder="Email" id="example1" icon="mail" />
            <AMInput @error="pushErrors" :validate="trigger" label="Telefoon" v-model="form.phone" type="tel" required placeholder="Telefoonnummer" id="example2" />
            <div>
              <AMCheckbox v-model="form.fruits" label="Appel" name="fruits" id="example3" />
              <AMCheckbox v-model="form.fruits" label="Banaan" name="fruits" id="example4" />
              <AMCheckbox v-model="form.fruits" label="Peer" name="fruits" id="example5" />
            </div>
            <AMCheckbox @error="pushErrors" :validate="trigger" v-model="form.toc" label="Algemene voorwaarden" required id="example6" />
            <AMButton type="submit" variant="primary" label="Submit" />
          </form>
        </div>
      </div>
    </div>
    <div>
      <AMRadio v-model="form.candy" label="Chocolade reep" name="candy" id="example7" />
      <AMRadio v-model="form.candy" label="Popcorn" name="candy" id="example8" />
      <AMRadio v-model="form.candy" label="Chips" name="candy" id="example9" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";
import AMInput from "@/components/atoms/Input";
import AMCheckbox from "@/components/atoms/Checkbox";
import AMRadio from "@/components/atoms/Radio";

export default {
  name: "Home",
  components: {
    AMButton,
    AMLink,
    AMInput,
    AMCheckbox,
    AMRadio,
  },
  data() {
    return {
      loading: true,
      form: {
        email: "",
        phone: "",
        fruits: [],
        toc: false,
        candy: "",
      },
      errors: [],
      trigger: 0,
    };
  },
  methods: {
    pushErrors(error) {
      error && this.errors.push(error);
    },
    handleSubmit() {
      this.errors = [];
      this.trigger++;

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
