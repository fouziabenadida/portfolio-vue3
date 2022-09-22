import { createStore } from 'vuex'

export default createStore({
  state: {
    Projects:[
      {
        id: 1, name: "Real estate", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80",link:"https://github.com/fouziabenadida/real-estate-project"
      },
      {
        id: 2, name: "e-commerce App", img: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80", link:"https://github.com/fouziabenadida/simple-e-commerce-app"
      },
      {
        id: 3, name: "food-delivery App", img: "https://images.unsplash.com/photo-1600728619239-d2a73f7aa541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", link:"https://github.com/fouziabenadida/food-delivery-vuejs"
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
