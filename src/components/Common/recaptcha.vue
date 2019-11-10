<template>
  <div 
  id="g-recaptcha"
  class="g-recaptcha"
  :data-sitekey="sitekey">
  </div>
</template>

<script>
export default {
  data () {
    return {
      sitekey: '6Les9MEUAAAAADSG4PHE0ZUdD0H_k0g6kWBMXmOq',
      widgetId: 0,
      recaptchaElement : null,
    }
  },
  created()
  {
      let my_script  = document.createElement("script");
      let att = document.createAttribute("src");       // Create a "class" attribute
            att.value = "https://www.google.com/recaptcha/api.js?render=explicit";
        my_script.setAttributeNode(att);  
         att = document.createAttribute("async");       // Create a "class" attribute
        my_script.setAttributeNode(att);  
         att = document.createAttribute("defer");       // Create a "class" attribute
        my_script.setAttributeNode(att);                          // Add the class attribute to <h1>

    
      (document.head.append(my_script));
  },
  methods: {
    execute () {
     window.grecaptcha.execute(this.widgetId)
    },
    reset () {
     window.grecaptcha.reset(this.widgetId)
    },
    render () {
         var self = this;
        setTimeout(function() {
            if(typeof window.grecaptcha === 'undefined') {
                self.render();
            }
            else {
                if(typeof window.grecaptcha.render === 'undefined')
                {
                    self.render();
                }
                else
                {
                    window.grecaptcha.render('g-recaptcha', {
                        sitekey: self.sitekey,
                        size: 'invisible',
                        badge: 'inline',
                        callback: (response) => {
                            // emit an event called verify with the response as payload
                            self.$emit('verify', response)
                            // reset the recaptcha widget so you can execute it again
                            self.reset() 
                        }
                    });
                }
                // window.grecaptcha.render('g-recaptcha');
            }
        }, 100);
    },

  },
  mounted () {
    // render the recaptcha widget when the component is mounted
        this.render()
  }
}
</script>