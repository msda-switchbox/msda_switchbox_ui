<script setup lang="ts">
import { ref, onMounted } from 'vue'

import router from '../router'

import ApiService from '../services/api'
import type { Params } from '../services/api'

const api = ApiService.getInstance()

const params = ref<Params | null>(null)
const formData = ref<{ [key: string]: any }>({})

onMounted(async () => {
  try {
    params.value = await api.getParams()
    for (const [key, config] of Object.entries(params.value)) {
      if (config.default != null) {
        formData.value[key] = config.default;
      }
    }
  } catch (error) {
    console.error('Error fetching job creation params:', error)
  }
})

const handleFileChange = (event: Event, key: keyof typeof formData.value) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    formData.value[key] = files[0]
  }
}
const handleSubmit = async () => {
  // Process form submission
  console.log('Submitting form data', formData.value)
  const result = await api.createJob(formData.value)
  console.log("result:", result)
  router.push({ path: `/view_job/${result.job_id}` })
}
const textOrDate = (input: string): "text" | "date" => {
  if (input.toLowerCase().includes("date")) {
    return "date";
  }
  return "text";
}


</script>
<template>
  <div v-if="params == null" class="content text-center mx-auto mt-8">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  <div v-else class="flex mx-auto max-w-lg mt-8">
    <form @submit.prevent="handleSubmit">
      <h1 class="text-xl mb-4">Create A New Transformation</h1>
      <p class="mb-4 text-sm">
        Below you can find the metadata needed for any new transformation,
        this includes information on the source data (name, abbreviation,
        date of the data export etc.) as well as information needed to
        transform the data to the target OMOP CDM instance. Please fill in
        any required information as indicated below, any variable indicated
        with an asterisk is a required field and any field that has been
        pre-filled contains default information that does not need to be
        altered unless this has been specified.
      </p>

      <div v-for="(param, key) in params" :key="key" class="mb-4 mx-auto">
        <!-- String Input -->
        <label v-if="param.param_type == 'str'" class="form-control w-full off-max-w-md">
          <div class="label">
            <span class="label-text">{{ param.question }}<span v-if="param.default == null" class="text-red-500">
                *</span></span>
          </div>
          <input
:id="key as string" v-model="formData[key]" :type="textOrDate(key as string)"
            class="input input-bordered w-full off-max-w-md" />
        </label>
      </div>

      <!-- File information section -->
      <div class="w-full off-max-w-md">
        <div class="mb-4">
          <h2 class="text-lg mb-1">Upload files</h2>
          <p class="mb-2 text-sm">Helpful information:</p>
          <div class="flex space-x-4">
            <a href="/pdf/Guide_ETL_module_CDS.pdf" target="_blank" class="btn btn-info">Instructions for csv files</a>
            <a href="/pdf/CDS_09072024.pdf" target="_blank" class="btn btn-info">MSDA Core Dataset</a>
          </div>
        </div>
      </div>

      <div v-for="(param, key) in params" :key="key" class="mb-4 mx-auto">
        <!-- File Input -->
        <label v-if="param.param_type === 'csv'" class="form-control w-full off-max-w-md">
          <div class="label">
            <span class="label-text">{{ param.question }}<span class="text-red-500"> *</span></span>
          </div>
          <input
:id="key as string" type="file" class="file-input file-input-bordered w-full off-max-w-md"
            @change="handleFileChange($event, key as string)" />
        </label>
      </div>


      <button type="submit" class="btn btn-success float-right mb-8 mt-8">Run Transformation</button>
    </form>
  </div>
</template>
<style scoped></style>
