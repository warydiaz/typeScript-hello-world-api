import { helloWorldController } from "../../controller";
import { Request, Response } from "express";

describe("Unit Test: helloWorldController", () => {
  it("should send 'Hello World'", () => {
    const req = {} as Request;
    const res = {
      send: jest.fn(),
    } as unknown as Response;

    helloWorldController(req, res);

    expect(res.send).toHaveBeenCalledWith("Hello World");
  });
});
