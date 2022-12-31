<template>
    <q-page>
      <div class="row q-col-gutter-sm q-py-sm">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <a
            href="https://www.aparat.com/v/nJqjF?playlist=1891142"
            style="text-decoration: none"
          >
            <q-card class="bg-warning" style="height: 200px">
              <div dir="rtl">
                <q-card-section class="col">
                  <div class="text-center">
                    <img
                      style="width: 140px; border-radius: 20%"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  <div class="q-mt-xs text-center text-white">
                آموزش nuxt js
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </a>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <a
            href="https://www.aparat.com/v/iyahE?playlist=1891150"
            style="text-decoration: none"
          >
            <q-card class="bg-warning" style="height: 200px">
              <div dir="rtl">
                <q-card-section class="col">
                  <div class="text-center">
                    <img
                      style="width: 140px; border-radius: 20%"
                      src="pinia.png"
                      alt=""
                    />
                  </div>
                  <div class="q-mt-xs text-center text-white">
                    آموزش pinia
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </a>
        </div>
        
      </div>
      
    </q-page>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  </style>