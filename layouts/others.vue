<template>
    <div class="all-bg">
        <div class="desktop-view">
            <PartialsTopMenu />
        </div>
        <div class="mobile-view">
            <!-- <PartialsTopTubeMobile /> -->
        </div>
        <div class="top-down ">
             <slot />
        </div>
        <div>
            <PartialsFooter />
        </div>
    </div>
</template>
 <script setup>

 </script>
 <style scoped>
 .top-down{
     padding-top: 8rem ;
     /* margin: 0 25px; */
     /* margin:  0 .3rem; */
 }
 .desktop-view{
    /* display: none; */
}
.mobile-view{
    display: none;
}
@media screen and (max-width : 578px) {
    .desktop-view{
        /* display: none; */
    }
    .mobile-view{
        /* display: block; */
    }

    .top-down{
        /* padding-top: 2rem !important; */
    }
}
@media screen and (max-width : 768px) {
    .desktop-view{
        display: block;
    }
    .mobile-view{
        /* display: block; */
    }
    .top-down{
        /* padding-top: 5rem; */
    }
   
}
 </style>