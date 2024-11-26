describe('Home Page', () => {

  it('should be titled "Google"', async () => {
    await page.goto("http://localhost:3000/");
    await expect(page.title()).resolves.toMatch('CrypticLive Home');
  });
});