import React from 'react'
import Prompt from './Prompt'
import { Button, Container, Box, Typography, Card, CardContent, Divider } from '@material-ui/core'

export default class PromptDemo extends React.Component {
    render() {

        function simplePrompt() {
            Prompt.ask('simple',{
                callback:(status) => {
                    console.log(status)
                }
            })
        }

        function custom1Prompt() {
            Prompt.ask('custom1',{
                callback:(status) => {
                    console.log(status)
                },
                title: 'Are you sure you want logout?',
                body: 'You have to login again inorder to access your information'
            })
        }

        function custom2Prompt() {
            Prompt.ask('custom2',{
                callback:(status) => {
                    console.log(status)
                },
                title: 'Are you sure you want logout?',
                body: 'You have to login again inorder to access your information',
                cancel: 'Hell no!',
                continue: 'Hell yea!',
            })
        }

        function custom3Prompt() {
            Prompt.ask('custom3',{
                callback:(status) => {
                    if(status) {
                        Prompt.ask('custom4',{
                            callback:(status) => {
                                Prompt.cancel('custom3')
                            },
                            title: 'Are you realy realy sure!?',
                            body: 'You have to login again inorder to access your information',
                            cancel: 'Hell no!',
                            continue: 'Hell yea!',
                        })
                    }
                },
                title: 'Are you sure?',
                body: 'Im a nested prompt :D',
                cancel: 'no',
                continue: 'yes',
                nested: true
            })
        }

        return (
            <div>
                <Prompt.View />
                <Container>
                    <Box m={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h4" gutterBottom>
                                    Simple prompt
                                </Typography>
                                <Button variant="contained" color="primary" onClick={simplePrompt}>
                                    Open
                                </Button>
                                <br />
                                <br />
                                <Divider variant="middle"/>
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    Custom title and body
                                </Typography>
                                <Button variant="contained" color="primary" onClick={custom1Prompt}>
                                    Open
                                </Button>
                                <br />
                                <br />
                                <Divider variant="middle"/>
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    Custom title, body and actions text
                                </Typography>
                                <Button variant="contained" color="primary" onClick={custom2Prompt}>
                                    Open
                                </Button>
                                <br />
                                <br />
                                <Divider variant="middle"/>
                                <br />
                                <Typography variant="h4" gutterBottom>
                                    Nested custom prompt
                                </Typography>
                                <Button variant="contained" color="primary" onClick={custom3Prompt}>
                                    Open
                                </Button>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </div>
        )
    }   
}