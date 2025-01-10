import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('site works and renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByTestId('heading-text')).toHaveText('DS')
})

test('has proper title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle('Dominik Słopecki Portfolio')
})

test('experience is counted for QA work', async ({ page }) => {
  await page.goto('/')

  const now = new Date() as unknown as number
  const experienceStartDate = new Date(2017, 5, 0) as unknown as number
  const expectedYearsOfExperienceForQA = new Date(now - experienceStartDate).getUTCFullYear() - 1970
  await expect(page.getByTestId('qaYearsOfExp')).toHaveText(
    ` (with ${expectedYearsOfExperienceForQA} years of experience) `,
  )
  await expect(page.getByTestId('devYearsOfExp')).toHaveText(
    ` (with ${expectedYearsOfExperienceForQA - 3} years of experience) `,
  )
})

test('anchor links are visible on desktop and mobile menu is not', async ({ page }) => {
  // 1920x1080 is default resolution for playwright tests
  await page.goto('/')
  await expect(page.getByTestId('desktopNavContainer')).toBeVisible()
  await expect(page.getByTestId('mobileMenuButton')).toBeHidden()
})

test.describe('mobile tests', () => {
  //Set mobile resolution for Samsung Galaxy S8+, typical lowest width resolution for new phones
  test.use({ viewport: { width: 360, height: 740 } })

  test('anchor links are not visible on desktop but mobile menu button is', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByTestId('desktopNavContainer')).toBeHidden()
    await expect(page.getByTestId('mobileMenuButton')).toBeVisible()
  })

  test('after opening mobile menu anchor links are visible, using anchor links turns off menu', async ({
    page,
  }) => {
    await page.goto('/')

    page.getByTestId('mobileMenuButton').click()

    const mobileNavigationContainer = page.getByTestId('mobileNavigationContainer')
    await expect(mobileNavigationContainer).toBeVisible()

    const homeMobileLink = mobileNavigationContainer.getByText('Home')
    await expect(homeMobileLink).toBeVisible()

    homeMobileLink.click()
    await expect(mobileNavigationContainer).toBeHidden()
  })
})
