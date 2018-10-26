module.exports = function (sequelize, DataTypes) {
    var Replies = sequelize.define("Replies", {
        reply_content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },

        reply_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            },
            defaultValue: 0
        },
        // reply_createDate: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     },
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        // },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            },
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                len: [1]
            },
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
    });

    Replies.associate = function (models) {
        Replies.belongsTo(models.Posts, {
            foreignKey: {
                allowNull: false
            }
        });

        Replies.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Replies;
};

