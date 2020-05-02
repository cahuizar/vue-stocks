<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <router-link to="/" class="navbar-brand">Vue Stocks Game</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link to="/portfolio" class="nav-item" active-class="active" tag="li">
                    <a class="nav-link">Portfolio</a>
                </router-link>
                <router-link to="/stocks" class="nav-item" active-class="active" tag="li"><a class="nav-link">Stocks</a>
                </router-link>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link">End Day</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        Save & Load
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Save Data</a>
                        <a class="dropdown-item" href="#">Load Data</a>
                    </div>
                </li>
            </ul>
            <strong class="navbar-nav">Funds: {{funds | currency}}</strong>
        </div>
    </nav>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }

        }
    }
</script>

<style scoped>
    .navbar {
        margin-bottom: 40px;
    }
</style>