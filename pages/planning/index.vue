<script setup lang="js">
import IconArrowDown from "../assets/icons/IconArrowDown.vue";
import { scoreIndex } from "~/utils/constants";

const destination = ref();
const selectedPlace = ref({
  name: "",
  placeId: "",
  lat: null,
  lng: null,
});

// 點選篩選功能尚未實作提示
function handleFilterClick() {
  alert("目前尚未累積足夠資料，故無法提供路段指標篩選服務。");
}
function handlePlace(place) {
  console.log( place)
}
</script>

<template>
  <div>
    <HeaderBasic title="路線規劃">
      <template #actions>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            條件設定
            <IconArrowDown />
          </span>
          <template #dropdown>
            <el-dropdown-menu @click="handleFilterClick()">
              <el-dropdown-item v-for="road in scoreIndex" :key="road.code">
                {{ road.name }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </HeaderBasic>

    <main>
      <MapBasic
        input-id="road-input"
        placeholder="請輸入地點"
        mode="plan"
        @placeSelected="handlePlace"
      />
    </main>
  </div>
</template>

<style scoped>
#previous-page-btn {
  font-size: 28px;
  color: #252c74;
}

#dropdownMenuLink {
  background-color: #cee7f6;
  box-shadow: 5px 5px 0px #252c74;
  border-radius: 12px;
  border: 2px solid #252c74;
  padding: 4px 16px;
  color: #252c74;
  font-size: 16px;
}

.road-input {
  border-radius: 6px;
  border: 1px solid #252c74;
  margin-left: 5%;
  width: 90%;
  height: 36px;
}

/* RWD here */
@media (min-width: 768px) and (max-width: 1199px) {
  #previous-page-btn {
    font-size: 48px;
    margin-left: 3%;
  }

  .dropdown {
    margin-right: 3%;
  }

  #dropdownMenuLink {
    font-size: 28px;
  }

  .map-search-input-container {
    right: -16%;
  }

  .map-search-input {
    height: 48px;
    font-size: 24px;
  }

  #search-bar-icon {
    font-size: 32px;
  }
}

@media (min-width: 1200px) {
  .dropdown {
    margin-right: 3%;
  }

  #dropdownMenuLink {
    font-size: 24px;
  }

  .map-search-input-container {
    right: -14%;
  }

  .map-search-input {
    height: 52px;
    font-size: 36px;
  }

  #search-bar-icon {
    font-size: 36px;
  }
}
</style>
