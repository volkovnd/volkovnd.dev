<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    const computedVariantClass = props.variant ? { [`btn-${props.variant}`]: true } : null;
    const computedSizeClass = props.size ? { [`btn-${props.size}`]: true } : null;

    return h(
      "button",
      mergeData(data, {
        attrs: {
          type: props.type,
        },
        staticClass: "btn",
        class: [computedSizeClass, computedVariantClass],
      }),
      children
    );
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/buttons";
</style>
