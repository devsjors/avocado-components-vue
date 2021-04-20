<template>
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
</template>

<script>
import AMButton from "@/components/atoms/Button";
import AMLink from "@/components/atoms/Link";

export default {
  name: "Home",
  components: {
    AMButton,
    AMLink,
  },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
