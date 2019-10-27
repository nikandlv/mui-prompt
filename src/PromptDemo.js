import React from 'react'
import Prompt from './Prompt'
import { Button, Container, Box } from '@material-ui/core'

export default class PromptDemo extends React.Component {
    render() {

        function simplePrompt() {
            Prompt.ask('test',{
                callback:(status) => {
                    console.log(status)
                }
            })
        }

        return (
            <div>
                <Prompt.View />
                <Container>
                    <Box m={16}>
                        <Button variant="contained" color="primary" onClick={simplePrompt}>
                            Simple prompt
                        </Button>
                    </Box>
                </Container>
            </div>
        )
    }   
}