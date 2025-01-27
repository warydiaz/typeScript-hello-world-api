import { Request, Response } from "express";

export const helloWorldController = (req: Request, res: Response): void => {
  res.send("Hello World");
};

function someLongFunction() {
  let x = 10;  // Warning: variable not used
  return 42;
}
