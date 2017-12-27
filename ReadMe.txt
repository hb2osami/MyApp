How To Install : 
	npm install -g http-server. After installation cd into your project folder and run http-server -o. -o is to open browser to the page 
	then open index.html



The Approach :
    In this Project I worked with Angular For many  main  Reasons :
    
       The First Reason is having an API of gitHUB that send us JSON Data  , I didn't find any utily of using other backend language ( php for example ) , I could use to is to parse JSON responses but it's an old method and thats makes the modularity of the app complex  . more than that we need a server to execute php or one of it frameworks  .. So I focused only on the new front end frameworks
       
       The Second Reason:  ANgular is  a component based MVC framework. ( View ,Controllers , Model) , thats what would allow us to modify  the code easily in the futur  , more than that in our application with that framework I didn't write a lot of code

       The Third Reason is that simply I've coded before javascript ( jquery) so I didn't found a lot of problems using angular

       And Finally : Easy installation 
       
       
    How To Install : Easy : Execute Index.html in public_html


    What I will Improve :

    	   		Architecture :Actually All the code is written in /js/script.js so in the futur I'll separate into files ( services , controllers ,filters ..) , that why we could see the
				     	architecture 

    	   		Filters      :Actually there is a bug when I try to sort by Name , So I will write new filters that allow us to sort the table of commits by name after clicking on the name for					example

		 	Algorithms   : Too see a commit I've written the code Manually to parse json to a List . I know all the fields before  . I'll write a function thats parse JSON automatically and 					dynamically,for example if the field is not simple and complex (contains other fields that I don't know ) then I will apply the function recursivly

			Design  : I will improve the design of the websiteApplication


			More Features : Show All porjects of the company , and by clicking on of them , we'll see all Thoe commits

			     	       See The Details of a commiter





			  
			 
    
