<template>
    <div class="countries-card">
        <h3>Test your knowledge about the capital cities by clicking the button below and then try and guess the capital</h3>
        <div  class="question-container">
            <div v-if="Object.keys(pickedCountry).length">
                <p>Guess the capital of <strong>{{pickedCountry.name}}</strong></p>
                <input v-model.trim="answer" placeholder="your answer here">
                <div class="general-btn small" @click="checkAnswer" :class="{ 'disabled': checkDisabled }">
                    check
                </div>
                <div v-if="result" class="result">
                    <p v-if="result==='passed'" class="result-passed">	&#x2714; Congrats! Your answer is correct!</p>
                    <p v-else class="result-failed"> 	&#x2717; Better luck next time! The correct answer is <strong>{{pickedCountry.capital}}</strong></p>
                </div>
                <p class="error" v-if="error">{{error}}</p>
            </div>
            <h3 v-else>Click the button below to generate a question!</h3>
        </div>
        <div class="general-btn" @click="getRandomCountry">get random country</div>
    </div>
</template>

<script>

import getContries from '@/services/countries.js'

export default {
    name: 'CountriesCheck',
    data: function() {
        return {
            countries: [],
            pickedCountry: {},
            answer: '',
            error: '',
            result: '', // 'passed' or 'failed'
        }
    },
    computed: {
        checkDisabled: function () {
            return !this.answer || this.answer.length < 3 || !/^[a-zA-Z]+$/.test(this.answer)
        }
    },
    watch: {
        answer: function (val) {
            if (val==='') return
            if (val.length < 3) this.error = 'The answer must have more than 2 characters'
            else if (!/^[a-zA-Z]+$/.test(val)) this.error = 'The answer must contain only letters'
            else this.error = ''
        },
    },
    beforeMount() {
        getContries()
            .then((res) => {
                this.countries = res.data
            })
            .catch((err) => {
                this.error = err
            })
    },
    methods: {
        getRandomCountry() {
            this.answer = ''
            this.result = ''
            this.pickedCountry = this.countries[ Math.floor(Math.random() * this.countries.length) ]
        },
        checkAnswer() {
            let ans = this.answer.toLowerCase()
            let correctAns = this.pickedCountry.capital.toLowerCase()
            if (ans === correctAns) {
                this.result = 'passed'
            } else {
                this.result = 'failed'
            }
        },
    },
}

</script>

<style lang="scss" scoped>
.question-container {
    max-width: 500px;
    min-height: 250px;
    margin: 5rem auto 0;
    padding: 2rem 1rem;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    .result {
        .result-passed { color: rgb(67, 185, 67); }
        .result-failed { color: rgb(221, 151, 22); }
    }
}
</style>
