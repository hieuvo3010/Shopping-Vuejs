<template>
  <div id="app">
    <div id="pro-shopping">
      <div>
          <label><input type="radio" name = "sign" checked   @click = "sign = ','"/>Dấu phẩy</label>
          <label><input type="radio" name = "sign" @click = "sign = '.'"/>Dấu chấm</label>                
      </div>
      <ProductPage id="ProductPage" :products = "products" :cart = "cart" :sign = "sign"/>
      <ShoppingCart id = "ShoppingCart" :cart = "cart" :sign = "sign"/>
    </div>    
  </div>
</template>

<script>
import ProductPage from './components/ProductPage.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  data(){
    return{
      sign: ",",
      products:[
        {name: 'Bàn phím' , cost: 300000},
        {name: 'Chuột không dây', cost: 350000},
        {name: 'Loa vi tính', cost: 500000},
        {name: 'Màn hình cong', cost: 3000000},
        {name: 'Lót chuột', cost: 20000},
        {name: 'Tản nhiệt nước', cost: 400000},
      ],
      cart:[],
    }
  },
  components: {
    ProductPage,
    ShoppingCart
  },

}
</script>

<style>
*{
  margin:0px;
  padding:0px;
  outline: none;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;  
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.btn{
  border:none;
  padding:6px 10px; 
  color:white;
  cursor: pointer;
  border-radius:3px;
}
.add{
  background-color:rgb(66, 192, 66);
}
.remove{
  background-color:rgb(245, 76, 47);
}
#pro-shopping{
  max-width:600px;
  margin:60px auto;
}
#pro-shopping > div label{
  margin-right:20px;  
  cursor: pointer;
}
#pro-shopping > div input{
  margin-right:5px;
}
#ProductPage{
  margin:20px 0px;
}
#ProductPage h2,
#ShoppingCart h2
{
  margin-bottom:15px;
}
</style>
