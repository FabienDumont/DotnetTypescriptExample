function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
    const framework = (document.getElementById("framework") as HTMLInputElement).value;
    return `Hello from ${compiler} and ${framework}!`;
}

async function getConfig(): Promise<{ apiBaseUrl: string } | null> {
    try {
        const response = await fetch("/config.json");
        if (!response.ok) {
            console.error(`Failed to load config.json (Status: ${response.status})`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.error("Error loading config:", error);
        return null;
    }
}

async function fetchMessage() {
    const statusDiv = document.getElementById("api-status")!;
    statusDiv.innerText = "Fetching API message...";

    const config = await getConfig();
    if (!config || !config.apiBaseUrl) {
        statusDiv.innerText = "Error: API configuration is missing ❌";
        return;
    }

    try {
        const response = await fetch(`${config.apiBaseUrl}/api/hello`);

        if (!response.ok) {
            statusDiv.innerText = `API error ❌ (Status: ${response.status})`;
            return;
        }

        statusDiv.innerText = "API is online ✅";

        const messageDiv = document.getElementById("api-message")!;

        const data = await response.json();
        messageDiv.innerText = data.message;

    } catch (error) {
        console.error("Error fetching API message:", error);
        statusDiv.innerText = "API is offline ❌";
    }
}

fetchMessage();
