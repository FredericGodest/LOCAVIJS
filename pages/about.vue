<template>
    <div>
        <div class="center grid">
            <vs-row justify="center">
                <vs-col :key=1 vs-type="flex" vs-justify="center" vs-align="center" w="8">
                    <div class = "articles">
                        <h1>Qu'est ce que LOCAVI ?</h1>
                        <p>LOCAVI est une plateforme qui met en relation les locataires d'appartement et de maison 
                        en partageant leurs avis pour les futurs locataires.</p>
                    </div>
                </vs-col>
            </vs-row>

            <vs-row justify="center">
                <vs-col :key=1 vs-type="flex" vs-justify="center" vs-align="center" w="8">
                  <div class = "articles">
                    <h1>Pourquoi donner son avis ?</h1>
                    <p>Aujourd'hui il n'existe pas encore de moyen de donner un avis sur sa location aussi simplement
                    que pour donner son avis pour un hotel, un restaurant, une activité, etc.</p>
                    <p>Les avis sur les restaurants ou sur les hotels nous aident beaucoup à choisir le bon, alors pourquoi
                    ne pas faire de même avec des locations d'appartement ou de maison ?</p>
                  </div>
                </vs-col>
            </vs-row>
            <vs-row justify="center">
                <vs-col :key=1 vs-type="flex" vs-justify="center" vs-align="center" w="8">
                  <div class = "articles">
                    <h1>Comment utiliser la plateforme ?</h1>
                    <p>Vous pouvez utiliser la plateforme de 2 manières : </p>
                    <li>1 - En tant que consommateur en utilisant la carte pour rechercher les avis dans votre zone.</li>
                    <li>2 - En tant que contributeur en se connectant à la plateforme et en partageant vos avis au plus grand nombre.</li>
                  </div>
                </vs-col>
            </vs-row>

        </div>

      <div id="circle1">
        <p id="inside_circle">Nous souhaitons que les avis postés sur cette plateforme soient dans l'unique but d'aider.
				Nous ne tolérons pas la diffamation ou les insultes.</p>
      </div>

      <div id="circle2">
        <p id="inside_circle">Cette plateforme a été faite dans le but d'aider les locataires entre eux en mettant avant les bons plans.
				Nous souhaitons que cette philosophie soit conservée et soit partagée entre les contributeurs.</p>
      </div>

      <div id="circle3">
        <p id="inside_circle">Toutes les données qui sont visibles de tous sont uniquement les notes et les géolocatlisation des appartements ou des maisons.
				Les adresses e-mail et les mots de passe sont conservés et sont criptés.</p>
      </div>
    </div>
    
</template>

<script>
  export default {
    data() {
      return {
        title: 'LOCAVI | A propos'
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

<style>

.grid {
  margin:2vw;
}

.articles {
  margin-top:2vh;
  margin-bottom:2vh;
}
#inside_circle{
  position: relative;
  margin:2em;
  top: 25%;
  text-align: center;
}
#circle1 {
    position: absolute;
    top: 60vh;
    left: 33.5%;
    background: #e67e30;
    width: 33vh;
    height: 33vh;
    border-radius: 50%;

    animation: sizeTransform 4s infinite ease-in-out;
}

#circle2 {
    position: absolute;
    top: 90vh;
    left: 7%;
    background: #e67e30;
    width: 33vh;
    height: 33vh;
    border-radius: 50%;

    animation: sizeTransform 4s 2s infinite ease-in-out;
}

#circle3 {
    position: absolute;
    top: 95vh;
    left: 55%;
    background: #e67e30;
    width: 33vh;
    height: 33vh;
    border-radius: 50%;

    animation: sizeTransform 4s 4s infinite ease-in-out;
}

@keyframes sizeTransform{
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
    100% {
      transform: scale(1);
    }
	}
</style>