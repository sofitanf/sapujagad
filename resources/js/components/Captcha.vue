<template>
  <div>
    <VueRecaptcha
      :sitekey="sitekey"
      :loadRecaptchaScript="true"
      ref="recaptcha"
      @verify="onCaptchaVerified"
      @expired="resetCaptcha"
    />
  </div>
</template>
<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
  computed: {
    sitekey() {
      return process.env.MIX_SITEKEY;
    },
  },
  methods: {
    onCaptchaVerified(token) {
      // // Prepare form data
      // const formData = new FormData(this.$refs.contactform);
      // // Appended token in formData
      // formData.append('recaptcha-token', token);
      // // Make an ajax request to your Laravel endpoint.
      // axios.post('/your-form-endpoint', formData).then(
      //   (response) => {
      //     // handle response
      //   },
      //   (error) => {
      //     // handle errors
      //   }
      // );
    },
    resetCaptcha() {
      this.$refs.recaptcha.reset();
    },
  },
};
</script>