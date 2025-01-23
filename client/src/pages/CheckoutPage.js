import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import styled from 'styled-components'
import { useLocation, Link, Navigate} from 'react-router-dom';
import { MdOutlinePayment } from "react-icons/md";
import { FaCaretDown, FaCaretUp} from "react-icons/fa";
import { IoWarningOutline } from "react-icons/io5";




const CheckoutPage = () => {
    const location = useLocation()
    const currentPath = location.pathname.toString().substring(1)
    
  return (
    <Wrapper>
        <h1>Checkout</h1>
        <div className="route-container">
            <div>
                <Link to={'/'}>home </Link>
                / {currentPath} 
            </div>
        </div>
        <div className="container-wrapper">
            {/* lh wrapper  */}
        <div className="lh-wrapper">
            {/* form  */}
            <form action="">
                <label htmlFor="email">
                    <h3>Email</h3>
                    <input type="email" 
                    placeholder='email'
                    />
                    <p className='warning'><IoWarningOutline className='warning-icon' /> Ticket code will be snt to this email addresss</p>
                </label>
                <label htmlFor="first name">
                    <h3>First name</h3>
                    <input type="text" 
                    placeholder='first name'
                    />
                </label>
                <label htmlFor="last name">
                    <h3>Last name</h3>
                    <input type="text" 
                    placeholder='last name'
                    />
                </label>
            </form>

            {/* payment  */}
            <div className="payment-container">
                <h3>Payment</h3>
                <p>All transactions are secure and encrypted.</p>
                <div className="payment-description">
                    <div className="paystack-container">
                        <h3>Paystack</h3>
                    </div>
                    <div className="description-details-container">
                        <MdOutlinePayment className='payment-icon'/>
                    After clicking “Pay now”, you will be redirected to Paystack to complete your purchase securely.
                    </div>
                
                </div>
            </div>
        </div>
              {/* rh-wrapper */}
              <div className="rh-wrapper">
              
            {/* order summary  */}
            <div className="order-summary-container">
                {/* toggle show course  */}
                <div className="toggle-show-course-container">
                <h3>Order summary  </h3>
                <div className="show-container">
                </div>
                </div>
                {/* order summary  */}
                <div className="order-summary">
                    {/* {cartItems.map((values) => {
                        return <OrderItem {...values} key={values._id}/>
                    })} */}
                </div>
            </div>

       
            {/* price summary  */}
            <div className="price-summary">
                <div className="total-container">
                    <h3>Total</h3>
                    {/* <h3>{icon}{standardNumber(standardRate(total, conversionRate))}</h3> */}
                </div>
            </div>

            <button type="button">
                Pay now
            </button>

        </div>

    </div>
  
  
        
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100vw;
    padding-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 8rem;
        color: var(--header-text-color);
    }

    .route-container {
        margin-top: 3rem;
        width: 90%;
        opacity: 0.8;
    }

    .container-wrapper {
        width: 90%;
    }

    .lh-wrapper {
        width: 100%;
    }

    .rh-wrapper {
        width: 100%;
    }

    form {
        margin-top: 1.5rem;
        width: 100%;

        h3 {
            margin-top: 1.5rem;
            color: var(--text-color);

        }

        input {
            width: 100%;
            height: 50px;
            padding: 0 2rem 0 1rem;
            margin-top: 0.5rem;
            border-radius: 5px;
            border: solid 2px var(--stroke-color);
            font-size: 1em;
            outline: none;
            background: var(--highlight);
            color: var(--primary-font);

        }

        .warning {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 0.5rem;
            text-align: start;
            font-size: 0.8em;
            color: var(--warning-color);
        }

        .warning-icon {
            margin-right: 0.5rem;
        }
    }

    

    .payment-container {
        width: 100%;
        margin-top: 3rem;

        p {
            margin-top: 0.5rem;
            font-size: 0.9em;
            opacity: 0.8;
        }
    }

    .payment-description {
        margin-top: 1.5rem;
        width: 100%;
        height: 250px;
        border: solid 2px var(--stroke-color);
        border-radius: 5px;
    }

    .paystack-container {
        width: 100%;
        height: 50px;
        padding: 1rem;
        border-bottom: solid 2px var(--stroke-color);
    }

    .description-details-container {
        width: 100%;
        height: 200px;
        padding: 1rem;
        display: grid;
        place-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        .payment-icon {
            font-size: 7em;
            margin-bottom: 0.5rem;
            color: var(--stroke-color);
            opacity: 0.7;
        }
    }

    .order-summary-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3rem;

    }

    .toggle-show-course-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;

            .show-container {
                display: flex;
                flex-direction: row;
                align-items: center;
                cursor: pointer;
                user-select: none;
            }
    }

    .order-summary {
        width: 100%;
        margin-top: 1rem;

    }

    .order-container {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 1rem;

        img {
        height: 70px;
        width: 100px;
        object-fit: cover;
        margin-right: 2rem;
        }

        .order-desc-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    
    }

    .price-summary {
        width: 100%;
        display: grid;
        grid-template-columns: auto;
        gap: 1rem;
        margin-top: 1.5rem;

        >div {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }
    }

    .policy-container {
        margin-top: 1.5rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;

        input {
            margin-right: 0.5rem;
        }
    }

    button {
        width: 100%;
        height: 50px;
        background: var(--btn);
        border: none;
        color: var(--white-color);
        font-size: 1.2em;
        display: grid;
        place-content: center;
        margin-top: 2rem;
    }

    .btn-load {
        opacity: 0.8;
    }

@media only screen and (min-width: 600px) {
    .route-container {
        width: 80%;
    }

    
    .container-wrapper {
        width: 80%;
    }
}

@media only screen and (min-width: 768px) {
    .route-container {
        width: 60%;
    }

    .container-wrapper {
        width: 60%;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    padding-bottom: 2em;

    .route-container {
        width: 80%;
    }

    .container-wrapper {
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
}



`

export default CheckoutPage