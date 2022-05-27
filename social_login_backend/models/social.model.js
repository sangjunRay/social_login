module.exports = (sequelize, Sequelize) => {
    const SocialUser = sequelize.define("social_login_users", {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return SocialUser
}