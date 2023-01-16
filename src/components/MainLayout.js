import { AppBar, Drawer, Toolbar, Typography,Button,Box,Avatar,Divider, List,
    ListItem,
    ListItemIcon,
    ListItemText } from '@mui/material'
import React, { Children } from 'react'
import {Link} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import Header from './Header';


function MainLayout({children}) {
    const listItems = [
        {
          listIcon: <HomeIcon />,
          listText: "Home"
        },
        {
          listIcon: <HomeIcon />,
          listText: "Resume"
        },
        {
          listIcon: <HomeIcon />,
          listText: "Portfolio"
        },
        {
          listIcon: <HomeIcon />,
          listText: "Contacts"
        }
      ];
    return (
        <React.Fragment>
            <div class='appbar'>
            <AppBar >
                <Toolbar>
                    <Typography> Hi </Typography>
                    {/* <div style={{ display: "flex", flex: 1 }} /> */}
               
                </Toolbar>
            </AppBar>
            </div>
            <Drawer  anchor='left' variant="permanent">
                <Box  component="div">
                    <Avatar src="https://i.ibb.co/rx5DFbs/avatar.png"/>
                    <Divider />
                    <List>
                        {listItems.map((listItem, index) => (
                        <ListItem  button key={index}>
                            <ListItemIcon >
                            {listItem.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={listItem.listText} />
                        </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

           <div>{children}</div>

        </React.Fragment>
        
    )
}

export default MainLayout
