<script setup lang="ts">
import IconReturn from "~/assets/icons/IconReturn.vue";
import IconPen from "~/assets/icons/IconPen.vue";
import IconHome from "~/assets/icons/IconHome.vue";
import type { navigateTo } from "nuxt/app";

const city = window.sessionStorage.getItem("city");
const district = window.sessionStorage.getItem("district");
const road = window.sessionStorage.getItem("road");
</script>

<template>
  <div>
    <HeaderBasic title="result" />
    <main>
      <div class="result-title-container">
        <h2>done</h2>
        <h2>{{ city }} {{ district }} {{ road }}</h2>
      </div>
      <div class="result-btn-container">
        <el-button
          type="button"
          class="result-btn"
          id="result-scoring-btn"
          @click="useRouter().back()"
        >
          <IconReturn />
          <span class="result-btn-description">更改評分內容</span>
        </el-button>

        <el-button
          type="button"
          class="result-btn"
          id="result-index-btn"
          @click="navigateTo('/scoring')"
        >
          <IconPen />
          <span class="result-btn-description">提交其他路段評分</span>
        </el-button>

        <el-button
          type="button"
          class="result-btn"
          id="result-home-btn"
          @click="navigateTo('/')"
        >
          <IconHome />
          <span class="result-btn-description">回首頁</span>
        </el-button>
      </div>
    </main>
  </div>
</template>
