import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
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
                                <Button variant="text" color="primary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <div />
                                <Button variant="contained" color="secondary" onClick={prompt.callback}>
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