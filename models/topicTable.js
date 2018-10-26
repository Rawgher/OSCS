module.exports = function (sequelize, DataTypes) {
    var Topics = sequelize.define("Topics", {
        topic_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        topic_description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        topic_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        // topic_displayDate: {
        //     type: DataTypes.DATEONLY,
        //     allowNull: false,
        //     validate: {
        //         len: [1]
        //     },
        //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
        // },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    });

    Topics.associate = function (models) {
        Topics.belongsTo(models.Users, {
            foreignKey: {
                allowNull: false
            }
        });

        Topics.hasMany(models.Posts, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade",
            onUpdate: "cascade"
        })
    };
    return Topics;
}; 
