<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">Test</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <!-- Add "active" class when you're on that page" -->
          <a class="nav-link active" href="">Home</a>
        </li>
        <li class="nav-item"></li>
        <li class="nav-item">
          <router-link class="nav-link" to="/:username">
            Profile
          </router-link>
          <!-- <a class="nav-link" href="">
            <i class="ion-compose"></i>&nbsp;Test
          </a> -->
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/settings">
            Settings
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">
            Sign up
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
