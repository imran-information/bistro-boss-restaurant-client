

const FoodCard = ({ items }) => {
    const { _id, name, recipe, image, category, price } = items || {}
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
                <button className="px-4 py-2 text-xs  border-0 border-b-2 uppercase text-subTitle-color  font-bold  border-black rounded hover:bg-black">
                    Add to cart
                </button>
                {/* <button className="btn btn-outline border-0 border-b-4 uppercase">View Full  Menu</button> */}
            </div>
        </div>


    );
};

export default FoodCard;