import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogContent, DialogActions } from '@material-ui/core';

const Prompt = {};
// eslint-disable-next-line no-console
let Update = () => console.log("Prompt is not ready yet");

const styles = {
    dialog: {
        width: 240,
        paddingBottom: 24
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

function cancel(key) {
    Prompt[key].open = false;
    Update()
    window.setTimeout(() => {
        delete Prompt[key];
    },200)
}



class View extends React.Component {
	componentDidMount() {
		Update = () => {
			this.forceUpdate();
		};
	}

	render() {
        const classes = this.props.classes
		return (
			<React.Fragment>
				{
                    Object.keys(Prompt).map(key => {
                        let prompt = Prompt[key]
                        function handleClose() {
                            cancel(key)
                            prompt.callback(false)
                        }

                        function handleContinue() {
                            cancel(key)
                            prompt.callback(true)
                        }

                        return (
                            <Dialog maxWidth="xs" key={key} onClose={handleClose} aria-labelledby="simple-dialog-title" open={prompt.open}>
                            <DialogTitle id="simple-dialog-title">{prompt.title}</DialogTitle>
                            <DialogContent className={classes.dialog}>
                                {prompt.body}
                            </DialogContent>
                            <DialogActions>
                                <Button variant="text" color="primary" onClick={handleClose}>
                                    Cancel
                                </Button>
                                <div />
                                <Button variant="contained" color="secondary" onClick={handleContinue}>
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

export default {
    ask,
    cancel,
    View : withStyles(styles)(View)
}