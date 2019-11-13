<template>
  <v-app>
    <v-row justify="space-around">
      <v-card class="mx-2" max-width="500" outlined>
        <v-row dense>
          <v-col cols="12">
            <v-card-text>
              <v-card-title class="headline">Informacion General</v-card-title>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row dense class="px-4">
          <v-col cols="12">
            <v-form ref="form" v-model="valid" class="align-center">
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

              <v-text-field
                v-model="lastName"
                :counter="10"
                :rules="nameRules"
                label="Apellido"
                required
              ></v-text-field>

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Sexo"
                required
              ></v-select>

              <v-text-field v-model="date" type="date" label="Fecha de Nacimiento" required></v-text-field>

              <v-btn color="success" class="m-auto align-center" @click="validate">Validate</v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card>
      <!-- <v-avatar color="indigo" size="80">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar> -->
      <v-card class="mx-1" max-width="400" outlined>
        <v-row dense>
          <v-col cols="12">
            <v-card-text>
              <v-card-title class="headline">Notificaciones</v-card-title>
            </v-card-text>
          </v-col>
        </v-row>
        <v-row dense class="px-4">
          <v-col cols="12">
            <v-alert type="info">
                I'm a info alert.
            </v-alert>
            <v-alert type="info">
                I'm a info alert.
            </v-alert>
            <v-alert type="info">
                I'm a info alert.
            </v-alert>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    lastName: "",
    date: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Masculino", "Femenino"],
    checkbox: false,
    lazy: false
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>