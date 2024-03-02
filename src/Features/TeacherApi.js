import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from './Constant'

export const TeacherApi = createApi({
  reducerPath: 'TeacherApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['teacher'],
  endpoints: (builder) => ({
    getTeacher: builder.query({
      query: (id) => ({
        url: `/api/teachers/${id}`
      }),
      providesTags: ['teacher']
    })
  })
})

export const { useGetTeacherQuery } = TeacherApi;