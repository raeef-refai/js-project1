
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
        responseTag.innerHTML=''; 
         //declaring variables to handle the required data
         var ProjectName; var RepoLink; var Description; var UserProfile;
         // sending the request and fetching the JSON file  -- resuming that we are getting 10 items per page -- will add pagination later
         var url=`https://api.github.com/search/repositories?q=${SearchInput.value}&page=1&per_page=10`     
         var response=fetch(url)
         .then(response => response.json())
         .then(data => {
         console.log(data.items);
         items=JSON.parse(JSON.stringify(data.items));
         items.forEach(item =>{

          // assigning the variables 

          UserProfile = item.owner.url;
          ProjectName=item.full_name;
          RepoLink = item.html_url;
          Description = item.description;

                 //-----------------------------------------------------------------------

            //create a div and text for the project name
          let ProjectDiv = document.createElement('div');
            
            //modification for var ${name}
            let ProjectNameNode = document.createTextNode(`Project Name: ${ProjectName}`);

            //appends the username to a div(userDive)
            ProjectDiv.appendChild(ProjectNameNode);

            //appends the div(userDive) to the main Response div(responseTag)
            responseTag.appendChild(ProjectDiv);

        //       //-----------------------------------------------------------------------

            //create a div and text for the project name
          let DescriptionDiv = document.createElement('div');
            
            //modification for var ${name}
            let DescriptionNode = document.createTextNode(`Project Description: ${Description}`);

            //appends the username to a div(userDive)
            DescriptionDiv.appendChild(DescriptionNode);

            //appends the div(userDive) to the main Response div(responseTag)
            responseTag.appendChild(DescriptionDiv);

        //-----------------------------------------------------------------------

            // create a div and text for the User Profile
            let UserProfileDiv = document.createElement('div');
          
           //modification for var ${bio}
            let UserProfileNode= document.createTextNode(`User Prfile: ${UserProfile}`);

            // appends the bio to a div(bioDiv)
            UserProfileDiv.appendChild(UserProfileNode);

            // appends the div(bioDiv) to the main Response div(responseTag)
            responseTag.appendChild(UserProfileDiv);

        //--------------------------------------------------------------------------

            //create a div and a link for the profile repo link

            let RepoLinkDiv = document.createElement('div');
            let RepoLinkElement = document.createElement('a');
            let RepoLinkText = document.createTextNode(`Checkout the Repository here!`);
            // specifices the path of the url and opens it in a new tab
            RepoLinkElement.href = RepoLink;
            RepoLinkElement.setAttribute('target', '_blank');

            //appends the text (RepoLinkDiv) to the <a> (accountLink)
            RepoLinkElement.appendChild(RepoLinkText);

            //appends the <a> (RepoLinkElemment) to a div (accountDiv)
            RepoLinkDiv.appendChild(RepoLinkElement);

            // appends the div (RepoLinkDev) to the main Response Div(responseTag)
            responseTag.appendChild(RepoLinkDiv);   

         }) 
      
         })

       //clearing the input after searching
       SearchInput.value='';

     }
   }

};


   
      