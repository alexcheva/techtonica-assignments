const express = require('express');
const app = express();
const port = process.env.PORT || 8000;



// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// add some fake data

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

app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});

//FAKE DATA:
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