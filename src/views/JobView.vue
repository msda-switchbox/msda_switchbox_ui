<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ApiService from '../services/api'
import type { Job } from '../services/api'

const api = ApiService.getInstance()

// Access the route
const route = useRoute()

// Define a reactive reference for the job ID
const jobId = ref(route.params.id as string)
const loading = ref(true)

// Init the data
const data = ref<Job>({
  id: 0,
  date: new Date(0),
  status: "N/A",
  name: "N/A",
  vocabVersion: "N/A",
  sourceDate: new Date(0),
  etlVersion: "N/A",
  cdmVersion: "N/A",
  log: ""
})

// Update the data when there are changes in the route parameters
watch(
  () => route.params.id,
  async (newId) => {
    jobId.value = newId as string
    data.value = await api.getJob(newId as string)
  }
)

// Initial data fetch
onMounted(async () => {
  try {
    data.value = await api.getJob(jobId.value)
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
})


</script>

<template>
  <div v-if="loading" class="content text-center mx-auto mt-8">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  <div v-else class="flex flex-col space-y-4 mx-auto mt-8">
    <div class="stats shadow mx-auto">
      <div class="stat place-items-center">
        <div class="stat-title">Transformation</div>
        <div class="stat-value">{{ jobId }}</div>
        <div class="stat-desc">ID Number</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Transformation Date</div>
        <div class="stat-value">{{ data['date'] }}</div>
        <div class="stat-desc">When Transformation Was Run</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Status</div>
        <div class="stat-value">{{ data['status'] }}</div>
        <div class="stat-desc">ETL process result</div>
      </div>
    </div>
    <div class="stats stats-vertical mx-auto">
      <div class="stat place-items-center">
        <div class="stat-title">Vocab Version</div>
        <div class="stat-value">{{ data['vocabVersion'] }}</div>
        <div class="stat-desc">ID Number</div>
      </div>

      <div class="stat place-items-center">
        <div class="stat-title">Source Data Date</div>
        <div class="stat-value">{{ data['sourceDate'] }}</div>
        <div class="stat-desc">Date of the original source data</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">ETL Version</div>
        <div class="stat-value">{{ data['etlVersion'] }}</div>
        <div class="stat-desc">Version number of the ETL tool</div>
      </div>
      <div class="stat place-items-center">
        <div class="stat-title">CDM Version</div>
        <div class="stat-value">{{ data['cdmVersion'] }}</div>
        <div class="stat-desc">Version of the OMOP Common Data Model</div>
      </div>
    </div>

    <div class="border-base-300 border mx-auto p-5 w-11/12 overflow-scroll">
      <div class="content">
        <pre><code>{{ data['log'] }}</code></pre>
      </div>
    </div>

  </div>
</template>
<style scoped></style>
