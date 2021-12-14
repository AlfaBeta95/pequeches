import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
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

export default function PricingTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Mini" {...a11yProps(0)} />
                        <Tab label="Peque" {...a11yProps(1)} />
                        <Tab label="Maxi" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <span><strong>Cuota mes: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>150 €</span><br />
                    <span><strong>Días a la semana: &nbsp;</strong>2</span><br />
                    <span><strong>Snack merienda: &nbsp;&nbsp;</strong>Incluído</span><br />
                    <span><strong>Matrícula(anual): &nbsp;&nbsp;</strong>75 €</span>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <span><strong>Cuota mes: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>200 €</span><br />
                    <span><strong>Días a la semana: &nbsp;</strong>3</span><br />
                    <span><strong>Snack merienda: &nbsp;&nbsp;</strong>Incluído</span><br />
                    <span><strong>Matrícula(anual): &nbsp;&nbsp;</strong>70 €</span>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <span><strong>Cuota mes: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>250 €</span><br />
                    <span><strong>Días a la semana: &nbsp;</strong>5</span><br />
                    <span><strong>Snack merienda: &nbsp;&nbsp;</strong>Incluído</span><br />
                    <span><strong>Matrícula(anual): &nbsp;&nbsp;</strong>60 €</span>
                </TabPanel>
            </Box>
            <style jsx>{`
                span {
                    color: #ca6666;
                }
            `}</style>
        </>
    );
}