module.exports = (sequelize, DataTypes) => {
    const Router = sequelize.define('Router', {
        product: DataTypes.STRING,
        brand: DataTypes.STRING,
        network_standard: DataTypes.STRING,
        modem_internet: DataTypes.STRING,
        device_interfaces: DataTypes.STRING,
        wireless_technology: DataTypes.STRING,
        operation_mode: DataTypes.STRING,
        special_feature: DataTypes.STRING,
        power_input: DataTypes.STRING,
        operating_temperature: DataTypes.STRING,
        storage_temperature: DataTypes.STRING,
        operating_humidity: DataTypes.STRING,
        storage_humidity: DataTypes.STRING,
        certification: DataTypes.STRING,
        dimensions: DataTypes.STRING,
        weight: DataTypes.STRING,
        color: DataTypes.STRING,
        warranty: DataTypes.STRING,
        option: DataTypes.STRING,
        price: DataTypes.NUMBER
    })

    return Router
}