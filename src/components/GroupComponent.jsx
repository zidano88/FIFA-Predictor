import React, { useState } from "react";
import Box from '@mui/material/Box';
import { Button, Typography, Divider, List, ListItem } from '@mui/material';
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

// const selectedData = [
// ];


const GroupComponent = () => {
    const [selectedData, setSelectedData] = useState([]);

    const SelectedList = (props) => {
        return (
            <List>
                {selectedData.map(({ name, flag, initials }) => {
                    return (
                        <Box key={name}>
                            <ListItem>
                                <Box sx={{ marginRight: "12px", fontWeight: "500", fontSize: "large", width: "10px" }}>{1 + selectedData.findIndex(obj => { return obj.initials === initials })}</Box>
                                <Image src={flag} alt="flag" layout="fixed" width="30px" height="30px" />
                                <Box marginLeft="10px">
                                    {name}
                                </Box>
                            </ListItem>
                            <Divider sx={{ backgroundColor: "#000000", height: "1px" }} />
                        </Box>
                    )
                })}
            </List>
        )
    };

    {/* sx={{ backgroundColor: "red" }} */ }

    function populateArray(initials, index) {
        if (selectedData.some(function (el) {
            return el.initials === initials;
        })) {
            const indexOfObj = selectedData.findIndex(obj => { return obj.initials === initials; });
            selectedData.splice(indexOfObj, 1);
            setSelectedData([...selectedData]);
        } else {
            setSelectedData([...selectedData, groupData[index]])
        }
    };

    const SelectionGroup = (props) => {
        return (
            <Box sx={{ margin: "11px 1px", display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                {groupData.map(({ initials, flag }) => {
                    return (
                        <Button key={initials} onClick={() => populateArray(initials, groupData.findIndex(item => item.initials === initials))} variant="outlined" size="small" sx={{ margin: "5px", padding: "0" }} >
                            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", margin: "4px 7px" }}>
                                <Image src={flag} alt="flag" layout="fixed" width="30px" height="30px" />
                                <Box marginLeft="7px">
                                    {initials}
                                </Box>
                            </Box>
                        </Button>
                    )
                })}
                {/* disabled */}
                {/* startIcon={<Avatar src={flag} variant="square" />} */}
                {/* <Button variant="outlined">m</Button>
                <Button variant="outlined">Q</Button>
                <Button variant="outlined">y</Button>
                <Button variant="outlined">z</Button> */}
            </Box>
        )
    };


    return (
        <Box>
            <Typography variant="h5">GROUP A</Typography>
            <Divider sx={{ backgroundColor: "#000000", height: "2px" }} />
            <SelectionGroup />
            <SelectedList />
        </Box>
    )
};


export default GroupComponent;


// function populateArray(initials, index) {
//     if (selectedData.some(function (el) {
//         console.log("ini : " + initials)
//         return el.initials === initials;
//     })) {
//         const indexOfObj = selectedData.findIndex(obj => { return obj.initials === initials; });
//         console.log("index is : " + indexOfObj);
//         console.log("exists");
//         selectedData.splice(indexOfObj, 1);
//         console.log(selectedData);
//     } else {
//         console.log(index);
//         selectedData.push(groupData[index]);
//         console.log(selectedData);
//     }
// };