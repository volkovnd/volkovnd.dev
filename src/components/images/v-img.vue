<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "img",
    },
    alt: {
      type: String,
      default: "",
    },
    thumbnail: {
      type: Boolean,
      default: false,
    },
    fluid: {
      type: Boolean,
      default: false,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        attrs: {
          alt: props.alt,
        },
        class: {
          "img-fluid": props.fluid,
          "img-thumbnail": props.thumbnail,
        },
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/images";
</style>
