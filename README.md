# fonctionnement du requete ajax
`Nous avons tout d'abord crée un projet django appélé ajax, puis crée une application appélé run`
`Nous avons ensuite crée des templates et des fichiers static, les requetes ajax seront mises dans le fichier static script.js`
## initialisation de ajax
`Il y a plusieurs methodes , mais celle qui est plus recommandée est la methode fetch, et c'est ce que nous allons utiliser`
## fonctionnement la fonction fetch
`tout d'abord il faut definir l'url qui doit recevoir la requete ainsi que la methode http, pour cella on ecrit comme suit:`
## let url='votre url';
## let method='votre method(post,get,put,delete);

## definition de la requete
`fetch(url,{ 
    method:method 
})  
.then(function(response){
    // recevoir les reponse;
    if(!response.ok){
        throw new Error('requete echouée');
    }
    return response.json();
})
.then(function(data){
    // traiter les reponse;
}).catch(function(error){
    // gerer les erreur;
});`
