const filterSenderConfig = { serverId: 4194, active: true };

const filterSenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_4194() {
    return filterSenderConfig.active ? "OK" : "ERR";
}

console.log("Module filterSender loaded successfully.");