var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      items: [
          {name: 'Mango', value: 1000, quantity: 10},
          {name: 'Patilla', value: 5500, quantity: 10},
          {name: 'Pera', value: 2000, quantity: 0},
          {name: 'Mandarina', value: 1400, quantity: 10},
          {name: 'Corozo', value: 1350, quantity: 10},
      ],
      newItemName: '',
      newItemValue: 0,
      newItemQuantity: 0
    },
    methods: {
        agregarItem (){
            this.items.push(
                {name: this.newItemName, value: this.newItemValue, quantity: this.newItemQuantity}
            )
        }
    },
  })