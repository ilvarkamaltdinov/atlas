<template>
  <section class="section section--home home">
    <h1 class="visually-hidden" v-html="seoTags.h1"></h1>
    <div class="container">
      <!--      <h2 class="heading heading&#45;&#45;h1" v-if="!$device.isMobile">-->
      <!--        &lt;!&ndash;        Скидка до 20%&ndash;&gt;-->
      <!--        новогодние скидки-->
      <!--      </h2>-->
      <h2 class="heading heading--h1">
        автокредит от 4.9%
      </h2>
      <!--      <p class="text__p&#45;&#45;subtitle">-->
      <!--        <span class="text__p&#45;&#45;subtitle-text" v-if="!$device.isMobile">ДО 400 000 ₽</span>-->
      <!--        <span class="text__p&#45;&#45;subtitle-after" v-if="!$device.isMobile">ЗИМНЯЯ РЕЗИНА В ПОДАРОК</span>-->
      <!--      </p>-->
      <!--      <p class="text__p text__p&#45;&#45;home" v-if="!$device.isMobile">-->
      <!--        &lt;!&ndash;        На все новые китайские автомобили&ndash;&gt;-->
      <!--        ТОЛЬКО ДО 15.01.2024 г.-->
      <!--      </p>-->
      <p class="text__p text__p--home">
        Оформление кредита займет не более 15 минут,
        получите выгодные условия со ставкой от 4.9%
      </p>
      <div class="home__auto">
        <!--        <div class="home__auto-title">-->
        <!--          new year-->
        <!--        </div>-->
        <!--        <NuxtPicture loading="lazy" class="home__auto-image" format="avif,webp"-->
        <!--                     :src="`${$device.isMobile ? '/img/home/car-new-year-mobile.png' : '/img/home/car-new-year.png'}`"/>-->
        <NuxtPicture loading="lazy" class="home__auto-image" format="avif,webp"
                     :src="'/img/home/car.png'"/>
        <nuxt-link to="/new" class="button button--home button--white">ПОЛУЧИТЬ ПРЕДЛОЖЕНИЕ</nuxt-link>
      </div>
      <!--      <NuxtPicture loading="lazy" class="car-stars-image" format="avif,webp"-->
      <!--                   :src="`${$device.isMobile ? '/img/home/car-stars-mobile.png' : '/img/home/car-stars.png'}`"/>-->
    </div>
  </section>
  <section class="section section--marks">
    <div class="container">
      <ListMarksHome/>
    </div>
  </section>
  <section class="section section--filters">
    <div class="container">
      <FiltersList/>
    </div>
  </section>
  <section class="section section--home-folders">
    <div class="container">
      <h2 class="heading heading--h2">
        Популярные модели
      </h2>
      <CatalogFoldersHome :popular="true"/>
    </div>
  </section>
  <section class="section section--services">
    <div class="container">
      <h2 class="heading heading--h2">Услуги</h2>
      <Services/>
    </div>
  </section>
  <section class="section section--sets">
    <div class="container">
      <h2 class="heading heading--h2">Подборки</h2>
      <Sets/>
    </div>
  </section>
  <section class="section section--banks">
    <div class="container">
      <h2 class="heading heading--h2">Банки-партнеры</h2>
      <Banks/>
    </div>
  </section>
  <section class="section section--contacts">
    <div class="container">
      <h2 class="heading heading--h2">Контакты</h2>
      <Contacts/>
    </div>
  </section>

</template>
<script setup lang="ts">
import FiltersList from '~/components/Filters/List.vue'
import CatalogFoldersHome from '~/components/Catalog/FoldersHome.vue'
import Services from '~/components/Services'
import Sets from '~/components/Sets/index.vue'

import Contacts from "~/components/Contacts/index.vue";
import {useSiteConfig} from "~/store/siteConfig";

const settings = useSiteConfig().settings
const seoTags = renderSeoTemplate('index')
</script>
