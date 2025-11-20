<template>
  <div class="bg-white">
    <HeroSectionSmartAction />
    <ShareActionSection />
    <SharedActionsSection />

    <CtaSectionSmartAction />
    <ActionModal :is-open="showModal" :data="submittedData" @close="closeModal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeroSectionSmartAction from '../components/HeroSectionSmartAction.vue'
import ShareActionSection from '../components/ShareActionSection.vue'
import SharedActionsSection from '../components/SharedActionsSection.vue'
import CtaSectionSmartAction from '../components/CtaSectionSmartAction.vue'
import ActionModal from '../components/ActionModal.vue'

const showModal = ref(false)
const submittedData = ref({})
const actions = ref([])

const handleSubmit = (data) => {
  submittedData.value = data
  actions.value.push({ ...data, id: Date.now() })
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}

defineExpose({
  actions,
  handleSubmit
})
</script>