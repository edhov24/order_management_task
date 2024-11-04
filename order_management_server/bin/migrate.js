import sequelize from "../services/sequelize";
import Orders from "../models/Orders";
import Clients from "../models/Clients";

async function main() {
  await sequelize.sync();
  for (const Model of [
      Orders,
      Clients,
  ]) {
    await Model.sync({ alter: true });
    console.log(Model);
  }


  process.exit(0);
}

main().catch(console.error);
