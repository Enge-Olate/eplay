import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
<<<<<<< HEAD
<<<<<<< HEAD
import type { Game } from "../types";
=======
import type { Game } from "../pages/home";
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
import type { Game } from "../types";
>>>>>>> a987dbf (Commit 3: instalando dependências do Hashlink e atribuindo rotas ao componente Footer.)


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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            query: (id) => `jogos/${id}`
        })
    })
})
export const { useGetGameIdQuery, useGetGameQuery, useGetPromoQuery, useGetSoonQuery, useGetActionGamesQuery, useGetEsportsGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery, useLazyGetSoonQuery } = gameApi;
<<<<<<< HEAD
<<<<<<< HEAD
=======
            query: (id)=> `jogos/${id}`
=======
            query: (id) => `jogos/${id}`
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
=======
            query: (id)=> `jogos/${id}`
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
            query: (id) => `jogos/${id}`
>>>>>>> a78f6cc (Commit 2: enviando dados da API para os componentes Home e Categorias)
        })
    })
})
export const { useGetGameIdQuery, useGetGameQuery, useGetPromoQuery, useGetSoonQuery, useGetActionGamesQuery, useGetEsportsGamesQuery, useGetFightGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery } = gameApi;
<<<<<<< HEAD
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
=======
>>>>>>> b39a825 (Commit 1: instalando dependências do RTK, codificando o services da API e aplicando nos componentes.)
=======
>>>>>>> d97e153 (Commit 3: adicionando produtos ao carrinho.)
export default gameApi;