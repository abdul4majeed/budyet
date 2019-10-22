<template>
    <div>
        <div id="header">
        
        <b-container fluid>
            <transition name="fade">
            <b-row v-if="firstHeader">
              
                <b-col>
                    <div class="back-img">
                         <div class="content">
                        Text 1
                    </div>
                    </div>
                </b-col>
            </b-row>
            </transition>
            <transition  name="fade">
            <b-row v-if="secondHeader">
                <b-col>
                    <div class="back-img2">
                         <div class="content">
                        Text 2
                    </div>
                    </div>
                </b-col>
            </b-row>
            </transition>
            <transition name="fade">
            <b-row v-if="thirdHeader">
                <b-col>
                    <div class="back-img3">
                        <div class="content">
                        Text 3
                            </div>
                    </div>
                </b-col>
            </b-row>
            </transition>
            <transition name="fade">
            <b-row v-if="fourthHeader">
                <b-col>
                    <div class="back-img4">
                        <div class="content">
                        Text 4
                        </div>
                    </div>
                </b-col>
            </b-row>
            </transition>
        </b-container>
        
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                headerSwapTimer : 0,
                seconds: 8,
                firstHeader:true,
                secondHeader:false,
                thirdHeader:false,
                fourthHeader:false,
            }
        },

        created()
        {
            setInterval(() => {
                this.headerSwapTimer++;
            }, 500);
        },

        watch:{
            headerSwapTimer(value)
            {
                if(value>=this.seconds)
                {
                    this.firstHeader = false;
                    this.secondHeader = true;
                }

                 if(value>=(this.seconds*2))
                {
                    this.secondHeader = false;
                    this.thirdHeader = true;
                }

                 if(value>=(this.seconds*3))
                {
                    this.thirdHeader = false;
                    this.fourthHeader = true;
                }

                 if(value>=(this.seconds*4))
                {
                    this.fourthHeader = false;
                    this.firstHeader = true;
                    this.headerSwapTimer = 0;
                }
            }
        }
    }
</script>

<style scoped>

#header .back-img{
    background-image: url('../../assets/images/header/header1.jpg');
    width: 100%;
    height: 750px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
#header .back-img2{
    background-image: url('../../assets/images/header/header2.jpg');
    width: 100%;
    height: 750px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
}
#header .back-img3{
    background-image: url('../../assets/images/header/header3.jpg');
    width: 100%;
    height: 750px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
}
#header .back-img4{
    background-image: url('../../assets/images/header/header4.jpg');
    width: 100%;
    height: 750px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left;
}

.fade-enter-active {
  transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(100px);
  opacity: 0;
}



</style>