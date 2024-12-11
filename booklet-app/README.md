# BookletApp
Open new terminal 
    - cd booklet-app
    or use cd ../ from the previous dir
    -npm i
    -ng serve


CORS is set to allow requests from localhost:4200 - Please run ng app at localhost:4200

Main features:
    ### Home menu
        -Welcome message
        -Quick links
        -Top rated books - when clicked app redirects you to details page
    
    Accessible for everyone

    ### Browse menu
        -Catalog of all books - when clicked app redirects you to details page
        -search bar - NEEDS MORE WORK - when you type and then delete all characters the app doesn't show you all book
            -if you search only leters and numbers - it will provide you with search result based on the title
            -if you add @ infront of the word - it will provide you with search result based on the user who uploaded the books
            -if you add $ infront of the word - it will provide you with search result based on the author
            IMPORTANT - some special charactars break the search and the app - i tried to filter them, but there can be more
    
    Accessible for everyone

    ### Add menu
        -Provides the functionality to add new book
        -There are validator

    Accessible only for logged in users

    ### Details view
        -Provies detailed view
        -Buttons for adding to cart, add review, edit, delete 
        -Buttons appear dynamicly based of authorization and authentication - No guards are implemented through the whole app
        
        IMPORTANT - view need more work
    
    Accessible for everyone - view and features based on authorization and authentication

    ### Profile view
        -Provides quick links to your Cart, uploaded Books, Orders, Review - Some don't work in current version
        -Edin button - Don't work

    Accessible only for logged in users

    ### Cart view 
        -View all books in cart and Place order
        -No remove from card functionality currently available

    ### Orders vie
        -View all your orders

    ### Uploads view
    ### Review view
        -Not implemented, upload view was dependable on the search functionality

    There were supposted to be links on the author and user and genre in details view and in catalog view cards, but that depended on search functionality too


    ### Login view , Register view, Logout
        - it provides it's specified functionality

 
 IMPORTANT - no guards were implemente, only basic guards for the request at the back-end!
 It is 23:57 and i am officiali done... mike drop ... or more likely mouse drop! ;)