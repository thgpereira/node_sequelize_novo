module.exports = {
  database: "ntask",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    define: {
      underscore: true
    }
  },
  jwtSecret: "Nta$K-AP1",
  jwtSession: { session: false }
}