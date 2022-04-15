Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: "Овощи" },
      { id: 2, text:"Test" },
      { id: 3, text:"Test" }
    ]
  }
})
