<template>
  <div class="home">
      <div class="container row">
        <div v-for="(expense,index) in filterExpense" :key="index" class="card cardSpacing col-4" style="width: 18rem;">
            <div class="card-body ">
              <h5 class="card-title">Name: {{expense.name}}</h5>
              <h5 class="card-title">Amount: {{expense.amount}}</h5>
              <h5 class="card-title">Date: {{expense.date}}</h5>
            </div>
        </div>
      </div>
      <footer class="card footer" >
        <h4 style="margin: 1em;">Total: {{totalValue}}</h4>
      </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed:{ 
    ...mapGetters(["filterExpense"]),
    totalValue(){
      return this.filterExpense.map(item => item.amount).reduce((a,b) => Number(a) + Number(b),0)
    }
  }
}
</script>

<style scoped>
 
  .container{
  margin: 1em;
  overflow:scroll;
  width: 100%;
  height: 450px;
}

.cardSpacing{
  margin-left: 1em;
  margin-top: 1em;
  max-height: 40%;
  max-width: 23%;
} 

.home{
  display: flex;
  flex-direction: column;
  height: calc(100vh-2em);
  justify-content: space-between;
}
.footer{
  position: relative;
  bottom: 0;
  width: 100%;
  height: 80px;
  line-height: 60px;
  justify-items: flex-end;
}

</style>
