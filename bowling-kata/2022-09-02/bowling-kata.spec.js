import { beforeEach, describe, expect, it } from "vitest";
import { Bowling } from "./bowling";

describe("bowling kata", () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });
  it("should create a new bowling object", async () => {
    expect(bowling).toBeTruthy();
  });

  it("should create a new bowling  with init value", async () => {
    expect(bowling.score).toEqual(0);
  });

  it("should roll a pin", async () => {
    bowling.roll(1);
    expect(bowling.score).toEqual(1);
  });

  it("should roll a new time", async () => {
    bowling.roll(1);
    bowling.roll(4);
    expect(bowling.score).toEqual(5);
  });

  it("should roll 3 times", async () => {
    bowling.roll(1);
    bowling.roll(4);
    bowling.roll(4);
    expect(bowling.score).toEqual(9);
  });

  it("should calculated the right score when spare", async () => {
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(4);
    expect(bowling.score).toEqual(18);
  });

  it("should calculated the right score when strike", async () => {
    bowling.roll(10);
    bowling.roll(4);
    bowling.roll(4);
    expect(bowling.score).toEqual(26);
  });
});
