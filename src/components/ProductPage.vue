<template>
  <div>
    <div>
      <div>
        <h2>Danh sách sản phẩm</h2>
      </div>
    </div>
    <div>
      <table>
        <tr>
          <th>STT</th>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Tác vụ</th>
        </tr>
        <tr v-for="(product, index) in products" :key='index'>
            <td>{{index + 1}}</td>
            <td>{{product.name}}</td>
            <td>{{product.cost | formatSign(sign)}}</td>
            <td>
                <button 
                class="btn add" 
                @click="cart.push(product)"
                >Mua</button>
            </td> 
        </tr>

      </table>
    </div>
  </div>  
</template>
<script>
export default {
  props:['products', "sign","cart"],
};
</script>
<style scoped>
</style>