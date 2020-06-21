var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      items: [
          {name: 'Mango', value: 1000, quantity: 10},
          {name: 'Patilla', value: 5500, quantity: 31},
          {name: 'Pera', value: 2000, quantity: 0},
          {name: 'Mandarina', value: 1400, quantity: 23},
          {name: 'Corozo', value: 1350, quantity: 5},
      ],
      newItemName: '',
      newItemValue: 0,
      newItemQuantity: 0,
      total: 0
    },
    methods: {
        agregarItem (){
            this.items.push(
                {name: this.newItemName, value: this.newItemValue, quantity: this.newItemQuantity}
            );
            this.newItemName =  '';
            this.newItemQuantity = 0;
            this.newItemValue = 0;
        }
    },
    computed: {
        sumaTotal (){
            this.total = 0;
            for(item of this.items){
                this.total += item.quantity;
            }
            return this.total;
        }
    },
  })