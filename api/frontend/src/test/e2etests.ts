// app.component.test.js

import { Selector } from 'testcafe';

fixture('AppComponent Tests')
  .page('http://173.249.33.42:4200'); // Replace with the actual path to your HTML template


test('Calculate Interest Test', async (t) => {
  // Assuming you have input fields with IDs: 'principal', 'rate', and 'time'
  const principalInput = Selector('#principal');
  const rateInput = Selector('#rate');
  const timeInput = Selector('#time');
  const calculateButton = Selector('button').withText('Calculate');

  await t
    .typeText(principalInput, '1000')
    .typeText(rateInput, '5')
    .typeText(timeInput, '2')
    .click(calculateButton);

  // Assuming there's an element displaying the total interest with ID: 'total-interest'
  const totalInterestElement = Selector('#latest-entry');
  await t.expect(totalInterestElement.innerText).eql('Principal: 1000 | Total Interest: 1100'); // Adjust as needed
});

