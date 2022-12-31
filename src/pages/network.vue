<template>
    <q-page>
      <div class="row q-col-gutter-sm q-py-sm">
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
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
                pooriavakili09@gmail.com
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </a>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <a
            href="https://github.com/pooriaashkevarvakili"
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
                گیت هاب
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </a>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <a
            href="https://www.linkedin.com/in/pooria-ashkevar-vakili-6457a917a"
            style="text-decoration: none"
          >
            <q-card class="bg-warning" style="height: 200px">
              <div dir="rtl">
                <q-card-section class="col">
                  <div class="text-center">
                    <img
                      style="width: 140px; border-radius: 20%"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AeLcAbbL6/P31+fwAdrYAcbQAcLUSgLxFk8eTvdyLuNne7fa00OUphr4AdLWbw97u9vpdoM07jsMdgr3U5vG/2OrK4O6rzeRio85Ol8h5rtMxicF9sdVanMtrps+vzuQAaK/Z6fK51eeZwd6scRTnAAAEs0lEQVR4nO2d7XqiMBBGJZoEPwN+gKu1dq33f42LXbEEJm5/kIxh3/OXeYqnIRBmQjIaAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQM04DEx2k/16ZUQIzGq9n4QXzKQ2MgmDNNpkgf3yjQild5cUmzyoYKqC+t0waUjFaXjBSnETTjATDIJJIoL1xbExLIZShbqj7jWLYJLofSDDXzxNWPXEdSDDVdgHxTdyG0ZwzCVYNWKYAdyY5056Q4S51bgMZTW6Usr4HMvxGhqhDsf5/LjRwtudiNGwGhuvi/r4cio8NSSfodRvl2ZIkSovimyGUpxaMZN3L6MCLkMp5t2otfbQikyGUp2psKmH+w2XIT3SyD1cp0yG4pOOm/X/EsljKFeOuInsvSfyGKqrK7D/dxAeQ3FxBS57v0yZ+qFzvL/ofYjOYijf3IGDaEP5LAPW++j01dpw1PvglMXQpM5+mA+kH2pnKrrofVTDcy/VH67A0yDuNNVlOnUFbgcypknEjo777D9jxWRoDnRc0n8qg+sNWJMVk6OH+hTbO74uulFe6lN8mSjRUfRTgGPMJuqT9dzP136K4JwZYbXNHmfPZ4mnGjFrzlsqfbgWZVnMpkL1/3b/AoZfee/b7BflsbrIbJjIilt9ZriG/mGsW7RI7IaUSeuohTFKVdf379sVrszTLsxoqLTW6oG2C2ymeewW2Uj4G6XTw3G/LHaXXfmZHQ+JePLezPjEP+0WFuVZP5pRHUr74GKZ/P0HSCM22cV+gx7v5qlwtSSbITUL5DEspQbmiy8BKd5L8gyFa9Yc27g0JaLy2lBTFueqEVVK+934oIvlbIbkO3B6/4l6QRycq0T8enaSnJw695KG0mFI1RwtqAJkTIa/21XjLu/dVozJ8P0H53nr9MWIDGc/+amLTiNGZPgzru0zDc6wM0dweIbLduJycIaPh+pwDa9q6IYL+7E/QMPWvKMhGs5V7Ib5rigvT353KaI2HGer2xu/MFPHtKrRaGJ1xNgMy+Q+07Z615+6KsnbiA2X38kKKU3iUDybaA13rVKyY9aKNf8vLsOtnRuXju+2Ppqpt6gM9+1kE5ntqTprc0JHTIbjtJOjEGRiahHrVVp0k67qSAVGa0hU+Q05FTc3kfbD7kWaSEU9MCbNkIgMcyKpLQUVaXXYiAwLKm1P32rSxlMlIsOMyGhLetL/Ns42nFM5e72k/g4MPRDYcAXD/oHhnd4M43xawLABDD0AwzswhGENDD0AwzswhGENDD0AwzswhGENDD0AwzswhGENDD3wHxrSqyoMKedNT/b51zczMbVhYogC/K6eB0OuDHIgSsBSUZ/R5C8xr41Y33f8Vv/rJTFj7YNeclARZe71K8zFuH2GNp9ZnOT3tSXV8WofdX2tb8TZDpzNVy8xg/bLwsaes2aeHm3+mXZk63tSfOnclyHXct7B1oJmXM/btURj3wx/Tfbhr6s/Cbb9io00wXab4drfwrmOaP9shr5HyShPw99snN8reFIc+l5BFZkJut+TCr3f0+hrz65toD27tut96AasGU9CwLXvGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4BX5A82xYbdHYxDvAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </div>
                  <div class="q-mt-xs text-center text-white">
                    لینکدین
                  </div>
                </q-card-section>
              </div>
            </q-card>
          </a>
        </div>
        <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12">
          <a
            href="https://api.whatsapp.com/send/?phone=989376720694&text&type=phone_number&app_absent=0"
            style="text-decoration: none"
          >
            <q-card class="bg-warning" style="height: 220px">
              <div dir="rtl">
                <q-card-section class="col">
                  <div class="text-center">
                    <img
                      style="width: 140px; border-radius: 20%"
                      src="data:image/jpeg;base64,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"
                      alt=""
                    />
                  </div>
                  <div class="q-mt-xs text-center text-white">
                    تلفن
                  </div>
                  <div class="q-mt-xs text-h6 text-center text-white">
                    09376720694
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