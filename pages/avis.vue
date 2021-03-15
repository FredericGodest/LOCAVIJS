<template>
    <div class="grid">
        <vs-row justify="center">
            <h3>Type du logement ?</h3>
        </vs-row>
        <vs-row justify="center">
            <vs-select placeholder="Select" v-model="type">
                <vs-option label="Appartement" value="Appartement">
                Appartement
                </vs-option>
                <vs-option label="Maison" value="Maison">
                Maison
                </vs-option>
            </vs-select>
        </vs-row>

        <vs-row justify="center">
            <h3>Adresse</h3>
        </vs-row>
        <vs-row justify="center">
            <vs-input color="#e67e30" border v-model="adress" />
        </vs-row>
        <vs-row justify="center">
            <h1>CARTE ici</h1>
        </vs-row>

        <vs-row justify="center">
            <h3>Date d'arrivée</h3>
        </vs-row>
        <vs-row justify="center">
            <vs-input color="#e67e30" border
                type="date"
                v-model="date_in"
            />
        </vs-row>

        <vs-row justify="center">
            <h3>Date de départ</h3>
        </vs-row>
        <vs-row justify="center">
            <vs-input color="#e67e30" border
                type="date"
                v-model="date_out"
            />
        </vs-row>

        <vs-row justify="center">
            <vs-col :key="1" w="3">
                <h3 style="justify-content: center; text-align: center;">Thermique</h3>
                <div class="ratings" style="justify-content: center; text-align: center;">
                    <input type="radio" v-model="therm_score" id="star11" value="5" required><label for="star11"></label>
                    <input type="radio" v-model="therm_score" id="star12" value="4" required><label for="star12"></label>
                    <input type="radio" v-model="therm_score" id="star13" value="3" required><label for="star13"></label>
                    <input type="radio" v-model="therm_score" id="star14" value="2" required><label for="star14"></label>
                    <input type="radio" v-model="therm_score" id="star15" value="1" required checked><label for="star15"></label>
                </div>
                <span>Score : {{ therm_score }}</span>
            </vs-col>

            <vs-col :key="2" w="3">
                <h3 style="justify-content: center; text-align: center;">Sonore</h3>
                <div class="ratings" style="justify-content: center; text-align: center;">
                    <input type="radio" name="sound_score" id="star21" value="5" required><label for="star21"></label>
                    <input type="radio" name="sound_score" id="star22" value="4" required><label for="star22"></label>
                    <input type="radio" name="sound_score" id="star23" value="3" required><label for="star23"></label>
                    <input type="radio" name="sound_score" id="star24" value="2" required><label for="star24"></label>
                    <input type="radio" name="sound_score" id="star25" value="1" required checked><label for="star25"></label>
                </div>
            </vs-col>

            <vs-col :key="3" w="3">
                <h3 style="justify-content: center; text-align: center;">Quartier</h3>
                <div class="ratings" style="justify-content: center; text-align: center;">
                    <input type="radio" name="neigh_score" id="star41" value="5" required><label for="star41"></label>
                    <input type="radio" name="neigh_score" id="star42" value="4" required><label for="star42"></label>
                    <input type="radio" name="neigh_score" id="star43" value="3" required><label for="star43"></label>
                    <input type="radio" name="neigh_score" id="star44" value="2" required><label for="star44"></label>
                    <input type="radio" name="neigh_score" id="star45" value="1" required checked><label for="star45"></label>
                </div>
            </vs-col>
            
        </vs-row>

        <vs-row justify="center">
            <vs-col :key="1" w="3">
                <h3 style="justify-content: center; text-align: center;">Agencement</h3>
                <div class="ratings" style="justify-content: center; text-align: center;">
                    <input type="radio" name="layout_score" id="star31" value="5" required><label for="star31"></label>
                    <input type="radio" name="layout_score" id="star32" value="4" required><label for="star32"></label>
                    <input type="radio" name="layout_score" id="star33" value="3" required><label for="star33"></label>
                    <input type="radio" name="layout_score" id="star34" value="2" required><label for="star34"></label>
                    <input type="radio" name="layout_score" id="star35" value="1" required checked><label for="star35"></label>
                </div>
            </vs-col>

            <vs-col :key="2" w="3">
                <h3 style="justify-content: center; text-align: center;">Rangements</h3>
                <div class="ratings" style="justify-content: center; text-align: center;">
                    <input type="radio" name="storage_score" id="star61" value="5" required><label for="star61"></label>
                    <input type="radio" name="storage_score" id="star62" value="4" required><label for="star62"></label>
                    <input type="radio" name="storage_score" id="star63" value="3" required><label for="star63"></label>
                    <input type="radio" name="storage_score" id="star64" value="2" required><label for="star64"></label>
                    <input type="radio" name="storage_score" id="star65" value="1" required checked><label for="star65"></label>
                </div>
            </vs-col>

            <vs-col :key="3" w="3">
                <h3 style="justify-content: center; text-align: center;">Luminosité</h3>
                <div class="ratings" style="justify-content: center; text-align: center;">
                    <input type="radio" name="light_score" id="star51" value="5" required><label for="star51"></label>
                    <input type="radio" name="light_score" id="star52" value="4" required><label for="star52"></label>
                    <input type="radio" name="light_score" id="star53" value="3" required><label for="star53"></label>
                    <input type="radio" name="light_score" id="star54" value="2" required><label for="star54"></label>
                    <input type="radio" name="light_score" id="star55" value="1" required checked><label for="star55"></label>
                </div>
            </vs-col>
            
        </vs-row>

        <vs-row justify="center">
            <vs-button
                color="#e67e30"
                gradient
                :active="active == 6"
                @click="active = 6"
            >
                <i class="bx bxs-purchase-tag"></i> Enregistrer
            </vs-button>
        </vs-row>

        

        
    </div>

</template>

<script>
    export default {
      data:() => ({
        type: '',
      })
    }
</script>

<style>
  	.ratings{
  		position: relative;
  		top: 100%;
  		left: 50%;
  		transform: translate(-50%,0%) rotateY(180deg);
  		display: flex;
  	}
  	.ratings input{
  		display: none;
  	}

  	.ratings label:before{
  		content: '\f005';
  		font-family: fontAwesome;
  		position: relative;
  		display: block;
  		font-size: 2em;
  		color: #D3D3D3;
  	}

  	.ratings label:after{
  		content: '\f005';
  		font-family: fontAwesome;
  		position: absolute;
  		display: block;
  		font-size: 2em;
  		color: #FFA500;
  		top: 0;
  		opacity: 0;
  		transition: .5s;
  		text-shadow: 0 2px 5px rgba(0,0,0,.5);

  	}
  	.ratings label:hover:after,
  	.ratings label:hover ~ label:after,
  	.ratings input:checked ~ label:after{
  		opacity: 1;

  	}
</style>

        