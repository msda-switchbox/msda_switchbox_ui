<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ApiService from '../services/api'
import type { JobItem } from '../services/api'

interface TableHeader {
  name: string
  id: keyof JobItem
  pos: number
}

const new_headings = ref<TableHeader[]>([
  { name: 'ID', id: 'job_id', pos: 0 },
  { name: 'Date', id: 'start_datetime', pos: 1 },
  { name: 'Status', id: 'status', pos: 2 },
  { name: "CDM Source Name", id: "source_name", pos: 3 },
  { name: "Source Release Date", id: "source_date", pos: 4 },
])

// load the data
const tableData = ref<JobItem[]>([])
const api = ApiService.getInstance()
const loading = ref(true)

onMounted(async () => {
  try {
    tableData.value = await api.getJobs()
  } catch (error) {
    console.error('Error fetching data:', error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div class="overflow-x-auto px-36 pt-8 ">

    <RouterLink class="btn btn-info btn-sm float-right mb-4 shadow-sm" to="/create_job">+ New Transformation
    </RouterLink>
    <h1 class="text-xl mb-4">Transformations</h1>

    <table class="table">
      <thead>
        <tr>
          <th v-for="header in new_headings" :key="header.id">{{ header.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, i) in tableData" :key="i">
          <td v-for="heading in new_headings" :key="heading.id">
            <div v-if="heading.id == 'job_id'">
              <RouterLink class="btn btn-sm" :to="`/view_job/${row[heading.id]}`">
                {{ row[heading.id] }}
              </RouterLink>
            </div>
            <div v-else>{{ row[heading.id] as string }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped></style>
