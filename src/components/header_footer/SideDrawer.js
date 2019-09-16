import React from 'react';
import {scroller} from 'react-scroll'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) =>{
        scroller.scrollTo(element, {
            duration: 1500,
            delay:'500',
            smooth: true,
            offset: -87
        });
        props.onClose(false)
    }
    return (
        <div>
            <Drawer
            anchor="right"
            open={props.open}
            onClose= {() => props.onClose(false)}
            
            >
            
                <List component="nav">
                    <ListItem button onClick={() => scrollToElement('event')}>
                        Events starts in\
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement('venueNfo')}>
                        Venue INFO
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement('highlights')}>
                        Highlights
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement('pricing')}>
                        Pricing
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement('location')}>
                        Location
                    </ListItem>
                </List>

            </Drawer>
            
        </div>
    );
};

export default SideDrawer;