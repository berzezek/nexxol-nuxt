<template>
  <div id="page-top">
    <SecondaryHeader :navLink="navLink"/>
    <!-- <MainHeader /> -->
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      navLink: [
        {to: '/#about', title: 'О нас'},
        {to: '#contacts', title: 'Контакты'},
        {to: '/products', title: 'Продукты'},
      ]
    }
  }
};
</script>
