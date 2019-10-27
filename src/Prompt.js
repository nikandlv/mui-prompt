import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import { DialogContent, DialogActions } from '@material-ui/core';

const Prompt = {};
// eslint-disable-next-line no-console
let Update = () => console.log("Prompt is not ready yet");


class View extends React.Component {
	componentDidMount() {
		Update = () => {
			this.forceUpdate();
		};
	}

	render() {
		return (
			<React.Fragment>
				{
                    Object.keys(Prompt).map(key => {
                        let prompt = Prompt[key]
                        function handleClose() {
                            Prompt[key].open = false;
                            Update()
                            window.setTimeout(() => {
                                delete Prompt[key];
                            },200)
                        }
                        return (
                            <Dialog fullWidth maxWidth="xs" key={key} onClose={handleClose} aria-labelledby="simple-dialog-title" open={prompt.open}>
                            <DialogTitle id="simple-dialog-title">{prompt.title}</DialogTitle>
                            <DialogContent>
                                {prompt.body}
                            </DialogContent>
                            <DialogActions>
                            <Button variant="text" color="primary">
                                    Cancel
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Continue
                                </Button>
                            </DialogActions>
                          </Dialog>
                        )
                    })
                }
			</React.Fragment>
		);
	}
}

function ask(id,data) {
    Prompt[id] = {
        callback : data.callback,
        title : data.title || 'Are you sure?',
        body : data.body || 'This action can not be undone!',
        open: true
    }
    Update()
}

export default {
    ask,
    View
}