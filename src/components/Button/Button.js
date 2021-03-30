/* eslint-disable prettier/prettier */
import Vue from 'vue';
import { StyledButton, StyledAnchor } from "./styles";
import IconBase from "../../icons/IconBase.vue";

const AMButton = Vue.component("AMButton", {
  functional: true,
  props: {
    label: {
      type: String,
      default: "Button",
      required: true,
    },
    variant: {
      type: String,
      default: "primary",
      required: true,
    },
    iconStart: {},
    iconEnd: {},
  },
  render(createElement, context) {
    const { data, props } = context;
    const { label, variant, iconStart, iconEnd } = props;

    const start = iconStart ? true : false;
    const end = iconEnd ? true : false;
    const StyledProps = { variant, start, end };
    const element = (((data || {}).attrs || {}).href || undefined) === undefined ? StyledButton(StyledProps) : StyledAnchor(StyledProps);
    const iconComponent = (icon) => createElement(IconBase, { attrs: { name: iconStart || iconEnd } });

    if (iconStart) {
      return createElement(element, data, [iconComponent(iconStart), label]);
    } else if (iconEnd) {
      return createElement(element, data, [label, iconComponent(iconEnd)]);
    } else {
      return createElement(element, data, label);
    }
  },
});

export default AMButton;
