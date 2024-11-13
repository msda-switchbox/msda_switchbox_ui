import axios from 'axios'
import type { AxiosResponse } from 'axios'

const baseURL = window.location.origin.concat("/api")

export interface ApiResponse<T> {
  data: T
  status: number
}

export interface JobItem {
  job_id: number
  start_datetime: Date
  status: string
  source_name: string
  source_date: string
}

export interface Job {
  id: number
  date: Date
  status: string
  name: string
  vocabVersion: string
  sourceDate: Date
  etlVersion: string
  cdmVersion: string
  log: string
}

// Define a base type for a job parameter
export interface ParamBase {
  question: string
  param_type: string
  default?: string | boolean
}

// Extend ParamBase for file parameters with columns
export interface CSVFileParam extends ParamBase {
  param_type: 'csv'
  columns: string[]
}

// Define a type that encompasses all possible parameter types
export type Param = ParamBase | CSVFileParam

// Define the main interface for the parameters object
export interface Params { [key: string]: Param }

export default class ApiService {
  private static instance: ApiService

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }
    return ApiService.instance
  }

  public async getData(subpath: string): Promise<AxiosResponse<any, any>> {
    try {
      const response = await axios.get(`${baseURL}/${subpath}`)
      return response
    } catch (error: any) {
      throw new Error(`Failed to GET data: ${error.message || error.toString()}`);
    }
  }

  public async postFormData(subpath: string, data: any): Promise<AxiosResponse<any, any>> {
    try {
      const response = await axios.post(`${baseURL}/${subpath}`, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      return response
    } catch (error: any) {
      throw new Error(`Failed to GET form data: ${error.message || error.toString()}`);
    }
  }

  public async getJob(jobId: string): Promise<Job> {
    try {
      const response = await this.getData(`job/${jobId}`)
      return response.data as Job
    } catch (error: any) {
      throw new Error(`Failed to get job ${jobId};  ${error.message || error.toString()}`)
    }
  }

  public async getJobs(): Promise<JobItem[]> {
    try {
      const response = await this.getData("job/")
      return response.data['jobs'] as JobItem[]
    } catch (error: any) {
      throw new Error(`Failed to get jobs;  ${error.message || error.toString()}`)
    }
  }

  public async getParams(): Promise<Params> {
    try {
      const response = await this.getData("params")
      return response.data["params"] as Params
    } catch (error: any) {
      throw new Error(`Failed to get jobs;  ${error.message || error.toString()}`)
    }
  }

  public async createJob(data: any): Promise<any> {
    try {
      const response = await this.postFormData(`job/`, data);
      console.log('Job creation data submitted successfully:', response.data);
      return response.data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
}
