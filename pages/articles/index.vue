<template>
    
    <vs-row align="center" justify="center">
        <vs-col w="10">
            <vs-card type="1" >
                <template @click="/checkin" #title_card>
                <h3>Conseils avant de louer</h3>
                </template>
                <template #img>
                <img src="https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg" alt="">
                </template>
                <template #text>
                <p>
                    Liste de conseil avant de louer ton logement :)
                </p>
                </template>
                <template #interactions>
                <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                    54
                    </span>
                </vs-button>
                </template>
            </vs-card>
        </vs-col>
        <vs-col w="10">
        
            <vs-card type="1">
                <template #title_card>
                <h3>Conseils avant de louer</h3>
                </template>
                <template #img>
                <img src="https://jojo-app.fr/wp-content/uploads/2018/09/espace-optimise-appartement-meuble-paris.jpg" alt="">
                </template>
                <template #text>
                <p>
                    Liste de conseil avant de louer ton logement :)
                </p>
                </template>
                <template #interactions>
                <vs-button danger icon>
                    <i class='bx bx-heart'></i>
                </vs-button>
                <vs-button class="btn-chat" shadow primary>
                    <i class='bx bx-chat' ></i>
                    <span class="span">
                    54
                    </span>
                </vs-button>
                </template>
            </vs-card>
        </vs-col>
    </vs-row>
  

</template>


<script>
  export default {
    data() {
      return {
        title: 'LOCAVI | Articles'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'articles_inde',
            name: 'articles_index',
            content: 'Sommaires des articles'
          }
        ]
      }
    }
  }
</script>
