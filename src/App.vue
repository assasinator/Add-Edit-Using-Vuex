<template>
  <div id="app">
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/home" class="navbar-brand" >Expenses</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <router-link to="/Add" class="nav-link">Add</router-link>
        </li>
       
        <li class="nav-item">
          <router-link to="/Edit" class="nav-link">Edit</router-link>
        </li>
      </ul>
       <div class="nav-item ">
        <select @change="value => handleDropdownSelect(value.target.value)" class="custom-select custom-select-lg mb-2 btn-primary " >
            <option disabled selected>Search</option>
            <option 
              :value="item.value" 
              v-for="(item, index) in items" 
              class="dropdown-item" 
              :key="index">{{item.label}}</option>
            
        </select>
      </div>
      
    </div>
  </nav>
  <router-view/>
  </div>
</template>
<script>
import { mapActions} from "vuex";
export default {
  
  
  data(){
    return{
        items : [
          {label: "None", value: "none"},
          {label: "Today", value: "today"},
          {label: "Last 7 days", value: "sevenDays"},
          {label: "Last 30 days", value: "thirtyDays"}
        ],

    }
  },
  methods:{
    ...mapActions(["filterExpense"]),

    handleDropdownSelect(value)
    {
      this.filterExpense({
        value,
      });

    }
  }
  

}
</script>
<style>

* { box-sizing: border-box; }

nav { 
    margin-top: 1em;
    font-family: sans-serif;
    width: 100%;
    
} 
.dropdown{
  padding-left: 2em;
}

</style>
