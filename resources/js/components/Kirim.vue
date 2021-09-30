<template>
  <div class="form_kirim">
    <div class="form_pernyataan">
      <vee-field type="checkbox" name="pernyataan" value="Ya" />
      <h4>
        Saya menyatakan data yang dikirim adalah data benar dan jika dikemudian
        hari terjadi masalah hukum maka saya siap mempertanggungjawabkannya
      </h4>
    </div>
    <error-message class="error text-left" name="pernyataan" />
    <p class="form_peringatan">
      Sebelum klik tombol "KIRIM" pastikan pengisian form sudah sesuai dengan
      persyaratan
    </p>
    <vee-field hidden name="g-recaptcha-response" />
    <div class="align-center">
      <button :disabled="submitLoading" type="submit" class="button">
        <i v-if="submitLoading" class="pi pi-spin pi-spinner"></i>
        <p v-else>KIRIM</p>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    submitLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
<style scoped>
.text-left {
  display: flex;
  align-items: flex-start;
}
i.pi.pi-spin.pi-spinner {
  font-size: 2rem;
}
</style>