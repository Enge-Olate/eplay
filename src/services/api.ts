import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
type PurchaseRes={
    orderId: string;
}

export const gameApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api-ebac.vercel.app/api/eplay"
    }),
    endpoints: (builder) => ({
        getGame: builder.query<Game, void>({
            query: () => 'destaque'
        }),
        getPromo: builder.query<Game[], void>({
            query: () => 'promocoes'
        }),
        getSoon: builder.query<Game[], void>({
            query: () => 'em-breve'
        }),
        getActionGames: builder.query<Game[], void>({
            query: () => 'acao'
        }),
        getEsportsGames: builder.query<Game[], void>({
            query: () => 'esportes'
        }),
        getSimulacaoGames: builder.query<Game[], void>({
            query: () => 'simulacao'
        }),
        getRpgGames: builder.query<Game[], void>({
            query: () => 'rpg'
        }),
        getFightGames: builder.query<Game[], void>({
            query: () => 'luta'
        }),
        getGameId: builder.query<Game, string>({
            query: (id) => `jogos/${id}`
        }),
        purchase: builder.mutation<PurchaseRes, PurchasePayload>({
            query: (body) => ({
                url: 'checkout',
                method: 'Post',
                body,
            })
        }),
    })
})
export const {usePurchaseMutation, useGetGameIdQuery, useGetGameQuery, useGetPromoQuery, useGetSoonQuery, useGetActionGamesQuery, useGetEsportsGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery, useLazyGetSoonQuery } = gameApi;
export default gameApi;