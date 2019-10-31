<template>
  <div class="home">
    
    <base-layout>
      <template slot="header">
        <header-section></header-section>
      </template>
      <template slot="feature">
        <feature-section></feature-section>
      </template>
      <template slot="membership">
        <membership-section></membership-section>
      </template>
      <!-- <template slot="testimonials">
        <testimonials-section></testimonials-section>
      </template> -->
      <template slot="footer">
        <footer-section></footer-section>
      </template>
    </base-layout>
    
  </div>
</template>

<script>
// @ is an alias to /src
import BaseLayout from '@/components/BaseLayout.vue'
import HeaderSection from '@/components/Sections/HeaderSection.vue'
import FeatureSection from '@/components/Sections/FeatureSection.vue'
import MembershipSection from '@/components/Sections/MembershipSection.vue'
// import TestimonialsSection from '@/components/Sections/TestimonialsSection.vue'
import FooterSection from '@/components/Sections/FooterSection.vue'
export default {
  name: 'home',
  components: {
    'base-layout':BaseLayout,
    'header-section':HeaderSection,
    'feature-section': FeatureSection,
    'membership-section' : MembershipSection,
    // 'testimonials-section' : TestimonialsSection,
    'footer-section' : FooterSection,
  }
}
</script>
