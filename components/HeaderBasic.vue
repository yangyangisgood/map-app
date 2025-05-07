<script setup lang="js">
import IconReturn from "~/assets/icons/IconReturn.vue";

const props = defineProps({ title: String });

// useRoute() 取得目前路由，並判斷是否在首頁
// 不在首頁時，顯示返回按鈕
const isHome = computed(() => {
  return useRoute().path === "/" ;
});
</script>

<template>
  <header>
    <nav>
      <a v-if="!isHome" class="return-btn" @click="useRouter().back()">
        <IconReturn />
      </a>
      <div class="title">{{ props.title }}</div>
      <slot name="actions"></slot>
    </nav>
  </header>
</template>

<style scoped>
.return-btn {
  cursor: pointer;
  font-size: 28px;
  color: #252c74;
}
</style>
