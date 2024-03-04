import {defineStore} from 'pinia'
import {Bank} from "~/app/types/banks";

export const useBanks = defineStore('banks', {
    state: () => ({
        banks: <Bank[]>[]
    }),

    actions: {
        async setBanks(payload: Bank[]) {
            this.banks = payload
        }
    }
})