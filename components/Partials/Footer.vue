<template>
    <footer class="footer-section">
      <div class="container-all-n">
        <div class="row footer-space">
            <div class="col-lg-6 col-sm-12 col-md-6 mt-3">
                <img src="/images/svg/logo-f.svg" class="img-fluid" alt="" srcset="" />
                <p>Your Personal Event Sherpa: Curating <br> Awesome, One Click at a Time.</p>
            </div>
            <div class="col-lg-6 col-sm-12 col-md-6">
                <div class="row">
                    <div class="col-6 col-lg-3 col-md-6 mb-4">
                        <div class="footer-title">Features</div>
                        <ul>
                            <li><NuxtLink to="#">Events discovery</NuxtLink></li>
                            <li><NuxtLink to="#">Ticketing</NuxtLink></li>                            
                        </ul>
                    </div>  
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="footer-title">Company</div>
                        <ul>
                            <li>
                                <NuxtLink to="#">
                                    About us
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">FAQs</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Careers</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Support</NuxtLink>
                            </li>
                        </ul> 
                    </div>  
                    <div class="col-12 col-lg-5 col-md-6">
                        <div class="footer-title">Contact us</div>
                        <ul>
                            <li>
                                <a href="mailto:info@events.com">info@events.com</a>
                            </li>
                            <li>
                               <a href="tel:+234 701 345 6789">+234 701 345 6789</a>
                            </li>
                            <li>
                                Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos
                            </li>
                           
                        </ul> 
                    </div>  
                    
                </div> 
            </div>
        </div>
      </div>
    </footer>
</template>

<script setup>
    const currentYear = new Date().getFullYear();
    const route = useRoute()
    const checkUrl  = computed(() => {
        return route.fullPath
    })
</script>

<style lang="scss" scoped>

</style>