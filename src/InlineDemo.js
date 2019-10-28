import React from 'react'
import Prompt from './Prompt'
import { Button, Container, Box, Typography, Card, CardContent, Divider } from '@material-ui/core'
import Trash from '@material-ui/icons/DeleteOutlineOutlined'
import Cancel from '@material-ui/icons/BackspaceOutlined'
export default class InlineDemo extends React.Component {
    render() {

        return (
            <div>
                <Prompt.View />
                <Container>
                    <Box m={16}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    Button prompt
                                </Typography>
                                <Prompt.Inline variant="button">
                                    <Button variant="contained" color="primary">
                                        Open
                                    </Button>
                                </Prompt.Inline>
                                <br />
                                <br />
                                <Divider variant="middle"/>
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    Icon prompt
                                </Typography>
                                <Prompt.Inline variant="icon">
                                    <Button variant="contained" color="primary">
                                        Open
                                    </Button>
                                </Prompt.Inline>
                                <br />
                                <br />
                                <Divider variant="middle"/>
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    Custom button prompt
                                </Typography>
                                <Prompt.Inline variant="button" cancelText="nooooo" continueText="yeaaaaaaaaaa">
                                    <Button variant="contained" color="primary">
                                        Open
                                    </Button>
                                </Prompt.Inline>
                                <br />
                                <br />
                                <Divider variant="middle"/>
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    Custom icon prompt
                                </Typography>
                                <Prompt.Inline variant="icon" cancelIcon={Cancel} continueIcon={Trash}>
                                    <Button variant="contained" color="primary">
                                        Open
                                    </Button>
                                </Prompt.Inline>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </div>
        )
    }   
}