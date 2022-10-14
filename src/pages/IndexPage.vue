<template>
  <q-page>
    <div class="row q-col-gutter-sm q-py-sm">
      <div
        v-for="item in developers"
        :key="item.title"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <a :href="item.linkVirgool" style="text-decoration: none">
          <q-card class="bg-warning" style="height: 200px">
            <div dir="rtl">
              <q-card-section class="col">
                <div class="text-center">
                  <img
                    style="width: 195px; border-radius: 20%"
                    :src="item.imgVirgool"
                  />
                </div>
                <div class="q-mt-xs text-h6 text-center text-white">
                  {{ item.title }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </a>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm">
      <div
        v-for="item in developersOne"
        :key="item.title"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <a :href="item.linkVirgool" style="text-decoration: none">
          <q-card class="bg-warning" style="height: 200px">
            <div dir="rtl">
              <q-card-section class="col">
                <div class="text-center">
                  <img
                    style="width: 190px; border-radius: 20%"
                    :src="item.imgVirgooL"
                  />
                </div>
                <div class="q-mt-xs text-h6 text-center text-white">
                  {{ item.title }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </a>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm">
      <div
        v-for="item in developerTwo"
        :key="item.title"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <a :href="item.linkVirgool" style="text-decoration: none">
          <q-card class="bg-warning" style="height: 200px">
            <div dir="rtl">
              <q-card-section class="col">
                <div class="text-center">
                  <img
                    style="width: 120px; border-radius: 20%"
                    :src="item.imgVirgooL"
                  />
                </div>
                <div class="q-mt-xs text-h6 text-center text-white">
                  {{ item.title }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </a>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm">
      <div
        v-for="item in developerThree"
        :key="item.title"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <a :href="item.linkVirgool" style="text-decoration: none">
          <q-card class="bg-warning" style="height: 200px">
            <div dir="rtl">
              <q-card-section class="col">
                <div class="text-center">
                  <img
                    style="width: 135px; border-radius: 20%"
                    :src="item.imgVirgooL"
                  />
                </div>
                <div class="q-mt-xs text-h6 text-center text-white">
                  {{ item.title }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </a>
      </div>
    </div>
    <div class="row q-col-gutter-sm q-py-sm">
      <div
        v-for="item in developerfour"
        :key="item.tite"
        class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
      >
        <a :href="item.linkVirgool" style="text-decoration: none">
          <q-card class="bg-warning" style="height: 200px">
            <div dir="rtl">
              <q-card-section class="col">
                <div class="text-center">
                  <img
                    style="width: 130px; border-radius: 20%"
                    :src="item.imgVirgooL"
                  />
                </div>
                <div class="q-mt-xs text-h6 text-center text-white">
                  {{ item.title }}
                </div>
              </q-card-section>
            </div>
          </q-card>
        </a>
      </div>
    </div>
  </q-page>
</template>
<script setup>
import { ref } from "vue";
const developers = ref([
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%D9%BE%DB%8C%DA%86%DB%8C%D8%AF%DA%AF%DB%8Cvue-3-%D8%A8%D8%A7-state-management-pinia-%D8%B1%D8%A7%D8%AD%D8%AA-%D8%A7%D8%B3%D8%AA-tcqt9qe0nsjw",
    imgVirgool: "pinia.png",
    title: "ویو3وpinia",
  },
  {
    linkVirgool: "https://virgool.io/@pooriavakili09/twa-hfwv56aulyqw",
    imgVirgool:
      "https://files.virgool.io/upload/users/37678/posts/hfwv56aulyqw/czjfadyyphsa.jpeg",
    title: "twa what",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/axios-in-vue-js-yue6pg9joj93",
    imgVirgool:
      "https://files.virgool.io/upload/users/37678/posts/yue6pg9joj93/rjtog1hghydt.png",
    title: "axios in vue-js",
  },
]);
const developersOne = ref([
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/vuex-%D8%AF%D8%B1vue-js-a3j26afudhzm",
    imgVirgooL: "vuex.png",
    title: "vuex in vue-js",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%DA%86%D8%A7%D9%84%D8%B4-%D9%87%D8%A7%DB%8C-%DA%A9%D8%A7%D8%B1-%D9%81%D8%B1%D8%A7%D9%86%D8%AA-%D8%A7%D9%86%D8%AF-%D8%A8%D8%A7-%D8%A8%DA%A9-%D8%A7%D9%86%D8%AF-%D9%88-%D8%A8%D8%B1%D8%B9%DA%A9%D8%B3-%D9%87%D9%85%DB%8C%D9%86-%D9%85%D9%88%D8%B6%D9%88%D8%B9-cotntzvsccms",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/cotntzvsccms/taddyyprtxxr.png",
    title: " چالش های بک اند وفرانت اند",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%DA%86%D8%B7%D9%88%D8%B1-%D8%AF%D8%B1-%D9%81%D8%B1%D8%A7%D9%86%D8%AA-%D8%A7%D9%86%D8%AF-%D8%AF%D9%88%D9%84%D9%88%D9%BE%D8%B1-%D8%B3%D9%86%DB%8C%D9%88%D8%B1-%D8%B4%D9%88%DB%8C%D9%85-ag9wjsstkeax",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/ag9wjsstkeax/tcbnkxhvllpl.png",
    title: "چطور در فرانت انددولوپر سنیورشویم ",
  },
]);
const developerTwo = ref([
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%D8%AA%D9%81%D8%A7%D9%88%D8%AA-%D9%87%D8%A7%DB%8C-vue2-%D8%A8%D8%A7-vue3-jdsb8sfdirk7",
    imgVirgooL: "vue.png",
    title: "تفاوت های vue2 با vue3",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%D8%AA%D9%81%D8%A7%D9%88%D8%AA-%D9%87%D8%A7%DB%8C-vue2-%D8%A8%D8%A7-vue3-jdsb8sfdirk7",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/l8c6igjudxaw/yu8vqipoeitn.jpeg",
    title: "چطور دربرنامه نویسی کار پیدا کنیم",
  },
  {
    linkVirgool:
      "https://igmag.ir/%DA%86%D8%B7%D9%88%D8%B1-%D9%85%D9%86-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-%D8%B4%D8%AF%D9%85-fbtauqic0k3l",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/fbtauqic0k3l/racq8f2rfejk.jpeg",
    title: "چطور من برنامه نویس شدم",
  },
]);
const developerThree = ref([
  {
    linkVirgool:
      "https://igmag.ir/%DA%86%D8%B7%D9%88%D8%B1-%D9%85%D9%86-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-%D8%B4%D8%AF%D9%85-fbtauqic0k3l",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/bulqw1nttnn4/o4e7aeigau2p.jpeg",
    title: "بازار کار فرانت اند دولوپر",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%D8%A7%D9%85%D9%88%D8%B2%D8%B4-%D8%A8%D8%B1%D8%A7%DB%8C-%D9%88%D8%B1%D9%88%D8%AF-%D8%A8%D9%87-%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1-%DA%A9%D8%A7%D8%B1-%D8%AF%D8%B1-%D9%88%DB%8C%D9%88-3-mp9qmhyj3o3h",
    imgVirgooL: "vue.png",
    title: "اموزش برای ورود به بازار کار در ویو ",
  },
  {
    linkVirgool:
      "https://virgool.io/CodeLovers/%D8%B1%D8%A7%D8%B2-%D9%87%D8%A7%DB%8C-%D9%82%D8%A8%D9%88%D9%84-%D8%B4%D8%AF%D9%86-%D8%AF%D8%B1-%D9%85%D8%B5%D8%A7%D8%AD%D8%A8%D9%87-%D9%87%D8%A7%DB%8C-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D9%85%D8%AB%D9%84%D8%A7-%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-wlsypc3doo2c",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/wlsypc3doo2c/tdhofhaqlfaw.jpeg",
    title: "مصاحبه های برنامه نویس فرانت اند",
  },
]);
const developerfour = ref([
  {
    linkVirgool:
      "https://virgool.io/CodeLovers/%D8%B1%D8%A7%D8%B2-%D9%87%D8%A7%DB%8C-%D9%82%D8%A8%D9%88%D9%84-%D8%B4%D8%AF%D9%86-%D8%AF%D8%B1-%D9%85%D8%B5%D8%A7%D8%AD%D8%A8%D9%87-%D9%87%D8%A7%DB%8C-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3%DB%8C-%D9%85%D8%AB%D9%84%D8%A7-%D8%AC%D8%A7%D9%88%D8%A7%D8%A7%D8%B3%DA%A9%D8%B1%DB%8C%D9%BE%D8%AA-wlsypc3doo2c",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/az86mg3fu2aw/z4zwo6jwnngz.jpeg",
    title: "ant design pro umi",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%DA%86%D8%B7%D9%88%D8%B1-%D9%BE%D8%B1%D9%88%DA%98%D9%87-%D9%87%D8%A7%D9%85%D9%88%D9%86-%D9%86%D9%82%D8%A7%D8%B4%DB%8C-%DA%A9%D9%86%DB%8C%D9%85-pfhb9osg0bix",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/pfhb9osg0bix/ykwpckmopanf.jpeg",
    title: "چطور کدهامون مرتب کنیم",
  },
  {
    linkVirgool:
      "https://virgool.io/@pooriavakili09/%DB%8C%DA%A9-%D8%A8%D8%B1%D9%86%D8%A7%D9%85%D9%87-%D9%86%D9%88%DB%8C%D8%B3-%D9%85%DB%8C-%D8%AA%D9%88%D8%A7%D9%86%D8%AF-%DA%AF%D8%B1%D8%A7%D9%81%DB%8C%D8%B3%D8%AA-%D8%A8%D8%A7%D8%B4%D8%AF-sujofarkhnhz",
    imgVirgooL:
      "https://files.virgool.io/upload/users/37678/posts/sujofarkhnhz/n7d2jxmpgasi.png",
    title: "svg",
  },
]);
</script>
