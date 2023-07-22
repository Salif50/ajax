// 1 incrementation du nombre
// recuperation du boutton augmenter
let btn=document.getElementById('btn');


// association de l'evenement clique sur le boutton recuperé
btn.addEventListener('click',()=>{
    // recuperation du nombre initiale sur la page dans la balise span
    let nbre=document.getElementById('number').textContent;

    // converstion du nombre en entier
    parseNumber=parseInt(nbre);
    // definition du url vers la views qui permet d'augmenter le nombre
    let url = `http://localhost:8000/ajax_response/${parseNumber}/`;
    // la methode http
    let method='GET';
    // fonction ajax
    fetch(url,{
        method:method
    })
    .then(function(response){
        // verifion de la response envoyée  par le serveur
        if(!response.ok){
            throw new Error('echec de requete '+ response.status) 
        }
        // puis on retourne la reponse sous format json
        return response.json();
    })
    .then(function(data) {
        // traitement des données envoyées par le serveur
        nbre = data.number;
        document.getElementById('number').textContent = nbre;
    })    
    .catch(function(error) {
        // Gérer les erreurs ici
        console.error('Erreur lors de la requête fetch :', error);
      });
  });

  // 2 les commentaires

// recuperation du formulaire
  let frm=document.getElementById('frm');
// association de l'evenement
  frm.addEventListener('submit',(e)=>{
    // stoper l'action c-a-d l'envoi de formulaire
    e.preventDefault();
    // recuperation du commentatire
    let comment=document.getElementById('comment');
    // definition du formulaire à envoyé
    let dataForm =new FormData(document.getElementById('frm'));
   
    // les paramètre du requete ajax
    let url="http://localhost:8000/send-comment/";
    let method='POST';

    // la requetes ajax
    fetch(url,{
        method:method,
        body:dataForm
    })
    .then(function(response){
        if (!response.ok){
            throw new Error('la requet a echoué');
        }

        return response.json();
    })
    .then(function(data){
        // creation du nouveau commentaire à afficher
        let  div=document.createElement('div');
        div.innerHTML=` <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                        <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">Marry Andrews</span><span class="date text-black-50">Shared publicly - Jan 2020</span></div>
                    </div>
                    <div class="mt-2">
                        <p class="comment-text">${data.comment}</p>
                    </div>`;
        let comments=document.getElementById('zone-comment');

        comments.insertBefore(div,comments.firstChild);

        comment.value="";
        

    });


  })