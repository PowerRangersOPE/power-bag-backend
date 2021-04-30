require('dotenv').config();

const handleConfig = () => {
  if (process.env.NODE_ENV === 'DEV') {
    return {
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      dialect: 'postgres',
      define: {
        timestamps: true,
        underscored: true,
      },
    };
  }

  return {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
    define: {
      timestamps: true,
      underscored: true,
    },
  };
};

module.exports = handleConfig();
