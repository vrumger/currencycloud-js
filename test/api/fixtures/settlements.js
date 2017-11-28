var nock = require('nock');

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/api', {
    "login_id":"test.it@mailinator.com","api_key":"b5266326b1855443544626f188b8a234da99e1c36d91819419e17091b4f0a7f4"
  })
  .reply(200, {"auth_token":"6fba50762952df530ee7218810c25d7f"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:34 GMT',
  'x-request-id': '2909966394165267773',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '49' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"48143aee-0d27-4400-914c-8b417d67884f","status":"open","short_reference":"20151101-RCVPPH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:34+00:00","updated_at":"2015-11-01T19:37:34+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:34 GMT',
  'x-request-id': '2909966396958692670',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"c22cdcd8-561d-4b1f-bf6a-72f85cd3c1a3","status":"open","short_reference":"20151101-MCPRSH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:34+00:00","updated_at":"2015-11-01T19:37:34+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:34 GMT',
  'x-request-id': '2909966399601082687',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/settlements/c22cdcd8-561d-4b1f-bf6a-72f85cd3c1a3')
  .reply(200, {"id":"c22cdcd8-561d-4b1f-bf6a-72f85cd3c1a3","status":"open","short_reference":"20151101-MCPRSH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:34+00:00","updated_at":"2015-11-01T19:37:34+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:35 GMT',
  'x-request-id': '2909966402134457664',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"7995cd76-e82c-41d8-a6ea-0d1bd504e364","status":"open","short_reference":"20151101-THMFCD","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:35+00:00","updated_at":"2015-11-01T19:37:35+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:35 GMT',
  'x-request-id': '2909966404609110337',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/settlements/find')
  .query({"order":"created_at","order_asc_desc":"desc","per_page":"5"})
  .reply(200, {"settlements":[{"id":"7995cd76-e82c-41d8-a6ea-0d1bd504e364","status":"open","short_reference":"20151101-THMFCD","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:35+00:00","updated_at":"2015-11-01T19:37:35+00:00","released_at":""},{"id":"48143aee-0d27-4400-914c-8b417d67884f","status":"open","short_reference":"20151101-RCVPPH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:34+00:00","updated_at":"2015-11-01T19:37:34+00:00","released_at":""},{"id":"c22cdcd8-561d-4b1f-bf6a-72f85cd3c1a3","status":"open","short_reference":"20151101-MCPRSH","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:34+00:00","updated_at":"2015-11-01T19:37:34+00:00","released_at":""}],"pagination":{"total_entries":3,"total_pages":1,"current_page":1,"per_page":5,"previous_page":-1,"next_page":-1,"order":"created_at","order_asc_desc":"desc"}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:35 GMT',
  'x-request-id': '2909966407670936900',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '904' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"1d8f23ae-f4a2-4aa7-a829-c709a21efdf5","status":"open","short_reference":"20151101-QWXBKR","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:36+00:00","updated_at":"2015-11-01T19:37:36+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:36 GMT',
  'x-request-id': '2909966410405620037',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/1d8f23ae-f4a2-4aa7-a829-c709a21efdf5/delete')
  .reply(200, {"id":"1d8f23ae-f4a2-4aa7-a829-c709a21efdf5","status":"open","short_reference":"20151101-QWXBKR","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:36+00:00","updated_at":"2015-11-01T19:37:36+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:36 GMT',
  'x-request-id': '2909966412930593095',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .get('/v2/settlements/1d8f23ae-f4a2-4aa7-a829-c709a21efdf5')
  .reply(404, {"error_code":"settlement_not_found","error_messages":{"id":[{"code":"settlement_not_found","message":"Settlement was not found for this id","params":{}}]}}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:36 GMT',
  'x-request-id': '2909966416520935752',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '156' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"7761099e-4073-4f22-9b40-c2f2740744ff","settlement_date":"2015-11-03T14:00:00+00:00","conversion_date":"2015-11-03T00:00:00+00:00","short_reference":"20151101-PMQSRH","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-11-01T19:37:37+00:00","updated_at":"2015-11-01T19:37:37+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:37 GMT',
  'x-request-id': '2909966419691817289',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"ceb6bd78-8873-4767-a704-66a67bee4257","status":"open","short_reference":"20151101-GHDXQM","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:38+00:00","updated_at":"2015-11-01T19:37:38+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:38 GMT',
  'x-request-id': '2909966427384077642',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/ceb6bd78-8873-4767-a704-66a67bee4257/add_conversion', {"conversion_id":"7761099e-4073-4f22-9b40-c2f2740744ff"})
  .reply(200, {"id":"ceb6bd78-8873-4767-a704-66a67bee4257","status":"open","short_reference":"20151101-GHDXQM","type":"net","conversion_ids":["7761099e-4073-4f22-9b40-c2f2740744ff"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:38+00:00","updated_at":"2015-11-01T19:37:38+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:38 GMT',
  'x-request-id': '2909966430253061451',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '334' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"baf169b2-8430-4352-b7b0-1b13bb14bbbd","settlement_date":"2015-11-03T14:00:00+00:00","conversion_date":"2015-11-03T00:00:00+00:00","short_reference":"20151101-DTXFKK","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-11-01T19:37:39+00:00","updated_at":"2015-11-01T19:37:39+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:39 GMT',
  'x-request-id': '2909966434598363468',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"551d338c-fd22-48f5-a3fb-26af483278d9","status":"open","short_reference":"20151101-MYXGBX","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:39+00:00","updated_at":"2015-11-01T19:37:39+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:40 GMT',
  'x-request-id': '2909966442081009998',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/551d338c-fd22-48f5-a3fb-26af483278d9/add_conversion', {"conversion_id":"baf169b2-8430-4352-b7b0-1b13bb14bbbd"})
  .reply(200, {"id":"551d338c-fd22-48f5-a3fb-26af483278d9","status":"open","short_reference":"20151101-MYXGBX","type":"net","conversion_ids":["baf169b2-8430-4352-b7b0-1b13bb14bbbd"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:39+00:00","updated_at":"2015-11-01T19:37:39+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:40 GMT',
  'x-request-id': '2909966444689859919',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '334' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/551d338c-fd22-48f5-a3fb-26af483278d9/remove_conversion', {"conversion_id":"baf169b2-8430-4352-b7b0-1b13bb14bbbd"})
  .reply(200, {"id":"551d338c-fd22-48f5-a3fb-26af483278d9","status":"open","short_reference":"20151101-MYXGBX","type":"net","conversion_ids":[],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:39+00:00","updated_at":"2015-11-01T19:37:39+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:40 GMT',
  'x-request-id': '2909966448481527120',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '296' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"46e450fc-7d52-4e3e-ba16-83e8b5c82116","settlement_date":"2015-11-03T14:00:00+00:00","conversion_date":"2015-11-03T00:00:00+00:00","short_reference":"20151101-BBWGWQ","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-11-01T19:37:41+00:00","updated_at":"2015-11-01T19:37:41+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:41 GMT',
  'x-request-id': '2909966452482881873',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"eff04f2b-97d1-4338-8fd3-1828b609f673","status":"open","short_reference":"20151101-DXTZSN","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:42+00:00","updated_at":"2015-11-01T19:37:42+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:42 GMT',
  'x-request-id': '2909966459193731410',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/eff04f2b-97d1-4338-8fd3-1828b609f673/add_conversion', {"conversion_id":"46e450fc-7d52-4e3e-ba16-83e8b5c82116"})
  .reply(200, {"id":"eff04f2b-97d1-4338-8fd3-1828b609f673","status":"open","short_reference":"20151101-DXTZSN","type":"net","conversion_ids":["46e450fc-7d52-4e3e-ba16-83e8b5c82116"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:42+00:00","updated_at":"2015-11-01T19:37:42+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:42 GMT',
  'x-request-id': '2909966461836195155',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '334' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/eff04f2b-97d1-4338-8fd3-1828b609f673/release')
  .reply(200, {"id":"eff04f2b-97d1-4338-8fd3-1828b609f673","status":"released","short_reference":"20151101-DXTZSN","type":"net","conversion_ids":["46e450fc-7d52-4e3e-ba16-83e8b5c82116"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:42+00:00","updated_at":"2015-11-01T19:37:42+00:00","released_at":"2015-11-01T19:37:42+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:43 GMT',
  'x-request-id': '2909966465527156052',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '363' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/conversions/create', {"buy_currency":"EUR","sell_currency":"GBP","fixed_side":"buy","amount":"10000.23","reason":"Settling invoices","term_agreement":"true"})
  .reply(200, {"id":"d949c647-87ec-4ff0-9ed5-a8ce915ec42d","settlement_date":"2015-11-03T14:00:00+00:00","conversion_date":"2015-11-03T00:00:00+00:00","short_reference":"20151101-YLCNQK","creator_contact_id":"8eddf045-4e98-48bf-821b-42c8eb926bc9","account_id":"3a7d2f90-ae1f-493c-a8d6-26ad43700259","currency_pair":"EURGBP","status":"awaiting_funds","buy_currency":"EUR","sell_currency":"GBP","client_buy_amount":"10000.23","client_sell_amount":"7215.17","fixed_side":"buy","mid_market_rate":"0.7216","core_rate":"0.7215","partner_rate":"","partner_status":"funds_arrived","partner_buy_amount":"0.00","partner_sell_amount":"0.00","client_rate":"0.7215","deposit_required":false,"deposit_amount":"0.00","deposit_currency":"","deposit_status":"not_required","deposit_required_at":"","payment_ids":[],"created_at":"2015-11-01T19:37:43+00:00","updated_at":"2015-11-01T19:37:43+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:43 GMT',
  'x-request-id': '2909966469998281046',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '866' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/create', {"type":"net"})
  .reply(200, {"id":"dee62f1e-4643-4bc4-a762-c18a0f5770ae","status":"open","short_reference":"20151101-NYYLYY","type":"net","conversion_ids":[],"entries":[],"created_at":"2015-11-01T19:37:44+00:00","updated_at":"2015-11-01T19:37:44+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:44 GMT',
  'x-request-id': '2909966476952452439',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '242' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/dee62f1e-4643-4bc4-a762-c18a0f5770ae/add_conversion', {"conversion_id":"d949c647-87ec-4ff0-9ed5-a8ce915ec42d"})
  .reply(200, {"id":"dee62f1e-4643-4bc4-a762-c18a0f5770ae","status":"open","short_reference":"20151101-NYYLYY","type":"net","conversion_ids":["d949c647-87ec-4ff0-9ed5-a8ce915ec42d"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:44+00:00","updated_at":"2015-11-01T19:37:44+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:44 GMT',
  'x-request-id': '2909966479796203864',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '334' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/dee62f1e-4643-4bc4-a762-c18a0f5770ae/release')
  .reply(200, {"id":"dee62f1e-4643-4bc4-a762-c18a0f5770ae","status":"released","short_reference":"20151101-NYYLYY","type":"net","conversion_ids":["d949c647-87ec-4ff0-9ed5-a8ce915ec42d"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:44+00:00","updated_at":"2015-11-01T19:37:45+00:00","released_at":"2015-11-01T19:37:45+00:00"}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:45 GMT',
  'x-request-id': '2909966483948562777',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '363' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/settlements/dee62f1e-4643-4bc4-a762-c18a0f5770ae/unrelease')
  .reply(200, {"id":"dee62f1e-4643-4bc4-a762-c18a0f5770ae","status":"open","short_reference":"20151101-NYYLYY","type":"net","conversion_ids":["d949c647-87ec-4ff0-9ed5-a8ce915ec42d"],"entries":[{"GBP":{"receive_amount":"0.00","send_amount":"0.00"}}],"created_at":"2015-11-01T19:37:44+00:00","updated_at":"2015-11-01T19:37:45+00:00","released_at":""}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:45 GMT',
  'x-request-id': '2909966488058936666',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '334' });

nock('https://devapi.currencycloud.com:443')
  .post('/v2/authenticate/close_session')
  .reply(200, {}, { server: 'nginx',
  vary: 'Origin',
  'content-type': 'application/json;charset=utf-8',
  date: 'Sun, 01 Nov 2015 19:37:45 GMT',
  'x-request-id': '2909966491338913115',
  'x-content-type-options': 'nosniff',
  connection: 'close',
  'content-length': '2' });
