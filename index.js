module.exports = (hermione, opts) => {

  hermione.on(hermione.events.TEST_PENDING, (testResult) => {
    console.log(testResult);
    console.log('test_pending');
  });

  hermione.on(hermione.events.TEST_PASS, (testResult) => {
    console.log(testResult);
    console.log('test_pass');
  });

  hermione.on(hermione.events.TEST_FAIL, (testResult) => {
    console.log(testResult);
    console.log('test_fail');
  });

  hermione.on(hermione.events.RETRY, (testResult) => {
    console.log(testResult);
    console.log('retry');
  });

  hermione.on(hermione.events.RUNNER_END, (stats) => {
    console.log(stats);
    console.log('runnder_end');
  });
};
