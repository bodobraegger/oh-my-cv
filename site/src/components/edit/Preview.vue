<template>
  <div class="pane-container">
    <Zoom ref="zoom" :scale="scale">
      <ResumeRender
        id="preview"
        :markdown="data.mdContent"
        :css="data.cssContent"
        :styles="styles"
      />
    </Zoom>

    <div
      class="zoom-bar hstack fixed bottom-4 lg:(bottom-auto top-15) ml-2 shadow-c rounded-full overflow-hidden text-white bg-blue-500 lg:opacity-0 hover:opacity-100"
    >
      <button @click="scale *= 1.1">
        <client-only>
          <span class="iconify" data-icon="lucide:zoom-in" />
        </client-only>
      </button>
      <button @click="scale /= 1.1">
        <client-only>
          <span class="iconify" data-icon="lucide:zoom-out" />
        </client-only>
      </button>
      <button @click="fitWidth">
        <client-only>
          <span class="iconify" data-icon="fluent:arrow-autofit-width-20-filled" />
        </client-only>
      </button>
      <button @click="fitHeight">
        <client-only>
          <span class="iconify" data-icon="fluent:arrow-autofit-height-20-filled" />
        </client-only>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { debounce } from "ts-debounce";
import Zoom from "@renovamen/vue-zoom";

const scale = ref(1);
const zoom = ref<InstanceType<typeof Zoom>>();

const { width, height } = useElementSize(zoom);
const { styles } = useStyleStore();
const { data } = useDataStore();

const fitWidth = () => {
  scale.value = width.value / getPaperPx(styles.paper, "w");
};

const fitHeight = () => {
  scale.value = height.value / getPaperPx(styles.paper, "h");
};

watch(width, () => debounce(fitWidth, 100)());
</script>

<style scoped>
.zoom-bar button {
  @apply flex-center h-10 w-10 text-lg hover:bg-blue-600;
}
</style>
