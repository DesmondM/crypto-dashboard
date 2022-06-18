import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "b0c4eaaccamsh31cef216cee88cfp1febeejsn74320d20e6cc",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

/* const baseUrl = "https://coinranking1.p.rapidapi.com/exchanges"; */
const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
  }),
});

/* const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'b0c4eaaccamsh31cef216cee88cfp1febeejsn74320d20e6cc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};
   */
export const { useGetCryptosQuery } = cryptoApi;
