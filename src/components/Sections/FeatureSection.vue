<template>
    <div>
        <div id="feature">
          <div>
              <div class="feature-list">
                  <b-container class="pt-5 pb-5">
                      <b-row class="mb-5">
                          <b-col>
                              <div class="heading text-center">
                                  <h2 class="text-uppercase">Features</h2>
                              </div>
                          </b-col>
                      </b-row>
                      <b-row class="mb-5 feature-item-holder">
                          <b-col>
                              <div class="feature-item button"><a href='#' @click.prevent="changeSection('btn1')">Feature 1</a></div>
                          </b-col>
                          <b-col>
                                <div class="feature-item button"><a href='#' @click.prevent="changeSection('btn2')">Feature 2</a></div>
                          </b-col>
                          <b-col>
                                <div class="feature-item button"><a href='#' @click.prevent="changeSection('btn3')">Feature 3</a></div>
                          </b-col>
                          <b-col>
                                <div class="feature-item button"><a href='#' @click.prevent="changeSection('btn4')">Feature 4</a></div>
                          </b-col>
                          <b-col>
                                <div class="feature-item button"><a href='#' @click.prevent="changeSection('btn5')">Feature 5</a></div>
                          </b-col>
                      </b-row>
                      <b-row>
                          <b-col>
                             <div class="text-center" v-if="buttonSections.section1">
                                <div class="feature-text">Text 1</div>
                                <div class="feature-img">Img</div>
                             </div>
                             <div class="text-center" v-if="buttonSections.section2">
                                <div class="feature-text">Text 2</div>
                                <div class="feature-img">Img</div>
                             </div>
                             <div class="text-center" v-if="buttonSections.section3">
                                <div class="feature-text">Text 3</div>
                                <div class="feature-img">Img</div>
                             </div>
                             <div class="text-center" v-if="buttonSections.section4">
                                <div class="feature-text">Text 4</div>
                                <div class="feature-img">Img</div>
                             </div>
                             <div class="text-center" v-if="buttonSections.section5">
                                <div class="feature-text">Text 5</div>
                                <div class="feature-img">Img</div>
                             </div>
                          </b-col>
                      </b-row>
                  </b-container>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data()
        {
            return {
                buttonSections : {
                    section1 : true,
                    section2 : false,
                    section3 : false,
                    section4 : false,
                    section5 : false,
                }
            }
        },

        methods:
        {
            changeSection(btn)
            {
                for (let btn_sec in this.buttonSections) {
                    this.buttonSections[btn_sec] = false;
                }
                
                switch(btn)
                {
                    case 'btn1':
                        this.buttonSections.section1 = true;
                        break;
                    case 'btn2':
                        this.buttonSections.section2 = true;
                        break;
                    case 'btn3':
                        this.buttonSections.section3 = true;
                        break;
                    case 'btn4':
                        this.buttonSections.section4 = true;
                        break;
                    case 'btn5':
                        this.buttonSections.section5 = true;
                        break;
                }
            }
        }
    }
</script>

<style scoped>
#feature > div
{
    background: #6E95CC;
}

#feature .feature-list .heading h2
{
    font-family: 'Leckerli One', cursive;
    letter-spacing: 0.2rem;

 }

#feature .feature-item-holder div:nth-of-type(even) div
{
    display: inline-block !important;
    transform: rotate(-2deg);
    transition: all 0.2s ease-in-out;
}

#feature .feature-item-holder div:nth-of-type(even) div:hover
{
    transform: rotate(0deg);
}

.button
{
    margin: auto;
    cursor: pointer;
    transform: rotate(2deg);
    transition: all 0.3s ease-in;
    display: inline-block;
}
.button a
{
    font-family: 'Shadows Into Light', cursive;
    text-decoration: none;
    background-color: #4D5E62;
    color:#c0c4d4;
    padding:0.3rem 1.7rem;
    font-size:1rem;
    transition: all 0.2s ease-out;
}

.button:hover
{
    transform: rotate(0deg);
}
.button:hover a
{
    font-size: 1.3rem; 
}
</style>