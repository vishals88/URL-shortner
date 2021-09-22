
module.exports = (sequelize, DataTypes) => {
    const ShortUrl = sequelize.define('shortUrl', {
        longUrl:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        shortUrl:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        userId:{
            type:DataTypes.INTEGER
        }
    }, {
        freezeTableName: true,
        tableName: 'shortUrl',
        timestamps: false
    });

    ShortUrl.associate = function (models) {
        ShortUrl.belongsTo(models.user, { foreignKey: 'userId', as: 'user' });
    }

    return ShortUrl;
}