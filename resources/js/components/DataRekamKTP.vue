<template>
  <div class="form_baris mb">
    <label for="">NAMA IBU</label>
    <vee-field type="text" name="ibu" />
    <error-message name="ibu" class="error" />
  </div>
  <div class="form_baris">
    <label for="">NAMA AYAH</label>
    <vee-field type="text" name="ayah" />
    <error-message name="ayah" class="error" />
  </div>
</template>
<style scoped>
.mb {
  margin-bottom: 2rem;
}
</style>