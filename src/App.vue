<template>
  <dashboard-provider>
    <dashboard-layout>
      <router-view />
    </dashboard-layout>
  </dashboard-provider>
</template>

<script>
import DashboardLayout from './dashboard/Index.vue';
import DashboardProvider from './dashboard/provider/Provider.vue';

export default {
  components: {
    DashboardLayout,
    DashboardProvider,
  },
};
</script>
