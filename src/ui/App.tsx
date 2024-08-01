import {useEffect} from "react";
import useMessage from "../functions/useMessage";
import {Button, Flex, Text} from "@radix-ui/themes";

function App() {
    const {
        message,
        postMessage
    } = useMessage()

    useEffect(() => {
        postMessage('HELLO-FROM-UI')
    }, [])

    useEffect(() => {
        if (message?.type === 'HELLO-FROM-PLUGIN') {
            console.log(message.content)
        }
    }, [message])

    return (
        <Flex direction="column" gap="8" p="4">
            <Text size="8" weight="bold">Hello :)</Text>
            <Button>Let's go</Button>
        </Flex>
    );
}

export default App;
