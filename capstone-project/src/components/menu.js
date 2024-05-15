
import React from 'react';
import recipes from '../recipes';
import Swal from 'sweetalert2';

const menu = () => {

    const handleOrder = (id) => {
        console.log(id);

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-sucess',
                cancelButton: 'btn btn-danger'
            },
            buttonStyling: false
        });

        swalWithBootstrapButtons.fire({
            title: "Add to cart?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#CF470C",
            cancelButtonColor: "#495E57",
            confirmButtonText: "Yes, order it!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                "Success!",
                "This item has been added.",
                "success"
                )
            }
        });
    }

    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>This week's Specials!</h2>
                <button>Order Menu</button>
            </div>

            <div className='cards'> {
                recipes.map((recipe => (
                    <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderBtn'onClick={() => handleOrder(recipe.id)}>Order Now</button>
                        </div>
                    </div>)
                ))}
            </div>
        </div>
    );
};

export default menu;