<template>
  <component :is="InputComponent">
    <AMText v-if="label" class="label" as="label" variant="body-regular" :for="id">
      {{ label }}
    </AMText>
    <div :class="error && 'error'" class="input-wrapper">
      <IconBase class="input-icon icon" v-if="icon" :name="icon" width="20" height="20" />
      <input @input="handleInput($event.target.value)" :value="value" :type="type" :id="id" :required="required" :placeholder="placeholder" />
      <IconBase v-if="error" class="error-icon icon" name="exclamation" width="20" height="20" />
    </div>
    <AMText v-if="error" class="error-message" as="span" variant="caption">
      {{ errorMessage }}
    </AMText>
  </component>
</template>

<script>
import StyledInput from "./styles";
import AMText from "@/components/cores/Text";
import IconBase from "@/icons/IconBase";

export default {
  name: "AMInput",
  components: {
    IconBase,
    AMText,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    errorMessages: {
      type: Object,
      required: false,
    },
    value: {
      type: String,
    },
    validate: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      error: false,
      errorMessage: "",
      messages: {
        required: "Dit veld is vereist",
        email: "Dit emailadres is ongeldig",
        tel: "Dit telefoonnummer is ongeldig",
      },
    };
  },
  watch: {
    validate() {
      this.handleError();
    },
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
    handleError() {
      switch (this.type) {
        case "email":
          if (this.value === "" && this.required) {
            this.toggleError(false, this.messages.required);
          } else if (this.value !== "") {
            this.validEmail(this.value);
          }
          break;
        case "tel":
          if (this.value === "" && this.required) {
            this.toggleError(false, this.messages.required);
          } else if (this.value !== "") {
            this.validTel(this.value);
          }
          break;
      }
      this.$emit("error", this.error);
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.toggleError(
        re.test(String(email).toLowerCase()),
        this.messages.email
      );
    },
    validTel(tel) {
      const re = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm;
      this.toggleError(re.test(String(tel).toLowerCase()), this.messages.tel);
    },
    toggleError(boolean, message) {
      if (boolean) {
        this.error = false;
      } else {
        this.error = true;
        this.errorMessage = message;
      }
    },
  },
  computed: {
    InputComponent() {
      const data = { icon: this.icon };
      return StyledInput(data);
    },
  },
  created() {
    this.$props.errorMessages &&
      Object.assign(this.$data.messages, this.$props.errorMessages);
  },
};
</script>
