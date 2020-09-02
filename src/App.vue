<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 1rem;
}

.general-btn {
    margin: 1rem;
    padding: .5rem;
    align-items: center;
    border-radius: 4px;
    text-transform: uppercase;
    display: inline-flex;
    flex: 0 0 auto;
    background-color: #6200ea;
    border-color: #6200ea;
    font-weight: 500;
    justify-content: center;
    outline: 0;
    color: white;
    cursor: pointer;
    &.small {
        font-size: 13px;
    }
    &.disabled {
        pointer-events: none;
        background-color: white;
        border-color: grey;
        color: grey;
    }
}
.error {
    font-size: 13px;
    color: rgb(224, 90, 90);
}
</style>
