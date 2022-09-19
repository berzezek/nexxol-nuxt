<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container px-4 px-lg-5">
      <NuxtLink :to="('/#page-top')" ><a class="navbar-brand" ><img src="@/static/assets/img/logo.png" alt="NEXXOL" width="150px"/></a></NuxtLink>
      <!-- <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Меню
        <i class="fas fa-bars"></i>
      </button> -->
      <!-- <div class="collapse navbar-collapse" id="navbarResponsive"> -->
      <div class="" id="navbarResponsive">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <NuxtLink :to="('/#about')"><a class="nav-link nav-link" href="#about">О нас</a></NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="('/products')"><a class="nav-link">Продукты</a></NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :to="('/#contacts')"><a class="nav-link" href="#signup">Контакты</a></NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
  /* .nav-link {
    text-decoration: none !important;
  } */
</style>