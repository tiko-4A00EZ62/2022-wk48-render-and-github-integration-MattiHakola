const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

describe("GET cities endpoint", () => {
    test("should return 200 and valid json", async () => {
        const response = await request(app)
            .get("/api/electricity/2")
            .set("Accept", "application/json");
        expect(response.status).toEqual(200);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body).toEqual(
            expect.objectContaining({
                id: 2,
                month: "2022-02-14T22:00:00.000Z",
                consumption: 1923.233,
                cost: 192.22,
                created: "2022-11-02T17:46:04.000Z",
            })
        );
    });
    test("should return 404 and found not", async () => {
        const response = await request(app).get("/api/electricity/111");
        expect(response.status).toEqual(404);
        expect(response.text).toContain("Not Found");
    });
});
