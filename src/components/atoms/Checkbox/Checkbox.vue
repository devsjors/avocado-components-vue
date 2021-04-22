<template>
  <component :is="InputComponent" :class="{ checked: checkedClass, error: error }">
    <div class="custom-checkbox-wrapper">
      <div class="custom-input-wrapper">
        <IconBase class="custom-check" name="check" />
        <input @input="handleInput()" :value="formValue" :id="id" :name="name" :required="required" :disabled="disabled" type="checkbox" />
      </div>
      <AMText v-if="label" as="label" variant="body-light" :for="id">
        {{ label }}
      </AMText>
      <slot v-else />
    </div>
    <AMText v-if="error" class="error-message" as="span" variant="caption">
      {{ errorMessage }}
    </AMText>
  </component>
</template>

<script>
import StyledCheckbox from "./styles";
import AMText from "@/components/cores/Text";
import IconBase from "@/icons/IconBase";

export default {
  name: "AMCheckbox",
  components: {
    IconBase,
    AMText,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    required: {
      type: Boolean,
      default: false,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
    value: {
      type: String,
      required: false,
    },
    checked: {
      type: [Array, Boolean],
      required: false,
    },
  },
  model: {
    prop: "checked",
    event: "input",
  },
  data() {
    return {
      formValue: null,
      checkedClass: false,
      error: false,
      errorMessage: "",
      messages: {
        required: "Dit veld is vereist",
        email: "Dit emailadres is ongeldig",
        tel: "Dit telefoonnummer is ongeldig",
      },
    };
  },
  methods: {
    handleInput() {
      if (Array.isArray(this.checked)) {
        let checked = [].concat(this.checked);
        this.checkedClass = true;
        if (checked.includes(this.formValue)) {
          checked.splice(checked.indexOf(this.formValue), 1);
          this.checkedClass = false;
        } else {
          checked.push(this.formValue);
        }
        this.$emit("input", checked);
      } else {
        this.checkedClass = !this.checked;
        this.$emit("input", !this.checked);
      }
    },
    handleError() {
      if (this.required && !this.checked) {
        this.toggleError(this.checked, this.messages.required);
      } else {
        this.toggleError(true);
      }
      this.$emit("error", this.error);
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
      const data = {
        disabled: this.disabled,
      };
      return StyledCheckbox(data);
    },
  },
  created() {
    this.$data.formValue = this.$props.value
      ? this.$props.value
      : this.$props.label;

    if (this.$props.checked === true) {
      this.$data.checkedClass = true;
    } else if (Array.isArray(this.$props.checked)) {
      let checked = [].concat(this.$props.checked);
      if (checked.includes(this.$data.formValue)) {
        this.$data.checkedClass = true;
      }
    }
  },
};
</script>
