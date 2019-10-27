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
                        }
                        return (
                            <Dialog key={key} onClose={handleClose} aria-labelledby="simple-dialog-title" open={prompt.open}>
                            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                            <List>
                              {emails.map(email => (
                                <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                                  <ListItemAvatar>
                                    <Avatar className={classes.avatar}>
                                      <PersonIcon />
                                    </Avatar>
                                  </ListItemAvatar>
                                  <ListItemText primary={email} />
                                </ListItem>
                              ))}
                      
                              <ListItem button onClick={() => handleListItemClick('addAccount')}>
                                <ListItemAvatar>
                                  <Avatar>
                                    <AddIcon />
                                  </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="add account" />
                              </ListItem>
                            </List>
                          </Dialog>
                        )
                    })
                }
			</React.Fragment>
		);
	}
}

function ask(id,callback,title = "Are you sure?", body = "This action cannot be undone.") {
    Prompt[id] = {
        callback,
        title,
        body,
        open: true
    }
    Update()
}

export default {
    ask,
    View
}