const zhangzhou = require('../zhangzhou.js');

const main = async () => {
    const thermostat = await zhangzhou.open();
    console.log(await thermostat.serialNumber());
    console.log(await thermostat.measurements());
}

main();