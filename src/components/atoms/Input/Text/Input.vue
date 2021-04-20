<template>
  <component :is="InputComponent" class="form-input">
    <AMText v-if="label" class="label" as="label" variant="body-regular" :for="id">
      {{ label }}
    </AMText>
    <div :class="error && 'error'" class="input-wrapper">
      <IconBase class="input-icon icon" v-if="icon" :name="icon" width="20" height="20" />
      <input @input="handleInput($event.target.value)" :value="value" type="email" :id="id" :placeholder="placeholder" />
      <IconBase v-if="error" class="error-icon icon" name="exclamation" width="20" height="20" />
    </div>
    <AMText v-if="error" class="error-message" as="span" variant="caption" :for="id">
      {{ errorMessage }}
    </AMText>
  </component>
</template>

<script>
import StyledInput from "./styles";
import AMText from "@/components/cores/Text";
import IconBase from "../../../../icons/IconBase";

export default {
  name: "AMTextInput",
  components: {
    IconBase,
    AMText,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      default: "Placeholder",
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    errorMessage: {
      type: String,
      default: "errorMessage",
      required: true,
    },
    value: {
      type: String,
    },
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    handleInput(value) {
      this.$emit("input", value);
    },
    handleCheck() {
      console.log(this.error);
    },
  },
  computed: {
    InputComponent() {
      const data = { icon: this.icon };
      return StyledInput(data);
    },
  },
};
</script>
