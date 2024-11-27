describe('Home Page', () => {

  beforeEach(async () => {
    await page.goto("http://localhost:3000/");
  })

  it('should have correct meta data', async () => {
    await expect(page.title()).resolves.toMatch('CrypticLive Home');
    const description = await page.$eval("head > meta[name='description']", element => element.content);
    expect(description).toMatch("Word Puzzles for Cruciverbalists");
  });

  it('should have root layout', async () => {
    const header = await page.$(".container > header");
    const footer = await page.$(".container > footer");
    const navbar = await page.$(".container > nav");  // should not contain navbar
    const sections = await page.$$(".container > section");
    expect(header).not.toBeNull();
    expect(footer).not.toBeNull();
    expect(navbar).toBeNull();
    expect(sections.length).toBe(2);  // Home page content
  });
})