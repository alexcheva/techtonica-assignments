const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.get('/lists', (req, res) => {
  const listsArray = Array.from(lists.keys()); // Why is this like this? Try it out in your console.
  res.send(listsArray);
});

app.route('/lists/:name').get((req,res)=>{
  let list_name = req.params.name;
  let status = 400;
  let response = "Unable to fetch data!";
  lists.forEach((list) => {
      if (list["name"] == list_name) {
          res.status(200).send(list);
      }
  });
  res.status(status).send(response);
});

app.delete('/lists/:name', (req, res) => {
  let list_name = req.params.name;
  let status = 400;
  let response = "Unable to fetch data!";
  let newLists = lists.filter((list) => {
      return list;
  });

  status = 200;
  response = newLists;
  res.status(status).send(response);
});

app.put('/lists/:name', (req, res) => {
  let list_name = req.params.name;
  let status = 400;
  let response = "Unable to fetch data!";
      let newList = {};
  lists.forEach((list) => {
      newList = req.body;
  });

  status = 200;
  response = newList;
  res.status(status).send(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

//FAKE DATA:
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const lists = new Map();

const staffList = {
  "name": "staff",
  "members": ["talea@techtonica.org", "michelle@techtonica.org"]
}
const participantList = {
  "name": "participants",
  "members": ["alex@techtonica.org", "taela@techtonica.org", "meia@techtonica.org"]
}

lists.set(`${staffList.name}`, staffList);
lists.set(`${participantList.name}`, participantList);