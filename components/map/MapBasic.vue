<script setup lang="ts">
import { onMounted, ref } from "vue";
import useMapLogic from "~/composables/useMapLogic";
import IconLocation from "~/assets/icons/IconLocation.vue";

const addressInput = ref<string>("");

const props = defineProps<{
  inputId: string;
  placeholder: string;
  mode: "plan" | "score";
}>();

const emit = defineEmits(["placeSelected"]);

onMounted(() => {
  useMapLogic(props.inputId, props.mode, (placeData: any) => {
    emit("placeSelected", placeData);
  });
});
</script>

<template>
  <div>
    <div
      class="flex flex-row position-absolute top-[3vh] left-[2.5%] max-w-[820px] w-[95%] h-[9vh] bg-white rounded-[12px] justify-center map-search-bar"
    >
      <div class="flex justify-center items-center w-[5%]">
        <IconLocation />
      </div>
      <div class="flex items-center w-[92%]">
        <el-input
          v-model="addressInput"
          :id="inputId"
          :placeholder="placeholder"
          class="border border-[#252c74] rounded-[6px] ml-[5%] w-[90%] h-[36px] map-search-input"
        />
      </div>
    </div>
    <div
      id="map"
      class="absolute max-w-[820px] top-[14vh] left-[2.5%] w-[95%] h-[60vh] bg-white rounded-[12px]"
    />
  </div>
</template>
