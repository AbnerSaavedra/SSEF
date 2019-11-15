<template>
  <v-app>
    <div class="ma-10">
      <v-container fluid>
        <div class="mb-10">
          <h1 class="display-2 font-weight-bold">
            Encuentra
            <br />el/la profe ideal
          </h1>
        </div>
        <v-row class="d-flex">
          <v-col cols="8" md="8">
            <v-text-field
              flat
              solo-inverted
              hide-details
              prepend-inner-icon="mdi-magnify"
              label="¿Qué quieres aprender?"
            />
          </v-col>
          <v-col cols="4" md="4">
            <v-btn large color="success" dark>Buscar</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-card height="300" color="success" dark class="pa-8 my-12">
        <v-card-title class="display-2 font-weight-bold">Aprende en total confianza</v-card-title>

        <v-row>
          <v-col cols="4" md="4">
            <v-icon size="50">mdi-table-search</v-icon>
            <h3 class="headline font-weight-bold">Encuentra</h3>
            <p
              class="body-2 font-weight-light"
            >la joya entre perfiles titulados, evaluados y disponibles.</p>
          </v-col>
          <v-col cols="4" md="4">
            <v-icon size="50">mdi-bookmark-plus </v-icon>
            <h3 class="headline font-weight-bold">Reserva</h3>
            <p class="body-2 font-weight-light">tu clase hoy mismo. Obtendrás respuesta muy pronto.</p>
          </v-col>
          <v-col cols="4" md="4">
            <v-icon size="50">mdi-heart</v-icon>
            <h3 class="headline font-weight-bold">En total libertad</h3>
            <p
              class="body-2 font-weight-light"
            >trabajas en directo, al mejor precio y sin intermediarios.</p>
          </v-col>
        </v-row>
      </v-card>

       <div class="mb-10">
        <h2 class="display-2 font-weight-bold">
          Aprende
          <br />lo que quieras
        </h2>
        <br />
        <p class="body-1">
          Sé el rey/la reina de la cocina o conviértete en
          <br />un/a guitarrista de éxito.
          <br />¡Vive nuevas aventuras!
        </p>
      </div>

      <v-carousel hide-delimiters class="my-10">
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>

      <div class="d-flex justify-center">
        <v-card class="mx-2 px-5 py-0" width="100%" outlined>
          <v-row no-gutters>
            <v-col v-for="item in element" :key="item" cols="3" sm="3">
              <v-card-text>
                <p class="font-weight-black">{{ item.name }}</p>
                <p v-for="n in item.value" :key="n" class="caption">{{ n }}</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </div>

      <div class="my-7">
        <h2 class="display-2 font-weight-bold">
          Aprende
          <br />donde quieras
        </h2>
      </div>
      <div>
        <p class="subtitle-1 font-weight-black">
          <v-icon size="30">mdi-video</v-icon>
          En todo el mundo por webcam
        </p>
      </div>
      <v-card>
    <v-tabs
      background-color="white"
      color="deep-purple accent-4"
      right
    >
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                aspect-ratio="1"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>

  <div class="my-8">
        <p class="subtitle-1 font-weight-black">
          <v-icon size="30">mdi-map-marker</v-icon>
          Presencial
        </p>
      </div>

      <div class="d-flex justify-center">
        <v-card class="mx-2 px-5 py-0" width="100%" outlined>
          <v-row no-gutters>
            <v-col v-for="item in location" :key="item" cols="3" sm="3">
              <v-card-text>
                <p v-for="n in item.value" :key="n" class="caption">{{ n }}</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </div>

      <div class="my-8">
        <p class="subtitle-1 font-weight-black">
          <v-icon size="30">mdi-poll</v-icon>
          Para todos los tipos y niveles
        </p>
      </div>

      <div class="d-flex justify-center">
        <v-card class="mx-2 px-5 py-0" width="100%" outlined>
          <v-row no-gutters>
            <v-col v-for="item in education" :key="item" cols="4" sm="4">
              <v-card-text>
                <p v-for="n in item.value" :key="n" class="caption">{{ n }}</p>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </div>

    </div>
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">¡Conéctate con nosotros en las redes sociales!</strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
          <v-icon>fab fa-facebook-square</v-icon>
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} —
          <strong>SSEF</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      element: [
        {
          name: "Escolar",
          value: ["Apoyo escolar", "Matematicas", "Fisica", "Quimica"]
        },
        {
          name: "Idiomas",
          value: ["Ingles", "Aleman", "Español", "Italiano", "Chino"]
        },
        {
          name: "Música",
          value: ["Piano", "Guitarra", "Canto", "Bateria", "Violin"]
        },
        {
          name: "Deporte",
          value: [
            "Patinaje",
            "Ponerse en forma",
            "Boxeo",
            "Entrenador personal",
            "Natación"
          ]
        }
      ],
      location: [
        {
          value: ["Madrid", "Malaga", "Córdoba", "Palma de Mallorca"]
        },
        {
          value: ["Barcelona", "Bilbao", "Guijón", "Valladolid"]
        },
        {
          value: ["Valencia", "A Coruña", "Granada", "Vigo"]
        },
        {
          value: [
            "Zaragosa",
            "Alicante",
            "Boxeo",
            "Sevilla",
            "Muricia"
          ]
        }
      ],
      education: [
        {
          value: ["Primaria", "ESO", "Bachillerato", "Selectividad", "FP - Formación Profesional"]
        },
        {
          value: ["Estudios superiores", "Escuela de adultos", "Básico", "Intermedio", "Avanzado"]
        },
        {
          value: ["Grado elemental", "Grado Profesional", "Grado Superios"]
        }
      ],
      icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-google-plus",
      "mdi-linkedin",
      "mdi-instagram"
    ]
    };
  }
};
</script>
