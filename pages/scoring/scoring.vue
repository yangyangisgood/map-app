<script setup lang="ts">
import { navigateTo } from "nuxt/app";
import { reactive } from "vue";
import { scoreIndex } from "~/utils/constants";

const formData = reactive<Record<string, number>>({
  flat: 0,
  smooth: 0,
  wide: 0,
  lighting: 0,
  looks: 0,
  plant: 0,
});

const city = window.sessionStorage.getItem("city");
const district = window.sessionStorage.getItem("district");
const road = window.sessionStorage.getItem("road");

async function submitData() {
  const data = {
    city: city,
    district: district,
    road: road,
    ...formData,
  };
  try {
    const res = await $fetch(
      "https://script.google.com/macros/s/AKfycbzsEfXfVA6at8CKBnV3OAX7lhBPg7nCAbfCohwWGoH6UM81jV6LEscWHIQedhsZcF5bVg/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    if (res === "Success") {
      console.log("Data submitted successfully:", data);
    }
  } catch (error) {
    console.error("Error submitting data:", error);
    navigateTo("/scoring/result");
  }
}
</script>

<template>
  <div>
    <HeaderBasic title="scoring" />

    <main>
      <div class="address">
        <h1>{{ city }} {{ district }} {{ road }}</h1>
      </div>
      <el-form class="range-section">
        <el-form-item
          v-for="index in scoreIndex"
          :label="index.Header"
          :key="index.DataIndex"
        >
          <el-rate
            v-model="formData[index.DataIndex]"
            :max="5"
            :disabled="false"
          />
        </el-form-item>
      </el-form>

      <div class="submit-btn-container">
        <el-button class="btn" id="submit-btn" @click="submitData">
          提交
        </el-button>
      </div>
    </main>
  </div>
</template>
