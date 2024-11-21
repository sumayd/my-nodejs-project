import getData from "./lib/service.js";

(async () => {
    try {
        const result = await getData(1);
        console.log(result);
    } catch (error) {
        console.error("Hata:", error);
    }
})();