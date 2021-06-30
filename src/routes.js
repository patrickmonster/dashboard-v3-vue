import { createWebHistory, createRouter } from 'vue-router';

const Home = () => import('./pages/Home.vue');
const Tasks = () => import('./pages/admin/Tasks.vue');
const Reports = () => import('./pages/admin/Reports.vue');
const Projects = () => import('./pages/admin/Projects.vue');
const Settings = () => import('./pages/admin/Settings.vue');
const Calendar = () => import('./pages/admin/Calendar.vue');
const TimeManage = () => import('./pages/admin/TimeManage.vue');
const Documentation = () => import('./pages/admin/Documentation.vue');

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Calendar',
    path: '/admin/calendar',
    component: Calendar,
  },
  {
    name: 'Documentation',
    path: '/admin/documentation',
    component: Documentation,
  },
  {
    name: 'Projects',
    path: '/admin/projects',
    component: Projects,
  },
  {
    name: 'Reports',
    path: '/admin/reports',
    component: Reports,
  },
  {
    name: 'Settings',
    path: '/admin/settings',
    component: Settings,
  },
  {
    name: 'Tasks',
    path: '/admin/tasks',
    component: Tasks,
  },
  {
    name: 'Time-Manage',
    path: '/admin/time-manage',
    component: TimeManage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
