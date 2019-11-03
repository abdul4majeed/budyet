<template>
    <div>
        <div id="membership">
            <div class="membership-img">
                <b-container>
                    <b-row>
                        <b-col>
                            <div class="membership-header text-center mt-5 mb-5">
                                <h2>Membership</h2>
                            </div>
                        </b-col>
                    </b-row>
                </b-container>
                <b-container>
                    <b-row class="text-center">
                            <b-col>
                                <div class="membership-card mt-5">
                                    <div class="header mb-4 mt-4">
                                        <h5>Beginner</h5>
                                    </div>
                                    <div class="price mb-5">
                                        <span>$0.00/MO</span>
                                    </div>
                                    <div class="features-list mb-5">
                                        <ul class="feature-ul text-left">
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Support</li>
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Five Categories</li>
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Transactions Table</li>
                                        </ul>
                                    </div>
                                    <div class="button mb-5">
                                        <a href="#">Get Started</a>
                                    </div>
                                </div>
                            </b-col>
                            
                            <b-col>
                                <div class="membership-card mt-5">
                                    <div class="header mb-4 mt-4">
                                        <h5>Intermediate</h5>
                                    </div>
                                    <div class="price mb-5">
                                        <span>$1.00/MO</span>
                                    </div>
                                    <div class="features-list mb-5">
                                        <ul class="feature-ul text-left">
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Support</li>
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Five Categories</li>
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Transactions Table</li>
                                        </ul>
                                    </div>
                                    <div class="button mb-5">
                                        <a href="#">Get Started</a>
                                    </div>
                                </div>
                            </b-col>
                            
                            <b-col>
                                <div class="membership-card mt-5">
                                    <div class="header mb-4 mt-4">
                                        <h5>Master</h5>
                                    </div>
                                    <div class="price mb-5">
                                        <span>$2.00/MO</span>
                                    </div>
                                    <div class="features-list mb-5">
                                        <ul class="feature-ul text-left">
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Support</li>
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Five Categories</li>
                                            <li><font-awesome-icon icon="check" color="rgba(255,255,255,0.5)" class="mr-1" />Transactions Table</li>
                                        </ul>
                                    </div>
                                    <div class="button mb-5">
                                        <a href="#">Get Started</a>
                                    </div>
                                </div>
                            </b-col>
                    </b-row>
                </b-container>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style scoped>
.membership-img
{
    background: url('../../assets/images/header/membership.jpg') no-repeat;
    height : 600px;
    background-size: cover;
    background-position: 0px -109px;
}
.membership-card
{
    background-color: rgba(0,0,0,0.3);
    padding:1rem 0;
}

.membership-card .header h5
{
    font-family: 'Shadows Into Light', cursive;
    font-weight: bolder;
    font-size : 2em;
}

.membership-card .price span
{
    background-color: rgba(0,0,0,0.3);
    color:rgba(255,255,255,0.5);
    padding : 0.5rem 1rem;
}

.membership-card .features-list
{
    max-width: 250px;
    margin: auto;
    padding-left: 1.9rem;
}
.membership-card .feature-ul
{
    list-style: none;
}

.membership-card .feature-ul li
{
    color : #c0c4d4;
}

.button
{
    margin: auto;
    cursor: pointer;
    transform: rotate(2deg);
    transition: all 0.3s ease-in;
    display:inline-block;
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