module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'agendaai',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
