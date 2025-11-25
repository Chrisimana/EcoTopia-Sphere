import { createRouter, createWebHistory } from 'vue-router'
import Beranda from '../pages/Beranda.vue'
import Tentang from '../pages/Tentang.vue'
import Tips from '../pages/Tips.vue'
import InovasiCerdas from '../pages/Inovasi-Cerdas.vue'
import SmartAction from '../pages/Smart-Action.vue'

const routes = [
    { path: '/', name: 'Beranda', component: Beranda },
    { path: '/tentang', name: 'Tentang', component: Tentang },
    { path: '/tips', name: 'Tips', component: Tips },
    { path: '/inovasi-cerdas', name: 'InovasiCerdas', component: InovasiCerdas },
    { path: '/smart-action', name: 'SmartAction', component: SmartAction },

    // Artikel Routes
    {
        path: '/artikel/hemat-energi-listrik',
        name: 'HematEnergiListrik',
        component: () => import('../pages/artikel/Hemat-Energi-Listrik.vue')
    },
    {
        path: '/artikel/manfaat-cahaya-alami',
        name: 'ManfaatCahayaAlami',
        component: () => import('../pages/artikel/Manfaat-Cahaya-Alami.vue')
    },
    {
        path: '/artikel/gunakan-energi-terbarukan',
        name: 'GunakanEnergiTerbarukan',
        component: () => import('../pages/artikel/Gunakan-Energi-Terbarukan.vue')
    },
    {
        path: '/artikel/hemat-air',
        name: 'HematAir',
        component: () => import('../pages/artikel/Hemat-Air.vue')
    },
    {
        path: '/artikel/tampung-air-hujan',
        name: 'TampungAirHujan',
        component: () => import('../pages/artikel/Tampung-Air-Hujan.vue')
    },
    {
        path: '/artikel/mesin-cuci-efisien',
        name: 'MesinCuciEfisien',
        component: () => import('../pages/artikel/Mesin-Cuci-Efisien.vue')
    },
    {
        path: '/artikel/pisahkan-sampah',
        name: 'PisahkanSampah',
        component: () => import('../pages/artikel/Pisahkan-Sampah.vue')
    },
    {
        path: '/artikel/kurangi-penggunaan-plastik',
        name: 'KurangiPenggunaanPlastik',
        component: () => import('../pages/artikel/Kurangi-Penggunaan-Plastik.vue')
    },
    {
        path: '/artikel/kompos-sampah-organik',
        name: 'KomposSampahOrganik',
        component: () => import('../pages/artikel/Kompos-Sampah-Organik.vue')
    },
    {
        path: '/artikel/transportasi-ramah-lingkungan',
        name: 'TransportasiRamahLingkungan',
        component: () => import('../pages/artikel/Transportasi-Ramah-Lingkungan.vue')
    },
    {
        path: '/artikel/carpooling',
        name: 'Carpooling',
        component: () => import('../pages/artikel/Carpooling.vue')
    },
    {
        path: '/artikel/kendaraan-listrik',
        name: 'KendaraanListrik',
        component: () => import('../pages/artikel/Kendaraan-Listrik.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
})

export default router