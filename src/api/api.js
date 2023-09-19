import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import TokenService from "../services/token.service";
// Создайте объект API
const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://opnio-sphere-server.onrender.com/api',
        prepareHeaders: headers => {
            const token = TokenService.getToken();
            if (token) {
                headers.set('Authorization', `Bearer ${token}`)
            }
        }
    }),
    endpoints: (builder) => ({

        getPostById: builder.query({
            query: (id) => `review/id/${id}`
        }),

        getAllPosts: builder.mutation({
            query: (sortParams) => {
                return {
                    url: 'review/all',
                    method: 'POST',
                    body: sortParams,
                }
            },
        }),

        createReview: builder.mutation({
            query: (review) => {
                return {
                    url: 'review/create',
                    method: 'POST',
                    body: review,
                }
            }
        }),

        createUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'auth/signUp',
                    method: 'POST',
                    body: user,
                }
            }
        }),

        authUser: builder.mutation({
            query: (user) => {
                return {
                    url: 'auth/signInWithPassword',
                    method: 'POST',
                    body: user,
                }
            }
        }),

        reviewLike: builder.mutation({
            query: (id) => {
                return {
                    url: `review/${id}/like`,
                    method: 'POST',
                    body: {},
                }
            }
        }),

        createComment: builder.mutation({
            query: (comment) => {
                return {
                    url: 'comment/create',
                    method: 'POST',
                    body: comment,
                }
            }
        }),

        getCommentsByReview: builder.query({
            query: (id) => `comment/review/${id}`,
        }),

        setMarkByReview: builder.mutation({
            query: (mark, id) => {
                return {
                    url: `review/${id}/setMark`,
                    method: 'PATCH',
                    body: mark,
                }
            }
        }),

        getTags: builder.mutation({
            query: (text) => {
                return {
                    url: 'review/tags',
                    method: 'POST',
                    body: {text: text},
                }
            }
        }),

        getUserReviews: builder.query({
            query: (id) => `review/user/${id}`
        }),

        deleteReviewById: builder.mutation({
            query: (id) => {
                return {
                    url: `review/delete?id=${id}`,
                    method: 'DELETE',
                    body: {},
                }
            }
        }),

        editReviewById: builder.mutation({
            query: ({ review, id }) => {
                return {
                    url: `review/id/${id}`,
                    method: 'PATCH',
                    body: review,
                }
            }
        }),
    }),
});

export const {
    useGetPostByIdQuery,
    useGetAllPostsMutation,
    useCreateReviewMutation,
    useCreateUserMutation,
    useAuthUserMutation,
    useReviewLikeMutation,
    useCreateCommentMutation,
    useGetCommentsByReviewQuery,
    useSetMarkByReviewMutation,
    useGetTagsMutation,
    useGetUserReviewsQuery,
    useDeleteReviewByIdMutation,
    useEditReviewByIdMutation,
} = api;
export const apiSlice = api;