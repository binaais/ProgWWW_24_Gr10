
self.onmessage = function (e) {
    const devices = e.data;

    if (!Array.isArray(devices)) {
        self.postMessage({ error: "Invalid data sent to worker" });
        return;
    }

    try {
        const totalRatings = devices.reduce((sum, device) => sum + device.rating, 0);
        const averageRating = totalRatings / devices.length;

        
        self.postMessage({ averageRating });
    } catch (error) {
        self.postMessage({ error: error.message });
    }
};
