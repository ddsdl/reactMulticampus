const baseURL = 'http://sample.bmaster.kro.kr/contacts/';

fetch(baseURL)
  .then(function (resp) {
    // console.log(resp);
    return resp.json();
  })
  .then(function (resp) {
    console.log(resp);
    for (let i = 0; i < resp.contacts.length; i++) {
      const item = resp.contacts[i];
      console.log(`${item.no} / ${item.name} / ${item.address} `)
    }
  })
  .catch(function (err) {
    console.error(err)
  });

