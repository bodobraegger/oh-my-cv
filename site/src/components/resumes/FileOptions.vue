<template>
  <div class="file-options hstack space-x-2">
    <button :aria-label="$t('resumes.saveas')" @click="saveResumesToLocal">
      <client-only>
        <span class="iconify" data-icon="ic:baseline-save-as" />
      </client-only>
      <span>{{ $t("resumes.saveas") }}</span>
    </button>
    <button
      :aria-label="$t('resumes.import')"
      @click="() => importResumesFromLocal(() => $emit('update'))"
    >
      <client-only>
        <span class="iconify" data-icon="ic:round-upload-file" />
      </client-only>
      <span>{{ $t("resumes.import") }}</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useShortcuts } from "@renovamen/vue-shortcuts";

defineEmits<{
  (e: "update"): void;
}>();

useShortcuts("shift+ctrl+s", saveResumesToLocal);
</script>

<style scoped>
.file-options button {
  @apply hstack rounded border border-dark-c hover:bg-darker-c text-sm space-x-1 px-2 py-1 sm:(text-base space-x-1.5 px-2.5 py-1.5);
}

.file-options button .iconify {
  @apply w-4 h-4 sm:(w-5 h-5);
}
</style>
