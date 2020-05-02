<template>
    <div class="col-sm-6 col-md-4">
        <div class="card text-white bg-success mb-4">
            <div class="card-header">
                {{stock.name}}
                <small>(Price: {{stock.price | currency}})</small>
            </div>
            <div class="card-body">
                <div class="float-left">
                    <input type="number" class="form-control" :class="{danger: insufficientFunds}" placeholder="Quantity" v-model="quantity">
                </div>
                <div class="float-right">
                    <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(+quantity)">
                        {{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            },
            insufficientFunds() {
                return this.quantity * this.stock.price > this.funds;
            }
        },
        methods: {
            buyStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock', order)
                this.quantity = 0;
            }
        }
    }
</script>

<style>
    .card-body {
        display: flex;
        justify-content: space-between;
    }
    .danger {
        border: 2px solid red;
    }
</style>