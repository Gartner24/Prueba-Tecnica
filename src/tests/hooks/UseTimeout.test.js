describe("UseTimeout", () => {
  test("should return a promise", () => {
    const promise = useTimeout(() => {}, 1000);
    expect(promise).toBeInstanceOf(Promise);
  })
});
