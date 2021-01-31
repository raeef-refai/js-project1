
  // wrapping the whole script with onload function so it assures that the script won't work if the html page isn't fully loaded 
   window.onload = () => {
 	// Better variable names -- decrlaring variables to use

   const SearchInput = document.querySelector("#input");
   const SubmitButton = document.querySelector("#btn-submit");
   const responseTag = document.querySelector("#response");
  
  // adding Event Listener for the button to make the search

   SubmitButton.addEventListener('click',()=>{
      getRepositories();
   });

// helper function to get the repos from github
   function getRepositories() {

// conditional -- handling exceptions
   	 if (SearchInput.value === '') {
   	 	
         alert('Please Enter Project name');

   	 } 
       else {

         //declaring variables to handle the required data
         var ProjectName; var RepoLink; var UserProfile;
         // sending the request and fetching the JSON file
         var url='https://api.github.com/search/repositories?q='+SearchInput.value;   	
         var response=fetch(url)
         .then(response => response.json())
         .then(data => {

         console.log(data);         	
         })

       //clearing the input after searching
       SearchInput.value='';

   	 }
   }

};