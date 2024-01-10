<template>
    <div class="col-md-3 mb-3">
      <div class="card">
        <img :src="product.image" class="card-img-top" alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="card-text font-weight-bold">{{ product.price }}</p>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>
