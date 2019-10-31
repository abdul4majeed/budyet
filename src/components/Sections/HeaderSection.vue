<template>
    <div id="header-holder">
        <div id="nav-bar">
            <div>
                
                <b-navbar toggleable="sm" class="my-nav" variant="faded" type="light" fixed="top">
                    <b-navbar-brand href="#"><img src="#" alt="Logo Image"></b-navbar-brand>

                    <b-navbar-toggle tmarget="nav-collapse"></b-navbar-toggle>

                    <b-collapse id="nav-collapse" is-nav>
                        <b-navbar-nav class="m-auto main-nav">
                            <b-nav-item href="#">Home</b-nav-item>
                            <b-nav-item href="#">Feature</b-nav-item>
                            <b-nav-item href="#">Price</b-nav-item>
                            <b-nav-item href="#">Testimonials</b-nav-item>
                            <b-nav-item href="#">Contact Us</b-nav-item>
                        </b-navbar-nav>

                        <!-- Right aligned nav items -->
                        <b-navbar-nav class="ml-auto">
                            <b-navbar-nav>
                                <b-nav-item href="#"><span>Get Started</span></b-nav-item>
                            </b-navbar-nav>
                        </b-navbar-nav>
                    </b-collapse>
                </b-navbar>
            </div>
        </div>
        <div id="header">
            <div class="hero">
                <div class="hero-text">
                   <div class="hero-text-holder text-center mt-md-4">
                       <div class="left-arrow"> &lt; </div>
                        <div class="first-heading">
                                <h1>Track Your Spending</h1>
                        </div>
                        <div class="second-heading text-center mt-4">
                            <p>a budget is telling your money where to go instead of wondering where it went</p>
                        </div>
                        <div class="button mt-5">
                            <a href="#">Button</a>
                        </div>
                        <div class="right-arrow"> &gt; </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },

    }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Finger+Paint|Leckerli+One|Shadows+Into+Light&display=swap');
*{
    box-sizing: border-box;
}

.hero
{
      background: url('../../assets/images/header/slide4.jpg') no-repeat;
    height : 750px;
    background-size: cover;
    background-position: 0px -109px;
    background-attachment: fixed;
}
.hero-text-holder
{
    max-width: 60%;
}
.hero-text{
        margin: auto;
        padding-top: 12%;
}
.first-heading h1
{
    font-family: 'Leckerli One', cursive;
    font-size: 3em;
   text-transform: uppercase;

}

.second-heading p
{
   text-transform: capitalize;
    font-family: 'Finger Paint', cursive;
    width: 65%;
    margin: auto;
}

.button
{
    width: 85px;
    margin: auto;
    cursor: pointer;
    transform: rotate(2deg);
    transition: all 0.3s ease-in;
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

.right-arrow , .left-arrow
{
    position: absolute;
    top:50%;
    background-color: #1d2223;
    padding:10px 20px;
    opacity: 0.5;
    transition: all 0.2s ease-in;
    transform: rotate(2deg);
    color:#c0c4d4;
}

.left-arrow
{
    left:30px;
    transform: rotate(-2deg);
}
.right-arrow{
    right:30px;
}

.left-arrow:hover, .right-arrow:hover
{
    cursor: pointer;
    opacity: 1;
    transform: rotate(0deg);
    padding: 15px 25px;
    font-size: 1rem;
}
.my-nav
{
    padding:0px 7rem;
    top: 20px;
}

.my-nav .nav-link
{
    margin : 0px 0.5rem;
    color:#c0c4d4 !important;
    font-family: 'Shadows Into Light', cursive;
    font-size: 1.4rem;
}

.my-nav ul li:nth-child(even) a
{
    transform: rotate(5deg);
    transition: all 0.2s ease-in;
    padding:0px 8px;
}

.my-nav ul li:nth-child(odd) a
{
    transform: rotate(-5deg);
    transition: all 0.2s ease-in-out;
    padding:0px 8px;
}

.my-nav ul.main-nav li a:hover
{
    color:#a2d6e4 !important;
    border-bottom: 2px solid #a2d6e4;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3);
}

.my-nav ul li a:hover
{
    transform: rotate(0deg);
}

.my-nav .ml-auto ul li a span
{
    color :red;
    font-weight: bolder;
}
</style>