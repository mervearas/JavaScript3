// fetch data
export async function fetchData(url) {
    try {
        const res = await fetch(url);
        return res.json();
    }
    catch (e) {
        const selectRepository = document.getElementById("selectRepository");
        selectRepository.innerHTML = "";
        const appContent = document.getElementById("content");
        appContent.innerHTML = "";
        const errorContainer = document.createElement("div");
        errorContainer.className = "errorContainer";
        const errorText = document.createElement("p");
        errorText.innerText = "Network request failed";
        errorContainer.appendChild(errorText);
        appContent.appendChild(errorContainer);
    }
}