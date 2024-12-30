import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import './FoodTab.css'
import useMenu from '../../hooks/useMenu';
import OrderTabItems from '../../Pages/Order/OrderTabItems/OrderTabItems';
import { useParams } from 'react-router-dom';


const FoodTab = () => {
    const categories = ["salads", "pizzas", "soups", "desserts", "drinks"]
    const { category } = useParams()
    const initialValue = categories.indexOf(category)
    const [value, setValue] = useState(initialValue);

    const [menu, loading] = useMenu()

    const drinks = menu.filter(item => item.category === 'drinks')
    const desserts = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salads = menu.filter(item => item.category === 'salad')
    const soups = menu.filter(item => item.category === 'soup')

    if (loading) return <h1 className='text-4xl text-center'>Loading.....</h1>

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }



    CustomTabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    return (
        <Box sx={{ width: '100%', }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Salads" {...a11yProps(0)} />
                    <Tab label="pizzas" {...a11yProps(1)} />
                    <Tab label="soups" {...a11yProps(2)} />
                    <Tab label="desserts" {...a11yProps(3)} />
                    <Tab label="drinks" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <OrderTabItems items={salads}></OrderTabItems>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <OrderTabItems items={pizzas}></OrderTabItems>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <OrderTabItems items={soups}></OrderTabItems>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <OrderTabItems items={desserts}></OrderTabItems>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <OrderTabItems items={drinks}></OrderTabItems>
            </CustomTabPanel>
        </Box>
    );
}


export default FoodTab;