import type { NewsResponse } from "../models/newsResponse";
import { request } from "../networks/core/api_core";

export async function getNewsIds(): Promise<number[]> {
  return request<number[]>('/topstories.json', {
    method: 'GET',
  });
}

export async function getNewsDetail(id: number): Promise<NewsResponse> {
  return request<NewsResponse>(`/item/${id}.json`, {
    method: 'GET',
  });
}