<template>
  <component :is="RadioComponent" :class="isChecked && 'checked'">
    <div class="custom-radio-wrapper">
      <div class="custom-input-wrapper">
        <input @change="handleChange($event.target.value)" :checked="isChecked" :value="formValue" type="radio" :id="id" :name="name" :disabled="disabled" />
        <div class="custom-input"></div>
      </div>
      <AMText v-if="label" as="label" variant="body-light" :for="id">
        {{ label }}
      </AMText>
      <slot v-else />
    </div>
  </component>
</template>

<script>
import StyledRadio from "./styles/index";
import AMText from "@/components/cores/Text";
import IconBase from "@/icons/IconBase";

export default {
  name: "AMRadio",
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
    value: {
      type: String,
      required: false,
    },
    checked: {
      type: String,
      required: false,
    },
    picked: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  model: {
    prop: "picked",
    event: "change",
  },
  data() {
    return {
      formValue: null,
      checkedClass: false,
    };
  },
  methods: {
    handleChange(value) {
      this.$emit("change", value);
    },
  },
  computed: {
    RadioComponent() {
      const data = {
        disabled: this.disabled,
      };
      return StyledRadio(data);
    },
    isChecked() {
      return this.picked == this.formValue;
    },
  },
  created() {
    this.$data.formValue = this.$props.value
      ? this.$props.value
      : this.$props.label;
  },
};
</script>
