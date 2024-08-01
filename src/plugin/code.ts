figma.showUI(__html__, {
    themeColors: true,
    width: 350,
    height: 400,
    title: 'Figma plugin starter',
});

figma.ui.onmessage = async (message) => {
    if (message.type === 'HELLO-FROM-UI') {
       console.log('Hello from UI');

        figma.ui.postMessage({
            type: 'HELLO-FROM-PLUGIN',
            content: 'Hello from plugin'
        })
    }
}
