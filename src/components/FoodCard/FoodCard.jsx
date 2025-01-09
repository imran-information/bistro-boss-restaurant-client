import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";



const FoodCard = ({ items }) => {
    const { _id, name, recipe, image, category, price } = items || {}
    const { user } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [carts, isPending, refetch] = useCart()

    const handleAddToCart = food => {


        if (user && user.email) {
            const foodInfo = {
                email: user.email,
                id: _id,
                name,
                price
            }
            axiosSecure.post('/carts', foodInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} food add to cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "Please sign In and add to the cart !",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Sign in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>
                    navigate('/signIn', { state: { from: location } })
                }
            });
        }
    }
    return (

        <div className="max-w-sm overflow-hidden bg-gray-100 rounded-lg shadow-md">
            <img
                className="w-full"
                src={image}
                alt="Green double couch with wooden legs"
            />
            <div className="p-4 space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
                <p className="text-gray-600">
                    {recipe.length > 80 ? recipe.slice(0, 80) + "..." : recipe}
                </p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-gray-800">${price}</p>
            </div>
            <div className="flex gap-2 p-4">
                <button className="px-4 py-2  text-xs uppercase font-bold text-subTitle-color bg-black rounded hover:bg-[#1F2937]">
                    Buy now
                </button>
                <button onClick={() => handleAddToCart(items)} className="px-4 py-2 text-xs  border-0 border-b-2 uppercase text-subTitle-color  font-bold  border-black rounded hover:bg-black">
                    Add to cart
                </button>
                {/* <button className="btn btn-outline border-0 border-b-4 uppercase">View Full  Menu</button> */}
            </div>
        </div>


    );
};

export default FoodCard;