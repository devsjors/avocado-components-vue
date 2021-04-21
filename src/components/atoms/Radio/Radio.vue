<template>
  <component :is="InputComponent">
    <input @input="handleInput($event.target.value)" :value="determainValue" :id="id" type="checkbox" :name="name" />
    <AMText as="label" variant="body-regular" :for="id"> {{ label }} </AMText>
  </component>
</template>

<script>
import StyledRadio from "./styles";
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
      type: [Array, Boolean],
      required: false,
    },
  },
  model: {
    prop: "checked",
    event: "input",
  },
  data() {
    return {};
  },
  methods: {
    handleInput(value) {
      if (Array.isArray(this.checked)) {
        let checked = [].concat(this.checked);
        checked.includes(this.label)
          ? checked.splice(checked.indexOf(this.label), 1)
          : checked.push(this.label);
        this.$emit("input", checked);
      } else {
        this.$emit("input", !this.checked);
      }
    },
  },
  computed: {
    InputComponent() {
      return StyledRadio();
    },
    determainValue() {
      return this.$props.value ? this.$props.value : this.$props.label;
    },
  },
};
</script>
