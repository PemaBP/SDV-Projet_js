import { createRoute } from "@/api/createRoute";
import { PlaceModel } from "@/db/Models/PlaceModel";

const handle = createRoute(async (req, res) => {
  //Create
  if (req.method === "POST") {
    try {
      const newPlace = new PlaceModel(req.body);
      await newPlace.save();
      res.status(201).send(newPlace);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
    return;
  }
  //Read
  if (req.method === "GET") {
    const places = await PlaceModel.find();

    res.send(places);

    return;
  }

  res.status(404).send({ error: "Not found" });
});

export default handle;
