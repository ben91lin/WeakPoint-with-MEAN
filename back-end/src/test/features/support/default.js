const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
    request.setBaseUrl('http://localhost:8080');
    settings.setReporterAutoRun(false);
});