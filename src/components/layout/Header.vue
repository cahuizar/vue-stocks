<template>
	<nav class="navbar navbar-expand-lg navbar-light">
		<router-link to="/" class="navbar-brand">Vue Stocks Game</router-link>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
			@click="isBurgerIconOpen = !isBurgerIconOpen"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div
			class="collapse navbar-collapse"
			:class="{ show: isBurgerIconOpen }"
			id="navbarSupportedContent"
		>
			<ul class="navbar-nav mr-auto">
				<router-link
					to="/portfolio"
					class="nav-item"
					active-class="active"
					tag="li"
				>
					<a class="nav-link">Portfolio</a>
				</router-link>
				<router-link
					to="/stocks"
					class="nav-item"
					active-class="active"
					tag="li"
					><a class="nav-link">Stocks</a>
				</router-link>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item">
					<a class="nav-link" @click="endDay">End Day</a>
				</li>
				<li
					class="nav-item dropdown"
					:class="{ show: isDropdownOpen }"
					@click="isDropdownOpen = !isDropdownOpen"
				>
					<a
						class="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Save & Load
					</a>
					<div
						class="dropdown-menu"
						aria-labelledby="navbarDropdownMenuLink"
						:class="{ show: isDropdownOpen }"
					>
						<div class="dropdown-item" @click="saveData">
							Save Data
						</div>
						<div class="dropdown-item" @click="loadData">
							Load Data
						</div>
					</div>
				</li>
			</ul>
			<strong class="navbar-nav">Funds: {{ funds | currency }}</strong>
		</div>
	</nav>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		data() {
			return {
				isDropdownOpen: false,
				isBurgerIconOpen: false,
			};
		},
		computed: {
			funds() {
				return this.$store.getters.funds;
			},
		},
		methods: {
			...mapActions({
				randomizeStocks: 'randomizeStocks',
				fetchData: 'loadData',
			}),
			endDay() {
				this.randomizeStocks();
			},
			saveData() {
				const data = {
					funds: this.$store.getters.funds,
					stockPortfolio: this.$store.getters.stockPortfolio,
					stocks: this.$store.getters.stocks,
				};
				this.$http.put('data.json', data);
			},
			loadData() {
				this.fetchData();
			},
		},
	};
</script>

<style scoped>
	.navbar {
		margin-bottom: 40px;
	}
	div.dropdown-item {
		cursor: pointer;
		color: rgba(0, 0, 0, 0.5);
	}
</style>
