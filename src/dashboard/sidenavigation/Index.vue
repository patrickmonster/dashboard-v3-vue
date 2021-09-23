<template>
  <aside
    class="scrollbar bg-white h-screen overflow-y-auto top-0 lg:relative"
    :class="[
      style[mobilePosition],
      open
        ? 'w-8/12 absolute z-40 sm:w-5/12 lg:hidden'
        : 'hidden lg:block lg:w-64 lg:z-auto',
    ]"
  >
    <div class="pb-32 lg:pb-6">
      <sidenav-header />
      <sidenav-items />
    </div>
  </aside>
</template>

<script setup>
import { inject, defineProps } from 'vue';
import SidenavItems from './Items.vue';
import SidenavHeader from './Header.vue';

defineProps({
  mobilePosition: {
    type: String,
    default: '',
  },
});

const open = inject('open');

const style = {
  left: 'left-0',
  right: 'right-0',
};
</script>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.scrollbar {
  -ms-overflow-style: none; /* make scrollbar transparent on Firefox, IE and Edge*/
  scrollbar-width: none;
}
</style>
