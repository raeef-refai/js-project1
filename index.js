 
document.onload()=>{


 	// Better variable names
   const inputText = document.querySelector("#input");
   const SubmitButton = document.querySelector("#btn-submit");
   const response = document.querySelector("#response");

   function getRepositories() {

   	 if (inputText.value === '') {
   	 	
       response.innerHTML = '<p>Please Enter A Username</p>'

   	 } else {
   	 	// var url='https://api.github.com/users/'+theInput;
   	 	// fetch(url)
      //    .then(response => response.json())

      //    .then((data) => {
      //      data.forEach(user => {

      //      	console.log(user)

      //      	const mainDiv = document.createElement('div');

      //      	const userName = document.createTextNode(user);

      //      	mainDiv.appendChild(userName);

      //      }) 
      //    });
       var url='https://api.github.com/users/'+inputText.value;
       var response=fetch(url)
         .then(response => response.json())
         .then(data => {
         	
         })

		
   	 }




   }

}