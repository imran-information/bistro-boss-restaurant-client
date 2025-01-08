import React, { useState } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const UpdateItem = () => {
    const axiosSecure = useAxiosSecure()
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        recipe: "",
        image: null,
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
            await axiosSecure.post('/menus', menuInfo)
                .then(menuRes => {
                    // console.log(menuRes.insertedId);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
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
                            placeholder="Recipe name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row ">
                        <div className="form-group w-full">
                            <label>Category*</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                            >
                                <option disabled value="">Category</option>
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
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Recipe Details*</label>
                        <textarea
                            name="recipe"
                            placeholder="Recipe Details"
                            value={formData.recipe}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <label>Choose File</label>
                        <input required type="file" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className="submit-button">
                        Add Item 🍴
                    </button>
                </form>
            </div>
        </div >
    );
};

export default UpdateItem;