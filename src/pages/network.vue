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
      </div>
      
    </q-page>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style>
  </style>