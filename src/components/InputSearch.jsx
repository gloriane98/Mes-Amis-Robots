import React from "react";





function InputSearch () {
        

  

    return (
        <div className="style-input">
            <input 
            
             type="search" 
             className="search"
             id = "Isearch "
             name ="Isearch" 
             placeholder="Rechercher par nom" 
           

            />
        
        </div>
    );


};

export default InputSearch;



 {/*  {loading ? (<h4>loading...</h4>): (
            loading.filter((value)=>{
                if(users === "" {
                    return value

                
                } else if (value.users.tolowerCase().includes(users.tolowerCase(){
                    return value
                })))
            })
          )} */}