import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import useAxiosLocal from '../../../../hooks/useAxiosLocal';
import Swal from 'sweetalert2';
const VITE_IMGGBB_API_KEY = import.meta.env.VITE_IMGGBB_API_KEY
const imageUploadImgBB = `https://api.imgbb.com/1/upload?key=${VITE_IMGGBB_API_KEY}`

const UpdateItem = () => {
    const axiosSecure = useAxiosSecure()
    const axiosLocal = useAxiosLocal()
    const { name, recipe, image, category, price, _id } = useLoaderData()


    const [formData, setFormData] = useState({
        name: name,
        category: category,
        price: price,
        recipe: recipe,
        image: image,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add your form submission logic here
        const imageFile = { image: formData.image }
        // console.log(imageFile);
        const res = await axiosLocal.post(imageUploadImgBB, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data.success);
        if (res.data.success) {
            const menuInfo = {
                name: formData.name,
                recipe: formData.recipe,
                image: res.data.data.display_url,
                category: formData.category,
                price: parseFloat(formData.price)
            }

            // console.log(menuInfo);
            await axiosSecure.patch(`/menus/${_id}`, menuInfo)
                .then(menuRes => {
                    // console.log(menuRes.insertedId);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your item updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }).catch(err => {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${err.message}`,
                    });
                })
            // console.log(menuInfo);
        }

    };

    return (
        <div>
            <SectionTitle subTitle="What's new?" title={"UPDATE ITEM"}></SectionTitle> 
            <div className="form-container ">

                <form onSubmit={handleSubmit} className="recipe-form py-10 px-5">
                    <div className="form-group ">
                        <label>Recipe name*</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            placeholder="Recipe name"

                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row ">
                        <div className="form-group w-full">
                            <label>Category*</label>
                            <select
                                name="category"

                                onChange={handleChange}
                                required
                            >
                                <option disabled defaultValue={category}>Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drink">Drink</option>
                            </select>
                        </div>
                        <div className="form-group w-full">
                            <label>Price*</label>
                            <input
                                type="number"
                                name="price"
                                defaultValue={price}
                                placeholder="Price"

                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Recipe Details*</label>
                        <textarea
                            name="recipe"
                            defaultValue={recipe}
                            placeholder="Recipe Details"

                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Choose File</label>
                        <input required type="file" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className="submit-button">
                        Update Item 🍴
                    </button>
                </form>
            </div>
        </div >
    );
};

export default UpdateItem;