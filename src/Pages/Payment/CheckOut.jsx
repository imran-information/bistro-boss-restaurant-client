import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import SSLCOMMERCEPayment from "./SSLCOMMERCEPayment";

const CardPayment = ({ stripe, elements, clientSecret, user, carts, totalPrice, axiosSecure, navigate }) => {
    const [error, setError] = useState("");
    const [transactionId, setTransactionId] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (paymentError) {
            setError(paymentError.message);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: paymentError.message,
            });
        } else {
            setError("");
        }

        // Confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "anonymous",
                    name: user?.displayName || "anonymous",
                },
            },
        });

        if (confirmError) {
            console.error("Confirm error", confirmError);
        } else if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id);

            const paymentInfo = {
                email: user.email,
                name: user.displayName,
                cartIds: carts.map((cart) => cart._id),
                itemNames: carts.map((cart) => cart.name),
                itemIds: carts.map((cart) => cart.id),
                price: totalPrice,
                PaymentDate: new Date(),
                status: "pending",
                transactionId: paymentIntent.id,
            };

            const { data } = await axiosSecure.post("/payments", paymentInfo);
            if (data?.paymentResult?.insertedId) {
                Swal.fire({
                    title: "Payment Successful!",
                    icon: "success",
                    draggable: true,
                });
                navigate("/dashboard/payment-history");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": { color: "#aab7c4" },
                        },
                        invalid: { color: "#9e2146" },
                    },
                }}
            />
            <button className="btn mt-5 w-full btn-neutral" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            {error && <p className="text-red-500">{error}</p>}
            {transactionId && <p className="text-green-500">Your Transaction ID: {transactionId}</p>}
        </form>
    );
};
const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [carts, isPending] = useCart();
    const { user, loading } = useAuth();
    const [clientSecret, setClientSecret] = useState("");
    const [selectedOption, setSelectedOption] = useState("1");
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    if (isPending || loading) return "Loading...";

    const totalPrice = carts.reduce((total, cart) => total + cart.price, 0);

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post("/create-payment-intent", { price: totalPrice }).then((res) => {
                setClientSecret(res.data.clientSecret);
            });
        }
    }, [axiosSecure, totalPrice]);

    return (
        <div className="w-1/2">
            <div className="mb-5">
                <label htmlFor="checkout-option" className="block text-gray-700 font-medium">
                    Select Payment Option:
                </label>
                <select
                    id="checkout-option"
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-3 border rounded-lg"
                >
                    <option value="1">Card</option>
                    <option value="2">SSL Commerce</option>
                </select>
            </div>

            {selectedOption === "1" && (
                <CardPayment
                    stripe={stripe}
                    elements={elements}
                    clientSecret={clientSecret}
                    user={user}
                    carts={carts}
                    totalPrice={totalPrice}
                    axiosSecure={axiosSecure}
                    navigate={navigate}
                />
            )}
            {selectedOption === "2" && <SSLCOMMERCEPayment user={user} carts={carts} totalPrice={totalPrice} axiosSecure={axiosSecure} navigate={navigate} />}
        </div>
    );
};

export default CheckOut;
