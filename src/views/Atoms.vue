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
          <form @submit.prevent="checkForm">
            <AMTextInput v-model="form.name" label="Label" errorMessage="Error" placeholder="placeholder" id="example" icon="mail" />
            <AMTextInput v-model="form.surname" label="Label" errorMessage="Error" placeholder="placeholder" id="example2" icon="mail" />
            <AMButton type="submit" variant="secondary" label="Submit" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";
import AMTextInput from "@/components/atoms/Input/Text";

export default {
  name: "Home",
  components: {
    AMButton,
    AMLink,
    AMTextInput,
  },
  data() {
    return {
      loading: true,
      form: {
        name: null,
        surname: null,
      },
    };
  },
  methods: {
    checkForm() {
      const inputs = this.$refs.form.querySelectorAll(".form-input");
      console.log(inputs);
    },
  },
};
</script>
