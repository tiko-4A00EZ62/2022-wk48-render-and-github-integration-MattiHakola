const { describe, expect, test } = require("@jest/globals");
const request = require("supertest");
const app = require("../app");

describe("GET cities endpoint", () => {
    test("should return 200 and valid json", async () => {
        const response = await request(app)
            .get("/api/electricity")
            .set("Accept", "application/json");

        expect(response.status).toEqual(200);
        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.body).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: 2,
                    month: "2022-02-14T22:00:00.000Z",
                    consumption: 1923.233,
                    cost: 192.22,
                    created: "2022-11-02T17:46:04.000Z",
                }),
                expect.objectContaining({
                    id: 3,
                    month: "2022-03-14T22:00:00.000Z",
                    consumption: 1523.233,
                    cost: 150.22,
                    created: "2022-11-02T17:46:04.000Z",
                }),
                expect.objectContaining({
                    id: 7,
                    month: "2022-04-14T21:00:00.000Z",
                    consumption: 1242.267,
                    cost: 129.56,
                    created: "2022-11-02T18:32:50.000Z",
                }),
                expect.objectContaining({
                    id: 8,
                    month: "2022-02-19T22:00:00.000Z",
                    consumption: 2000.13,
                    cost: 172.32,
                    created: "2022-11-17T09:58:23.000Z",
                }),
            ])
        );
    });
});
