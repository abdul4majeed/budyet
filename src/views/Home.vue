<template>
  <div class="home">
    
    <base-layout>
      <template slot="header">
        <header-section ref="header"></header-section>
      </template>
      <template slot="feature">
        <feature-section></feature-section>
      </template>
      <template slot="membership">
        <membership-section></membership-section>
      </template>
      <template slot="testimonials">
        <contact-us-section></contact-us-section>
      </template>
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
import ContactUsSection from '@/components/Sections/ContactUsSection.vue'
import FooterSection from '@/components/Sections/FooterSection.vue'
export default {
  name: 'home',
  components: {
    'base-layout':BaseLayout,
    'header-section':HeaderSection,
    'feature-section': FeatureSection,
    'membership-section' : MembershipSection,
    'contact-us-section' : ContactUsSection,
    'footer-section' : FooterSection,
  },

    data()
    {
      return {
        scroll_height : 600,
      }
    },
  // Remove the Navbar when screen scroll above 600 pixels and
  // reappear when less then 600 pixels
   mounted() 
        {
            window.addEventListener("scroll", this.onScroll)
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.onScroll)
        },
        methods: {
            onScroll() {
              console.log(window.top.scrollY);
              if( window.top.scrollY == 0 )
              {
                this.$refs.header.$refs.navbar.style.padding = "0 7rem";
                this.$refs.header.$refs.navbar.style.backgroundColor = "rgba(255,255,255,0)";
                this.$refs.header.$refs.navbar.style.top="20px";
              }
              else if(window.top.scrollY > 10 && window.top.scrollY < (this.scroll_height - 1))
              {
                this.$refs.header.$refs.navbar.style.backgroundColor = "rgba(255,255,255,0.3)";
                this.$refs.header.$refs.navbar.style.padding = "1rem 7rem";
                this.$refs.header.$refs.navbar.style.top="0px";
              }
              else if(window.top.scrollY >= this.scroll_height)
              {
                  this.$refs.header.$refs.navbar.classList.add('d-none');
              }
              if(window.top.scrollY < this.scroll_height)
              {
                  this.$refs.header.$refs.navbar.classList.remove('d-none');
              }
            }
        }
}
</script>
