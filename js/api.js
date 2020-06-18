export class Api{

     constructor(artista,cancion){
          this.artista =artista
          this.cancion = cancion
     }
     async consultarApi(){
          const url = await fetch(`https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`)

          const resultado = await url.json()

          return{
               resultado
          }
     }
}