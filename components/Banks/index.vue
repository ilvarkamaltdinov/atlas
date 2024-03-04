<template>
  <div class="banks" v-if="page">
    <div class="banks__line">
      <div class="banks__item f-carousel__slide" v-for="bank in storeBanks">
        <NuxtImg :src="bank.image" :alt="bank.title" class="banks__item-img"/>
      </div>
    </div>
  </div>
  <div v-else class="banks f-carousel f-carousel--banks " id="banksSlider">
    <div class="f-carousel__viewport">
      <div class="f-carousel__track">
        <div class="banks__item f-carousel__slide" v-for="bank in storeBanks">
          <NuxtImg loading="lazy" :src="bank.image" :alt="bank.title" class="banks__item-img"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useBanks} from "~/store/banks";
import {onMounted} from "vue";
import {Carousel} from "@fancyapps/ui";
import {banksGql} from '~/apollo/queries/bank/banks'
import {Bank, BankData} from "~/app/types/banks";


const props = defineProps<{
  page?: boolean;
}>();

const storeBanks = computed(() => useBanks().banks)
const route = useRoute()

const variables = {
  site_id: 172
}
const defaultBanks = computed<Bank[]>(() => {
  return [
    {
      id: 1,
      image: `img/banks/sber.svg`,
      name: "Сбербанк",
      slug: "sberbank",
      title: "Автокредит в Сбербанке"
    },
    {
      id: 2,
      image: `img/banks/alfa.svg`,
      name: "Альфа-Банк",
      slug: "alfa-bank",
      title: "Автокредит в Альфа банке"
    },
    {
      id: 3,
      image: `img/banks/tinkoff.svg`,
      name: "Тинькофф Банк",
      slug: "tinkoff-bank",
      title: "Автокредит в Тинькофф банке"
    }
  ]
})

function getBanks() {
  useAsyncQuery<BankData>({query: banksGql, variables, clientId: 'used'}).then(({data}) => {
    useBanks().setBanks(data.value.banks)
  }).catch(error => {
    console.log(error)
    useBanks().setBanks(defaultBanks.value)
  })
}

let slider: Carousel
const initSlider = () => {
  const container = document.getElementById("banksSlider");
  const options = {
    infinite: true,
    center: false,
    transition: 'slide',
    getProgress: 'center',
    Thumbs: {
      type: "modern",
    },
  };
  slider = new Carousel(container, options);
}
onMounted(() => {
  initSlider()
})
watch(route, () => {
  getBanks()
}, {immediate: true})
</script>