import { Button, TextField } from "@mui/material";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";


const SSLCOMMERCEPayment = ({ user, carts, totalPrice, axiosSecure }) => {
    const handleSSLSubmit = async () => {
        const payment = {
            email: user?.email,
            price: parseFloat(totalPrice),
            transactionId: '',
            date: new Date(),
            cartIds: carts.map((cart) => cart._id),
            itemIds: carts.map((cart) => cart.id),
            status: "Pending"
        }
        // console.log(payment);
        const data = await axiosSecure.post('/ssl-payment', payment)
        console.log(data.data);
        if (data?.data) {
            window.location.href = `${data.data}`
        }

    }


    return (
        < div className="" >
            <h3 className="text-lg font-bold text-gray-700">SSL Commerce Payment</h3>
            <p className="text-gray-600 mb-5">Complete your order using SSL Commerce.</p>
            <TextField
                className="w-full"
                id="email"
                label="Email"
                defaultValue={user?.email}
                variant="filled"
                slotProps={{
                    input: {
                        readOnly: true,
                    },
                }}
            />

            <Button onClick={handleSSLSubmit} className="w-full" style={{ display: "block", marginTop: '10px', }} variant="contained">Place order</Button>
        </div >
    )

};

export default SSLCOMMERCEPayment;