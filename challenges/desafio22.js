db.produtos.updateMany({},
    { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });

db.produtos.updateOne({ nome: { $eq: "Big Mac" } },
    { $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 0] } });

db.produtos.updateMany({ tags: { $eq: "bovino" } },
{ $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 120] } });

db.produtos.find({}, { _id: false, nome: true, vendasPorDia: true });