import React from "react";
import Box from '@mui/material/Box';
import { Button, Typography, Divider, List } from '@mui/material';
// import Avatar from "@material-ui/core/Avatar";
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

const groupData = [
    {
        initials: "QAT",
        name: "Qatar",
        flag: "/countries/GroupA/qa.svg",
    },
    {
        initials: "ECU",
        name: "Ecuador",
        flag: "/countries/GroupA/ec.svg",
    },
    {
        initials: "SEN",
        name: "Senegal",
        flag: "/countries/GroupA/sn.svg",
    },
    {
        initials: "NED",
        name: "Netherlands",
        flag: "/countries/GroupA/nl.svg",
    },
];


const GroupComponent = () => {
    return (
        <Box>
            <Typography variant="h5">GROUP A</Typography>
            <Divider sx={{ backgroundColor: "#000000", height: "2px" }} />
            <SelectionGroup />

        </Box>
    )
};

const SelectionGroup = (props) => {
    return (
        <Box sx={{ margin: "11px 1px", display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
            {groupData.map(({ initials, flag }) => {
                return (
                    <Button key={initials} variant="outlined" size="small" sx={{ margin: "5px", padding: "0" }} >
                        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "4px 7px" }}>
                            <Image src={flag} alt="flag" layout="fixed" width="30px" height="30px" />
                            <Box marginLeft="7px">
                                {initials}
                            </Box>
                        </Box>
                    </Button>
                )
            })}
            {/* startIcon={<Avatar src={flag} variant="square" />} */}
            {/* <Button variant="outlined">m</Button>
            <Button variant="outlined">Q</Button>
            <Button variant="outlined">y</Button>
            <Button variant="outlined">z</Button> */}
        </Box>
    )
};

export default GroupComponent;