<template>
  <dashboard-provider>
    <dashboard-layout>
      <router-view />
    </dashboard-layout>
  </dashboard-provider>
</template>

<script setup>
import DashboardLayout from './dashboard/Layout.vue';
import DashboardProvider from './dashboard/provider/Provider.vue';
</script>
