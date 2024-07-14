/// <reference types="../@types/jquery" />

let rowData = document.getElementById('rowData');








$('document').ready(function () {

    class GetData {


// found out after getting burned
        async getMealsOrigen(url, word) {
            try {
                let response = await fetch(`${url}=${word}`, { method: 'GET' });
                let result = await response.json();
                return result.meals || []; // why || []? to fix meals is not iterable so it will return empty array 
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }
        async getMeals() {
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`, { method: 'GET' });
                let result = await response.json();
                return result.meals || []; // why || []? to fix meals is not iterable so it will return empty array 
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }

        async getCategories() {
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`, { method: 'GET' });
                let result = await response.json();
                return result.categories;
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }
        async getAreas(){
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`, { method: 'GET' });
                let result = await response.json();
                return result.meals;
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }
        async getIngredients(){
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`, { method: 'GET' });
                let result = await response.json();
                return result.meals;
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }


        async getByName(name){
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`, { method: 'GET' });
                let result = await response.json();
                return result.meals || [];
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }
      
        async getByFirstLetter(letter){
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`, { method: 'GET' });
                let result = await response.json();
                return result.meals || [];
            } catch {
                console.log('Error fetching data');
                return [];
            }
        }

        async getMealById(id) {
            try {
                let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, { method: 'GET' });
                let result = await response.json();
                return result.meals[0];
            } catch {
                console.log('Error fetching data');
                
            }
           

        }





    }

    class DisplayData {

        displayMeals(meals) {
            let mealBox = '';
            for (const meal of meals) {
                mealBox += `
                    <div  class="col-md-3 ">
                        <div data_id='${meal.idMeal}'  class="item-inner position-relative overflow-hidden rounded-4">
                            <div  class="overlay d-flex justify-content-start align-items-center">
                                <h2 class="text-capitalize">${meal.strMeal}</h2>
                            </div>
                            <div  class="mealImage">
                                <img class="w-100" src="${meal.strMealThumb}" alt="">
                            </div>
                        </div>
                    </div>
                `;
            }
            
     
            rowData.innerHTML = mealBox;
         

        }

        displayCategories(categories) {
            let categoriesBox = '';
            for (const category of categories) {
                categoriesBox += `
                    <div class="col-md-3">
                        <div data_id='${category.idCategory}' class="item-inner position-relative overflow-hidden rounded-4">
                            <div class="overlay text-center">
                                <h2 class="text-capitalize">${category.strCategory}</h2>
                                <p>${category.strCategoryDescription}</p>
                            </div>
                            <div class="mealImage">
                                <img class="w-100" src="${category.strCategoryThumb}" alt="">
                            </div>
                        </div>
                    </div>
                `;
            }
            rowData.innerHTML = categoriesBox;
        }
        displayAreas(areas) {
            let areasBox = '';
            for (const area of areas) {
                areasBox += `

            
                <div class="col-md-3">
                        <div class="item-inner text-center">
                            <i class="fa-solid fa-house-laptop fa-4x"></i>
                            <p class='fs-3'>${area.strArea}</p>
                        </div>
                    </div>
                `;
            }
            rowData.innerHTML = areasBox;
        }

        displayIngredients(ingredients) {
            let ingredientsBox = '';
            for (let i = 0; i < 24; i++) {
                ingredientsBox += `
                    <div class="col-md-3">
                        <div class="item-inner text-center">
                            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                              <h3 class="text-capitalize">${ingredients[i].strIngredient}</h3>
                            <p class='cut-line'>${ingredients[i].strDescription}</p>
                        </div>
                    </div>
                `;
            }
            rowData.innerHTML = ingredientsBox;
      
        }
        displayInputs(){
            let inputsBox = '';
            inputsBox += `
            <div class="container w-75 vh-100 contact-form">
                        <div class=" row g-3">
                            <div class="mb-3 col-md-6">
                                <input  type="text" class="form-control text-capitalize bg-white text-black" id="userName" placeholder="enter your name">
                                <div class="alert alert-danger mt-2 d-none" role="alert">
                                    A simple danger alert—check it out!
                                  </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <input type="email" class="form-control text-capitalize bg-white text-black" id="userEmail" placeholder="enter your email">
                                <div class="alert alert-danger mt-2 d-none" role="alert">
                                    A simple danger alert—check it out!
                                  </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <input type="text" class="form-control text-capitalize bg-white text-black" id="userPhone" placeholder="enter your phone">
                                <div class="alert alert-danger mt-2 d-none" role="alert">
                                    A simple danger alert—check it out!
                                  </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <input type="number" class="form-control text-capitalize bg-white text-black" id="userAge" placeholder="enter your age">
                                <div class="alert alert-danger mt-2 d-none" role="alert">
                                    A simple danger alert—check it out!
                                  </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <input type="password" class="form-control text-capitalize bg-white text-black" id="userPassword" placeholder="enter your password">
                                <div class="alert alert-danger mt-2 d-none" role="alert">
                                    A simple danger alert—check it out!
                                  </div>
                            </div>
                            <div class="mb-3 col-md-6">
                                <input type="password" class="form-control text-capitalize bg-white text-black" id="rePassword" placeholder="rePassword">
                                <div class="alert alert-danger mt-2 d-none" role="alert">
                                    A simple danger alert—check it out!
                                  </div>
                            </div>
                            <button disabled id="submitForm" class="btn w-auto m-auto btn-outline-danger text-capitalize">submit</button>
                          </div>
                          
                    </div>
                `;
                rowData.innerHTML = inputsBox;

        }
        displayMealsByName(meals) {
            let mealBox = '';
            for (const meal of meals) {
                mealBox += `

                    <div class="col-md-3 ">
                        <div  data_id='${meal.idMeal}' class="item-inner position-relative overflow-hidden rounded-4">
                            <div class="overlay d-flex justify-content-start align-items-center">
                                <h2 class="text-capitalize">${meal.strMeal}</h2>
                            </div>
                            <div class="mealImage">
                                <img class="w-100" src="${meal.strMealThumb}" alt="">
                            </div>
                        </div>
                    </div>
                `;
            }
            searchResult.innerHTML = mealBox;
        }
        displayMealsByLetter(meals) {
            let mealBox = '';
            for (const meal of meals) {
                mealBox += `

                    <div class="col-md-3 ">
                        <div  data_id='${meal.idMeal}' class="item-inner position-relative overflow-hidden rounded-4">
                            <div class="overlay d-flex justify-content-start align-items-center">
                                <h2 class="text-capitalize">${meal.strMeal}</h2>
                            </div>
                            <div class="mealImage">
                                <img class="w-100" src="${meal.strMealThumb}" alt="">
                            </div>
                        </div>
                    </div>
                `;
            }
            searchResult.innerHTML = mealBox;
        }
         

        displayMeal(meal){
            let recipes = '';
            for (let i = 1; i <= 20; i++) {
                let measureProperty = `strMeasure${i}`;
                let ingredientProperty = `strIngredient${i}`;
                
                let measure = meal[measureProperty];
                let ingredient = meal[ingredientProperty];
            
                if (measure.trim() === "" || ingredient.trim() === "") {
                    break;
                } 
                recipes += `

                    <span class="quant rounded-3 ">
                        ${measure} ${ingredient}
                    </span>
                `;
            }  
            let tags = '';
            if (meal.strTags) {
                tags = meal.strTags.split(',').map(tag => `<span class="rounded-2 p-1">${tag.trim()}</span>`).join(' ');
            }
        
            let mealBox = '';
            mealBox += `
      <div class="col-md-4">
                        <div>
                            <img class="w-100 rounded-4" src="${meal.strMealThumb}" alt="meal-Image">
                            <h3 class="fw-bold text-capitalize">${meal.strMeal}</h3>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div>
                            <h2 class="fw-bold">Instructions</h2>
                            <p class='instructions'>${meal.strInstructions}</p>
                            <div class="mt-3">
                                <h3 class="text-capitalize fw-bold">Area : <span class="fw-normal">${meal.strArea}</span></h3>
                                <h3 class="text-capitalize fw-bold">Category : <span class="fw-normal">${meal.strCategory}</span></h3>
                                <h3 class="text-capitalize fw-medium">Recipes :</h3>
                                <div id="recipes" class=" ">
                              ${recipes}
                                </div>
                            </div>
                            <div class="mt-3 text-capitalize">
                                <h3 class="fw-bold">Tags : </h3>
                                <div class="tags">
                                     ${tags}
                                </div>
                                <div class="mt-4">
                                    <a target="_blank" class="btn btn-success text-capitalize me-2" href='${meal.strSource}'>source</a>
                                    <a target="_blank" class="btn btn-danger text-capitalize " href='${meal.strYoutube}'>youtube</a>
                                </div>
                            </div>


                        </div>
                    </div>
                `;

                rowData.innerHTML = mealBox;
        }





    }
    

    class AssignEvents {
        constructor() {
            this.dataHandler = new GetData();
            this.displayHandler = new DisplayData();
        };

        toggleMenu() {
            $('.humburger, .my-navbar ul li ').on('click', function (e) {
                $('.fa-bars').toggleClass('d-none');
                $('.fa-x').toggleClass('d-none');
                $('.my-navbar').animate({ width: 'toggle', paddingInline: 'toggle' }, 400);

                if ($('.fa-bars').hasClass('d-none')) {
                    $('.my-navbar ul li').each(function (index) {
                        $(this).delay(index * 200).animate({ bottom: '0%', left: '0%' }, 400);
                    });
                } else {
                    $('.my-navbar ul li').each(function (index) {
                        $(this).animate({ bottom: '-120%', left: '-120%' }, 400);
                    });
                }
            });
        };

   
        handleSearchClick() {
            let that = this
            $('#search').on('click', function (e) {
                let mealBox = `
                    <div class="mb-3 col-md-6">
                        <input type="text" class="form-control text-capitalize" id="searchName" placeholder="search by name">
                    </div>
                    <div class="mb-3 col-md-6">
                        <input type="text" class="form-control text-capitalize" id="searchLetter" maxlength="1" placeholder="search by first letter">
                    </div>
                      <div id="searchResult" class='row mt-5 g-4'></div>
                `;
                rowData.innerHTML = mealBox;

                let searchResult = document.getElementById('searchResult');
                function handleSearchNameInput(){
                    $('#searchName')
                        .on('input', async (e) => {
                            const value = $(e.target).val();
                            if (!/^[a-zA-Z\s]+$/.test(value)) {
                                $(e.target).val(''); // Clear the input if the value is not a letter
                            }
                            const meals = await that.dataHandler.getByName($('#searchName').val());
                            // console.log(searchResult);
                            that.displayHandler.displayMealsByName(meals);
                            that.handelMealItemClick();
                        })
                        .on('paste', async (e) => {
                            e.preventDefault();
                            const pastedText = (e.originalEvent.clipboardData || window.clipboardData).getData('text');
                            if (/^[a-zA-Z\s]+$/.test(pastedText)) { // Allow letters and spaces
                                $(e.target).val(pastedText);
                            } else {
                                $(e.target).val(''); // Clear the input if the pasted text contains invalid characters
                            }
                            const meals = await that.dataHandler.getByName($('#searchName').val());
                            // console.log(searchResult);
                            that.displayHandler.displayMealsByName(meals);
                            that.handelMealItemClick();
                        })
                        .on('keydown', async (e) => {
                            const value = $(e.target).val();
                            if (!/^[a-zA-Z\s]+$/.test(value)) {
                                $(e.target).val(''); // Clear the input if the value is not a letter
                            }
                            if (e.key === 'Enter') { // Check if Enter key is pressed
                                e.preventDefault();
                                const meals = await that.dataHandler.getByName($('#searchName').val());
                                that.displayHandler.displayMealsByName(meals);
                                that.handelMealItemClick();
                            }
                        });
                }
                
                function handleSearchLetterInput(){
                    $('#searchLetter')
                    .on('input', async (e) => {
                        const value = $(e.target).val();
                    if (!/^[a-zA-Z]$/.test(value)) {
                        $(e.target).val(''); // Clear the input if the value is not a letter
                    }
                        const meals = await that.dataHandler.getByFirstLetter($('#searchLetter').val());
                        console.log(meals);
                        that.displayHandler.displayMealsByLetter(meals);
                        that.handelMealItemClick();
                    })
                    // just to restrict user to edit it from inspect
                    // .on('paste', async (e)=>{
                    //     e.preventDefault();
                    //     const pastedText = (e.originalEvent.clipboardData || window.clipboardData).getData('text');
                    //     if (/^[a-zA-Z]$/.test(pastedText)) {
                    //         $(e.target).val(pastedText[0]); // Set the input value to the first letter of the pasted text
                    //     }
                    //     const meals = await that.dataHandler.getByFirstLetter($('#searchLetter').val());
                        
                    //     that.displayHandler.displayMealsByLetter(meals);
                    // })
                    // .on('keydown', function(e) {
                    //     if (e.key.length === 1 && $(e.target).val().length === 1) {
                    //         e.preventDefault(); // Prevent typing if there is already a character in the input
                    //     }
                    // });
                }
                handleSearchNameInput();
                handleSearchLetterInput();
            });
        };

        handleCategoryClick() {
            $('#categories').on('click', async () => {
                const categories = await this.dataHandler.getCategories();
                
                this.displayHandler.displayCategories(categories);
                this.handelCategoryItemClick();
                
            });
        };
        handleAreaClick(){
            $('#area').on('click', async () => {
                const areas = await this.dataHandler.getAreas();
                this.displayHandler.displayAreas(areas);
                this.handelAreaItemClick();
                
            });
        };
        handleIngredientsClick(){
            $('#ingredients').on('click', async () => {
                const ingredients = await this.dataHandler.getIngredients();
                this.displayHandler.displayIngredients(ingredients);
                this.handelIngredientItemClick();
                
            });
        };
        handleContactClick(){
            
            $('#contact').on('click',  () => {
            
                    
            this.displayHandler.displayInputs();
           
             this.handleInputs();

           

            })
            
            
        };
        handleSubmitClick(){
            
            $('#submitForm').on('click', () => {
                
                this.clearForm();
                $('#submitForm').attr('disabled', 'true');
                // using native js fixed it, but jquery does not return elements?!! 
                
           
                // if(
                //     this.validateInputs(myInputs[0])&&
                //     this.validateInputs(myInputs[1])&&
                //     this.validateInputs(myInputs[2])&&
                //     this.validateInputs(myInputs[3])&&
                //     this.validateInputs(myInputs[4])&&
                //     this.validateInputs(myInputs[5])
              

                // ){
                 
                //     this.clearForm();
                // }
                // else{
                //     alert('Please fill in all the required fields');
                // }

      
            })

            
        };
        handleInputs(){
            $('.contact-form input').on('input',  (e) => {
                
                let myInputs = document.querySelectorAll('.contact-form input');
           
                if(
                        this.validateInputs(myInputs[0])&&
                        this.validateInputs(myInputs[1])&&
                        this.validateInputs(myInputs[2])&&
                        this.validateInputs(myInputs[3])&&
                        this.validateInputs(myInputs[4])&&
                        this.validateInputs(myInputs[5])
                  
    
                    ){
                        
                        $('#submitForm').removeAttr('disabled');
                        this.handleSubmitClick();
                    }
                  else{
                   
                    $('#submitForm').attr('disabled', 'true');
                  }
                   
                    this.validateInputs(e.target);
                

            })
        };
        handelMealItemClick(){
            $('.item-inner').on('click', async (e) =>{
                let dataAttr =  $(e.currentTarget).attr('data_id');
                      let meal = await  this.dataHandler.getMealById(dataAttr);
                      this.displayHandler.displayMeal(meal);
                      
              })
        }
        handelCategoryItemClick(){
            $('.item-inner').on('click', async (e) =>{
                let categoryName = $(e.currentTarget).find('h2').text();
               
                
                let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c'
                      let meals = await  this.dataHandler.getMealsOrigen(url,categoryName);
                      this.displayHandler.displayMeals(meals);
                      this.handelMealItemClick();
                   
              })
        }
        handelAreaItemClick(){
            $('.item-inner').on('click', async (e) =>{
                let areaName = $(e.currentTarget).find('p').text();
               
                
                let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a'
                      let meals = await  this.dataHandler.getMealsOrigen(url,areaName);
                      this.displayHandler.displayMeals(meals);
                      this.handelMealItemClick();
                   
              })
        }
        handelIngredientItemClick(){
            $('.item-inner').on('click', async (e) =>{
                let ingredientName = $(e.currentTarget).find('h3').text();
               
                
                let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?i'
                      let meals = await  this.dataHandler.getMealsOrigen(url,ingredientName);
                      this.displayHandler.displayMeals(meals);
                      this.handelMealItemClick();
                   
              })
        }

        clearForm(){
                let myInputs = document.querySelectorAll('.contact-form input');
                for(var i=0; i<myInputs.length; i++){
                    myInputs[i].value = null;
                    myInputs[i].classList.remove("is-valid");
                }
         
            };
        validateInputs(ele){ 
            let regex ={
                userName:/[a-z]{3,20}/i,
                userEmail:/^[a-zA-Z0-9._%+-]{3,30}@[a-zA-Z0-9.-]{3,8}\.[a-zA-Z]{2,4}$/,
                userPhone:/^(\+2|02|002){0,1}01[0125][0-9]{8}$/, //egyptian number format
                userAge:/^(1[6-9]|[2-9][0-9]|100)$/,
                userPassword:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                
                
            }
              // Handling rePassword validation against userPassword regex


    if (ele.id === 'rePassword') {
        let passwordElement = document.getElementById('userPassword');
        if (!passwordElement) {
            console.error('Password element not found');
            return false;
        }

        // Validate rePassword matches userPassword
        if (ele.value === passwordElement.value) {
           
            ele.nextElementSibling.classList.replace("d-block", "d-none");
            return true;
        } else {
            
            ele.nextElementSibling.classList.replace("d-none", "d-block");
            return false;
        }
    }
         
            if (regex[ele.id].test(ele.value) == true){
                ele.classList.add("is-valid");
                ele.classList.remove("is-invalid");
                ele.nextElementSibling.classList.replace("d-block", "d-none");
                return true
        
            }
            else{
                ele.classList.remove("is-valid");
                ele.classList.add("is-invalid");
                ele.nextElementSibling.classList.replace("d-none", "d-block");
                return false
            }
        }

        async initialize() {
            const meals = await this.dataHandler.getMeals();
            this.displayHandler.displayMeals(meals);
            this.handelMealItemClick();
            this.toggleMenu();
         
            this.handleSearchClick();
            this.handleCategoryClick();
            this.handleAreaClick();
            this.handleIngredientsClick();
            this.handleContactClick();
            
           
            
        }
    }

    const events = new AssignEvents();
    events.initialize();

});


// function validateInputs(ele){ 
//     let regex ={
//         UserName:/^[a-z]{3,20}$/i,
//         userEmail:/^[a-zA-Z0-9._%+-]{3,30}@[a-zA-Z0-9.-]{3,8}\.[a-zA-Z]{2,4}$/,
//         UserPhone:/^(\+2|02|002){0,1}01[0125][0-9]{8}$/, //egyptian number format
//         UserAge:/^(1[6-9]|[2-9][0-9]|100)$/,
//         UserPassword:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/
        
//     }
//     if (regex[ele.id].test(ele.value) == true){
//         ele.classList.add("is-valid");
//         ele.classList.remove("is-invalid");
//         ele.nextElementSibling.classList.replace("d-block", "d-none");
//         return true

//     }
//     else{
//         ele.classList.remove("is-valid");
//         ele.classList.add("is-invalid");
//         ele.nextElementSibling.classList.replace("d-none", "d-block");
//         return false
//     }
// };









// without classes 
// $('document').ready(function () {


//     class GetData{

//     }

//     class DisplayData{

//     }
//     class AssignEvents{

//     }

//     function toggleMenu() {
//         $('.humburger').on('click', function (e) {
//             $('.fa-bars').toggleClass('d-none');
//             $('.fa-x').toggleClass('d-none');

//             $('.my-navbar').animate({ width: 'toggle', paddingInline: 'toggle' }, 400);

//             if ($('.fa-bars').hasClass('d-none')) {
//                 // $('.my-navbar ul li').css('left', '0');
//                 $('.my-navbar ul li').each(function (index) {
//                     $(this).delay(index * 200).animate({ bottom: '0%', left: '0%' }, 400);
//                 });
//             } else {
//                 $('.my-navbar ul li').each(function (index) {
//                     $(this).animate({ bottom: '-120%', left: '-120%' }, 400);
//                 });
//             }
//         });
//     }
//     async function getMeals() {
//         try {
//             let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`, { method: 'GET' });
//             let result = await response.json();
//             displayMeals(result.meals)
//         }
//         catch {
//             console.log('Error fetching data')
//         }

//     }
//     function displayMeals(meals) {
//         let mealBox = ''
//         for (const meal of meals) {

//             mealBox += `   
    
    
//             <div class="col-md-3 ">
//                            <div class="item-inner position-relative overflow-hidden rounded-4">
//                                <div class="overlay d-flex justify-content-start align-items-center  ">
//                                    <h2 class="text-capitalize">
//                                        ${meal.strMeal}
//                                    </h2>
//                                </div>
//                                <div class="mealImage  ">
//                                    <img class="w-100" src="${meal.strMealThumb}" alt="">
//                                </div>
//                            </div>
//                        </div>
       
       
//            `
//         }

//         rowData.innerHTML = mealBox;

//     }
//     function addForm() {
//         $('#search').on('click', function (e) {
//             let mealBox = ''
//             mealBox = `
//                  <div class="mb-3 col-md-6">
                                   
//                                     <input type="text" class="form-control text-capitalize" id="searchName" placeholder="search by name">
//                                   </div>
            
//                                 <div class="mb-3 col-md-6">
                                   
//                                     <input type="text" class="form-control text-capitalize" id="searchLetter" placeholder="search by first letter">
//                                   </div>
//             `

//             rowData.innerHTML = mealBox;
//         });
//     }



//     async function getCategories() {
//         try{
//             let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
//             let result = await response.json();

//             displayCategories(result.categories)
//         }
//         catch{
//             console.log('Error fetching data')
//         }
      

//     }


//     $('#categories').on('click', function () {
//         getCategories()
//     });



//     function displayCategories(categories) {
//         let categoriesBox = '';
//         for (const category of categories) {
         
//             categoriesBox += `
//             <div class="col-md-3 ">
//                               <div class="item-inner position-relative overflow-hidden rounded-4">
//                                   <div class="overlay  text-center ">
//                                       <h2 class="text-capitalize">
//                                           ${category.strCategory}
//                                       </h2>
//                                       <p> ${category.strCategoryDescription}</p>
//                                   </div>
//                                   <div class="mealImage  ">
//                                       <img class="w-100" src="${category.strCategoryThumb}" alt="">
//                                   </div>
//                               </div>
//                           </div>
//            `
//         }
//         rowData.innerHTML = categoriesBox;

//     }

//     addForm();
//     getMeals();
//     toggleMenu();



// });