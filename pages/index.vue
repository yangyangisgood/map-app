<script setup lang="js">
import IconBell from "../assets/icons/IconBell.vue";
import IconRoadSign from "../assets/icons/IconRoadSign.vue";
import IconPen from "../assets/icons/IconPen.vue";
</script>

<template>
  <div>
    <HeaderBasic title="首頁" />

    <main class="main-content">
      <div class="logo-image" />

      <div class="button-container">
        <el-button
          @click="navigateTo('planning')"
          class="btn"
          id="planning-button"
        >
          <span>路線規劃 <IconRoadSign :width="36" :height="36" /></span>
        </el-button>

        <el-button
          @click="navigateTo('scoring')"
          class="btn"
          id="scoring-button"
        >
          <span>道路評分 <IconPen :width="36" :height="36" /></span>
        </el-button>
      </div>
    </main>
  </div>
</template>

<style scoped>
.notification {
  color: rgb(230, 242, 252);
  font-size: 28px;
}

.notification:hover {
  color: #cee7f6;
}

.app_name {
  font-size: 42px;
  padding-left: 28px;
  opacity: 0;
  animation: emerge-anim 1500ms 1 forwards;
}

.logo-image {
  background-image: url("../../public/image/map-logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 60vh;
  background-position: 45% 50%;
  opacity: 0;
  animation: emerge-anim 1500ms 1000ms 1 forwards;
}

@keyframes emerge-anim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.button-container {
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
}

.btn {
  box-shadow: 5px 5px 0px #252c74;
  border-radius: 32px;
  border: 3px solid #252c74;
  padding: 18px 24px;
  color: #252c74;
  font-size: 24px;
  /* opacity: 0;
  animation: btn-anim 500ms 1000ms 1 forwards; */
}

/* @keyframes btn-anim {
  0% {
    opacity: 0;
    transform: rotateY(0deg);
  }

  100% {
    opacity: 1;
    transform: rotateY(360deg);
  }
} */

h3 {
  margin: 8px 0px;
  font-size: 24px;
}

/* RWD here */
@media (max-width: 374px) {
  .btn {
    font-size: 16px;
    padding: 18px 12px;
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .title {
    font-size: 64px;
    padding-left: 14%;
  }

  .notification {
    font-size: 48px;
    margin-right: 6%;
  }

  .btn {
    font-size: 38px;
    box-shadow: 12px 12px 0px #252c74;
  }

  h3 {
    font-size: 48px;
  }
}

@media (min-width: 1200px) {
  .app-name {
    font-size: 48px;
  }

  .notification {
    font-size: 36px;
  }

  .btn {
    font-size: 36px;
    box-shadow: 8px 8px 0px #252c74;
  }

  h3 {
    font-size: 42px;
  }
}
</style>
