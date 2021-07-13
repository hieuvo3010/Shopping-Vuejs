<template>
  <div>
    <div>
      <h2>Giỏ hàng</h2>
    </div>
    <div>
      <table>
        <tr>
          <th>STT</th>
          <th>Tên sản phẩm</th>
          <th>Đơn giá</th>
          <th>Tác vụ</th>
        </tr>
        <tr v-for="(product, index) in cart" :key='index'>
            <td>{{index + 1}}</td>
            <td>{{product.name}}</td>
            <td>{{product.cost | formatSign(sign)}}</td>
            <td>
                <button 
                class="btn remove"
                @click="DeleteProduct(product)"
                 >Xoá</button>
            </td>
        </tr>
        <tr v-if="cart.length == 0">
          <td colspan="4">
            <h4>Bạn chưa chọn sản phẩm nào bên trên!</h4>
          </td>
        </tr>
        <tr>
          <td colspan="4">
            <h4>Tổng tiền: {{totalPrice = cart.reduce((total, product) => {return total += product.cost;}, 0) | formatSign(sign)}}
              - ({{(Math.round(totalPrice / 24000 * 100) / 100) }} USD)
            </h4>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  props: ["cart", "sign"],
  data() {
    return {
      totalPrice: 0
    };
  },
  methods: {
    DeleteProduct(product) {
      var result = confirm("Có định xoá thật không?");
      if (!result) return;
      this.cart.splice(product, 1);
    }
  }
};
</script>
<style scoped>
</style>