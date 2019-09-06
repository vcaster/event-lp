import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <div>
            <Drawer
            anchor="right"
            open={props.open}
            onClose= {() => props.onClose(false)}
            
            >
            
                <List component="nav">
                    <ListItem button onClick={() => console.log('Featuart')}>
                        Events starts in
                    </ListItem>
                    <ListItem button onClick={() => console.log('Featuart')}>
                        Venue INFO
                    </ListItem>
                    <ListItem button onClick={() => console.log('Featuart')}>
                        Highlights
                    </ListItem>
                    <ListItem button onClick={() => console.log('Featuart')}>
                        Pricing
                    </ListItem>
                    <ListItem button onClick={() => console.log('Featuart')}>
                        Location
                    </ListItem>
                </List>

            </Drawer>
            
        </div>
    );
};

export default SideDrawer;