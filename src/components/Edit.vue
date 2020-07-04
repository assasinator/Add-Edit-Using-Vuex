<template>
  <div>
    <div class="form-group edit-search" >
      <label for="text"> Enter the Expense to Edit:</label> 
      <div class="input-group">
        <input v-model="editval" id="text" placeholder="Expense Name" name="text" type="text" class="form-control">
        <button class="btn btn-primary" @click="onSearch" type="submit">search</button>
      </div>
    </div>
    <div v-if="message" class=" edit-search" >
      <label> Sorry Expense Not Found</label>
    </div>  
    <form v-if="editExp"  class="edit" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="text1">Name:</label> 
        <input v-model="expense.name" type="text" class="form-control">
      </div>
      <div class="form-group">
        <label for="text2">Amount:</label> 
        <input v-model="expense.amount" type="number" class="form-control">
      </div> 
      <div class="form-group">
        <label for="text2">Date:</label> 
        <input v-model="expense.date" type="date" class="form-control">
      </div> 
      <div class="form-group">
        <button name="submit" type="submit" class="btn btn-primary">Edit</button>
      </div>
    </form>
  </div>
  
    
</template>
<script>
  import { mapGetters } from "vuex";
  import { mapActions } from "vuex";
  export default {
    computed: mapGetters(["expense"]),
    data(){
      return{
        editval:"",
        editExp:false,
        message:false,
      }
    },
    methods:{
      ...mapActions(["updateExpense","findExpense"]),
      async onSubmit(){
        await this.updateExpense(this.expense);
        this.$router.push("/home");
      },
      async onSearch(){
        await this.findExpense({
          name:this.editval
        })
          if(this.expense) 
          {
            this.editExp = true
            this.message=false
          }
          else
          { 
            this.message=true 
            this.editExp = false
          }
      }
    }
  }
</script>
<style scoped>
  .edit{
      margin: auto;
      margin-top: 3em;
      max-width: 50%;
  }
  .edit-search{
      margin: auto;
      margin-top: 3em;
      max-width: 50%;
  }
</style>