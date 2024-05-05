import { createRoute } from "@/api/createRoute";
import { PlaceModel } from "@/db/Models/PlaceModel";

const handle = createRoute(async (req, res) => {
  const { placeId } = req.query;
  const place = await PlaceModel.findById(placeId);

  if (!place) {
    res.status(404).send({ error: "Not found" });
    return;
  }

  if (req.method === "GET") {
    res.send(place);
    return;
  }

 if (req.method === "PATCH") {
   try {
     const updatedPlace = await PlaceModel.findByIdAndUpdate(
       placeId,
       req.body,
       { new: true,
         runValidators: true,}
     );

     res.send(updatedPlace);
   } catch (error) {
     res.status(400).send({ error: error.message });
   }
   return;
 }

  if (req.method === "DELETE") {
    await PlaceModel.deleteOne({ _id: placeId });

    res.send(place);

    return;
  }

  res.status(404).send({ error: "Not found" });
})


export default handle;

  if (req.method === "PATCH") {
    const { body } = req.body

    await place.save()

    res.send(place)

    return
  }