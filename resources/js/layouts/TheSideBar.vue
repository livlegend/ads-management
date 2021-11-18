<template>
    <nav class="sidebar vertical-scroll  ps-container ps-theme-default ps-active-y">
    <div class="logo d-flex justify-content-between">
        <a href="index-2.html"><img src="img/logo.png" alt=""></a>
        <div class="sidebar_close_icon d-lg-none">
            <i class="ti-close"></i>
        </div>
    </div>
    <ul id="sidebar_menu">
        <li class="mm-active">
          <a class="has-arrow"  href="#"  aria-expanded="false">
          <!-- <i class="fas fa-th"></i> -->
          <div class="icon_menu">
              <img src="img/menu-icon/dashboard.svg" alt="">
        </div>
            <span>Dashboard</span>
          </a>
          <ul>
            <li><router-link to="marketing">Marketing</router-link> </li>
            <li><router-link to="mail"> Mail box</router-link></li>
            <li><router-link to="home"> Menu </router-link></li>
          </ul>
        </li>
    
      </ul>
</nav>
</template>
