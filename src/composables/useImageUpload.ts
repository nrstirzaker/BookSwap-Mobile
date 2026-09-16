import { ref } from 'vue';

export function useImageUpload() {
  const fileInput = ref<HTMLInputElement | null>(null);
  const coverPreview = ref<string | null>(null);
  const coverFile = ref<File | null>(null);

  function triggerFilePicker() {
    fileInput.value?.click();
  }

  function setCover(file: File) {
    if (coverPreview.value) {
      URL.revokeObjectURL(coverPreview.value);
    }
    coverFile.value = file;
    coverPreview.value = URL.createObjectURL(file);
  }

  function handleFileSelect(e: Event) {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) setCover(file);
  }

  function removeCover() {
    if (coverPreview.value) {
      URL.revokeObjectURL(coverPreview.value);
    }
    coverFile.value = null;
    coverPreview.value = null;
    if (fileInput.value) {
      fileInput.value.value = '';
    }
  }

  return {
    fileInput,
    coverPreview,
    coverFile,
    triggerFilePicker,
    handleFileSelect,
    removeCover,
  };
}
