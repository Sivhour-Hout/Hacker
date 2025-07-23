/* eslint-disable @typescript-eslint/no-explicit-any */
// src/lib/api.ts
import axios, { type AxiosRequestConfig, type Method } from 'axios';
import { BASE_URL } from '../../config';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

type RequestOptions = {
  method?: Method;
  query?: Record<string, string | number | boolean>;
  body?: any;
  headers?: Record<string, string>;
};

export async function request<T>(
  path: string,
  {
    method = 'GET',
    query,
    body,
    headers,
  }: RequestOptions = {}
): Promise<T> {
  const config: AxiosRequestConfig = {
    url: path,
    method,
    params: query,
    data: body,
    headers,
  };

  try {
    const response = await api.request<T>(config);
    return response.data;
  } catch (err) {
    console.error(`[Axios] ${method} ${path} failed`, err);
    throw err;
  }
}
