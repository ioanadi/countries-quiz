<template>
    <div class="home">
        <h2>Welcome to the capitals quiz!</h2>
        <CountriesCheck/>
    </div>
</template>

<script>
// @ is an alias to /src
import CountriesCheck from '@/components/CountriesCheck.vue'

export default {
    name: 'Home',
    components: {
        CountriesCheck,
    },
};
</script>
