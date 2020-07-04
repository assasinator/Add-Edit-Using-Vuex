import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    expenses: [
      {id:1,name: "Expense 0", amount: 50, date:"2020-06-25"},
      {id:2,name: "Expense 1", amount: 100, date:"2020-06-25"},
      {id:3,name: "Expense 2", amount: 150, date:"2020-06-25"},
    ],
    expense:{},
    filterExpense:[
      {id:1,name: "Expense 0", amount: 50, date:"2020-06-25"},
      {id:2,name: "Expense 1", amount: 100, date:"2020-06-25"},
      {id:3,name: "Expense 2", amount: 150, date:"2020-06-25"},
    ]
  },
  getters:{
    allExpense: state=> state.expenses,
    filterExpense: state => state.filterExpense,
    expense: state => state.expense
  },
  actions:{
    updateExpense({commit},params){
      commit("updateExpense",params);
    },
    findExpense({commit},params){
      commit("findExpense",params)
    },
    filterExpense({commit}, params){
      commit("filterExpense",params)
    }
  },
  mutations:{
    updateExpense: (state, params) => {
      state.expenses = state.expenses.filter(expense=> expense.id != params.id)
      state.expenses = [...state.expenses, params]
      state.filterExpense = state.expenses
    },
    findExpense: (state,params) => {
      state.expense = state.expenses.find(item => item.name === params.name)
    },
    filterExpense: (state,params) =>{
      state.filterExpense = dateRangeFunctions[params.value](state)
    },
  },
});

const dateRangeFunctions = {
  today: (state) => {
    const date = new Date();
    return state.expenses.filter(item => date.toDateString() === new Date(item.date).toDateString())
    
  } ,
  sevenDays: (state) => {
    const date = new Date()- (7 * 86400000);
    return state.expenses.filter(item => new Date(item.date) > date)
  },
  none: (state) => {
    return state.expenses
  },
  thirtyDays: (state)=>{
    const date = new Date()- (30 * 86400000);
    return state.expenses.filter(item => new Date(item.date) > date)
  }
}

export default store
