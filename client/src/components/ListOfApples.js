import React, {Component} from 'react'
import {SelectAll, DeselectAll} from 'react-selectable-fast'
import SelectableApple from './selectableApple'
import {withStyles} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";

const styles = theme => ({
    root: {
        display: 'inline-grid',
    },
    ListOfApples: {
        display: 'flex',
        justifyContent: 'space - between',
        flexWrap: 'wrap',
        height: '500px',
        width: '100%',
        overflow: 'auto',
    }
});


function ListOfApples(props) {

    const {classes, items, selectedItemsCollback} = props;
    const [checked, setChecked] = React.useState([]);


    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        selectedItemsCollback(checked);
    };


    return (
        <div>
            <p>Press ESC to clear selection</p>
            <div>
                <SelectAll component="button" type="button" className="selectable-button">
                    Select all
                </SelectAll>
                <DeselectAll component="button" type="button" className="selectable-button">
                    Clear selection
                </DeselectAll>
            </div>


            <div className={classes.ListOfApples}>
                {props.items.map(value => (

                    <SelectableApple key={value._id} item={value}/>


                ))}
            </div>

        </div>
    )
}

export default withStyles(styles)(ListOfApples);
