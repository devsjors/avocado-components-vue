<template>
  <div>
    <AMContainer>
      <AMGrid style="background: green" container>
        <AMGrid style="background: red" item>1</AMGrid>
        <AMGrid style="background: red" item>2</AMGrid>
        <AMGrid style="background: red" item>3</AMGrid>
        <AMGrid style="background: red" item>4</AMGrid>
        <AMGrid style="background: red" item>5</AMGrid>
        <AMGrid style="background: red" item>6</AMGrid>
        <AMGrid style="background: red" item>7</AMGrid>
        <AMGrid style="background: red" item>8</AMGrid>
        <AMGrid style="background: red" item>9</AMGrid>
        <AMGrid style="background: red" item>10</AMGrid>
        <AMGrid style="background: red" item>11</AMGrid>
        <AMGrid style="background: red" item>12</AMGrid>
      </AMGrid>
    </AMContainer>
  </div>
</template>

<script>
import AMContainer from "@/components/cores/Container";
import AMGrid from "@/components/cores/Grid";

export default {
  name: "Home",
  components: {
    AMContainer,
    AMGrid,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
