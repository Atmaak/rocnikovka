const fetch = require('node-fetch')

const sortList = async () => {
    const res = await fetch('http://localhost:3001/item/getSortBy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        "id_mark":1
      })
    }) 
    const data = await res.json()
  }

  const displayList = async (id_sez) => {
    if(id_sez === undefined) return
    const fetchList = await fetch("http://localhost:3001/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: `{"id_sez":${id_sez}}`,
    });
    const data = await fetchList.json();
  };

  displayList(82)
  sortList()