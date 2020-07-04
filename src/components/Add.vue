<template>
     <div>
    <form class="add" @submit="onSubmit">
      <div class="form-group">
        <label for="text"> <h5>Add Expenses:</h5></label> 
      </div>
      <div class="form-group" >
        <label for="text1">Name:</label> 
        <input v-model="name" placeholder="Expense Name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="text2">Amount:</label> 
        <input v-model="amount" placeholder="Enter The Amount" type="number" class="form-control">
      </div> 
      <div class="form-group">
        <label for="text2">Date:</label> 
        <input v-model="date" placeholder="Enter the Date" type="date" class="form-control">
      </div> 
      <div class="form-group">
        <button type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions,mapGetters } from "vuex";
export default 
{
  computed: mapGetters(["allExpense"]),
  data(){
    return{
      id:0,
      name:"",
      amount:0,
      date:""
     };
   },
   methods:{
   ...mapActions(["updateExpense"]),
   
   async onSubmit(){

    await this.updateExpense({
       id:this.allExpense.length+1,
       name: this.name,
       amount: this.amount,
       date: this.date
     });
     this.$router.push("/home")
    }
  }
  

    
}
</script>

<style scoped>

  .add{
  margin: auto;
  margin-top: 3em;
  max-width: 50%;
    
}
</style>