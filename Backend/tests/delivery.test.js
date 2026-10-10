import { test } from "node:test";
import assert from "node:assert/strict";
import {
  straightLineKm,
  checkDeliverable,
} from "../services/deliveryService.js";
import { CAFE_LOCATION } from "../constants/location.js";

test("distance from the cafe to itself is zero", () => {
  assert.equal(straightLineKm(CAFE_LOCATION, CAFE_LOCATION), 0);
});

test("Delhi to Mumbai is about 1150 km", () => {
  const delhi = { latitude: 28.6139, longitude: 77.209 };
  const mumbai = { latitude: 19.076, longitude: 72.8777 };
  const km = straightLineKm(delhi, mumbai);

  assert.ok(km > 1100 && km < 1200, `unexpected distance: ${km}`);
});

test("a far away location is rejected without calling Google", async () => {
  const result = await checkDeliverable({
    latitude: 19.076,
    longitude: 72.8777,
  });

  assert.equal(result.available, false);
  assert.ok(result.distance > 7);
});
