<template>
    <div class="all-bg">
        <div class="">
            <PartialsTopMenu />
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
 }

@media screen and (max-width : 768px) {
   
    .top-down{
        padding-top: 7rem;
    }
   
}
 </style>