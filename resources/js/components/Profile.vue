<template>
  <v-app>
    <v-container fluid>
      <v-row justify="start d-flex flex-wrap">
        <v-col cols="6" md="4">
          <v-card class="mx-2 pa-5" max-width="500" outlined>
            <v-card-text>
              <p class="font-weight-black text-center">Información General</p>
            </v-card-text>

            <v-form ref="form" v-model="valid" class="align-center">
              <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Nombre" required></v-text-field>

              <v-text-field
                v-model="lastName"
                :counter="10"
                :rules="lastNameRules"
                label="Apellido"
                required
              ></v-text-field>

              <v-text-field 
                v-model="email" 
                :rules="emailRules" 
                label="E-mail" 
                required></v-text-field>

              <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'El sexo es requerido']"
                label="Sexo"
                required
              ></v-select>

              <v-text-field 
                v-model="date" 
                type="date" 
                label="Fecha de Nacimiento" 
              ></v-text-field>

              <v-text-field 
                v-model="phone"
                label="Telefono"
              ></v-text-field>

              <v-btn color="success" block @click="validate">Validar</v-btn>
            </v-form>
          </v-card>
        </v-col>

        <v-col cols="6" md="4">
          <v-card class="mx-2 pa-5" max-width="400" outlined>
            <v-card-text>
              <p class="font-weight-black text-center">Foto de perfil</p>
            </v-card-text>
            <!-- <v-img
              src=""
              lazy-src="https://www.superprof.es/images/photo-default_300.jpg?r=57371"
              aspect-ratio="0.5"
              class="grey lighten-2"
              style="object-fit: fill;"
              max-width="150"
              max-height="150"
            ></v-img>-->
            <div class="d-flex justify-center mb-5">
              <v-avatar color="indigo" size="250">
                <v-icon size="220" dark>mdi-account-circle</v-icon>
              </v-avatar>
            </div>
            <v-btn color="success" block>Subir</v-btn>
          </v-card>
        </v-col>

        <v-col cols="6" md="4">
          <v-card class="mx-2 pa-5" max-width="400" outlined>
            <v-card-text>
              <p class="font-weight-black text-center">Notificaciones</p>
            </v-card-text>
            <div class="px-4">
              <p class="text-uppercase font-weight-black">sms</p>
              <v-alert type="success">Solicitudes de clase</v-alert>
              <p class="text-uppercase font-weight-black">Correo electronico</p>
              <v-alert type="success">Actividad de la cuenta</v-alert>
              <v-alert type="success">Solicitudes de clase</v-alert>
              <v-alert type="success">Ofertas relacionadas con mis anuncios</v-alert>
            </div>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="mx-2 pa-5" max-width="400" outlined>
            <v-card-text>
              <p class="font-weight-black text-center">Titulo</p>
            </v-card-text>
            <div class="d-flex justify-center mb-5">
              <v-avatar color="indigo" size="250">
                <v-icon size="180" dark>mdi-book-outline</v-icon>
              </v-avatar>
            </div>
            <v-btn color="success" block>Subir</v-btn>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="mx-2 pa-5" max-width="500" outlined>
            <v-card-text>
              <p class="font-weight-black text-center">Cambiar la contraseña</p>
            </v-card-text>

            <v-form ref="form" v-model="valid" class="align-center">
              <v-text-field
                v-model="oldPassword"
                label="Antigua contraseña"
                type="password"
              ></v-text-field>

              <v-text-field
                v-model="newPassword"
                label="Nueva contraseña"
                type="password"
              ></v-text-field>

              <v-text-field
                v-model="confirmPassword"
                
                label="Nueva contraseña"
                type="password"
              ></v-text-field>

              <v-btn color="blue-grey" class="white--text" block>Cambiar mi contraseña</v-btn>
            </v-form>
          </v-card>
        </v-col>
        <v-col cols="6" md="4">
          <v-card class="mx-2 pa-5" max-width="400" outlined>
            <v-card-text>
              <p class="font-weight-black text-center">Eliminación de la cuenta</p>
            </v-card-text>
            <p>¡ATENCIÓN! Todos tus datos (contactos, anuncios, correos electrónicos,...) serán eliminados definitivamente y de manera irreversible.</p>
            <v-form ref="form" v-model="valid" class="align-center">
              <div class="justify-center mb-5">
                <v-checkbox v-model="deleteAccount" label="Eliminar mi cuenta"></v-checkbox>

                <v-text-field
                  v-model="newPassword"
                  label="Contraseña"
                  type="actualyPassword"
                ></v-text-field>
              </div>
              <v-btn color="blue-grey" class="white--text" block>Eliminar mi cuenta</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    lastName: "",
    phone: "",
    date: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
    actualyPassword: "",
    deleteAccount: "",
    nameRules: [
      v => !!v || "El nombre es requerido",
      v =>
        (v && v.length <= 10) || "El nombre debe tener menos de 10 caracteres."
    ],
    lastNameRules: [
      v => !!v || "El apellido es requerido",
      v =>
        (v && v.length <= 10) ||
        "El apellido debe tener menos de 10 caracteres."
    ],
    email: "",
    emailRules: [
      v => !!v || "El correo electronico es requerido",
      v => /.+@.+\..+/.test(v) || "El correo electrónico debe ser válido"
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