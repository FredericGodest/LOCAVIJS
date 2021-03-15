<template>
    <div class="center examplex">
      <vs-navbar color="#e67e30" text-white square center-collapsed v-model="active">
        <template #left>
          <h4>LOCAVI</h4>
        </template>
        <vs-navbar-item :active="active == 'map'" to="/" id="map">
          Carte
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'avis'" to="/avis" id="avis">
            Entrer Avis
        </vs-navbar-item>
        
        <vs-navbar-group>
          Plus d'informations
          <template #items>
            <vs-navbar-item :active="active == 'Articles'" to="/articles" id="Articles">
              Articles
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'about'" to="/about" id="about">
              A propos
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'Politic'" to="/politique" id="Politic">
              Politique
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'contact'" to="/contact" id="contact">
              Contact
            </vs-navbar-item>
          </template>
        </vs-navbar-group>
        <template #right>
          <vs-button to="/connexion" color="#fff" border >Se connecter</vs-button>
        </template>
      </vs-navbar>
    </div>
</template>

  <script>
  export default {
    data:() => ({
      active: 'guide'
    })
  }
  </script>